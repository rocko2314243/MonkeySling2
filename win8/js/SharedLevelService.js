﻿// This JavaScript was automatically generated by
// Jayrock.JsonRpc.Web.JsonRpcProxyGenerator, Jayrock, Version=0.9.12915.0, Culture=neutral, PublicKeyToken=null
// on Wednesday, January 2, 2013 at 8:23:35 PM (Pacific Standard Time)

function SharedLevelService(url) {
    var self = this;
    var m = ["addOrUpdate", "getSharedPageLevels", "system.listMethods", "system.version", "system.about"];
    var idems = [false, false, true, true, true];

    this[m[0]] = function /* addOrUpdate */(sharedId, levelJson, userDisplayName, callback) {
        if (self.kwargs) return rpc(new Call(0, { sharedId: sharedId, levelJson: levelJson, userDisplayName: userDisplayName }, callback));
        return rpc(new Call(0, [sharedId, levelJson, userDisplayName], callback));
    }

    this[m[1]] = function /* getSharedPageLevels */(pageNumber, callback) {
        if (self.kwargs) return rpc(new Call(1, { pageNumber: pageNumber }, callback));
        return rpc(new Call(1, [pageNumber], callback));
    }

    // Returns an array of method names implemented by this service.

    this[m[2]] = function /* system.listMethods */(callback) {
        if (self.kwargs) return rpc(new Call(2, {}, callback));
        return rpc(new Call(2, [], callback));
    }

    // Returns the version server implementation using the major, minor, build and revision format.

    this[m[3]] = function /* system.version */(callback) {
        if (self.kwargs) return rpc(new Call(3, {}, callback));
        return rpc(new Call(3, [], callback));
    }

    // Returns a summary about the server implementation for display purposes.

    this[m[4]] = function /* system.about */(callback) {
        if (self.kwargs) return rpc(new Call(4, {}, callback));
        return rpc(new Call(4, [], callback));
    }

    var url = typeof (url) === 'string' ? url : 'http://localhost:2624/Services/SharedLevelService.ashx';
    var nextId = 0;

    function Call(method, params, callback) {
        this.url = url;
        this.callback = callback;
        this.proxy = self;
        this.idempotent = idems[method];
        this.request =
        {
            id: ++nextId,
            method: m[method],
            params: params
        };
    }

    function rpc(call) {
        return self.channel != null && typeof (self.channel.rpc) === 'function' ?
            self.channel.rpc(call) : call;
    }

    this.kwargs = false;
    this.channel = new JayrockChannel();

    function JayrockChannel() {
        this.rpc = function (call) {
            var async = typeof (call.callback) === 'function';
            var xhr = newXHR();
            xhr.open('POST', call.url, async, this.httpUserName, this.httpPassword);
            xhr.setRequestHeader('Content-Type', this.contentType || 'application/json; charset=utf-8');
            xhr.setRequestHeader('X-JSON-RPC', call.request.method);
            xhr.setRequestHeader('X-KREAL', 'IkLrAbnlVnYeKRMAJJOFUiBwEwHpgXR94X');
            if (async) xhr.onreadystatechange = function () { xhr_onreadystatechange(xhr, call.callback); }
            xhr.send(JSON.stringify(call.request));
            call.handler = xhr;
            if (async) return call;
            if (xhr.status != 200) throw new Error(xhr.status + ' ' + xhr.statusText);
            var response = JSON.parse(xhr.responseText);
            if (response.error != null) throw response.error;
            return response.result;
        }

        function xhr_onreadystatechange(sender, callback) {
            if (sender.readyState == /* complete */ 4) {
                try {
                    sender.onreadystatechange = null; // Avoid IE7 leak (bug #12964)
                }
                catch (e) {
                    /* IE 6/Mobile throws for onreadystatechange = null */
                }

                var response = sender.status == 200 ?
                    JSON.parse(sender.responseText) : {};

                callback(response, sender);
            }
        }

        function newXHR() {
            if (typeof (window) !== 'undefined' && window.XMLHttpRequest)
                return new XMLHttpRequest(); /* IE7, Safari 1.2, Mozilla 1.0/Firefox, and Netscape 7 */
            else
                return new ActiveXObject('Microsoft.XMLHTTP'); /* WSH and IE 5 to IE 6 */
        }
    }
}

SharedLevelService.rpcMethods = ["addOrUpdate", "getSharedPageLevels", "system.listMethods", "system.version", "system.about"];
