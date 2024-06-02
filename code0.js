gdjs.GameCode = {};
gdjs.GameCode.GDBarrierObjects1= [];
gdjs.GameCode.GDBarrierObjects2= [];
gdjs.GameCode.GDBarrierObjects3= [];
gdjs.GameCode.GDBarrierObjects4= [];
gdjs.GameCode.GDBarrierObjects5= [];
gdjs.GameCode.GDBarrierObjects6= [];
gdjs.GameCode.GDLadderObjects1= [];
gdjs.GameCode.GDLadderObjects2= [];
gdjs.GameCode.GDLadderObjects3= [];
gdjs.GameCode.GDLadderObjects4= [];
gdjs.GameCode.GDLadderObjects5= [];
gdjs.GameCode.GDLadderObjects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects6= [];
gdjs.GameCode.GDTickObjects1= [];
gdjs.GameCode.GDTickObjects2= [];
gdjs.GameCode.GDTickObjects3= [];
gdjs.GameCode.GDTickObjects4= [];
gdjs.GameCode.GDTickObjects5= [];
gdjs.GameCode.GDTickObjects6= [];
gdjs.GameCode.GDDwarfObjects1= [];
gdjs.GameCode.GDDwarfObjects2= [];
gdjs.GameCode.GDDwarfObjects3= [];
gdjs.GameCode.GDDwarfObjects4= [];
gdjs.GameCode.GDDwarfObjects5= [];
gdjs.GameCode.GDDwarfObjects6= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects5= [];
gdjs.GameCode.GDTutorialTextObjects6= [];
gdjs.GameCode.GDGroundTileObjects1= [];
gdjs.GameCode.GDGroundTileObjects2= [];
gdjs.GameCode.GDGroundTileObjects3= [];
gdjs.GameCode.GDGroundTileObjects4= [];
gdjs.GameCode.GDGroundTileObjects5= [];
gdjs.GameCode.GDGroundTileObjects6= [];
gdjs.GameCode.GDCastleWallObjects1= [];
gdjs.GameCode.GDCastleWallObjects2= [];
gdjs.GameCode.GDCastleWallObjects3= [];
gdjs.GameCode.GDCastleWallObjects4= [];
gdjs.GameCode.GDCastleWallObjects5= [];
gdjs.GameCode.GDCastleWallObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Touch anywhere On screen to jump/start");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Highscore", "Highscore");
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHighScoreObjects1 */
{gdjs.evtTools.storage.readNumberFromJSONFile("Highscore", "Highscore", runtimeScene, runtimeScene.getScene().getVariables().get("TempSaveValue"));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempSaveValue")));
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Playing");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDDwarfObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDwarfObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Preparing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDwarfObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDDwarfObjects4[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDwarfObjects4[k] = gdjs.GameCode.GDDwarfObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDDwarfObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12593924);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.mp3", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12595452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects3);
{for(var i = 0, len = gdjs.GameCode.GDDwarfObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDwarfObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDwarfObjects3Objects = Hashtable.newFrom({"Dwarf": gdjs.GameCode.GDDwarfObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTickObjects3Objects = Hashtable.newFrom({"Tick": gdjs.GameCode.GDTickObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tick"), gdjs.GameCode.GDTickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDwarfObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTickObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTickObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}{for(var i = 0, len = gdjs.GameCode.GDTickObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTickObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bonus.mp3", false, 100, 0.5);
}}

}


};gdjs.GameCode.mapOfEmptyGDGroundTileObjects = Hashtable.newFrom({"GroundTile": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects = Hashtable.newFrom({"GroundTile": gdjs.GameCode.GDGroundTileObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects = Hashtable.newFrom({"GroundTile": gdjs.GameCode.GDGroundTileObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects4Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLadderObjects4Objects = Hashtable.newFrom({"Ladder": gdjs.GameCode.GDLadderObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTickObjects5Objects = Hashtable.newFrom({"Tick": gdjs.GameCode.GDTickObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTickObjects4Objects = Hashtable.newFrom({"Tick": gdjs.GameCode.GDTickObjects4});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDLadderObjects4, gdjs.GameCode.GDLadderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLadderObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDLadderObjects5[i].getVariableNumber(gdjs.GameCode.GDLadderObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLadderObjects5[k] = gdjs.GameCode.GDLadderObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDLadderObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDLadderObjects5 */
gdjs.GameCode.GDTickObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTickObjects5Objects, (( gdjs.GameCode.GDLadderObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDLadderObjects5[0].getPointX("RewardUp")), (( gdjs.GameCode.GDLadderObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDLadderObjects5[0].getPointY("RewardUp")), "");
}{for(var i = 0, len = gdjs.GameCode.GDTickObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTickObjects5[i].setScale(gdjs.GameCode.GDTickObjects5[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDTickObjects5[i].getWidth()), (gdjs.GameCode.GDTickObjects5[i].getHeight())))));
}
}}

}


{

/* Reuse gdjs.GameCode.GDLadderObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLadderObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDLadderObjects4[i].getVariableNumber(gdjs.GameCode.GDLadderObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLadderObjects4[k] = gdjs.GameCode.GDLadderObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDLadderObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDLadderObjects4 */
gdjs.GameCode.GDTickObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTickObjects4Objects, (( gdjs.GameCode.GDLadderObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDLadderObjects4[0].getPointX("RewardDown")), (( gdjs.GameCode.GDLadderObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDLadderObjects4[0].getPointY("RewardDown")), "");
}{for(var i = 0, len = gdjs.GameCode.GDTickObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTickObjects4[i].setScale(gdjs.GameCode.GDTickObjects4[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDTickObjects4[i].getWidth()), (gdjs.GameCode.GDTickObjects4[i].getHeight())))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects5Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects5});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects5);
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects5);
gdjs.GameCode.GDBarrierObjects5.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("SpawneddangerInField")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("dangerInField"));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects5Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDDwarfObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDDwarfObjects5[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects5[0].getAABBTop()), "");
}{runtimeScene.getScene().getVariables().get("SpawneddangerInField").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDBarrierObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBarrierObjects5[i].setScale(gdjs.GameCode.GDBarrierObjects5[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDBarrierObjects5[i].getWidth()), (gdjs.GameCode.GDBarrierObjects5[i].getHeight())))));
}
}
{ //Subevents: 
gdjs.GameCode.eventsList8(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("SpawneddangerInField").setNumber(0);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects4);
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.GameCode.GDBarrierObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDDwarfObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDwarfObjects4[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDBarrierObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBarrierObjects4[i].setScale(gdjs.GameCode.GDBarrierObjects4[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDBarrierObjects4[i].getWidth()), (gdjs.GameCode.GDBarrierObjects4[i].getHeight())))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects4);
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.GameCode.GDLadderObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLadderObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDDwarfObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDwarfObjects4[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getAABBTop()) - 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDLadderObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDLadderObjects4[i].returnVariable(gdjs.GameCode.GDLadderObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDLadderObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDLadderObjects4[i].setScale(gdjs.GameCode.GDLadderObjects4[i].getScaleMean() * (125 / (Math.max((gdjs.GameCode.GDLadderObjects4[i].getWidth()), (gdjs.GameCode.GDLadderObjects4[i].getHeight())))));
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("dangerInField").setNumber(gdjs.randomInRange(1, 1 + Math.round(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 3000, 0, 4))));
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDwarfObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDDwarfObjects4[i].getBehavior("PlatformerObject").getMaxSpeed() < 800 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDwarfObjects4[k] = gdjs.GameCode.GDDwarfObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDDwarfObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDwarfObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDDwarfObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDwarfObjects4[i].getBehavior("PlatformerObject").setMaxSpeed((gdjs.GameCode.GDDwarfObjects4[i].getBehavior("PlatformerObject").getMaxSpeed()) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 6);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 0.7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 30);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects4);
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundTileObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundTileObjects4[i].getX() < (( gdjs.GameCode.GDDwarfObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDwarfObjects4[0].getPointX("")) - (gdjs.GameCode.GDGroundTileObjects4[i].getWidth()) - 100 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundTileObjects4[k] = gdjs.GameCode.GDGroundTileObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundTileObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundTileObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDGroundTileObjects) < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundTileObjects4 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects, (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getX()) + (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getWidth()), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getY()), "");
}{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].setWidth(1280);
}
}{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].setHeight(224);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacle_spawn") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDwarfObjects2Objects = Hashtable.newFrom({"Dwarf": gdjs.GameCode.GDDwarfObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2ObjectsGDgdjs_9546GameCode_9546GDLadderObjects2ObjectsGDgdjs_9546GameCode_9546GDTickObjects2Objects = Hashtable.newFrom({"Barrier": gdjs.GameCode.GDBarrierObjects2, "Ladder": gdjs.GameCode.GDLadderObjects2, "Tick": gdjs.GameCode.GDTickObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Barrier"), gdjs.GameCode.GDBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDwarfObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBarrierObjects2 */
/* Reuse gdjs.GameCode.GDDwarfObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Ladder"), gdjs.GameCode.GDLadderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tick"), gdjs.GameCode.GDTickObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDwarfObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDwarfObjects2[i].getBehavior("PlatformerObject").abortJump();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dead");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "obstacle_spawn");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBarrierObjects2ObjectsGDgdjs_9546GameCode_9546GDLadderObjects2ObjectsGDgdjs_9546GameCode_9546GDTickObjects2Objects);
}{for(var i = 0, len = gdjs.GameCode.GDBarrierObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarrierObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDLadderObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLadderObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDTickObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTickObjects2[i].clearForces();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 80, 1);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CastleWall"), gdjs.GameCode.GDCastleWallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects3);
{for(var i = 0, len = gdjs.GameCode.GDCastleWallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCastleWallObjects3[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{for(var i = 0, len = gdjs.GameCode.GDDwarfObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDwarfObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Playing";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTutorialTextObjects2, gdjs.GameCode.GDTutorialTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects3[i].setString("Touch anywhere On screen to restart");
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDTutorialTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12604708);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Press any key to restart the game");
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects2[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Highscore", "Highscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Dead";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CastleWall"), gdjs.GameCode.GDCastleWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dwarf"), gdjs.GameCode.GDDwarfObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDCastleWallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCastleWallObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDDwarfObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDwarfObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBarrierObjects1.length = 0;
gdjs.GameCode.GDBarrierObjects2.length = 0;
gdjs.GameCode.GDBarrierObjects3.length = 0;
gdjs.GameCode.GDBarrierObjects4.length = 0;
gdjs.GameCode.GDBarrierObjects5.length = 0;
gdjs.GameCode.GDBarrierObjects6.length = 0;
gdjs.GameCode.GDLadderObjects1.length = 0;
gdjs.GameCode.GDLadderObjects2.length = 0;
gdjs.GameCode.GDLadderObjects3.length = 0;
gdjs.GameCode.GDLadderObjects4.length = 0;
gdjs.GameCode.GDLadderObjects5.length = 0;
gdjs.GameCode.GDLadderObjects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects6.length = 0;
gdjs.GameCode.GDTickObjects1.length = 0;
gdjs.GameCode.GDTickObjects2.length = 0;
gdjs.GameCode.GDTickObjects3.length = 0;
gdjs.GameCode.GDTickObjects4.length = 0;
gdjs.GameCode.GDTickObjects5.length = 0;
gdjs.GameCode.GDTickObjects6.length = 0;
gdjs.GameCode.GDDwarfObjects1.length = 0;
gdjs.GameCode.GDDwarfObjects2.length = 0;
gdjs.GameCode.GDDwarfObjects3.length = 0;
gdjs.GameCode.GDDwarfObjects4.length = 0;
gdjs.GameCode.GDDwarfObjects5.length = 0;
gdjs.GameCode.GDDwarfObjects6.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects6.length = 0;
gdjs.GameCode.GDGroundTileObjects1.length = 0;
gdjs.GameCode.GDGroundTileObjects2.length = 0;
gdjs.GameCode.GDGroundTileObjects3.length = 0;
gdjs.GameCode.GDGroundTileObjects4.length = 0;
gdjs.GameCode.GDGroundTileObjects5.length = 0;
gdjs.GameCode.GDGroundTileObjects6.length = 0;
gdjs.GameCode.GDCastleWallObjects1.length = 0;
gdjs.GameCode.GDCastleWallObjects2.length = 0;
gdjs.GameCode.GDCastleWallObjects3.length = 0;
gdjs.GameCode.GDCastleWallObjects4.length = 0;
gdjs.GameCode.GDCastleWallObjects5.length = 0;
gdjs.GameCode.GDCastleWallObjects6.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
