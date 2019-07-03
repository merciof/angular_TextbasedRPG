import { Chapter, CharacterAction, FailureOptions, SuccessOptions } from "../models/chapter";
import { Weapon, Armor, Monster, Warrior, Ranger, Rogue, Priest } from '../models/character';
import { GenderOptions, CampOptions, ClassOptions } from "../models/character-options";

export const Chapter1: Chapter = {
	story: [
		`You enter the woods, chasing after the goblin who stole your father's sword.`,
		`You lose sight of them in the thick woods and begin to creep forward,`,
		`relying on your ears to warm you of danger and hopefully to locate the theiving goblins.`,
		`Shenanigans ensue and an encounter begins. Now the question is: How do you want to handle it (approach this enocunter)?`
	],

	options: [
		CharacterAction.attack,
		CharacterAction.sneak,
		CharacterAction.persuade
	],

	enemyParty: [
		new Monster("Goblin", 5, {attack: 2, sneak: 0, persuade: 0}, {attack: 10, sneak: 10, persuade: 10}, 1, 3, "../../assets/goblin.png")
					// (name, health, skills, barriers, minDamage, maxDamage, spriteUrl)
	],

	sneakPersuadeFail: CharacterAction.attack,

	ifFail: FailureOptions.nextChapter,

	ifSucceed: [
		SuccessOptions.rewardExperience,
		SuccessOptions.rewardEquipment,
		SuccessOptions.addHeroToParty
	],

	rewards: {
		experience: 500,
		equipment: [new Weapon("Rusty Sword", 1, 6)],
		newHero: new Ranger("Benjamin", GenderOptions.male, CampOptions.agileCountry, 1, 8, {attack: 1, sneak: 2,
			persuade: 1, intelligence: 1}, new Weapon("Bow", 1, 5), new Armor("Normal Ranger Clothes", 1))

	},

	nextChapter: null
}