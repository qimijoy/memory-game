<template>
	<section class="cards">
		<div
			v-for="item of newItems"
			:key="item.name"
			:class="['card', { 'flip': item.isOpen }]"
			@click="flipCard(item)"
		>
			<img class="card-front" :src="CARDS[item.name]" :alt="item.name">
			<img class="card-back" src="@/assets/images/Whitecard.svg" alt="Card">
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	import { CardType } from '@/types';
	import { CARDS } from '@/constants/cards';

	// CONSTANTS
	let items = Object.values(CardType);
	items = items.concat(items); // Duplicate elements, because there are two cards of each copy

	const newItems = items.map((item) => ({ name: item, isOpen: false }));
	let isBoardLocked = false;

	// STATES
	const firstCard = ref<CardType|null>(null);
	const secondCard = ref<CardType|null>(null);

	// METHODS
	const flipCard = (card) => {
		if (isBoardLocked || card.isOpen) {
			return;
		};

		card.isOpen = true;

		if (!firstCard.value) {
			firstCard.value = card.name;
			return;
		}

		secondCard.value = card.name;

		if (firstCard.value === secondCard.value) {
			// Совпадение найдено, оставляем обе карты открытыми навсегда
			setTimeout(() => {
				firstCard.value = null;
				secondCard.value = null;
			}, 500);
		} else {
			// Нет совпадения, закрываем обе карты обратно
			isBoardLocked = true;
			setTimeout(() => {
				newItems.forEach((item) => {
					item.isOpen = false;
				});
				isBoardLocked = false;
				firstCard.value = null;
				secondCard.value = null;
			}, 500);
		}
	}
</script>

<style scoped>
	.cards {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 5px;

		max-width: 1200px;
		margin: 20px auto;
	}

	.card {
		position: relative;

		width: 155px;
		height: 213.333px;

		transition: transform 0.5s;
		transform: scale(1);
		transform-style: preserve-3d;
	}

	.card-front, .card-back {
		position: absolute;
		top: 50%;
		left: 50%;

		width: inherit;
		height: inherit;
		margin-top: -111.667px;
		margin-left: -82.5px;
	}

	.card-front {
		transform: rotateY(180deg);
	}

	.card:active {
		transform: scale(0.95);

		transition: transform 0.5s;
	}

	.flip {
		transform: rotateY(180deg);
	}
</style>
