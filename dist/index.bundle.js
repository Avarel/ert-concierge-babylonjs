/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/concierge.ts":
/*!*************************!*\
  !*** ./ts/concierge.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StatusCode = void 0;\nfunction assertUuid(uuid) {\n    return uuid;\n}\nvar StatusCode;\n(function (StatusCode) {\n    StatusCode[StatusCode[\"OK\"] = 2000] = \"OK\";\n    StatusCode[StatusCode[\"MESSAGE_SENT\"] = 2001] = \"MESSAGE_SENT\";\n    StatusCode[StatusCode[\"SUBSCRIBED\"] = 2002] = \"SUBSCRIBED\";\n    StatusCode[StatusCode[\"UNSUBSCRIBED\"] = 2003] = \"UNSUBSCRIBED\";\n    StatusCode[StatusCode[\"CREATED_GROUP\"] = 2004] = \"CREATED_GROUP\";\n    StatusCode[StatusCode[\"DELETED_GROUP\"] = 2005] = \"DELETED_GROUP\";\n    StatusCode[StatusCode[\"BAD\"] = 4000] = \"BAD\";\n    StatusCode[StatusCode[\"UNSUPPORTED\"] = 4001] = \"UNSUPPORTED\";\n    StatusCode[StatusCode[\"PROTOCOL\"] = 4002] = \"PROTOCOL\";\n    StatusCode[StatusCode[\"GROUP_ALREADY_CREATED\"] = 4003] = \"GROUP_ALREADY_CREATED\";\n    StatusCode[StatusCode[\"NO_SUCH_NAME\"] = 4004] = \"NO_SUCH_NAME\";\n    StatusCode[StatusCode[\"NO_SUCH_UUID\"] = 4005] = \"NO_SUCH_UUID\";\n    StatusCode[StatusCode[\"NO_SUCH_GROUP\"] = 4006] = \"NO_SUCH_GROUP\";\n})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));\n\n\n//# sourceURL=webpack:///./ts/concierge.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.client = exports.renderer = void 0;\nconst renderer_1 = __webpack_require__(/*! ./renderer */ \"./ts/renderer.ts\");\nconst physics_engine_client_1 = __webpack_require__(/*! ./physics_engine_client */ \"./ts/physics_engine_client.ts\");\nlet canvas = document.querySelector(\"#renderCanvas\");\nif (!canvas) {\n    throw \"Canvas is not found!\";\n}\ncanvas.focus();\nvar url = prompt(\"Please enter the server address\", \"ws://127.0.0.1:64209/ws\");\nif (url == \"debug\") {\n    let renderer = new renderer_1.Renderer(canvas);\n    renderer.scene = renderer.createScene();\n    renderer.start();\n    throw \"Debug mode\";\n}\nif (!url || url.length == 0) {\n    throw alert(\"A server address is required, please restart the webpage.\");\n}\nvar person = prompt(\"Please enter your name\", \"anthony\");\nif (!person || person.length == 0) {\n    throw alert(\"A valid name, please restart the webpage.\");\n}\nexports.renderer = new renderer_1.Renderer(canvas);\nexports.renderer.scene = exports.renderer.createScene();\nexports.client = new physics_engine_client_1.PhysicsSimulationClient(person, url, true);\nexports.client.connect();\nexports.renderer.start();\n\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ }),

