// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202010000000001000001000000000100080100030400010000030000010001000101000304000100030400000100010001010000000001000100000001000300010100030000000003000000010001000101010101000000010000000100010001010000010101000000000000010100010100000000000000000001010100000101030403040304000000010606000304010000000000000100000106060000010101000000000000000101010101000105040101010101000000010000000001010000000000000100000000000000010100000000000000000606060606060101070101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . 2 . . . . 2 . . 
2 . 2 2 . 2 . . 2 . . 2 . 2 . 2 
2 . 2 2 . 2 . 2 2 . . 2 . 2 . 2 
2 . . . . 2 . 2 . . . 2 . 2 . 2 
2 . 2 . . . . 2 . . . 2 . 2 . 2 
2 2 2 2 . . . 2 . . . 2 . 2 . 2 
2 . . 2 2 2 . . . . . . 2 2 . 2 
2 . . . . . . . . . 2 2 2 . . 2 
2 2 2 2 2 2 2 . . . 2 . . . 2 2 
2 . . . . . . 2 . . 2 . . . . 2 
2 2 . . . . . . . 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 . . . 2 . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.builtin.forestTiles3,sprites.builtin.forestTiles27,sprites.builtin.forestTiles16,sprites.builtin.forestTiles12,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
