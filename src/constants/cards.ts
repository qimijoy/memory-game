import { CardType } from '@/types';

import apple from '@/assets/images/cards/apple.svg';
import banana from '@/assets/images/cards/banana.svg';
import blueberries from '@/assets/images/cards/blueberries.svg';
import grapefruit from '@/assets/images/cards/grapefruit.svg';
import kiwi from '@/assets/images/cards/kiwi.svg';
import lemon from '@/assets/images/cards/lemon.svg';
import mandarin from '@/assets/images/cards/mandarin.svg';
import peach from '@/assets/images/cards/peach.svg';
import raspberry from '@/assets/images/cards/raspberry.svg';
import strawberry from '@/assets/images/cards/strawberry.svg';
import tomato from '@/assets/images/cards/tomato.svg';
import watermelon from '@/assets/images/cards/watermelon.svg';

export const CARDS: Record<CardType, string> = {
	[CardType.APPLE]: apple,
	[CardType.BANANA]: banana,
	[CardType.BLUEBERRIES]: blueberries,
	[CardType.GRAPEFRUIT]: grapefruit,
	[CardType.KIWI]: kiwi,
	[CardType.LEMON]: lemon,
	[CardType.MANDARIN]: mandarin,
	[CardType.PEACH]: peach,
	[CardType.RASPBERRY]: raspberry,
	[CardType.STRAWBERRY]: strawberry,
	[CardType.TOMATO]: tomato,
	[CardType.WATERMELON]: watermelon,
};
