<?php include_once($_SERVER['DOCUMENT_ROOT'] . implode('/', array_slice(explode('/',dirname($_SERVER['PHP_SELF'])), 0, 4)) . '/Utils.php') ?>`
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Demo: London Ajax Logo</title>
		<link rel="stylesheet" href="style.css" media="screen">
		<link rel="stylesheet" href="../../../resources/style/demo.css" media="screen">
		<?php Utils::printClaroCss() ?>
	</head>
	<body class="claro">
		<h1>Demo: London Ajax Logo</h1>

		<div id="gfxNode" style="width:480px;height:480px;border:1px solid #ccc;margin:20px;float:left;"></div>
			<div style="width:300px;float:left;margin-top:20px;">

				<h2>Animations and Transformations</h2>
				<button data-dojo-type="dijit.form.Button" id="rotate360">Rotate 360 Degrees</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="halfSize">Half Size</button>
				<button data-dojo-type="dijit.form.Button" id="doubleSize">Double Size</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="makeMovable">Make Movable</button>
				<button data-dojo-type="dijit.form.Button" id="stopMovable" disabled="true">Stop Movable</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="translate">Down-Right</button>
				<button data-dojo-type="dijit.form.Button" id="translate2">Up-Left</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="skew">Skew</button>
				<button data-dojo-type="dijit.form.Button" id="skewback">Skew Back</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="rotateanimate">Rotate w/ Color Animation</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="animateText">Animate Text</button>
				<button data-dojo-type="dijit.form.Button" id="animateFill">Animate Fill</button>
				<br /><br />
				<button data-dojo-type="dijit.form.Button" id="animateStroke">Animate Stroke</button>
				<br /><br />
				<p><em>Note:  some animations will reset the group to its original shape to best illustrate an effect.</em></p><br />
				<h2>Events</h2>
				<p>Click anywhere on the logo to rotate it 360 degrees.</p>
			</div>
			<div style="clear:both;"></div>
		</div>

		<?php Utils::printDojoScript("isDebug: true, async: true") ?>
		<script>

			require(["dojox/gfx", "dojox/gfx/fx", "dojox/gfx/Moveable", "dojo/aspect", "dojo/_base/array", "dijit/registry", "dojo/parser", "dijit/form/Button", "dojo/domReady!"], function(gfx, gfxFx, Moveable, aspect, arrayUtil, registry, parser) {

				parser.parse();

				// Create the surface
				surface = gfx.createSurface("gfxNode", 480, 480);

				// Create the group
				group = surface.createGroup();

				// Create "V" Shape
				var vShapeStyles = {
					stroke: {
						color: "#a70017"
					},
					fill: {
						type: "linear", x1: 0, y1: 0, x2: 0, y2: 420,
						colors: [{ offset: 0, color: "#f3001f" }, { offset: 1, color: "#a40016" }]
					}
				};
				var vShape = surface.createPolyline([
					{ x:28, y:420 },
					{ x:100, y:420 },
					{ x:240, y:124 },
					{ x:384, y:420 },
					{ x:456, y:420 },
					{ x:276, y:44 },
					{ x:208, y:44 },
					{ x:28, y:420 }
				]).setStroke(vShapeStyles.stroke).setFill(vShapeStyles.fill);

				// Create Blue Box
				var rectShape = surface.createRect({ x: 32, y: 272, width: 412, height: 64 }).setFill("#0000ae");

				// Create Text
				var textShape = surface.createText({ x: 64, y: 320, text: "LONDON AJAX", align: "start"}).setFont({ family: "Arial", size: "36pt", weight: "bold" }).setFill("#ffffff");

				//Group 'em!
				group.add(vShape);
				group.add(rectShape);
				group.add(textShape);

				//rotate and style!
				var originalVShapeColor = vShape.getFill(), originalRectShapeColor = rectShape.getFill();
				var rotateFx = new gfxFx.animateTransform({
					duration: 3200,
					shape: group,
					transform: [ { name: "rotategAt", start: [0, 240, 240], end: [360, 240, 240] }]/*,
					onAnimate: function() {
						vShape.setFill({ type:"linear", x1:0, y1:0, x2:0, y2:420, colors: [{ offset:0, color:"#a40016"},{ offset:1, color:"#f3001f"}] });
						rectShape.setFill("#0daf24");
					},
					onEnd: function() {
						vShape.setFill(originalVShapeColor);
						rectShape.setFill(originalRectShapeColor);
					}*/
				});

				// Events
				aspect.after(registry.byId("rotate360"), "onClick", function() {
					rotateFx.play();
				});
				aspect.after(registry.byId("halfSize"), "onClick", function() {
					group.applyTransform(gfx.matrix.scale({ x:0.5, y:0.5 }));
				});
				aspect.after(registry.byId("doubleSize"), "onClick", function() {
					group.applyTransform(gfx.matrix.scale({ x:2, y:2 }));
				});

				var movable;
				aspect.after(registry.byId("makeMovable"), "onClick", function() {
					movable = new Moveable(group);
					registry.byId("stopMovable").set("disabled", false);
					registry.byId("makeMovable").set("disabled", true);
				}, true);
				aspect.after(registry.byId("stopMovable"), "onClick", function() {
					movable.destroy();
					registry.byId("stopMovable").set("disabled", true);
					registry.byId("makeMovable").set("disabled", false);
				}, true);

				aspect.after(registry.byId("translate"), "onClick", function() {
					group.applyTransform(gfx.matrix.translate(30, 40));
				}, true);
				aspect.after(registry.byId("translate2"), "onClick", function() {
					group.applyTransform(gfx.matrix.translate(-30, -40));
				}, true);

				aspect.after(registry.byId("skew"), "onClick", function() {
					group.applyTransform(gfx.matrix.skewYg(-20));
				}, true);
				aspect.after(registry.byId("skewback"), "onClick", function() {
					group.applyTransform(gfx.matrix.skewYg(20));
				}, true);

				var rotateFxAnimate = new gfxFx.animateTransform({
					duration: 200,
					shape: group,
					transform: [ { name: "rotategAt", start: [0, 240, 240], end: [360, 240, 240] }],
					onAnimate: function() {
						vShape.setFill({ type: "linear", x1: 0, y1: 0, x2: 0, y2: 420, colors: [{ offset: 0, color: "#a40016"},{ offset: 1, color: "#f3001f"}] });
						rectShape.setFill("#0daf24");
					},
					onEnd: function() {
						vShape.setFill(originalVShapeColor);
						rectShape.setFill(originalRectShapeColor);
					}
				});
				aspect.after(registry.byId("rotateanimate"), "onClick", function() {
					rotateFxAnimate.play();
				}, true);

				/* animate text */
				aspect.after(registry.byId("animateText"), "onClick", function() {
					new gfxFx.animateFont({
						duration: 1200,
						shape: textShape,
						//variant: { values: ["normal", "small-caps"] },
						size:  { start: 36, end: 20, units: "pt" },
						onAnimate: function() {
							registry.byId("animateText").set("disabled", true);
						},
						onEnd: function() {
							new gfxFx.animateFont({
								duration: 1200,
								shape: textShape,
								//variant: { values: ["small-caps", "normal"] },
								size:  { start:20, end: 36, units: "pt" },
								onEnd: function() {
									registry.byId("animateText").set("disabled", false);
								}
							}).play();
						}
					}).play();
				}, true);

				/* animate stroke */
				aspect.after(registry.byId("animateStroke"), "onClick", function() {
					new gfxFx.animateStroke({
						duration: 1200,
						shape: vShape,
						color: { start: "red", end: "green" },
						width: { end: 15 },
						join:  { values: ["miter", "bevel", "round"] },
						onAnimate: function() {
							registry.byId("animateStroke").set("disabled", true);
						},
						onEnd: function() {
							new gfxFx.animateStroke({
								duration: 1200,
								shape: vShape,
								color: { start: "green", end: "#a40016" },
								width: { end: 1 },
								join:  { values: ["round", "bevel", ""] },
								onEnd: function() {
									registry.byId("animateStroke").set("disabled", false);
								}
							}).play();
						}
					}).play();
				}, true);

				/* animate fill */
				aspect.after(registry.byId("animateFill"), "onClick", function() {
					new gfxFx.animateFill({
						duration: 1200,
						shape: rectShape,
						color: { end: "green" },
						onAnimate: function() {
							registry.byId("animateFill").set("disabled", true);
						},
						onEnd: function() {
							new gfxFx.animateFill({
								duration: 1200,
								shape: rectShape,
								color: { end: "#0000ae" },
								onEnd: function() {
									registry.byId("animateFill").set("disabled", false);
								}
							}).play();
						}
					}).play();
				}, true);


				aspect.after(group.getEventSource(), "ondblclick", function() {
					rotateFx.play();
				}, true);

			});

		</script>
	</body>
</html>