/***/ "./ts/physics_engine_client.ts":
/*!*************************************!*\
  !*** ./ts/physics_engine_client.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PhysicsSimulationClient = exports.PHYSICS_ENGINE_GROUP = exports.PHYSICS_ENGINE_NAME = void 0;\nconst ConciergeAPI = __webpack_require__(/*! ./concierge */ \"./ts/concierge.ts\");\nconst babylonjs_1 = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nconst _1 = __webpack_require__(/*! . */ \"./ts/index.ts\");\nexports.PHYSICS_ENGINE_NAME = \"physics_engine\";\nexports.PHYSICS_ENGINE_GROUP = \"physics_engine_out\";\nfunction vec2f2vector2(vec) {\n    return new babylonjs_1.Vector2(vec.x, vec.y);\n}\nfunction tuple2color3(tuple) {\n    function clamp(n) {\n        return Math.max(0, Math.min(n, 255)) / 255;\n    }\n    return new babylonjs_1.Color3(clamp(tuple[0]), clamp(tuple[1]), clamp(tuple[2]));\n}\nclass PhysicsSimulationClient {\n    constructor(name, url, reconnect = false) {\n        this.reconnectInterval = 5000;\n        this.subscribeInterval = 5000;\n        this.url = url;\n        this.name = name;\n        this.reconnect = reconnect;\n    }\n    connect() {\n        console.info(\"Trying to connect to \", this.url);\n        this.socket = new WebSocket(this.url);\n        this.socket.onopen = event => this.onOpen(event);\n        this.socket.onmessage = event => this.onReceive(event);\n        this.socket.onerror = event => console.log(event);\n        this.socket.onclose = event => this.onClose(event);\n    }\n    send(payload) {\n        this.socket.send(JSON.stringify(payload));\n    }\n    close(code, reason) {\n        this.socket.close(code, reason);\n    }\n    onOpen(event) {\n        this.send({\n            operation: \"IDENTIFY\",\n            name: this.name\n        });\n    }\n    onClose(event) {\n        console.warn(event.code, event.reason);\n        clearInterval(this.subscribeHandle);\n        if (this.reconnect) {\n            console.warn(\"Connection closed, reconnecting in\", this.reconnectInterval, \"ms\");\n            setTimeout(() => {\n                this.connect();\n            }, this.reconnectInterval);\n        }\n    }\n    onReceive(event) {\n        let payload = JSON.parse(event.data);\n        this.processConciergePayload(payload);\n    }\n    trySubscribe() {\n        let subFn = () => {\n            console.log(\"Attempting to subscribe to \", exports.PHYSICS_ENGINE_GROUP);\n            this.send({\n                operation: \"SUBSCRIBE\",\n                group: exports.PHYSICS_ENGINE_GROUP\n            });\n        };\n        subFn();\n        this.subscribeHandle = setInterval(subFn, this.subscribeInterval);\n    }\n    cancelSubscribe() {\n        clearInterval(this.subscribeHandle);\n        this.subscribeHandle = undefined;\n    }\n    onSubscribe() {\n        console.log(\"Subscribed!\");\n        this.send({\n            operation: \"MESSAGE\",\n            target: {\n                type: \"NAME\",\n                name: exports.PHYSICS_ENGINE_NAME\n            },\n            data: {\n                type: \"FETCH_ENTITIES\"\n            }\n        });\n    }\n    processConciergePayload(payload) {\n        switch (payload.operation) {\n            case \"HELLO\":\n                this.uuid = payload.uuid;\n                this.trySubscribe();\n                break;\n            case \"MESSAGE\":\n                if (payload.origin.name != exports.PHYSICS_ENGINE_NAME) {\n                    return;\n                }\n                this.processPhysicsPayload(payload.data);\n                break;\n            case \"STATUS\":\n                switch (payload.code) {\n                    case ConciergeAPI.StatusCode.NO_SUCH_GROUP:\n                        if (payload.data == exports.PHYSICS_ENGINE_GROUP) {\n                            console.error(\"Group \", exports.PHYSICS_ENGINE_GROUP, \" does not exist on concierge, is the simulation server on?\");\n                        }\n                        break;\n                    case ConciergeAPI.StatusCode.SUBSCRIBED:\n                        if (payload.data == exports.PHYSICS_ENGINE_GROUP) {\n                            this.cancelSubscribe();\n                            this.onSubscribe();\n                        }\n                        break;\n                    case ConciergeAPI.StatusCode.UNSUBSCRIBED:\n                        if (payload.data == exports.PHYSICS_ENGINE_GROUP) {\n                            this.trySubscribe();\n                        }\n                        break;\n                }\n                break;\n        }\n    }\n    createShape(id, centroid, points, color, scale = 1) {\n        let centroidv = vec2f2vector2(centroid);\n        let pointsv = points.map(vec2f2vector2);\n        let color3 = tuple2color3(color);\n        _1.renderer.createPolygon(id, centroidv, pointsv, color3, scale);\n    }\n    updateShape(id, centroid) {\n        let shape = _1.renderer.shapes[id];\n        if (shape) {\n            shape.moveTo(vec2f2vector2(centroid));\n        }\n        else {\n            console.warn(\"Shape \", id, \" not registered with client\");\n        }\n    }\n    processPhysicsPayload(payload) {\n        switch (payload.type) {\n            case \"ENTITY_DUMP\":\n                console.log(\"Dumping entities!\");\n                _1.renderer.clearShapes();\n                for (let entity of payload.entities) {\n                    this.createShape(entity.id, entity.centroid, entity.points, entity.color);\n                }\n                break;\n            case \"POSITION_DUMP\":\n                for (let update of payload.updates) {\n                    this.updateShape(update.id, update.position);\n                }\n                break;\n            default:\n                console.log(payload);\n                break;\n        }\n    }\n}\nexports.PhysicsSimulationClient = PhysicsSimulationClient;\n\n\n//# sourceURL=webpack:///./ts/physics_engine_client.ts?");

/***/ }),

