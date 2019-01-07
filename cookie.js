
			var clickNum =0;

			function cookieClick() {
				clickNum = clickNum + 1;
				updateCookieCounter();
				var image = document.getElementById("cookieImage");
				image.classList.add("resize");
				setTimeout(removeClass, 100);
			};

			function updateCookieCounter () {
				var cookieCounter = document.getElementById("cookieCounter");
				cookieCounter.innerHTML = clickNum;
			};

			function removeClass() {
				var image = document.getElementById("cookieImage");
				image.classList.remove("resize");
			};

			var collectorChild = {
				firstPrice: 10,
				changePrice: 2,
				collectedCookies: 2,
				value: 0,
				amount: 0,
				id: 'one',
				sellId: 'oneSell',
				updateCollectorAmount: function() {
					this.amount += 1;
					var oneAmount = document.getElementById('childrenAmount');
					oneAmount.innerHTML = this.amount;
				},
				amountUpdate: function () {
					this.amount -= 1;
					var oneAmount = document.getElementById('childrenAmount');
					oneAmount.innerHTML = this.amount;
				}
			};

			var collectorHousekeeper = {
				firstPrice: 100,
				changePrice: 20,
				collectedCookies: 22,
				value: 0,
				amount: 0,
				id: 'two',
				sellId: 'twoSell',
				updateCollectorAmount: function() {
					this.amount += 1;
					var twoAmount = document.getElementById('housekeepersAmount');
					oneAmount.innerHTML = this.amount;
			}

			var collectorCandyman = {
				firstPrice: 1000,
				changePrice: 200,
				collectedCookies: 222,
				value: 0,
				amount: 0,
				id: 'three',
				sellId: 'threeSell',
				updateCollectorAmount: function() {
					this.amount += 1;
					var threeAmount = document.getElementById('candymenAmount');
					oneAmount.innerHTML = this.amount;
					}	
			}

			var collectors = [collectorChild, collectorHousekeeper, collectorCandyman];

			function getId(buttonId) {
				buyCollector(buttonId)

			};

			var intervals = [];

			function buyCollector(buttonId) {
				var collectorObject = collectors.find(function(element) {return element.id === buttonId});
				var {firstPrice, changePrice, amount, collectedCookies} = collectorObject;
				var nextPrice = firstPrice + changePrice * amount; 
				if (clickNum < nextPrice) { 
					alert('Nie masz wystarczającej ilości ciastek');
				} else {
					clickNum = clickNum - nextPrice;
					collectorObject.updateCollectorAmount();
					updateCookieCounter();
					var intervalID = setInterval (function() {
						addCookies(collectedCookies);
					}, 3000);
					intervals.push(intervalID);
				} 
			};

			function addCookies (collectedCookies) {
				clickNum = clickNum + collectedCookies;
				updateCookieCounter();
			};

			function getSellId(buttonId) {
				sellCollector(buttonId)
			};

			function sellCollector() {
				var collectorObject = collectors.find(function(element) {return element.sellId === buttonId});
				var {value, amount} = collectorObject;
				amountUpdate();
				var cookieUpdate = clickNum + this.value;
				clearInterval(interval);

			}

