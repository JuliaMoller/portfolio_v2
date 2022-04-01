window.addEventListener('DOMContentLoaded', function(){
    // get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');
    //canvas.addEventListener("wheel", evt => evt.preventDefault());

    // load the 3D engine
    var engine = new BABYLON.Engine(canvas, true);
    engine.hideLoadingUI();

    // createScene function that creates and return the scene
    var createScene = function(){
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);
        scene.createDefaultCamera(true, false, false);
        scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0, 0.0);

        // var camera = new BABYLON.FreeCamera("sceneCamera", new BABYLON.Vector3(0, 1, -15), scene);


        //scene.activeCamera.setTarget(BABYLON.Vector3.Zero());
        //  camera.inputs.attached.mouse.detachControl();
        //  camera.inputs.addGamepad();

        BABYLON.SceneLoader.Append("resourses/assets/", "hero3D.glb", scene, function(scene) {
            console.log(scene.meshes);
            scene.meshes[1].showBoundingBox = false;
            var bbox = scene.meshes[1].getBoundingInfo().boundingBox;
            var bsphere = scene.meshes[1].getBoundingInfo().boundingSphere;
            var center = bbox.centerWorld;
            console.log(bsphere);              

            // Sets the Camera
            scene.createDefaultCameraOrLight(true, true, true);
            scene.activeCamera.setTarget(BABYLON.Vector3.Zero());
            // scene.activeCamera.attachControl(canvas, true);
            scene.activeCamera.detachControl();
            scene.activeCamera.position = new BABYLON.Vector3(center.x, center.y, bsphere.radiusWorld * 15);
            scene.activeCamera.target = center;
            scene.activeCamera.alpha = Math.PI / 2;
                            
        });

        return scene;
    }

    // call the createScene function
    var scene = createScene();

    // run the render loop
    engine.runRenderLoop(function(){
        scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });
});