/***/ "./ts/renderer.ts":
/*!************************!*\
  !*** ./ts/renderer.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Shape = exports.Renderer = void 0;\nconst babylonjs_1 = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nconst BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nclass Renderer {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.shapes = {};\n        this.engine = new babylonjs_1.Engine(canvas, true);\n    }\n    clearShapes() {\n        var _a;\n        for (let key in this.shapes) {\n            if (this.shapes.hasOwnProperty(key)) {\n                let shape = this.shapes[key];\n                (_a = this.generator) === null || _a === void 0 ? void 0 : _a.removeShadowCaster(shape.mesh);\n                shape.mesh.dispose();\n                delete this.shapes[key];\n            }\n        }\n    }\n    createScene() {\n        var _a, _b;\n        if (this.scene) {\n            this.scene.dispose();\n        }\n        let scene = new babylonjs_1.Scene(this.engine);\n        let camera = new babylonjs_1.UniversalCamera(\"UniversalCamera\", new babylonjs_1.Vector3(500, 800, -100), scene);\n        camera.setTarget(new babylonjs_1.Vector3(500, 0, 500));\n        camera.speed = 15;\n        camera.attachControl(this.canvas, true);\n        camera.keysDownward.push(17);\n        camera.keysUpward.push(32);\n        camera.keysUp.push(87);\n        camera.keysDown.push(83);\n        camera.keysLeft.push(65);\n        camera.keysRight.push(68);\n        let light = new BABYLON.PointLight(\"light1\", new BABYLON.Vector3(500, 500, 500), scene);\n        light.intensity = 1.0;\n        let helper = scene.createDefaultEnvironment({\n            skyboxSize: 1050,\n            groundSize: 1050,\n            groundShadowLevel: 0.5,\n            enableGroundShadow: true\n        });\n        (_a = helper === null || helper === void 0 ? void 0 : helper.ground) === null || _a === void 0 ? void 0 : _a.position.set(500, 0, 500);\n        (_b = helper === null || helper === void 0 ? void 0 : helper.skybox) === null || _b === void 0 ? void 0 : _b.position.set(500, 0, 500);\n        helper.setMainColor(BABYLON.Color3.FromHexString(\"#74b9ff\"));\n        this.generator = new BABYLON.ShadowGenerator(512, light);\n        scene.actionManager = new BABYLON.ActionManager(scene);\n        var sphere = BABYLON.Mesh.CreateSphere(\"sphere1\", 16, 20, scene);\n        sphere.position.y = 1;\n        sphere.actionManager = new BABYLON.ActionManager(scene);\n        sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {\n            console.log(\"Got Pick Action\");\n        }));\n        var vrHelper = scene.createDefaultVRExperience({ createDeviceOrientationCamera: false });\n        vrHelper.enableTeleportation({ floorMeshes: [helper.ground] });\n        return scene;\n    }\n    createPolygon(id, centroid, points, color, scale = 1) {\n        var _a;\n        if (this.scene) {\n            let shape = Shape.createPolygon(id, centroid, points, this.scene, color, scale);\n            this.shapes[id] = shape;\n            (_a = this.generator) === null || _a === void 0 ? void 0 : _a.addShadowCaster(shape.mesh);\n        }\n    }\n    start() {\n        if (this.scene == undefined) {\n            this.scene = this.createScene();\n        }\n        let renderFunc = () => {\n            if (this.scene) {\n                this.scene.render();\n            }\n            else {\n                this.engine.stopRenderLoop(renderFunc);\n            }\n        };\n        this.engine.runRenderLoop(renderFunc);\n        window.addEventListener(\"resize\", () => {\n            this.engine.resize();\n        });\n    }\n    stop() {\n        this.engine.stopRenderLoop();\n    }\n}\nexports.Renderer = Renderer;\nclass Shape {\n    constructor(centroid, mesh) {\n        this.centroid = centroid;\n        this.mesh = mesh;\n    }\n    static createPolygon(id, centroid, points, scene, color, scale = 1) {\n        let corners = points.map((v) => v.scale(scale));\n        let poly_tri = new BABYLON.PolygonMeshBuilder(\"polytri\", corners, scene);\n        let mesh = poly_tri.build(undefined, 50);\n        mesh.position.y += 50;\n        var mat = new BABYLON.StandardMaterial(\"myMaterial\", scene);\n        mat.diffuseColor = color;\n        mesh.material = mat;\n        mesh.actionManager = new BABYLON.ActionManager(scene);\n        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {\n            console.log(\"Got Pick Action\");\n        }));\n        return new Shape(centroid, mesh);\n    }\n    setColor(color) {\n        this.mesh.material.diffuseColor = color;\n    }\n    moveTo(point) {\n        let translate = point.subtract(this.centroid);\n        let translate3 = new babylonjs_1.Vector3(translate.x, 0, translate.y);\n        this.mesh.position.addInPlace(translate3);\n        this.centroid.set(point.x, point.y);\n    }\n}\nexports.Shape = Shape;\n\n\n//# sourceURL=webpack:///./ts/renderer.ts?");

/***/ }),

/***/ "babylonjs":
/*!**************************!*\
  !*** external "BABYLON" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = BABYLON;\n\n//# sourceURL=webpack:///external_%22BABYLON%22?");

/***/ })

/******/ });