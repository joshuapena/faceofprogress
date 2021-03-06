angular.module('GameCtrl', []).
controller('GameController', function($scope, $location, cssInjector) {

    $scope.start = function() {
        document.getElementById("world").style.display = "inline";
        document.getElementById("startButton").style.display = "none";

        var sprites = initGame();
        var audio = initSound();

        var game = new Game(document.getElementById("world"), sprites, audio, Explosion);
    }

    function initGame() {
        var spriteLoader = new SpriteLoader();
        var sprites = {};
        var spriteNames = ["enemyCat" , "turtleWithACrown", "coverTurtleWithACrown", "catBoss", /*"quadrapusBoss"*/];
        for (var i = 1; i < 7; i++) {
            spriteNames.push("connor/connorL" + i);
            spriteNames.push("connor/connorR" + i);
        }
        for (i = 0; i < 17; i++) {
            spriteNames.push("explosion/explosion-" + i);
        }
        spriteLoader.load("./assets/game/img", spriteNames, ".png", function (loadedSprites) {
            for (var spriteName in loadedSprites) {
                sprites[spriteName] = loadedSprites[spriteName];
            }
        });

        return sprites;
    }

    function initSound() {
        var audio = {};
        /*
        var soundLoader = new SoundLoader();
        var audio = {};
        var audioNames = ["casanova", "jumpFins", "pewPewBizNiss", "enemyDamageBraqoon", "meow", "pokemonRuby", "itsPossible", "underTheSea"];
        var extensions = [".mp3", ".wav", ".wav", ".wav", ".wav", ".mp3", ".mp3", ".mp3"];
        soundLoader.load("./assets/sounds", audioNames, extensions, function (loadedAudio) {
            for (var audioName in loadedAudio) {
                audio[audioName] = loadedAudio[audioName];
                audio[audioName].setVolume(20);
            }
        });
        */
        return audio;
    }
});
