const ship = {
    asset: { copyright: "shooteram", generator: "Khronos glTF Blender I/O v1.5.17", version: "2.0" },
    scene: 0,
    scenes: [{ name: "Scene", nodes: [0] }],
    nodes: [{ mesh: 0, name: "Cube" }],
    materials: [
        {
            doubleSided: true,
            name: "Material",
            pbrMetallicRoughness: {
                baseColorFactor: [0.800000011920929, 0.800000011920929, 0.800000011920929, 1],
                metallicFactor: 0,
                roughnessFactor: 0.4000000059604645,
            },
        },
    ],
    meshes: [
        {
            name: "Cube",
            primitives: [
                {
                    attributes: { POSITION: 0, NORMAL: 1, TEXCOORD_0: 2, COLOR_0: 3 },
                    indices: 4,
                    material: 0,
                },
            ],
        },
    ],
    accessors: [
        {
            bufferView: 0,
            componentType: 5126,
            count: 24,
            max: [0.8712732195854187, 1.3145711421966553, 1.4192464351654053],
            min: [-0.8232534527778625, -0.14066827297210693, -3.6142325401306152],
            type: "VEC3",
        },
        { bufferView: 1, componentType: 5126, count: 24, type: "VEC3" },
        { bufferView: 2, componentType: 5126, count: 24, type: "VEC2" },
        { bufferView: 3, componentType: 5123, count: 24, normalized: true, type: "VEC4" },
        { bufferView: 4, componentType: 5123, count: 36, type: "SCALAR" },
    ],
    bufferViews: [
        { buffer: 0, byteLength: 288, byteOffset: 0 },
        { buffer: 0, byteLength: 288, byteOffset: 288 },
        { buffer: 0, byteLength: 192, byteOffset: 576 },
        { buffer: 0, byteLength: 192, byteOffset: 768 },
        { buffer: 0, byteLength: 72, byteOffset: 960 },
    ],
    buffers: [
        {
            byteLength: 1032,
            uri: "data:application/octet-stream;base64,t7cBv09YgD+WT2fAt7cBv09YgD+WT2fAt7cBv09YgD+WT2fAUEvXvoy3rT7mcBvAUEvXvoy3rT7mcBvAUEvXvoy3rT7mcBvAwwtfP5zIkD+Uhik/wwtfP5zIkD+Uhik/wwtfP5zIkD+Uhik/dWUeP+TRBj4P/GY/dWUeP+TRBj4P/GY/dWUeP+TRBj4P/GY/KbdMv842Hz9SgSDAKbdMv842Hz9SgSDAKbdMv842Hz9SgSDAdGhtvt5DqD/y7U3AdGhtvt5DqD/y7U3AdGhtvt5DqD/y7U3A3GcLvwg2bj/eqbU/3GcLvwg2bj/eqbU/3GcLvwg2bj/eqbU/vcBSv1gLEL7gmWo/vcBSv1gLEL7gmWo/vcBSv1gLEL7gmWo/MQUBvx+t8r661zg/2T2fvkRJcz+1+Tg8s3ZlP3VzrL6YnZO+MQUBvx+t8r661zg/zr3Kvg+rZr8ANDW+s3ZlP3VzrL6YnZO+2T2fvkRJcz+1+Tg8OAaSPvnwRL6DYHA/s3ZlP3VzrL6YnZO+zr3Kvg+rZr8ANDW+OAaSPvnwRL6DYHA/s3ZlP3VzrL6YnZO+8eFpv0l/yr6pRcG9MQUBvx+t8r661zg/2T2fvkRJcz+1+Tg88eFpv0l/yr6pRcG9MQUBvx+t8r661zg/zr3Kvg+rZr8ANDW+8eFpv0l/yr6pRcG92T2fvkRJcz+1+Tg8OAaSPvnwRL6DYHA/8eFpv0l/yr6pRcG9zr3Kvg+rZr8ANDW+OAaSPvnwRL6DYHA/AAAgPwAAAD8AACA/AAAAPwAAID8AAAA/AADAPgAAAD8AAMA+AAAAPwAAwD4AAAA/AAAgPwAAgD4AACA/AACAPgAAID8AAIA+AADAPgAAgD4AAMA+AACAPgAAwD4AAIA+AAAgPwAAQD8AACA/AABAPwAAYD8AAAA/AADAPgAAQD8AAMA+AABAPwAAAD4AAAA/AAAgPwAAgD8AAGA/AACAPgAAID8AAAAAAADAPgAAgD8AAAA+AACAPgAAwD4AAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AQAOABMAAQATAAYACgAHABQACgAUABcAFQASAA8AEgAMAA8AEQAEABYABAAJABYABQACAAgABQAIAAsAEAANAAMADQAAAAMA"
        },
    ],
};

export { ship };
