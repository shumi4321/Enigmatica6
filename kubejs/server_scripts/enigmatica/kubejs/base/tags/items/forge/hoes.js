events.listen('item.tags', function (event) {
    var hoes = [
        'aiotbotania:elementium_hoe',
        'aiotbotania:livingrock_hoe',
        'aiotbotania:livingwood_hoe',
        'aiotbotania:manasteel_hoe',
        'aiotbotania:terra_hoe',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_hoe',
        'byg:pendorite_hoe',
        'good_nights_sleep:candy_hoe',
        'good_nights_sleep:necrum_hoe',
        'good_nights_sleep:negatite_hoe',
        'good_nights_sleep:positite_hoe',
        'good_nights_sleep:rainbow_hoe',
        'good_nights_sleep:zitrite_hoe',
        'immersiveengineering:hoe_steel',
        'mapperbase:steel_hoe',
        'mekanismtools:bronze_hoe',
        'mekanismtools:lapis_lazuli_hoe',
        'mekanismtools:osmium_hoe',
        'mekanismtools:refined_glowstone_hoe',
        'mekanismtools:refined_obsidian_hoe',
        'mekanismtools:steel_hoe',
        'minecraft:diamond_hoe',
        'minecraft:golden_hoe',
        'minecraft:iron_hoe',
        'minecraft:netherite_hoe',
        'minecraft:stone_hoe',
        'minecraft:wooden_hoe',
        'naturesaura:infused_iron_hoe',
        'naturesaura:sky_hoe',
        'aiotbotania:livingwood_aiot',
        'aiotbotania:livingrock_aiot',
        'aiotbotania:manasteel_aiot',
        'aiotbotania:elementium_aiot',
        'aiotbotania:terra_aiot'
    ];

    hoes.forEach(function (hoe) {
        event.get('forge:tools').add(hoe);
        event.get('forge:tools/hoe').add(hoe);
    });
});
