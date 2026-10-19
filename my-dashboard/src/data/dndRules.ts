/**
 * @file dndRules.ts
 * @description Reference rules database for auto-populating racial traits,
 * languages, class features, and proficiency bonuses.
 */

import type { AbilityName } from '@/types/campaign';

export interface RaceRule {
    languages: string[];
    abilityBonuses: Partial<Record<AbilityName, number>>;
    traits: string[];
}

export interface ClassRule {
    hitDie: number;
    savingThrows: AbilityName[];
    features: string[];
    defaultProficiencies: string[];
}

/**
 * 5e Race trait definitions
 */
export const RACE_DATA: Record<string, RaceRule> = {
    'Wood Elf': {
        languages: ['Common', 'Elvish'],
        abilityBonuses: { dexterity: 2, wisdom: 1 },
        traits: ['Darkvision', 'Fey Ancestry', 'Trance', 'Mask of the Wild (Fleet of Foot)'],
    },
    'High Elf': {
        languages: ['Common', 'Elvish', 'Extra Language'],
        abilityBonuses: { dexterity: 2, intelligence: 1 },
        traits: ['Darkvision', 'Fey Ancestry', 'Trance', 'Cantrip'],
    },
    'Mountain Dwarf': {
        languages: ['Common', 'Dwarvish'],
        abilityBonuses: { strength: 2, constitution: 2 },
        traits: ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Dwarven Armor Training'],
    },
    'Human': {
        languages: ['Common', 'One Extra Language'],
        abilityBonuses: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
        traits: ['Versatile'],
    },
    'Tiefling': {
        languages: ['Common', 'Infernal'],
        abilityBonuses: { charisma: 2, intelligence: 1 },
        traits: ['Darkvision', 'Hellish Resistance', 'Hellfire Legacy'],
    },
    'Halfling': {
        languages: ['Common', 'Halfling'],
        abilityBonuses: { dexterity: 2 },
        traits: ['Lucky', 'Brave', 'Halfling Nimbleness'],
    },
    'Dragonborn': {
        languages: ['Common', 'Draconic'],
        abilityBonuses: { strength: 2, charisma: 1 },
        traits: ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance'],
    },
    'Half-Orc': {
        languages: ['Common', 'Orc'],
        abilityBonuses: { strength: 2, constitution: 1 },
        traits: ['Darkvision', 'Relentless Endurance', 'Savage Attacks'],
    },
};

/**
 * 5e Class feature definitions
 */
export const CLASS_DATA: Record<string, ClassRule> = {
    Druid: {
        hitDie: 8,
        savingThrows: ['intelligence', 'wisdom'],
        features: ['Druidic Language', 'Spellcasting', 'Wild Shape'],
        defaultProficiencies: ['Perception', 'Survival'],
    },
    Rogue: {
        hitDie: 8,
        savingThrows: ['dexterity', 'intelligence'],
        features: ['Expertise', 'Sneak Attack (1d6)', 'Thieves\' Cant'],
        defaultProficiencies: ['Stealth', 'Acrobatics', 'Sleight of Hand', 'Deception'],
    },
    Wizard: {
        hitDie: 6,
        savingThrows: ['intelligence', 'wisdom'],
        features: ['Spellcasting', 'Arcane Recovery'],
        defaultProficiencies: ['Arcana', 'History'],
    },
    Fighter: {
        hitDie: 10,
        savingThrows: ['strength', 'constitution'],
        features: ['Fighting Style', 'Second Wind'],
        defaultProficiencies: ['Athletics', 'Intimidation'],
    },
    Cleric: {
        hitDie: 8,
        savingThrows: ['wisdom', 'charisma'],
        features: ['Spellcasting', 'Divine Domain'],
        defaultProficiencies: ['Insight', 'Religion'],
    },
    Paladin: {
        hitDie: 10,
        savingThrows: ['wisdom', 'charisma'],
        features: ['Divine Sense', 'Lay on Hands'],
        defaultProficiencies: ['Athletics', 'Persuasion'],
    },
    Bard: {
        hitDie: 8,
        savingThrows: ['dexterity', 'charisma'],
        features: ['Spellcasting', 'Bardic Inspiration'],
        defaultProficiencies: ['Performance', 'Persuasion', 'Deception'],
    },
    Warlock: {
        hitDie: 8,
        savingThrows: ['wisdom', 'charisma'],
        features: ['Otherworldly Patron', 'Pact Magic'],
        defaultProficiencies: ['Arcana', 'Intimidation'],
    },
    Barbarian: {
        hitDie: 12,
        savingThrows: ['strength', 'constitution'],
        features: ['Rage', 'Unarmored Defense'],
        defaultProficiencies: ['Athletics', 'Nature'],
    },
    Ranger: {
        hitDie: 10,
        savingThrows: ['strength', 'dexterity'],
        features: ['Favored Enemy', 'Natural Explorer'],
        defaultProficiencies: ['Perception', 'Survival'],
    },
};
export interface BackgroundRule {
    feature: string;
    skillProficiencies: string[];
    toolProficiencies: string[];
    bonusLanguages: number;
}

/**
 * 5e Background definitions
 */
export const BACKGROUND_DATA: Record<string, BackgroundRule> = {
    'Acolyte': {
        feature: 'Shelter of the Faithful',
        skillProficiencies: ['Insight', 'Religion'],
        toolProficiencies: [],
        bonusLanguages: 2,
    },
    'Criminal': {
        feature: 'Criminal Contact',
        skillProficiencies: ['Deception', 'Stealth'],
        toolProficiencies: ['Gaming set', 'Thieves\' tools'],
        bonusLanguages: 0,
    },
    'Folk Hero': {
        feature: 'Rustic Hospitality',
        skillProficiencies: ['Animal Handling', 'Survival'],
        toolProficiencies: ['Artisan\'s tools', 'Land vehicles'],
        bonusLanguages: 0,
    },
    'Noble': {
        feature: 'Position of Privilege',
        skillProficiencies: ['History', 'Persuasion'],
        toolProficiencies: ['Gaming set'],
        bonusLanguages: 1,
    },
    'Sage': {
        feature: 'Researcher',
        skillProficiencies: ['Arcana', 'History'],
        toolProficiencies: [],
        bonusLanguages: 2,
    },
    'Soldier': {
        feature: 'Military Rank',
        skillProficiencies: ['Athletics', 'Intimidation'],
        toolProficiencies: ['Gaming set', 'Land vehicles'],
        bonusLanguages: 0,
    },
    'Outlander': {
        feature: 'Wanderer',
        skillProficiencies: ['Athletics', 'Survival'],
        toolProficiencies: ['Musical instrument'],
        bonusLanguages: 1,
    },
};