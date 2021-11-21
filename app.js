const chara = {
    'advenJob' : ['Warrior', 'Dragon Knight', 'Barbarian', 'Monk', 'Ranger', 'Assassin', 'Thief', 'Rogue', 'Sorcerer', 'Warden', 'Necromancer'],
    'weapon' : ['Sword', 'Claymore', 'Wand', 'Fist', 'Bow', 'Dual Dagger'],
    'magicElem' : ['Fire', 'Dark', 'Light', 'Heal', 'Ice', 'Lightning', 'Earth'],
    'passiveSkill' : ['Language Knowledge', 'Regeneration', 'Instant Learning', 'Luck', 'Enhanced Awareness', 'Enticing Charm', 'Fast Increase Growth', 'Survivalist'],
    'activeSkill' : ['Omniscient', 'Appraisal', 'Duplicate', 'Teleportation', 'Skill Creation'],
    'uniqueSkill' : ['Arise'],
    'stats' : {
        'Str' : undefined,
        'Def' : undefined,
        'Agi' : undefined,
        'int' : undefined,
        'Dex' : undefined,
        'Vit' : undefined
    }
}

const randomStats = () => Math.floor(Math.random() * 20);

const getRandomChara = (arr) => {
    let num = Math.floor(Math.random() * arr.length);
    return num;
}

const getClass = (char) => {
    console.log(`Job : ${chara.advenJob[getRandomChara(chara.advenJob)]}`);
    console.log(`Weapon : ${chara.weapon[getRandomChara(chara.weapon)]}`);
    console.log(`Magic Element : ${chara.magicElem[getRandomChara(chara.magicElem)]}`);
    console.log(`Passive Skill : ${chara.passiveSkill[getRandomChara(chara.passiveSkill)]}`);
    console.log(`Active Skill : ${chara.activeSkill[getRandomChara(chara.activeSkill)]}`);
    console.log(`Unique Skill : ${chara.uniqueSkill[getRandomChara(chara.uniqueSkill)]}`);
}

getClass(chara);