//
//  SafariWebExtensionHandler.swift
//  Shared (Extension)
//
//  Created by git on 10/15/26.
//

import SafariServices
import os.log

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        let request = context.inputItems.first as? NSExtensionItem

        let profile: UUID?
        if #available(iOS 17.0, macOS 14.0, *) {
            profile = request?.userInfo?[SFExtensionProfileKey] as? UUID
        } else {
            profile = request?.userInfo?["profile"] as? UUID
        }

        let message: [String: Any]?
        if #available(iOS 15.0, macOS 11.0, *) {
            message = request?.userInfo?[SFExtensionMessageKey] as? [String: Any]
        } else {
            message = request?.userInfo?["message"] as? [String: Any]
        }

        os_log(.default, "Received message from browser.runtime.sendNativeMessage: %@ (profile: %@)", String(describing: message), profile?.uuidString ?? "none")

        // Handle HTTP proxy requests from the web extension. Safari web-extension
        // service workers cannot reach cleartext localhost directly, so we proxy
        // those requests through the native app, which is allowed to.
        if let message = message, message["type"] as? String == "http" {
            performHttpRequest(message: message) { result in
                let response = NSExtensionItem()
                if #available(iOS 15.0, macOS 11.0, *) {
                    response.userInfo = [ SFExtensionMessageKey: result ]
                } else {
                    response.userInfo = [ "message": result ]
                }
                context.completeRequest(returningItems: [ response ], completionHandler: nil)
            }
            return
        }

        // Echo unknown messages so the JS side can still detect the native bridge.
        let response = NSExtensionItem()
        if #available(iOS 15.0, macOS 11.0, *) {
            response.userInfo = [ SFExtensionMessageKey: [ "echo": message ] ]
        } else {
            response.userInfo = [ "message": [ "echo": message ] ]
        }
        context.completeRequest(returningItems: [ response ], completionHandler: nil)
    }

    private func performHttpRequest(message: [String: Any], completion: @escaping ([String: Any]) -> Void) {
        guard let urlString = message["url"] as? String,
              let url = URL(string: urlString),
              let method = message["method"] as? String else {
            completion(["error": "missing or invalid url/method"])
            return
        }

        var request = URLRequest(url: url)
        request.httpMethod = method
        request.timeoutInterval = 30
        request.cachePolicy = .reloadIgnoringLocalCacheData

        if let headers = message["headers"] as? [String: String] {
            for (key, value) in headers {
                request.setValue(value, forHTTPHeaderField: key)
            }
        }

        if let bodyBase64 = message["body"] as? String,
           let bodyData = Data(base64Encoded: bodyBase64) {
            request.httpBody = bodyData
        }

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                completion(["error": error.localizedDescription])
                return
            }

            guard let httpResponse = response as? HTTPURLResponse else {
                completion(["error": "non-HTTP response"])
                return
            }

            var responseHeaders: [String: String] = [:]
            for (key, value) in httpResponse.allHeaderFields {
                if let key = key as? String, let value = value as? String {
                    responseHeaders[key] = value
                }
            }

            let bodyBase64 = data?.base64EncodedString() ?? ""

            completion([
                "status": httpResponse.statusCode,
                "statusText": HTTPURLResponse.localizedString(forStatusCode: httpResponse.statusCode),
                "headers": responseHeaders,
                "bodyBase64": bodyBase64
            ])
        }
        task.resume()
    }

}
