(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const canvas = $("#pizza");
  const ctx = canvas.getContext("2d");
  const storageKey = "chef-bolt-fair-share-v1";
  const translations = {
    en: {
      brand: "Pizza Bolt", brandTagline: "The fair-share kitchen",
      pitchText: "Teach Bolt how to share every order fairly.",
      toolsCaption: "Slice · bake · share fairly",
      shopButton: "Shop", shopTitle: "Chef Bolt's Gear Shop", shopIntro: "Spend delivery coins on kitchen gear. Collect a full set to unlock its theme.",
      buy: "Buy", equip: "Equip", equipped: "Equipped", applyTheme: "Use full theme", themeActive: "Theme active",
      themeLocked: "Collect all 3 items to unlock this kitchen theme", themeReady: "Full set collected. Theme unlocked.",
      matrixName: "Matrix Mode", matrixDescription: "The final kitchen theme: collect every Garden, Bolt-Tech, Golden Chef, and Sweet Shop gear set to unlock the neon code rain.",
      matrixLocked: "Collect all 12 themed items to unlock the final theme.",
      matrixReady: "All gear sets complete. Matrix Mode unlocked.", matrixActive: "Matrix Mode active",
      customName: "Custom Kitchen", customDescription: "Choose colors for the cutter, oven, food, text, headings, and the website background.",
      customLocked: "Requires level 15, every themed gear set, and Matrix Mode unlocked.",
      customUnlock: "Unlock Custom Kitchen · 100 coins", customUnlocked: "Custom Kitchen unlocked.",
      customApply: "Apply my colors", customActive: "Custom Kitchen is active",
      colorCutter: "Cutter color", colorOven: "Oven color", colorFood: "Food color",
      colorText: "Text color", colorHeading: "Heading color", colorBackground: "Website background",
      devResetAccount: "Reset entire account", devResetConfirm: "Reset all progress, coins, gear, themes, and your player name on this device? This cannot be undone.",
      devResetDone: "Account reset. Starting fresh!",
      cutCount: "Cuts made: {made} / {needed}", coinsSpent: "-{cost} coins",
      solutionAddition: "addition", solutionSubtraction: "subtraction",
      solutionShow: "Show me the steps", solutionHide: "Hide the steps", solutionTitle: "Let's solve it together",
      solutionChangeAdd: "First add the two prices: {first} + {second} = {total}.",
      solutionChangeSubtract: "Now subtract the bill from the money paid: {paid} − {total} = {change}.",
      solutionCommonDenominator: "Find a common denominator: LCM({leftDenominator}, {rightDenominator}) = {commonDenominator}.",
      solutionRewrite: "Rename the fractions: {left} = {scaledLeft}, and {right} = {scaledRight}.",
      solutionCombine: "Now {operation}: {scaledLeft} {symbol} {scaledRight} = {rawResult}.",
      solutionSimplify: "Simplify the result: {rawResult} = {answer}.",
      solutionFractionWhole: "The whole is divided into {denominator} equal pieces.",
      solutionFractionCount: "We need {numerator} of those pieces.",
      solutionFractionAnswer: "So the fraction is {answer}.",
      solutionCompareDenominator: "Write both fractions with the same denominator: {left} = {scaledLeft}, and {right} = {scaledRight}.",
      solutionCompareNumerator: "Compare the numerators: {leftNumerator} and {rightNumerator}. The larger fraction is {answer}.",
      solutionEquivalentProducts: "Compare by cross-multiplying: {leftNumerator} × {rightDenominator} = {leftProduct}, and {rightNumerator} × {leftDenominator} = {rightProduct}.",
      solutionEquivalentConclusion: "The products are {relation}, so the fractions are {answer}.",
      solutionProductsSame: "the same", solutionProductsDifferent: "different",
      solutionPartName: "One whole can be split into {answer} equal pieces. That is the number of pieces the question is asking for.",
      solutionPosition: "In {fraction}, the numerator is {numerator} and the denominator is {denominator}.",
      solutionPositionAnswer: "The question asks for the {part}, so the answer is {answer}.",
      numeratorLabel: "top number", denominatorLabel: "bottom number",
      solutionFair: "A fair share means every piece has the same size. Choose the answer that says whether the pieces match: {answer}.",
      solutionChocolateIntro: "The bar is split into 4 equal blocks. The numerator tells how many blocks the share includes.",
      solutionChocolateAnswer: "The share {fraction} is {answer}.",
      solutionGeneric: "Check what the question asks, then choose the matching answer: {answer}.",
      onboardingTitle: "Welcome to Pizza Bolt", onboardingIntro: "Meet Chef Bolt and learn how fair sharing works, one order at a time.",
      onboardingNameLabel: "What should Bolt call you?", onboardingNamePlaceholder: "Your name", onboardingNameRequired: "Please enter a name to continue.",
      onboardingCut: "Swipe from the middle toward the edge to cut equal slices. One swipe makes a full straight cut.",
      onboardingQuestion: "Answer Bolt's quick fractions question. If you need help, open the step-by-step guide.",
      onboardingOrder: "Bake the order, work out the customer's change, then pack and deliver it to earn coins.",
      onboardingStart: "Meet Bolt", onboardingLanguage: "English / العربية", welcomeName: "Hi, {name}! Ready to cook?",
      cutterItem: "Pizza cutter", ovenItem: "Oven", foodItem: "Food style",
      gardenVariant: "Garden Grove", techVariant: "Bolt-Tech", royalVariant: "Golden Chef", sweetVariant: "Candy & Chocolate", classicVariant: "Classic Kitchen",
      classicBlurb: "The original wooden cutter and cozy stone oven.", gardenBlurb: "A sunny garden set with leafy sparkle.", techBlurb: "A speedy sci-fi kitchen with electric effects.", royalBlurb: "Golden tools, royal shimmer, and coin bursts.", sweetBlurb: "A candy-colored kitchen with chocolate glaze, sprinkle sparkles, and a cocoa oven.",
      cutterPerk: "{speed}% shorter swipe + special slice sparkle and sound", ovenPerk: "{speed}% faster baking", foodPerk: "A matching color style for every order",
      chocolateMake: "The bar has 4 equal blocks. Serve <span class=\"fraction\">{fraction}</span> of the whole bar.",
      chocolateHint: "Drag edge-to-edge through the middle: one horizontal cut and one vertical cut.",
      chocolateNeedCuts: "Make both straight cuts through the middle to split the bar into 4 equal blocks.",
      chocolateUnequal: "A fair chocolate share has 4 equal blocks. Check that your cuts cross the middle!",
      chocolateTeach: "Each block is one quarter. Serve {fraction} to your customer!",
      chocolatePortionQuestion: "A chocolate bar has 4 equal blocks. Does {fraction} mean one block?",
      lessonBadge: "Mini lesson · level",
      lessonButton: "Next step", lessonContinue: "Next step", lessonStart: "Start the challenge", lessonBack: "Back",
      lessonProgress: "Step {step} of {total}", lessonStepLabel: "Let's learn", lessonCheckLabel: "Quick check",
      lessonSelectAnswer: "Choose an answer to continue",
      lessonCorrect: "You got it. You're ready for the challenge.",
      lessonTryAgain: "Not quite. Look at the picture, then try again.",
      lessonMoneyLabel: "After baking: work out the change",
      lessonMoneyGuide: "First add the prices to find the total. Then subtract the total from the money paid.",
      lessonItemsLabel: "Items", lessonTotalLabel: "Total", lessonPaidLabel: "Paid", lessonChangeLabel: "Change",
      lessonBubble: "Let's learn one small idea, step by step.",
      lessonEqualTitle: "Fair shares are equal", lessonEqualBody: "A whole is one complete pizza. For a fair share, every piece must be the same size.",
      lessonDenominatorTitle: "Look at the bottom number", lessonDenominatorBody: "The bottom number tells how many equal pieces make one whole, like five fifths or six sixths.",
      lessonNumeratorTitle: "Look at the top number", lessonNumeratorBody: "The top number tells how many pieces we mean. In 3/4, we mean 3 of the 4 equal pieces.",
      lessonEquivalentTitle: "Different names, same amount", lessonEquivalentBody: "One half and two fourths cover the same amount: 1/2 = 2/4.",
      lessonCompareTitle: "More pieces can mean smaller pieces", lessonCompareBody: "When the whole stays the same, cutting it into more equal pieces makes each piece smaller.",
      lessonMoneyTitle: "Work out the change", lessonMoneyBody: "Add the prices to find the bill. Then subtract the bill from the money paid.",
      lessonEighthTitle: "Meet eighths", lessonEighthBody: "Eight equal pieces make one whole. One of those pieces is one eighth, written 1/8.",
      lessonTenTwelveTitle: "Tenths and twelfths", lessonTenTwelveBody: "Ten equal pieces make tenths; twelve equal pieces make twelfths. The denominator tells how many pieces form the whole.",
      lessonSixteenthTitle: "Sixteenths are tiny parts", lessonSixteenthBody: "Sixteen equal pieces make one whole. One piece is 1/16, and two pieces make 2/16.",
      addFractionsQuestion: "What is {left} + {right}? Give your answer as a fraction.",
      subtractFractionsQuestion: "What is {left} − {right}? Give your answer as a fraction.",
      lessonAddSubtractTitle: "Add and subtract fractions", lessonAddSubtractBody: "Make the denominators match first. Rename each fraction with equal-sized pieces, then add or subtract the top numbers.",
      skillFifthsSixths: "Fifths and sixths", skillEighths: "Eighths", skillTenthsTwelfths: "Tenths and twelfths",
      skillSixteenths: "Sixteenths", skillLargeFractions: "Fractions with 20 or 24 parts",
      playerNameSave: "Save name", devPanelTitle: "Developer panel", devPanelHint: "Testing tools for this device only.",
      devCoinsLabel: "Coins", devAddCoins: "Add coins", devSetCoins: "Set coins",
      devLevelLabel: "Set level", devSetLevel: "Apply level", devUnlockAll: "Unlock all gear and themes",
      devApplyTheme: "Apply theme", devThemeClassic: "Classic", devThemeGarden: "Garden", devThemeTech: "Bolt-Tech",
      devThemeRoyal: "Golden Chef", devThemeSweet: "Candy & Chocolate", devThemeMatrix: "Matrix", devClose: "Close developer panel",
      devInvalid: "Enter a whole number in the allowed range.",
      guideCost: "Cut guide · {cost} coins", guideActive: "Guide shown", guideNoCoins: "You need {cost} coins for a cut guide.",
      guideShown: "Follow the dotted lines to make equal pieces!",
      compareQuestion: "Which fraction is larger: {left} or {right}?",
      compareChoice: "{fraction} is larger",
      equivalentQuestion: "Do {left} and {right} name the same amount?",
      numeratorQuestion: "In {fraction}, how many equal pieces are counted?",
      denominatorQuestion: "In {fraction}, how many equal pieces make the whole?",
      fractionOfWholeQuestion: "A whole is cut into {denominator} equal pieces. You serve {numerator}. Which fraction did you serve?",
      numberChoice: "Pieces: {number}", fractionChoice: "{fraction}",
      partsQuestion: "How many {partName} make one whole?",
      partsHalf: "halves", partsThird: "thirds", partsQuarter: "quarters",
      partsAnswerTwo: "2 pieces", partsAnswerThree: "3 pieces", partsAnswerFour: "4 pieces",
      fairRuleQuestion: "If every piece is the same size, is the share fair?",
      fairSlicesQuestion: "Can 3 equal slices be shared fairly?",
      fairShareQuestion: "Does a fair share give everyone the same amount?",
      yes: "Yes, that's right!", no: "No, not quite.",
      buySuccess: "Gear unlocked!", themeUnlockedToast: "Full set! A new kitchen theme is yours!",
      noCoins: "Not enough coins yet. Deliver a few more orders!",
      closeShop: "Back to kitchen", themeProgress: "{owned} / 3 pieces",
      bakeOrder: "Put it in the oven", bakeStep: "Bake", packStep: "Pack", deliverStep: "Deliver",
      bakingTitle: "In the oven!", bakingMessage: "Bolt is baking your order. Good things take a little time!",
      changeTitle: "A customer needs change!", changeMessage: "Add the prices, then work out the change.",
      changeQuestion: "A pizza costs {first} coins and a drink costs {second}. The customer pays {paid} coins. How many coins should they get back?",
      changeTry: "Try adding {first} + {second}, then subtract the total from {paid}.",
      changeCorrect: "That's {change} coins in change! Great helping!",
      packingTitle: "Fresh from the oven!", packingMessage: "Bolt is carefully packing it up.",
      deliveringTitle: "On the way!", deliveringMessage: "Your happy customer is waiting!",
      servedTitle: "Order delivered", servedMessage: "The customer loved it. You earned {coins} coins.",
      coinsEarned: "+{coins} coins!", orderProgress: "Order progress", coins: "Coins",
      grownup: "Grown-up", level: "Level", xp: "Kitchen XP",
      teachTitle: "Teach Chef Bolt", next: "Next order", undo: "Undo cut", check: "Check the cuts",
      footer: "No rush, chef. Every try helps Bolt learn.", questTitle: "Kitchen Quest",
      questText: "At home, share a sandwich into two fair halves.", order: "Order {pair}",
      make: "Cut the {food} into <bdi dir=\"ltr\">{n}</bdi> equal slices. Each slice is <bdi dir=\"ltr\">{unitFraction}</bdi> of the whole.",
      cutHint: "Swipe {swipes} from the middle. Your cut lines snap into fair positions.",
      oneSwipe: "once", manySwipes: "{n} times", oneSwipeLeft: "one swipe", manySwipesLeft: "{n} swipes",
      bubbleStart: "Oh crumbs! I need your help sharing this fairly.",
      bubbleCut: "Start near the middle and swipe toward the edge. Your cuts snap into fair spaces!",
      equalHint: "A fair share has pieces that are the same size. Try again!",
      closeHint: "That direction is already marked. Try a new one!",
      needCuts: "Keep going! {swipes} left to finish the slices.",
      cutsComplete: "Nice! You marked every slice. Check your cuts when you're ready.",
      bubbleEqual: "You made fair shares! Now teach me something...",
      encouragement: "Good teaching! Let's look at the pieces together.", rightTeach: "That's it! The whole is split into equal shares!",
      retry: "Try again", gotIt: "Got it", wrongCut: "Not quite fair yet, and that's okay.",
      rightCut: "Beautifully fair! +10 XP", hintUnequal: "Try to make every slice the same size. Bolt believes in you!",
      hintCompare: "Imagine stacking the pieces. Which one would leave more pizza showing?",
      hintSame: "A half is one of two equal pieces. A quarter is one of four!",
      hintFair: "Fair means every piece gets the same amount of the whole.",
      cutAgain: "Let's try a fresh {food}. You can do it!", bubbleCorrect: "You're a fraction pro! I learned that from you!",
      question: "Can you help me get this right?", allDone: "You taught me so much!", doneSub: "Amazing chef work! Your grown-up can see what you learned.",
      reportTitle: "Grown-up Report", reportIntro: "A little map of the fraction ideas practiced in this kitchen.",
      rounds: "Orders", xpEarned: "XP earned", bestStreak: "Best streak", mapTitle: "Learning map",
      skillHalves: "Sharing halves", skillThirds: "Sharing thirds", skillQuarters: "Sharing quarters",
      skillEqual: "Equal-sized pieces", skillCompare: "Comparing fractions", understood: "Getting it",
      practicing: "Still practicing", startFresh: "Play again", close: "Back to kitchen",
      questReport: "Try it in real life: ask a grown-up to help you share a sandwich into two fair halves.",
      pizza: "Pizza", chocolate: "Chocolate", flatbread: "Flatbread",
      share: "Share", orderComplete: "Order served!", pickFood: "A new food, same fraction idea!",
      langChanged: "مرحباً! Let's cook together!", repeatHint: "Let's look at the pieces together.",
      cutHintLabel: "Start near the center and swipe outward. Your cuts snap into even spaces."
      ,misconceptionsTitle: "Misconceptions noticed", unequalTag: "Unequal pieces count as fair",
      biggerDenominatorTag: "A bigger denominator means a bigger piece",
      halfQuarterTag: "Mixing up a half and a quarter", detected: "Noticed {n} time(s)",
      noSignal: "Not noticed yet", streakTitle: "Streak",
      gamesTitle: "Bolt's Math Arcade", gamesIntro: "Quick brain workouts! Every correct answer earns +5 XP and 2 coins. A wrong tap ends the run.",
      modeAdd: "Addition Sprint", modeAddDesc: "Add two numbers, fast",
      modeSub: "Subtraction Sprint", modeSubDesc: "Take away, fast",
      modeMul: "Times Table Trek", modeMulDesc: "Multiply like a pro",
      modeDiv: "Division Dive", modeDivDesc: "Split numbers evenly",
      modeMixed: "Mega Mix", modeMixedDesc: "All four in one run",
      arcadePlay: "Start run", arcadeBack: "All games", arcadeEnd: "End run",
      arcadeBest: "Best: {n}", arcadeScore: "Score", arcadeStreakLabel: "Streak",
      arcadeGood: "Nice! +5 XP · +2 coins", arcadeBad: "Oops! The run ends here.",
      arcadeOver: "Run over!", arcadeYourScore: "Your score", arcadeAgain: "New run",
      wheelTitle: "Lucky Kitchen Wheel", wheelIntro: "Spin to win coins, XP or a double-coin boost! You earn a free spin after every 2 deliveries.",
      wheelSpin: "SPIN!", wheelSpins: "Free spins ready: {n}", wheelNone: "No spin ready. Deliver {n} more order(s).",
      wheelWon: "{prize}! Lucky chef!", prizeCoins: "{n} coins", prizeXp: "+{n} XP", prizeBoost: "Double coins × 2 orders",
      wheelCharge: "A free spin is ready!", boostActive: "Double coins on your next {n} delivery(ies)!",
      streakBonus: "Streak bonus +{n} coins!", levelCoins: "Level-up reward +{n} coins!",
      themeColorsTitle: "Color Themes", themeColorsIntro: "Fresh kitchen makeovers. Buy with coins, apply anytime.", themeBuy: "Buy · {price} coins",
      trophyTitle: "Trophy Shelf",
      trophyFirstOrder: "First delivery", trophyTenOrders: "10 deliveries",
      trophyStreak5: "5-answer streak", trophyStreak10: "10-answer streak",
      trophyLevel5: "Reach level 5", trophyLevel10: "Reach level 10",
      trophyRich: "Save 150 coins", trophyGear: "Own 6 gear pieces",
      trophyMatrix: "Unlock Matrix Mode", trophyArcade10: "Arcade score 10+",
      trophyLessons: "Finish 10 mini lessons", trophySpinner: "Spin the wheel",
      themeOcean: "Ocean Bay", themeSunset: "Sunset Grill", themeForest: "Forest Cabin",
      themeMint: "Mint Fresh", themeCherry: "Cherry Pop", themeLavender: "Lavender Field",
      themeIce: "Ice Rink", themeRetro: "Retro Diner", themeSpace: "Space Station", themeLava: "Volcano Kitchen",
      modeFractions: "Fractions", howToPlay: "How to play", modeBarLabel: "Game modes",
      arcadeLessonBadge: "Mini lesson", arcadeBubble: "Great choice! Answer fast: every correct answer earns XP and coins."
    },
    ar: {
      brand: "بيتزا بولت", brandTagline: "مطبخ القسمة العادلة",
      pitchText: "علّم بولت كيف يقسّم كل طلب بعدل.",
      toolsCaption: "اقطع · اخبز · اقسم بعدل",
      shopButton: "المتجر", shopTitle: "متجر معدات الشيف بولت", shopIntro: "أنفق عملات التوصيل على معدات المطبخ. اجمع المجموعة الكاملة لفتح مظهرها.",
      buy: "شراء", equip: "تجهيز", equipped: "مجهز", applyTheme: "استخدم المظهر الكامل", themeActive: "المظهر مفعل",
      themeLocked: "اجمع العناصر الثلاثة لفتح مظهر المطبخ", themeReady: "اكتملت المجموعة. فُتح المظهر.",
      matrixName: "وضع المصفوفة", matrixDescription: "المظهر الأخير للمطبخ! اجمع مجموعات الحديقة وبولت التقني والشيف الذهبي ومتجر الحلوى لفتح أمطار الشيفرة الخضراء.",
      matrixLocked: "اجمع العناصر الاثني عشر من مجموعات المظاهر لفتح المظهر الأخير.",
      matrixReady: "اكتملت مجموعات المعدات. فُتح وضع المصفوفة.", matrixActive: "وضع المصفوفة مفعل",
      customName: "المطبخ المخصص", customDescription: "اختر ألوان القاطعة والفرن والطعام والنص والعناوين وخلفية الموقع.",
      customLocked: "يتطلب المستوى ١٥، وجميع مجموعات المعدات، وفتح وضع المصفوفة.",
      customUnlock: "افتح المطبخ المخصص · ١٠٠ عملة", customUnlocked: "فُتح المطبخ المخصص.",
      customApply: "استخدم ألواني", customActive: "المطبخ المخصص مفعل",
      colorCutter: "لون القاطعة", colorOven: "لون الفرن", colorFood: "لون الطعام",
      colorText: "لون النص", colorHeading: "لون العناوين", colorBackground: "خلفية الموقع",
      devResetAccount: "إعادة ضبط الحساب بالكامل", devResetConfirm: "هل تريد إعادة ضبط كل التقدم والعملات والمعدات والمظاهر واسم اللاعب على هذا الجهاز؟ لا يمكن التراجع عن ذلك.",
      devResetDone: "تمت إعادة ضبط الحساب. لنبدأ من جديد!",
      cutCount: "القطوع: {made} / {needed}", coinsSpent: "-{cost} عملات",
      solutionAddition: "الجمع", solutionSubtraction: "الطرح",
      solutionShow: "أرني خطوات الحل", solutionHide: "أخفِ الخطوات", solutionTitle: "لنحلها معاً",
      solutionChangeAdd: "أولاً اجمع السعرين: {first} + {second} = {total}.",
      solutionChangeSubtract: "اطرح الفاتورة من المبلغ المدفوع: {paid} − {total} = {change}.",
      solutionCommonDenominator: "أوجد مقاماً مشتركاً: المضاعف المشترك الأصغر لـ {leftDenominator} و{rightDenominator} هو {commonDenominator}.",
      solutionRewrite: "أعد كتابة الكسرين: {left} = {scaledLeft}، و{right} = {scaledRight}.",
      solutionCombine: "احسب {operation}: {scaledLeft} {symbol} {scaledRight} = {rawResult}.",
      solutionSimplify: "بسّط الناتج: {rawResult} = {answer}.",
      solutionFractionWhole: "قُسّم الكل إلى {denominator} أجزاء متساوية.",
      solutionFractionCount: "نحتاج إلى {numerator} من هذه الأجزاء.",
      solutionFractionAnswer: "إذن الكسر هو {answer}.",
      solutionCompareDenominator: "اكتب الكسرين بالمقام نفسه: {left} = {scaledLeft}، و{right} = {scaledRight}.",
      solutionCompareNumerator: "قارن البسطين: {leftNumerator} و{rightNumerator}. الكسر الأكبر هو {answer}.",
      solutionEquivalentProducts: "قارن بالضرب التبادلي: {leftNumerator} × {rightDenominator} = {leftProduct}، و{rightNumerator} × {leftDenominator} = {rightProduct}.",
      solutionEquivalentConclusion: "الناتجان {relation}، إذن الكسران {answer}.",
      solutionProductsSame: "متساويان", solutionProductsDifferent: "مختلفان",
      solutionPartName: "يمكن تقسيم الكل إلى {answer} أجزاء متساوية. وهذا هو عدد الأجزاء الذي يسأل عنه السؤال.",
      solutionPosition: "في الكسر {fraction}، البسط هو {numerator} والمقام هو {denominator}.",
      solutionPositionAnswer: "السؤال يطلب {part}، لذا الإجابة هي {answer}.",
      numeratorLabel: "البسط", denominatorLabel: "المقام",
      solutionFair: "الحصة العادلة تعني أن كل جزء بالحجم نفسه. اختر الإجابة التي توضح إن كانت الأجزاء متساوية: {answer}.",
      solutionChocolateIntro: "لوح الشوكولاتة مقسم إلى ٤ مربعات متساوية. يوضح البسط عدد المربعات في الحصة.",
      solutionChocolateAnswer: "الحصة {fraction} هي {answer}.",
      solutionGeneric: "تحقق مما يطلبه السؤال، ثم اختر الإجابة المناسبة: {answer}.",
      onboardingTitle: "أهلاً بك في بيتزا بولت", onboardingIntro: "تعرّف على الشيف بولت وتعلّم القسمة العادلة طلباً بعد طلب.",
      onboardingNameLabel: "بماذا يناديك بولت؟", onboardingNamePlaceholder: "اسمك", onboardingNameRequired: "اكتب اسمك للمتابعة.",
      onboardingCut: "اسحب من الوسط إلى الحافة لتقطيع شرائح متساوية. كل سحبة ترسم خطاً كاملاً.",
      onboardingQuestion: "أجب عن سؤال بولت السريع حول الكسور. افتح الدليل خطوة بخطوة عند الحاجة.",
      onboardingOrder: "اخبز الطلب، واحسب باقي الزبون، ثم غلّفه وأوصله لتربح العملات.",
      onboardingStart: "قابل بولت", onboardingLanguage: "English / العربية", welcomeName: "مرحباً يا {name}! هل أنت مستعد للطهي؟",
      cutterItem: "قاطعة البيتزا", ovenItem: "الفرن", foodItem: "مظهر الطعام",
      gardenVariant: "حديقة الأعشاب", techVariant: "بولت التقني", royalVariant: "الشيف الذهبي", sweetVariant: "الحلوى والشوكولاتة", classicVariant: "المطبخ الكلاسيكي",
      classicBlurb: "القاطعة الخشبية والفرن الحجري الدافئ.", gardenBlurb: "مجموعة حديقة مشرقة مع وميض أوراق.", techBlurb: "مطبخ فضائي سريع مع تأثيرات كهربائية.", royalBlurb: "أدوات ذهبية ولمعان ملكي وعملات متطايرة.", sweetBlurb: "مطبخ بألوان الحلوى وتغطية الشوكولاتة ورشات لامعة وفرن الكاكاو.",
      addFractionsQuestion: "ما ناتج {left} + {right}؟ اكتب الإجابة على شكل كسر.",
      subtractFractionsQuestion: "ما ناتج {left} − {right}؟ اكتب الإجابة على شكل كسر.",
      lessonAddSubtractTitle: "جمع الكسور وطرحها", lessonAddSubtractBody: "اجعل المقامين متساويين أولاً. أعد كتابة كل كسر بأجزاء متساوية، ثم اجمع أو اطرح البسطين.",
      cutterPerk: "سحبة أقصر بنسبة {speed}٪ ولمعة وصوت خاصان", ovenPerk: "خبز أسرع بنسبة {speed}٪", foodPerk: "ألوان مطابقة لكل طلب",
      chocolateMake: "يتكوّن اللوح من ٤ مربعات متساوية. قدّم <span class=\"fraction\">{fraction}</span> من اللوح كاملاً.",
      chocolatePortionQuestion: "لوح الشوكولاتة مقسم إلى ٤ مربعات متساوية. هل يعني الكسر {fraction} مربعاً واحداً؟",
      lessonBadge: "درس قصير · المستوى",
      lessonButton: "الخطوة التالية", lessonContinue: "الخطوة التالية", lessonStart: "ابدأ التحدي", lessonBack: "السابق",
      lessonProgress: "الخطوة {step} من {total}", lessonStepLabel: "لنتعلم", lessonCheckLabel: "تحقق سريع",
      lessonSelectAnswer: "اختر إجابة للمتابعة",
      lessonCorrect: "أحسنت. أنت مستعد للتحدي.",
      lessonTryAgain: "ليس تماماً. انظر إلى الصورة ثم حاول مرة أخرى.",
      lessonBubble: "لنتعلم فكرة صغيرة خطوة بخطوة.",
      lessonMoneyLabel: "بعد الخَبز: احسب الباقي",
      lessonMoneyGuide: "اجمع السعرين أولاً لمعرفة المجموع. ثم اطرح المجموع من المبلغ المدفوع.",
      lessonItemsLabel: "الأغراض", lessonTotalLabel: "المجموع", lessonPaidLabel: "المدفوع", lessonChangeLabel: "الباقي",
      lessonEqualTitle: "الحصص العادلة متساوية", lessonEqualBody: "الكل هو بيتزا كاملة. لكي تكون القسمة عادلة، يجب أن تكون كل قطعة بالحجم نفسه.",
      lessonDenominatorTitle: "انظر إلى الرقم في الأسفل", lessonDenominatorBody: "الرقم في الأسفل يبيّن عدد القطع المتساوية في الكل، مثل خمسة أخماس أو ستة أسداس.",
      lessonNumeratorTitle: "انظر إلى الرقم في الأعلى", lessonNumeratorBody: "الرقم في الأعلى يبيّن عدد القطع التي نقصدها. في ٣/٤، نقصد ٣ قطع من أصل ٤ متساوية.",
      lessonEquivalentTitle: "اسمان مختلفان والكمية نفسها", lessonEquivalentBody: "النصف والربعان المتساويان يمثلان الكمية نفسها: ١/٢ = ٢/٤.",
      lessonCompareTitle: "زيادة القطع تصغّر كل قطعة", lessonCompareBody: "إذا بقي الكل كما هو، فإن تقسيمه إلى قطع متساوية أكثر يجعل كل قطعة أصغر.",
      lessonMoneyTitle: "احسب الباقي", lessonMoneyBody: "اجمع الأسعار لمعرفة الحساب، ثم اطرح الحساب من المبلغ المدفوع.",
      lessonEighthTitle: "تعرّف على الأثمان", lessonEighthBody: "ثمانية أجزاء متساوية تكوّن واحداً كاملاً. الجزء الواحد هو ثمن ويكتب ١/٨.",
      lessonTenTwelveTitle: "الأعشار والأجزاء من اثني عشر", lessonTenTwelveBody: "عشرة أجزاء متساوية تكوّن أعشاراً، واثنا عشر جزءاً تكوّن أجزاء من اثني عشر. المقام يبيّن عدد أجزاء الكل.",
      lessonSixteenthTitle: "الأجزاء من ستة عشر", lessonSixteenthBody: "ستة عشر جزءاً متساوياً تكوّن واحداً كاملاً. الجزء الواحد ١/١٦، وجزآن ٢/١٦.",
      skillFifthsSixths: "الأخماس والأسداس", skillEighths: "الأثمان", skillTenthsTwelfths: "الأعشار والأجزاء من اثني عشر",
      skillSixteenths: "الأجزاء من ستة عشر", skillLargeFractions: "كسور من ٢٠ أو ٢٤ جزءاً",
      playerNameSave: "حفظ الاسم", devPanelTitle: "لوحة المطور", devPanelHint: "أدوات اختبار على هذا الجهاز فقط.",
      devCoinsLabel: "العملات", devAddCoins: "أضف عملات", devSetCoins: "تعيين العملات",
      devLevelLabel: "تعيين المستوى", devSetLevel: "تطبيق المستوى", devUnlockAll: "فتح كل المعدات والمظاهر",
      devApplyTheme: "تطبيق المظهر", devThemeClassic: "كلاسيكي", devThemeGarden: "الحديقة", devThemeTech: "بولت التقني",
      devThemeRoyal: "الشيف الذهبي", devThemeSweet: "الحلوى والشوكولاتة", devThemeMatrix: "المصفوفة", devClose: "إغلاق لوحة المطور",
      devInvalid: "أدخل رقماً صحيحاً ضمن النطاق المسموح.",
      guideCost: "خطوط المساعدة · {cost} عملات", guideActive: "ظهرت خطوط المساعدة", guideNoCoins: "تحتاج إلى {cost} عملات لعرض خطوط المساعدة.",
      guideShown: "اتبع الخطوط المنقطة لتقسيم الطعام بالتساوي!",
      compareQuestion: "أي الكسرين أكبر: {left} أم {right}؟",
      compareChoice: "الكسر {fraction} أكبر",
      equivalentQuestion: "هل يمثل {left} و{right} المقدار نفسه؟",
      numeratorQuestion: "في الكسر {fraction}، كم قطعة متساوية نأخذ؟",
      denominatorQuestion: "في الكسر {fraction}، إلى كم قطعة متساوية قُسّم الكل؟",
      fractionOfWholeQuestion: "قُسّم الكل إلى {denominator} قطع متساوية. أخذت {numerator}. ما الكسر الذي أخذته؟",
      numberChoice: "عدد القطع: {number}", fractionChoice: "{fraction}",
      partsQuestion: "كم من {partName} تكوّن واحداً كاملاً؟",
      partsHalf: "الأنصاف", partsThird: "الأثلاث", partsQuarter: "الأرباع",
      partsAnswerTwo: "قطعتان", partsAnswerThree: "٣ قطع", partsAnswerFour: "٤ قطع",
      fairRuleQuestion: "إذا كانت كل قطعة بالحجم نفسه، فهل التقسيم عادل؟",
      fairSlicesQuestion: "هل يمكن تقاسم ٣ شرائح متساوية بعدل؟",
      fairShareQuestion: "هل يحصل الجميع على المقدار نفسه في التقسيم العادل؟",
      yes: "نعم، صحيح!", no: "لا، ليس تماماً.",
      chocolateHint: "اسحب من حافة إلى أخرى عبر الوسط: قطع أفقي وآخر عمودي.",
      chocolateNeedCuts: "ارسم القطعين المستقيمين عبر الوسط لتقسيم اللوح إلى ٤ مربعات متساوية.",
      chocolateUnequal: "الحصة العادلة فيها ٤ مربعات متساوية. تأكد أن القطعين يمران بالوسط!",
      chocolateTeach: "كل مربع يساوي ربعاً. قدّم {fraction} لزبونك!",
      buySuccess: "فُتحت المعدات!", themeUnlockedToast: "اكتملت المجموعة! أصبح مظهر المطبخ الجديد لك!",
      noCoins: "لا تكفي العملات بعد. أوصل مزيداً من الطلبات!",
      closeShop: "العودة للمطبخ", themeProgress: "{owned} / 3 قطع",
      bakeOrder: "ضعها في الفرن", bakeStep: "خبز", packStep: "تعبئة", deliverStep: "توصيل",
      bakingTitle: "في الفرن الآن!", bakingMessage: "يخبز بولت طلبك. الأشياء اللذيذة تحتاج بعض الوقت!",
      changeTitle: "الزبون ينتظر الباقي!", changeMessage: "اجمع الأسعار ثم احسب الباقي.",
      changeQuestion: "سعر البيتزا {first} عملات وسعر العصير {second}. دفع الزبون {paid} عملات. كم عملة نعيد إليه؟",
      changeTry: "اجمع {first} + {second} أولاً، ثم اطرح المجموع من {paid}.",
      changeCorrect: "الباقي {change} عملات! أحسنت المساعدة!",
      packingTitle: "خرجت ساخنة من الفرن!", packingMessage: "يجهز بولت الطلب بعناية.",
      deliveringTitle: "في الطريق إليك!", deliveringMessage: "الزبون السعيد ينتظر طلبه!",
      servedTitle: "تم توصيل الطلب", servedMessage: "أعجب الطلب الزبون. ربحت {coins} عملات.",
      coinsEarned: "+{coins} عملات!", orderProgress: "تقدم الطلب", coins: "العملات",
      grownup: "للكبار", level: "المستوى", xp: "نقاط المطبخ",
      teachTitle: "علّم الشيف بولت", next: "الطلب التالي", undo: "تراجع عن القطع", check: "افحص التقسيم",
      footer: "لا تتعجل يا شيف. كل محاولة تساعد بولت على التعلم!", questTitle: "مهمة المطبخ",
      questText: "في المنزل، قسّم شطيرة إلى نصفين متساويين!", order: "الطلب {pair}",
      make: "اقطع {food} إلى أجزاء متساوية. عددها <bdi dir=\"ltr\">{n}</bdi>. كل جزء يساوي <bdi dir=\"ltr\">{unitFraction}</bdi> من الكل.",
      cutHint: "اسحب من الوسط {swipes}. تنتظم خطوط القطع في أماكن متساوية.",
      oneSwipe: "مرة واحدة", manySwipes: "{n} مرات", oneSwipeLeft: "سحبة واحدة", manySwipesLeft: "{n} سحبات",
      bubbleStart: "أحتاج إلى مساعدتك لأقسّم هذا بالتساوي!",
      bubbleCut: "ابدأ قرب الوسط واسحب نحو الحافة. ستنتظم القطوع بالتساوي!",
      equalHint: "الحصص العادلة متساوية الحجم. حاول مرة أخرى!",
      closeHint: "اتجاه القطع هذا موجود بالفعل. جرّب اتجاهاً جديداً!",
      needCuts: "تابع! بقيت {swipes} لإكمال الشرائح.",
      cutsComplete: "رائع! حددت كل الشرائح. افحص القطوع عندما تكون مستعداً.",
      bubbleEqual: "أحسنت! الآن علّمني شيئاً...",
      encouragement: "أحسنت التعليم! لنتأمل القطع معاً.", rightTeach: "صحيح! قُسّم الشكل إلى أجزاء متساوية!",
      retry: "حاول مرة أخرى",           gotIt: "فهمت", wrongCut: "لم تصبح متساوية بعد، لا بأس.",
      rightCut: "تقسيم رائع! +10 نقاط", hintUnequal: "حاول جعل كل قطعة بالحجم نفسه. بولت يؤمن بك!",
      hintCompare: "تخيّل تكديس القطع. أيها سيترك بيتزا أكثر؟",
      hintSame: "النصف واحدة من قطعتين متساويتين، والربع واحدة من أربع!",
      hintFair: "العدل يعني أن يحصل الجميع على المقدار نفسه.",
      cutAgain: "لنجرب {food} جديدة. تستطيع ذلك!", bubbleCorrect: "أصبحت خبيراً! تعلمت منك!",
      question: "هل تساعدني على الإجابة؟", allDone: "تعلمت منك الكثير!", doneSub: "أحسنت يا شيف! يمكن للكبار رؤية ما تعلمته.",
      reportTitle: "تقرير الكبار", reportIntro: "خريطة صغيرة لأفكار الكسور التي تدربنا عليها.",
      rounds: "الطلبات", xpEarned: "النقاط", bestStreak: "أفضل سلسلة", mapTitle: "خريطة التعلم",
      skillHalves: "تقسيم الأنصاف", skillThirds: "تقسيم الأثلاث", skillQuarters: "تقسيم الأرباع",
      skillEqual: "قطع متساوية", skillCompare: "مقارنة الكسور", understood: "يتقنها",
      practicing: "ما زال يتدرب", startFresh: "العب مجدداً", close: "العودة للمطبخ",
      questReport: "جرّب في الواقع: اطلب مساعدة شخص بالغ لتقسيم شطيرة إلى نصفين متساويين.",
      pizza: "بيتزا", chocolate: "شوكولاتة", flatbread: "خبز مسطح",
      share: "تقسيم", orderComplete: "اكتمل الطلب!", pickFood: "طعام جديد، فكرة الكسر نفسها!",
      langChanged: "أهلاً! لنطبخ معاً!", repeatHint: "لنتأمل القطع معاً.",
      misconceptionsTitle: "أفكار نعمل عليها", unequalTag: "اعتبار القطع غير المتساوية عادلة",
      biggerDenominatorTag: "المقام الأكبر يعني قطعة أكبر",
      halfQuarterTag: "الخلط بين النصف والربع", detected: "لوحظت {n} مرة",
      noSignal: "لم تُلاحظ بعد", streakTitle: "السلسلة",
      gamesTitle: "ملاهي بولت الرياضية", gamesIntro: "تمارين سريعة للعقل! كل إجابة صحيحة تكسبك ٥ نقاط خبرة وعملتين. الإجابة الخاطئة تنهي الجولة.",
      modeAdd: "سباق الجمع", modeAddDesc: "اجمع رقماً بسرعة",
      modeSub: "سباق الطرح", modeSubDesc: "اطرح بسرعة",
      modeMul: "رحلة جداول الضرب", modeMulDesc: "اضرب كالمحترفين",
      modeDiv: "غطسة القسمة", modeDivDesc: "قسّم الأرقام بالتساوي",
      modeMixed: "الخلطة الكبرى", modeMixedDesc: "العمليات الأربع في جولة واحدة",
      arcadePlay: "ابدأ الجولة", arcadeBack: "كل الألعاب", arcadeEnd: "إنهاء الجولة",
      arcadeBest: "الأفضل: {n}", arcadeScore: "النقاط", arcadeStreakLabel: "سلسلة",
      arcadeGood: "رائع! +٥ نقاط خبرة · +عملتان", arcadeBad: "أوبس! تنتهي الجولة هنا.",
      arcadeOver: "انتهت الجولة!", arcadeYourScore: "نتيجتك", arcadeAgain: "جولة جديدة",
      wheelTitle: "عجلة المطبخ المحظوظة", wheelIntro: "لُف لتربح عملات أو نقاط خبرة أو مضاعفة العملات! تكسب لفة مجانية بعد كل توصيلين.",
      wheelSpin: "لُف!", wheelSpins: "لفات مجانية جاهزة: {n}", wheelNone: "لا توجد لفة جاهزة، أوصل {n} طلباً أخرى(آخر).",
      wheelWon: "{prize}! شيف محظوظ!", prizeCoins: "{n} عملات", prizeXp: "+{n} نقاط خبرة", prizeBoost: "مضاعفة العملات × طلبين",
      wheelCharge: "لفة مجانية جاهزة!", boostActive: "مضاعفة العملات في {n} توصيل(ات) قادمة!",
      streakBonus: "مكافأة السلسلة +{n} عملات!", levelCoins: "مكافأة المستوى +{n} عملات!",
      themeColorsTitle: "مظاهر الألوان", themeColorsIntro: "أزياء جديدة للمطبخ. اشترِها بالعملات واستخدمها وقتما تشاء.", themeBuy: "شراء · {price} عملات",
      trophyTitle: "رف الجوائز",
      trophyFirstOrder: "أول توصيل", trophyTenOrders: "١٠ توصيلات",
      trophyStreak5: "سلسلة ٥ إجابات", trophyStreak10: "سلسلة ١٠ إجابات",
      trophyLevel5: "الوصول للمستوى ٥", trophyLevel10: "الوصول للمستوى ١٠",
      trophyRich: "ادّخر ١٥٠ عملة", trophyGear: "امتلاك ٦ قطع معدات",
      trophyMatrix: "فتح وضع المصفوفة", trophyArcade10: "نقاط ١٠+ في الملاهي",
      trophyLessons: "إتمام ١٠ دروس قصيرة", trophySpinner: "لُف العجلة",
      themeOcean: "خليج المحيط", themeSunset: "مطعم الغروب", themeForest: "كوخ الغابة",
      themeMint: "نعناع منعش", themeCherry: "فرقعة الكرز", themeLavender: "حقل الخزامى",
      themeIce: "حلبة الجليد", themeRetro: "مقهى الريترو", themeSpace: "محطة الفضاء", themeLava: "مطبخ البركان",
      modeFractions: "الكسور", howToPlay: "كيف ألعب؟", modeBarLabel: "أوضاع اللعب",
      arcadeLessonBadge: "درس قصير", arcadeBubble: "اختيار موفق! أجب بسرعة، كل إجابة صحيحة تكسبك نقاط خبرة وعملات.",
      cutHintLabel: "ابدأ قرب الوسط واسحب إلى الخارج. ستنتظم القطوع بمسافات متساوية."
    },
  };
  const lessonPlans = {
    en: [
      { title: "A fair share is the same size", steps: ["A whole is one complete pizza. It can be shared in smaller pieces.", "For a fair share, every piece must be the same size. Two different-sized pieces are not fair.", "Split one whole into 2 equal pieces. One of those pieces is one half: 1/2."], question: "Which share is fair?", answers: [["Every piece is the same size", true], ["Some pieces are bigger", false]], model: { numerator: 1, denominator: 2 }, money: [3, 2, 10] },
      { title: "The bottom number counts all the pieces", steps: ["Look at the fraction 1/3. It names equal pieces of one whole.", "The bottom number is 3. It tells us the whole is split into 3 equal pieces.", "The top number is 1, so we mean 1 piece out of those 3."], question: "In 1/3, how many equal pieces make the whole?", answers: [["1 piece", false], ["3 pieces", true]], model: { numerator: 1, denominator: 3 }, money: [4, 3, 10] },
      { title: "The top number counts the pieces we take", steps: ["The bottom number in 2/3 tells us there are 3 equal pieces in the whole.", "The top number is 2. It tells us how many of those pieces we take.", "So 2/3 means 2 pieces out of 3 equal pieces."], question: "In 2/3, how many pieces do we take?", answers: [["2 pieces", true], ["3 pieces", false]], model: { numerator: 2, denominator: 3 }, money: [5, 2, 10] },
      { title: "Meet halves and thirds", steps: ["Two equal pieces make one whole. Each piece is one half, or 1/2.", "Three equal pieces make one whole. Each piece is one third, or 1/3.", "The more equal pieces we make, the smaller each piece gets."], question: "Which piece is bigger when the whole is the same?", answers: [["1/2", true], ["1/3", false]], compare: [{ numerator: 1, denominator: 2 }, { numerator: 1, denominator: 3 }], money: [6, 3, 10] },
      { title: "Four equal pieces are quarters", steps: ["When we split one whole into 4 equal pieces, each piece is a quarter.", "We write one quarter as 1/4: 1 piece out of 4 equal pieces.", "A chocolate bar can show quarters as 4 equal blocks. One block is 1/4."], question: "One block out of 4 equal chocolate blocks is…", answers: [["1/4", true], ["1/3", false]], model: { numerator: 1, denominator: 4, bar: true }, money: [7, 4, 20] },
      { title: "Three quarters means three pieces", steps: ["The bottom number 4 means the whole has 4 equal pieces.", "The top number 3 means we are counting 3 of those pieces.", "Three out of four equal pieces is three quarters: 3/4."], question: "In 3/4, how many pieces are counted?", answers: [["3 pieces", true], ["4 pieces", false]], model: { numerator: 3, denominator: 4 }, money: [8, 5, 20] },
      { title: "Different fractions can show the same amount", steps: ["Imagine one whole cut into 2 equal pieces. One piece is 1/2.", "Now cut each half in two. The whole has 4 equal pieces, and 2 pieces cover the same amount.", "So one half and two quarters are equal: 1/2 = 2/4."], question: "Do 1/2 and 2/4 show the same amount?", answers: [["Yes", true], ["No", false]], model: { numerator: 2, denominator: 4 }, money: [6, 5, 20] },
      { title: "Compare pieces from the same whole", steps: ["Keep the whole the same size. A half cuts it into 2 equal pieces.", "A quarter cuts that same whole into 4 equal pieces.", "With more equal pieces, each piece is smaller. So 1/2 is bigger than 1/4."], question: "Which is the bigger piece of the same whole?", answers: [["1/2", true], ["1/4", false]], compare: [{ numerator: 1, denominator: 2 }, { numerator: 1, denominator: 4 }], money: [9, 4, 20] },
      { title: "Fifths and sixths", steps: ["Five equal pieces make one whole. One piece is one fifth: 1/5.", "Six equal pieces make one whole. One piece is one sixth: 1/6.", "The bottom number tells how many equal pieces make the whole."], question: "How many equal pieces make one sixth?", answers: [["6 pieces", true], ["1 piece", false]], model: { numerator: 1, denominator: 6 }, money: [8, 7, 20] },
      { title: "One whole can have eight equal pieces", steps: ["A whole cut into 8 equal pieces gives us eighths.", "The bottom number 8 tells how many equal pieces make the whole.", "One piece is 1/8. Two pieces are 2/8."], question: "What does the 8 in 1/8 tell us?", answers: [["8 equal pieces make the whole", true], ["We take 8 pieces", false]], model: { numerator: 1, denominator: 8 }, money: [9, 8, 20] },
      { title: "Tenths and twelfths", steps: ["Ten equal pieces make tenths. One piece is 1/10.", "Twelve equal pieces make twelfths. One piece is 1/12.", "A larger bottom number means the whole is split into more, smaller pieces."], question: "Which whole is split into more pieces?", answers: [["Twelfths: 12 pieces", true], ["Tenths: 10 pieces", false]], compare: [{ numerator: 1, denominator: 10 }, { numerator: 1, denominator: 12 }], money: [12, 7, 20] },
      { title: "Sixteenths are small equal pieces", steps: ["Sixteen equal pieces make one whole. Each piece is a sixteenth.", "One piece is 1/16. The bottom number tells us there are 16 equal pieces.", "Two pieces are 2/16. They are still parts of the same whole."], question: "How many equal pieces make one whole in sixteenths?", answers: [["16 pieces", true], ["6 pieces", false]], model: { numerator: 2, denominator: 16 }, money: [11, 8, 20] },
      { title: "A whole can have 20 or 24 equal pieces", steps: ["Twenty equal pieces make twentieths. One piece is 1/20.", "Twenty-four equal pieces make twenty-fourths. One piece is 1/24.", "The bottom number names how many equal pieces are in the whole."], question: "Which fraction has more equal pieces in its whole?", answers: [["1/24", true], ["1/20", false]], compare: [{ numerator: 1, denominator: 20 }, { numerator: 1, denominator: 24 }], money: [13, 6, 20] },
      { title: "Make the pieces match before adding", steps: ["The bottom number tells the size of the pieces. We can only count pieces that are the same size.", "For 1/2 + 1/4, rename one half as 2/4. Now both fractions are quarters.", "Add 2 quarters and 1 quarter. That makes 3/4."], question: "What is 1/2 + 1/4?", answers: [["3/4", true], ["2/6", false]], model: { numerator: 3, denominator: 4 }, money: [12, 6, 20] },
      { title: "Taking away equal-sized pieces", steps: ["In 3/4, we have 3 pieces, and each piece is one quarter.", "Take away 1/4. One piece is gone, so 2 pieces remain.", "Keep the bottom number 4. So 3/4 - 1/4 = 2/4."], question: "What is 3/4 - 1/4?", answers: [["2/4", true], ["2/8", false]], model: { numerator: 2, denominator: 4 }, money: [14, 5, 20] },
      { title: "Make the pieces the same size first", steps: ["We cannot count a half and a quarter as same-sized pieces yet.", "Split each half into 2 quarters. Now 1/2 is the same amount as 2/4.", "Add 2/4 + 1/4: that makes 3/4."], question: "Which fraction is equal to 1/2?", answers: [["2/4", true], ["1/4", false]], model: { numerator: 2, denominator: 4 }, money: [13, 8, 30] },
      { title: "Some fractions have different names", steps: ["Three sixths means 3 of 6 equal pieces: 3/6.", "If we pair the pieces, 3/6 covers the same amount as 1/2.", "Fractions can look different but still name the same amount."], question: "Does 3/6 show the same amount as 1/2?", answers: [["Yes", true], ["No", false]], model: { numerator: 3, denominator: 6 }, money: [16, 7, 30] },
      { title: "You can solve a fraction puzzle step by step", steps: ["Read the bottom numbers. They tell the size of the pieces.", "If the sizes differ, rename the fractions with equal-sized pieces.", "Then count the pieces, and check if the answer can be made simpler."], question: "What should you do first when the piece sizes differ?", answers: [["Make the piece sizes match", true], ["Add the bottom numbers", false]], model: { numerator: 2, denominator: 4 }, money: [18, 9, 30] },
      { title: "Fraction chef review", steps: ["The bottom number tells how many equal pieces make one whole.", "The top number tells how many pieces we mean.", "Equal-sized pieces can be counted, added, or taken away."], question: "In 2/4, how many pieces are counted?", answers: [["2 pieces", true], ["4 pieces", false]], model: { numerator: 2, denominator: 4 }, money: [17, 8, 30] }
    ],
    ar: [
      { title: "الحصة العادلة قطع متساوية", steps: ["الكل بيتزا كاملة، ويمكن تقسيمها إلى قطع أصغر.", "في القسمة العادلة، تكون كل قطعة بالحجم نفسه. القطع المختلفة الأحجام ليست عادلة.", "نقسم الكل إلى قطعتين متساويتين. القطعة الواحدة نصف، ونكتبها ١/٢."], question: "أي تقسيم عادل؟", answers: [["كل القطع بالحجم نفسه", true], ["بعض القطع أكبر", false]], model: { numerator: 1, denominator: 2 }, money: [3, 2, 10] },
      { title: "الرقم في الأسفل يعد كل القطع", steps: ["انظر إلى الكسر ١/٣. إنه يصف قطعاً متساوية من كل واحد.", "الرقم في الأسفل هو ٣. يخبرنا أن الكل مقسم إلى ٣ قطع متساوية.", "الرقم في الأعلى هو ١، لذا نقصد قطعة واحدة من هذه القطع الثلاث."], question: "في ١/٣، كم قطعة متساوية تكوّن الكل؟", answers: [["قطعة واحدة", false], ["٣ قطع", true]], model: { numerator: 1, denominator: 3 }, money: [4, 3, 10] },
      { title: "الرقم في الأعلى يعد القطع التي نأخذها", steps: ["الرقم في الأسفل في ٢/٣ يخبرنا أن الكل فيه ٣ قطع متساوية.", "الرقم في الأعلى هو ٢. يخبرنا كم قطعة نأخذ.", "إذن ٢/٣ تعني قطعتين من أصل ٣ قطع متساوية."], question: "في ٢/٣، كم قطعة نأخذ؟", answers: [["قطعتان", true], ["٣ قطع", false]], model: { numerator: 2, denominator: 3 }, money: [5, 2, 10] },
      { title: "تعرّف على النصف والثلث", steps: ["قطعتان متساويتان تكوّنان كلاً واحداً. كل قطعة نصف، أو ١/٢.", "ثلاث قطع متساوية تكوّن كلاً واحداً. كل قطعة ثلث، أو ١/٣.", "كلما زاد عدد القطع المتساوية، صغرت كل قطعة."], question: "أي قطعة أكبر إذا كان الكل بالحجم نفسه؟", answers: [["١/٢", true], ["١/٣", false]], compare: [{ numerator: 1, denominator: 2 }, { numerator: 1, denominator: 3 }], money: [6, 3, 10] },
      { title: "أربع قطع متساوية تكوّن أرباعاً", steps: ["عندما نقسم كلاً واحداً إلى ٤ قطع متساوية، تكون كل قطعة ربعاً.", "نكتب الربع ١/٤: قطعة واحدة من أصل ٤ قطع متساوية.", "يمكن تمثيل لوح الشوكولاتة بأربعة مربعات متساوية. كل مربع ربع."], question: "مربع واحد من ٤ مربعات شوكولاتة متساوية هو…", answers: [["١/٤", true], ["١/٣", false]], model: { numerator: 1, denominator: 4, bar: true }, money: [7, 4, 20] },
      { title: "ثلاثة أرباع تعني ثلاث قطع", steps: ["الرقم ٤ في الأسفل يعني أن الكل فيه ٤ قطع متساوية.", "الرقم ٣ في الأعلى يعني أننا نعد ٣ من تلك القطع.", "ثلاث قطع من أصل أربع قطع متساوية هي ثلاثة أرباع: ٣/٤."], question: "في ٣/٤، كم قطعة نعد؟", answers: [["٣ قطع", true], ["٤ قطع", false]], model: { numerator: 3, denominator: 4 }, money: [8, 5, 20] },
      { title: "قد يعبّر كسران عن المقدار نفسه", steps: ["تخيّل كلاً مقسوماً إلى قطعتين متساويتين. قطعة واحدة هي ١/٢.", "اقطع كل نصف إلى قطعتين. يصبح الكل ٤ قطع متساوية، والقطعتان تغطيان المقدار نفسه.", "إذن النصف والربعان متساويان: ١/٢ = ٢/٤."], question: "هل يعبّر ١/٢ و٢/٤ عن المقدار نفسه؟", answers: [["نعم", true], ["لا", false]], model: { numerator: 2, denominator: 4 }, money: [6, 5, 20] },
      { title: "قارن القطع من الكل نفسه", steps: ["تخيّل الكل بالحجم نفسه. النصف يقسمه إلى قطعتين متساويتين.", "الربع يقسم الكل نفسه إلى ٤ قطع متساوية.", "عندما يزيد عدد القطع المتساوية، تصغر كل قطعة. لذا ١/٢ أكبر من ١/٤."], question: "أي قطعة أكبر من الكل نفسه؟", answers: [["١/٢", true], ["١/٤", false]], compare: [{ numerator: 1, denominator: 2 }, { numerator: 1, denominator: 4 }], money: [9, 4, 20] },
      { title: "الأخماس والأسداس", steps: ["خمس قطع متساوية تكوّن كلاً واحداً. القطعة الواحدة خُمس: ١/٥.", "ست قطع متساوية تكوّن كلاً واحداً. القطعة الواحدة سُدس: ١/٦.", "الرقم في الأسفل يخبرنا كم قطعة متساوية تكوّن الكل."], question: "كم قطعة متساوية تكوّن الكل في السدس؟", answers: [["٦ قطع", true], ["قطعة واحدة", false]], model: { numerator: 1, denominator: 6 }, money: [8, 7, 20] },
      { title: "يمكن تقسيم الكل إلى ثمانية أجزاء", steps: ["عندما نقسم الكل إلى ٨ قطع متساوية نحصل على أثمان.", "الرقم ٨ في الأسفل يخبرنا كم قطعة متساوية تكوّن الكل.", "قطعة واحدة هي ١/٨. وقطعتان هما ٢/٨."], question: "ماذا يخبرنا الرقم ٨ في ١/٨؟", answers: [["الكل فيه ٨ قطع متساوية", true], ["نأخذ ٨ قطع", false]], model: { numerator: 1, denominator: 8 }, money: [9, 8, 20] },
      { title: "الأعشار والأجزاء من اثني عشر", steps: ["عشر قطع متساوية تكوّن أعشاراً. القطعة الواحدة ١/١٠.", "اثنتا عشرة قطعة متساوية تكوّن أجزاء من اثني عشر. القطعة الواحدة ١/١٢.", "المقام الأكبر يعني أن الكل قُسم إلى قطع أكثر وأصغر."], question: "أي كل مقسّم إلى قطع أكثر؟", answers: [["الأجزاء من ١٢: ١٢ قطعة", true], ["الأعشار: ١٠ قطع", false]], compare: [{ numerator: 1, denominator: 10 }, { numerator: 1, denominator: 12 }], money: [12, 7, 20] },
      { title: "الأجزاء من ستة عشر قطع صغيرة متساوية", steps: ["ست عشرة قطعة متساوية تكوّن كلاً واحداً. كل قطعة هي سُدس عشر.", "قطعة واحدة هي ١/١٦. يخبرنا المقام أن هناك ١٦ قطعة متساوية.", "قطعتان هما ٢/١٦. وما زالتا جزءاً من الكل نفسه."], question: "كم قطعة متساوية تكوّن الكل في الأجزاء من ستة عشر؟", answers: [["١٦ قطعة", true], ["٦ قطع", false]], model: { numerator: 2, denominator: 16 }, money: [11, 8, 20] },
      { title: "يمكن تقسيم الكل إلى ٢٠ أو ٢٤ قطعة", steps: ["عشرون قطعة متساوية تكوّن أجزاء من عشرين. القطعة الواحدة ١/٢٠.", "أربع وعشرون قطعة متساوية تكوّن أجزاء من أربعة وعشرين. القطعة الواحدة ١/٢٤.", "المقام يذكرنا بعدد القطع المتساوية في الكل."], question: "أي كسر كلّه مقسّم إلى قطع أكثر؟", answers: [["١/٢٤", true], ["١/٢٠", false]], compare: [{ numerator: 1, denominator: 20 }, { numerator: 1, denominator: 24 }], money: [13, 6, 20] },
      { title: "اجعل القطع متساوية قبل الجمع", steps: ["الرقم في الأسفل يخبرنا بحجم القطع. نعد فقط القطع المتساوية في الحجم.", "في ١/٢ + ١/٤، نعيد تسمية النصف على أنه ٢/٤. الآن الكسران بأرباع.", "نجمع ربعين وربعاً واحداً. فيكون الناتج ٣/٤."], question: "كم يساوي ١/٢ + ١/٤؟", answers: [["٣/٤", true], ["٢/٦", false]], model: { numerator: 3, denominator: 4 }, money: [12, 6, 20] },
      { title: "اطرح قطعاً متساوية الحجم", steps: ["في ٣/٤ لدينا ٣ قطع، وكل قطعة ربع.", "نأخذ ١/٤. تختفي قطعة واحدة، وتبقى قطعتان.", "نبقي الرقم ٤ في الأسفل. إذن ٣/٤ − ١/٤ = ٢/٤."], question: "كم يساوي ٣/٤ − ١/٤؟", answers: [["٢/٤", true], ["٢/٨", false]], model: { numerator: 2, denominator: 4 }, money: [14, 5, 20] },
      { title: "اجعل القطع بالحجم نفسه أولاً", steps: ["لا يمكننا عد النصف والربع كقطع متساوية الحجم بعد.", "نقسم كل نصف إلى ربعين. إذن ١/٢ يساوي المقدار نفسه مثل ٢/٤.", "نجمع ٢/٤ + ١/٤، فيكون الناتج ٣/٤."], question: "أي كسر يساوي ١/٢؟", answers: [["٢/٤", true], ["١/٤", false]], model: { numerator: 2, denominator: 4 }, money: [13, 8, 30] },
      { title: "قد يكون للكسرين اسمان مختلفان", steps: ["ثلاثة أسداس تعني ٣ من ٦ قطع متساوية: ٣/٦.", "إذا جمعنا كل قطعتين، يغطي ٣/٦ المقدار نفسه الذي يغطيه ١/٢.", "قد يبدو الكسران مختلفين، لكنهما يعبّران عن المقدار نفسه."], question: "هل يعبّر ٣/٦ عن المقدار نفسه مثل ١/٢؟", answers: [["نعم", true], ["لا", false]], model: { numerator: 3, denominator: 6 }, money: [16, 7, 30] },
      { title: "حل مسائل الكسور خطوة خطوة", steps: ["اقرأ الأرقام في الأسفل. فهي تخبرك بحجم القطع.", "إذا اختلف الحجم، أعد تسمية الكسور بقطع متساوية الحجم.", "ثم عد القطع وتحقق إن كان يمكن تبسيط الإجابة."], question: "ماذا نفعل أولاً إذا اختلف حجم القطع؟", answers: [["نجعل أحجام القطع متساوية", true], ["نجمع الأرقام في الأسفل", false]], model: { numerator: 2, denominator: 4 }, money: [18, 9, 30] },
      { title: "مراجعة الشيف لكسور البيتزا", steps: ["الرقم في الأسفل يخبرنا كم قطعة متساوية تكوّن الكل.", "الرقم في الأعلى يخبرنا كم قطعة نقصد.", "يمكن عد القطع المتساوية أو جمعها أو طرحها."], question: "في ٢/٤، كم قطعة نعد؟", answers: [["قطعتان", true], ["٤ قطع", false]], model: { numerator: 2, denominator: 4 }, money: [17, 8, 30] }
    ]
  };
  const foods = ["pizza", "chocolate", "flatbread"];
  const gearKinds = ["cutter", "oven", "food"];
  const variants = [
    { id: "classic", nameKey: "classicVariant", blurbKey: "classicBlurb", cutterPrice: 0, ovenPrice: 0, foodPrice: 0, bakeMs: 2800, dragLimit: .62, tones: [523, 659, 784], colors: ["#ff765e", "#ffd550", "#70d1e8"] },
    { id: "garden", nameKey: "gardenVariant", blurbKey: "gardenBlurb", cutterPrice: 7, ovenPrice: 9, foodPrice: 9, bakeMs: 2400, dragLimit: .57, tones: [587, 740, 880], colors: ["#f1bd45", "#85c775", "#ff9470"] },
    { id: "tech", nameKey: "techVariant", blurbKey: "techBlurb", cutterPrice: 12, ovenPrice: 15, foodPrice: 12, bakeMs: 1850, dragLimit: .51, tones: [659, 880, 1047], colors: ["#40d8d1", "#57a6ee", "#ee6bd0"] },
    { id: "royal", nameKey: "royalVariant", blurbKey: "royalBlurb", cutterPrice: 16, ovenPrice: 18, foodPrice: 16, bakeMs: 1450, dragLimit: .45, tones: [784, 988, 1175], colors: ["#ffd447", "#f0ad42", "#fff0a0"] },
    { id: "sweet", nameKey: "sweetVariant", blurbKey: "sweetBlurb", cutterPrice: 18, ovenPrice: 20, foodPrice: 18, bakeMs: 1350, dragLimit: .43, tones: [698, 880, 1047], colors: ["#ed6e9a", "#b981d1", "#ffd15c"] }
  ];
  const bonusThemes = [
    { id: "ocean", price: 15, swatch: ["#1f7fae", "#2aa5a0", "#e3f2f8"] },
    { id: "sunset", price: 15, swatch: ["#d95f43", "#f0a63c", "#e88a9a"] },
    { id: "forest", price: 15, swatch: ["#2c3d2a", "#679a55", "#d9b64a"] },
    { id: "mint", price: 20, swatch: ["#35b295", "#5cae7c", "#e7f6ee"] },
    { id: "cherry", price: 20, swatch: ["#cf3f56", "#e58ca2", "#eec257"] },
    { id: "lavender", price: 20, swatch: ["#7a6fc4", "#c48cc9", "#f0ecfa"] },
    { id: "ice", price: 25, swatch: ["#4a90c4", "#54b0c4", "#edf6fc"] },
    { id: "retro", price: 25, swatch: ["#c65b3a", "#d9a53c", "#8f9e56"] },
    { id: "space", price: 35, swatch: ["#0c1026", "#7c9aff", "#ff7ba2"] },
    { id: "lava", price: 35, swatch: ["#1d0d09", "#ff6a3d", "#ffb43d"] }
  ];
  const bonusThemeIds = new Set(bonusThemes.map((theme) => theme.id));
  const bonusThemeFor = (id) => bonusThemes.find((theme) => theme.id === id);
  const customColorKeys = [...gearKinds, "text", "heading", "background"];
  const defaultCustomColors = {
    cutter: "#f04f42", oven: "#ffd02e", food: "#20c6be",
    text: "#28152f", heading: "#28152f", background: "#fff6dc"
  };
  const isHexColor = (value) => typeof value === "string" && /^#[\da-f]{6}$/i.test(value);
  function mixColorWithWhite(hex, whiteRatio) {
    const channels = hex.slice(1).match(/.{2}/g).map((channel) => parseInt(channel, 16));
    return `#${channels.map((channel) => Math.round(channel + (255 - channel) * whiteRatio).toString(16).padStart(2, "0")).join("")}`;
  }
  function customGearArt(kind, colors = stats.shop.customColors) {
    const color = colors[kind];
    const ink = "#33253a";
    const art = {
      cutter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90"><circle cx="40" cy="48" r="28" fill="${color}" stroke="${ink}" stroke-width="6"/><circle cx="40" cy="48" r="17" fill="#fffdf6" stroke="${ink}" stroke-width="4"/><path d="m60 49 40-17 10 12-39 19z" fill="${color}" stroke="${ink}" stroke-width="5" stroke-linejoin="round"/><circle cx="40" cy="48" r="5" fill="${ink}"/></svg>`,
      oven: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="11" y="12" width="78" height="77" rx="14" fill="${color}" stroke="${ink}" stroke-width="6"/><circle cx="31" cy="27" r="4" fill="${ink}"/><circle cx="50" cy="27" r="4" fill="${ink}"/><circle cx="69" cy="27" r="4" fill="${ink}"/><rect x="22" y="40" width="56" height="39" rx="7" fill="#fffdf6" stroke="${ink}" stroke-width="5"/><path d="M37 70c-4-10 8-13 8-23 13 12 16 19 9 25h11c-2 8-8 12-16 12s-15-4-17-12z" fill="${color}" stroke="${ink}" stroke-width="3"/></svg>`,
      food: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="51" r="39" fill="${color}" stroke="${ink}" stroke-width="6"/><circle cx="50" cy="51" r="29" fill="#fff3cf" stroke="${ink}" stroke-width="3"/><circle cx="37" cy="39" r="5" fill="${color}"/><circle cx="61" cy="42" r="5" fill="${color}"/><circle cx="48" cy="62" r="5" fill="${color}"/><path d="M25 51h50" stroke="${ink}" stroke-width="3" stroke-dasharray="4 5"/></svg>`
    };
    return art[kind];
  }
  const matrixUnlocked = (owned) => variants.slice(1).every((variant) =>
    gearKinds.every((kind) => owned.has(gearId(variant.id, kind)))
  );
  function canUnlockCustomTheme() {
    return currentLevel() >= 15 && matrixUnlocked(new Set(stats.shop.owned)) && stats.coins >= 100;
  }
  const variantFor = (id) => variants.find((variant) => variant.id === id) || variants[0];
  const gearId = (variant, kind) => `${variant}-${kind}`;
  const sweetGearArt = {
    cutter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90"><path fill="#f6a7c7" stroke="#512538" stroke-width="5" stroke-linejoin="round" d="M66 31 98 18q10-2 12 8l-3 15-33 10z"/><circle cx="42" cy="50" r="29" fill="#ffcf5c" stroke="#512538" stroke-width="6"/><circle cx="42" cy="50" r="18" fill="#fff0f5" stroke="#e84f83" stroke-width="5"/><path fill="#ad6acb" stroke="#512538" stroke-width="4" d="m60 51 24-7 11 8-24 8z"/><circle cx="42" cy="50" r="5" fill="#512538"/><path stroke="#fffafd" stroke-width="5" stroke-linecap="round" d="m37 28 4 6m14 8 6-2m-30 20 5-5"/></svg>`,
    oven: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="12" y="12" width="76" height="78" rx="14" fill="#f6a7c7" stroke="#512538" stroke-width="6"/><circle cx="31" cy="26" r="4" fill="#512538"/><circle cx="50" cy="26" r="4" fill="#512538"/><circle cx="69" cy="26" r="4" fill="#512538"/><rect x="22" y="39" width="56" height="40" rx="8" fill="#fff0f5" stroke="#512538" stroke-width="5"/><rect x="29" y="47" width="42" height="25" rx="5" fill="#71394d"/><path d="M43 69c-7-10 7-13 5-25 13 12 16 19 9 25h10c-2 8-8 12-17 12s-15-4-17-12z" fill="#ffcf5c" stroke="#e84f83" stroke-width="3"/><circle cx="36" cy="56" r="2" fill="#f6a7c7"/><circle cx="61" cy="63" r="2" fill="#ad6acb"/></svg>`,
    food: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#e84f83" stroke="#512538" stroke-width="6" d="M10 26Q50 2 90 26L54 88q-4 7-9 0z"/><path fill="#71394d" stroke="#512538" stroke-width="4" d="M20 28q30-16 60 0L53 72q-3 5-7 0z"/><circle cx="39" cy="31" r="5" fill="#ffcf5c"/><circle cx="60" cy="30" r="5" fill="#fffafd"/><circle cx="51" cy="49" r="5" fill="#ad6acb"/><path stroke="#ffcf5c" stroke-width="5" stroke-linecap="round" d="m31 52 4 3m26 7 4-2"/></svg>`
  };
  const gearPath = (variant, kind) => variant === "sweet"
    ? `data:image/svg+xml,${encodeURIComponent(sweetGearArt[kind === "food" ? "food" : kind])}`
    : variant === "custom"
      ? `data:image/svg+xml,${encodeURIComponent(customGearArt(kind === "pizza" ? "food" : kind))}`
    : `assets/variants/${variant}-${kind === "food" ? "pizza" : kind}.png`;
  const levelsPer = 30;
  const defaultStats = {
    xp: 0, rounds: 0, bestStreak: 0, coins: 0, seenLessons: [], lessonVersion: 2, onboarded: false, playerName: "",
    boost: 0, wheelSpins: 0, activeMode: "fractions", lastArcadeMode: "add",
    wheel: { charges: 1, sinceLast: 0 },
    arcade: { best: {}, tutorialDone: {} },
    trophies: [],
    skills: { halves: 0, thirds: 0, quarters: 0, fifthsSixths: 0, eighths: 0, tenthsTwelfths: 0, sixteenths: 0, largeFractions: 0, equal: 0 },
    misconceptions: { unequalParts: 0, biggerDenominator: 0, halfQuarter: 0 },
    shop: {
      owned: ["classic-cutter", "classic-oven", "classic-food"],
      equipped: { cutter: "classic", oven: "classic", food: "classic" },
      activeVariant: "classic", activeTheme: "classic", customUnlocked: false,
      ownedThemes: [],
      customColors: { ...defaultCustomColors }
    }
  };
  const foodImages = Object.fromEntries(["pizza", "flatbread"].map((food) => {
    const image = new Image();
    image.addEventListener("load", drawPizza);
    image.addEventListener("error", () => console.error(`Could not load clean cutting artwork: assets/${food}.png`));
    image.src = `assets/${food}.png`;
    return [food, image];
  }));
  let stats = loadStats();
  let lang = "en";
  let roundIndex = 0;
  let roundTotal = 12;
  let streak = 0;
  let cuts = [];
  let pointerStart = null;
  let isDrawing = false;
  let cutterHideTimer = 0;
  let mistakes = { unequal: 0, compare: 0 };
  let replayQueue = [];
  let replayedMisconceptions = new Set();
  let missionDeck = [];
  let questionDeck = [];
  let lastQuestionSignature = "";
  let activeQuestion = null;
  let guideVisible = false;
  const guideCost = 2;
  let currentOrder = null;
  let questionKind = "bigger";
  let quizLocked = false;
  let orderStage = "idle";
  let orderFlowToken = 0; // bumped whenever a round changes, so stale timers can't advance the flow
  let activeChangeChallenge = null;
  let changeChallengeLocked = false;
  let changeFeedbackKey = "";
  let changeFeedbackValues = {};
  let lessonLevel = 0;
  let soundOn = true;
  let audioContext = null;
  let matrixFrame = 0;
  let matrixDrops = [];
  let matrixDpr = 1;

  function loadStats() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (!stored || typeof stored !== "object") return structuredClone(defaultStats);
      const safe = structuredClone(defaultStats);
      safe.xp = Number.isFinite(stored.xp) ? Math.max(0, stored.xp) : 0;
      safe.rounds = Number.isFinite(stored.rounds) ? Math.max(0, stored.rounds) : 0;
      safe.bestStreak = Number.isFinite(stored.bestStreak) ? Math.max(0, stored.bestStreak) : 0;
      safe.coins = Number.isFinite(stored.coins) ? Math.max(0, stored.coins) : 0;
      safe.onboarded = stored.onboarded === true;
      safe.playerName = typeof stored.playerName === "string" ? stored.playerName.trim().slice(0, 18) : "";
      safe.seenLessons = stored.lessonVersion === 2 && Array.isArray(stored.seenLessons)
        ? [...new Set(stored.seenLessons.filter((level) => Number.isInteger(level) && level > 0))]
        : [];
      const validGear = new Set(variants.flatMap((variant) => gearKinds.map((kind) => gearId(variant.id, kind))));
      safe.shop.owned = Array.isArray(stored.shop?.owned) ? stored.shop.owned.filter((item) => validGear.has(item)) : [];
      // saves made before the sweet set existed: matrix only needed these 3 sets
      const legacyMatrixReady = ["garden", "tech", "royal"].every((variant) =>
        gearKinds.every((kind) => safe.shop.owned.includes(gearId(variant, kind)))
      );
      if (stored.shop?.activeTheme === "matrix" && legacyMatrixReady) {
        for (const kind of gearKinds) {
          const sweetItem = gearId("sweet", kind);
          if (!safe.shop.owned.includes(sweetItem)) safe.shop.owned.push(sweetItem);
        }
      }
      for (const kind of gearKinds) {
        const starter = gearId("classic", kind);
        if (!safe.shop.owned.includes(starter)) safe.shop.owned.push(starter);
        const chosen = stored.shop?.equipped?.[kind];
        safe.shop.equipped[kind] = chosen && safe.shop.owned.includes(gearId(chosen, kind)) ? chosen : "classic";
      }
      safe.shop.customUnlocked = stored.shop?.customUnlocked === true;
      safe.shop.ownedThemes = Array.isArray(stored.shop?.ownedThemes)
        ? [...new Set(stored.shop.ownedThemes.filter((id) => bonusThemeIds.has(id)))]
        : [];
      safe.shop.customColors = Object.fromEntries(customColorKeys.map((kind) => [
        kind, isHexColor(stored.shop?.customColors?.[kind]) ? stored.shop.customColors[kind] : defaultCustomColors[kind]
      ]));
      const completeSets = variants.filter((variant) => gearKinds.every((kind) => safe.shop.owned.includes(gearId(variant.id, kind)))).map((variant) => variant.id);
      const activeTheme = stored.shop?.activeTheme;
      safe.shop.activeTheme = activeTheme === "classic" || completeSets.includes(activeTheme) || (activeTheme === "matrix" && matrixUnlocked(new Set(safe.shop.owned))) || (activeTheme === "custom" && safe.shop.customUnlocked) || (bonusThemeIds.has(activeTheme) && safe.shop.ownedThemes.includes(activeTheme))
        ? activeTheme
        : "classic";
      const activeVariant = stored.shop?.activeVariant;
      safe.shop.activeVariant = variants.some((variant) => variant.id === activeVariant) ? activeVariant : "classic";
      for (const key of Object.keys(safe.skills)) safe.skills[key] = Number.isFinite(stored.skills?.[key]) ? Math.max(0, stored.skills[key]) : 0;
      safe.misconceptions = { unequalParts: 0, biggerDenominator: 0, halfQuarter: 0 };
      for (const key of Object.keys(safe.misconceptions)) safe.misconceptions[key] = Number.isFinite(stored.misconceptions?.[key]) ? Math.max(0, stored.misconceptions[key]) : 0;
      safe.boost = Number.isFinite(stored.boost) ? Math.min(10, Math.max(0, Math.floor(stored.boost))) : 0;
      safe.wheelSpins = Number.isFinite(stored.wheelSpins) ? Math.max(0, Math.floor(stored.wheelSpins)) : 0;
      safe.wheel = {
        charges: Number.isFinite(stored.wheel?.charges) ? Math.min(3, Math.max(0, Math.floor(stored.wheel.charges))) : 1,
        sinceLast: Number.isFinite(stored.wheel?.sinceLast) ? Math.min(1, Math.max(0, Math.floor(stored.wheel.sinceLast))) : 0
      };
      safe.arcade = { best: {}, tutorialDone: {} };
      if (stored.arcade?.best && typeof stored.arcade.best === "object") {
        for (const [key, value] of Object.entries(stored.arcade.best)) {
          if (Number.isFinite(value)) safe.arcade.best[key] = Math.max(0, Math.floor(value));
        }
      }
      if (stored.arcade?.tutorialDone && typeof stored.arcade.tutorialDone === "object") {
        for (const [key, value] of Object.entries(stored.arcade.tutorialDone)) {
          if (["add", "sub", "mul", "div", "mixed"].includes(key) && value === true) safe.arcade.tutorialDone[key] = true;
        }
      }
      safe.activeMode = ["fractions", "add", "sub", "mul", "div", "mixed"].includes(stored.activeMode) ? stored.activeMode : "fractions";
      safe.lastArcadeMode = ["add", "sub", "mul", "div", "mixed"].includes(stored.lastArcadeMode) ? stored.lastArcadeMode : "add";
      safe.trophies = Array.isArray(stored.trophies)
        ? [...new Set(stored.trophies.filter((id) => typeof id === "string"))]
        : [];
      return safe;
    } catch (error) {
      console.warn("Saved game progress could not be read.", error);
      return structuredClone(defaultStats);
    }
  }
  function saveStats() {
    try { localStorage.setItem(storageKey, JSON.stringify(stats)); }
    catch (error) { console.warn("Game progress could not be saved.", error); }
  }
  function t(key, values = {}) {
    let text = translations[lang][key] || translations.en[key] || key;
    for (const [name, value] of Object.entries(values)) text = text.replaceAll(`{${name}}`, value);
    return text;
  }
  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1));
      [result[index], result[other]] = [result[other], result[index]];
    }
    return result;
  }
  function currentLevel() { return Math.floor(stats.xp / levelsPer) + 1; }
  function allowedDenoms(level = currentLevel()) {
    if (level >= 14) return [2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];
    if (level >= 13) return [2, 3, 4, 5, 6, 8, 10, 12, 16];
    if (level >= 12) return [2, 3, 4, 5, 6, 8, 10, 12];
    if (level >= 11) return [2, 3, 4, 5, 6, 8];
    if (level >= 9) return [2, 3, 4, 5, 6];
    if (level >= 5) return [2, 3, 4];
    if (level >= 2) return [2, 3];
    return [2];
  }
  function createMissionDeck() {
    const denominators = allowedDenoms();
    const missions = ["pizza", "flatbread"].flatMap((food) =>
      denominators.flatMap((denominator) =>
        Array.from({ length: denominator }, (_, index) => ({ food, denominator, numerator: index + 1 }))
      )
    );
    if (currentLevel() >= 5) {
      missions.push(...Array.from({ length: 4 }, (_, index) => ({
        food: "chocolate", denominator: 4, numerator: index + 1
      })));
    }
    return shuffle(missions);
  }
  function baseMission() {
    if (!missionDeck.length) missionDeck = createMissionDeck();
    return missionDeck.shift();
  }
  function createQuestionDeck() {
    const fractionText = ([numerator, denominator]) => `${numerator}/${denominator}`;
    const available = new Set(allowedDenoms());
    const comparePairs = [
      [[1, 2], [1, 4]], [[2, 3], [1, 3]], [[3, 4], [2, 4]],
      [[1, 3], [1, 4]], [[3, 4], [2, 3]], [[2, 4], [1, 3]]
    ];
    if (currentLevel() >= 3) comparePairs.push(
      [[1, 8], [1, 4]], [[3, 8], [1, 2]], [[1, 8], [1, 16]]
    );
    if (currentLevel() >= 5) comparePairs.push(
      [[1, 16], [1, 8]], [[5, 16], [1, 4]], [[3, 16], [1, 8]]
    );
    const equivalentPairs = [
      [[1, 2], [2, 4], true], [[1, 3], [2, 6], true], [[2, 3], [4, 6], true],
      [[1, 2], [2, 3], false], [[3, 4], [2, 4], false]
    ];
    if (currentLevel() >= 2) equivalentPairs.push([[1, 3], [2, 5], false]);
    if (currentLevel() >= 5) equivalentPairs.push([[1, 8], [2, 16], true], [[3, 16], [1, 4], false]);
    const comparisons = comparePairs
      .filter((pair) => pair.every((fraction) => available.has(fraction[1])))
      .map(([left, right]) => {
        const leftValue = left[0] / left[1], rightValue = right[0] / right[1];
        return {
          kind: "compare", claimKey: "compareQuestion",
          values: { left: fractionText(left), right: fractionText(right) },
          choices: shuffle([
            { labelKey: "compareChoice", values: { fraction: fractionText(left) }, correct: leftValue > rightValue },
            { labelKey: "compareChoice", values: { fraction: fractionText(right) }, correct: rightValue > leftValue }
          ])
        };
      });
    const equivalences = equivalentPairs
      .filter(([left, right]) => available.has(left[1]) && available.has(right[1]))
      .map(([left, right, equal]) => ({
        kind: "equivalent", claimKey: "equivalentQuestion",
        values: { left: fractionText(left), right: fractionText(right) },
        choices: shuffle([
          { labelKey: "yes", correct: equal },
          { labelKey: "no", correct: !equal }
        ])
      }));
    const partQuestions = [
      ["partsHalf", 2],
      ["partsThird", 3],
      ["partsQuarter", 4]
    ].filter(([, count]) => available.has(count)).map(([partKey, count]) => ({
      kind: "parts", claimKey: "partsQuestion",
      values: { partNameKey: partKey },
      choices: shuffle([
        { labelKey: "partsAnswerTwo", correct: count === 2 },
        { labelKey: "partsAnswerThree", correct: count === 3 },
        { labelKey: "partsAnswerFour", correct: count === 4 }
      ])
    }));
    const fairQuestions = ["fairRuleQuestion", "fairSlicesQuestion", "fairShareQuestion"].map((claimKey) => ({
      kind: "fair", claimKey, values: {},
      choices: shuffle([{ labelKey: "yes", correct: true }, { labelKey: "no", correct: false }])
    }));
    const denominators = allowedDenoms();
    const numberQuestions = denominators.flatMap((denominator) =>
      Array.from({ length: denominator }, (_, index) => {
        const numerator = index + 1;
        const fraction = fractionText([numerator, denominator]);
        return [
          {
            kind: "numerator", claimKey: "numeratorQuestion",
            values: { fraction }, correctNumber: numerator, answerType: "numerator", denominator
          },
          {
            kind: "denominator", claimKey: "denominatorQuestion",
            values: { fraction }, correctNumber: denominator, answerType: "denominator", numerator
          }
        ].map((question) => ({
          ...question,
          choices: createNumberChoices(question, denominators)
        }));
      }).flat()
    );
    const servedFractions = denominators.flatMap((denominator) =>
      Array.from({ length: denominator }, (_, index) => [index + 1, denominator])
    ).map(([numerator, denominator]) => {
      const correctFraction = fractionText([numerator, denominator]);
      const possibleDistractors = denominators.flatMap((availableDenominator) =>
        Array.from({ length: availableDenominator }, (_, index) => `${index + 1}/${availableDenominator}`)
      ).filter((fraction) => fraction !== correctFraction);
      const options = [...shuffle(possibleDistractors).slice(0, 3), correctFraction];
      return {
        kind: "fraction", claimKey: "fractionOfWholeQuestion",
        values: { numerator, denominator },
        choices: shuffle(options).map((fraction) => ({
          labelKey: "fractionChoice",
          values: { fraction },
          correct: fraction === fractionText([numerator, denominator])
        }))
      };
    });
    const coreQuestions = [...comparisons, ...equivalences, ...partQuestions, ...fairQuestions, ...numberQuestions, ...servedFractions];
    return shuffle(currentLevel() >= 10
      ? [...makeAdvancedQuestions(36), ...coreQuestions.slice(0, 12)]
      : coreQuestions);
  }
  function gcd(left, right) {
    while (right) [left, right] = [right, left % right];
    return left;
  }
  function simplifyFraction(numerator, denominator) {
    const divisor = gcd(Math.abs(numerator), denominator) || 1;
    return { numerator: numerator / divisor, denominator: denominator / divisor };
  }
  function lcm(left, right) {
    return left / gcd(left, right) * right;
  }
  function fractionString(fraction) {
    return `${fraction.numerator}/${fraction.denominator}`;
  }
  function randomInteger(minimum, maximum) {
    return minimum + Math.floor(Math.random() * (maximum - minimum + 1));
  }
  function makeAdvancedQuestions(count) {
    const denominators = allowedDenoms().filter((denominator) => denominator >= 3);
    const questions = [];
    const signatures = new Set();
    let attempts = 0;
    while (questions.length < count && attempts < count * 20) {
      attempts++;
      const firstDenominator = denominators[randomInteger(0, denominators.length - 1)];
      const secondDenominator = denominators[randomInteger(0, denominators.length - 1)];
      const firstNumerator = randomInteger(1, firstDenominator);
      const secondNumerator = randomInteger(1, secondDenominator);
      const operation = Math.random() < .5 ? "add" : "subtract";
      let left = { numerator: firstNumerator, denominator: firstDenominator };
      let right = { numerator: secondNumerator, denominator: secondDenominator };
      if (operation === "subtract" && left.numerator / left.denominator < right.numerator / right.denominator) {
        [left, right] = [right, left];
      }
      const denominator = lcm(left.denominator, right.denominator);
      const leftScaled = left.numerator * (denominator / left.denominator);
      const rightScaled = right.numerator * (denominator / right.denominator);
      const numerator = operation === "add" ? leftScaled + rightScaled : leftScaled - rightScaled;
      if (numerator <= 0) continue;
      const answer = simplifyFraction(numerator, denominator);
      const values = { left: fractionString(left), right: fractionString(right) };
      const signature = `${operation}:${values.left}:${values.right}`;
      if (signatures.has(signature)) continue;
      signatures.add(signature);
      const answerOptions = new Map([[fractionString(answer), true]]);
      for (let offset = 1; answerOptions.size < 4; offset++) {
        const candidates = [
          simplifyFraction(Math.max(1, answer.numerator + offset), answer.denominator),
          simplifyFraction(Math.max(1, answer.numerator - offset), answer.denominator),
          simplifyFraction(Math.max(1, left.numerator + right.numerator + offset), denominator)
        ];
        for (const candidate of candidates) {
          const candidateText = fractionString(candidate);
          if (!answerOptions.has(candidateText)) answerOptions.set(candidateText, false);
          if (answerOptions.size === 4) break;
        }
      }
      questions.push({
        kind: "advanced",
        claimKey: operation === "add" ? "addFractionsQuestion" : "subtractFractionsQuestion",
        values,
        choices: shuffle([...answerOptions].map(([fraction, correct]) => ({
          labelKey: "fractionChoice", values: { fraction }, correct
        })))
      });
    }
    return questions;
  }
  function createNumberChoices(question, denominators) {
    const answerNumbers = question.answerType === "denominator"
      ? denominators.filter((number) => number !== question.correctNumber)
          .sort((left, right) => Math.abs(left - question.correctNumber) - Math.abs(right - question.correctNumber))
          .slice(0, 3)
      : Array.from({ length: question.denominator }, (_, index) => index + 1)
          .filter((number) => number !== question.correctNumber)
          .sort((left, right) => Math.abs(left - question.correctNumber) - Math.abs(right - question.correctNumber))
          .slice(0, 3);
    answerNumbers.push(question.correctNumber);
    return shuffle([...new Set(answerNumbers)]).map((number) => ({
      labelKey: "numberChoice", values: { number }, correct: number === question.correctNumber
    }));
  }
  function nextQuestion() {
    if (!questionDeck.length) questionDeck = createQuestionDeck();
    if (questionDeck.length > 1 && questionSignature(questionDeck[0]) === lastQuestionSignature) {
      [questionDeck[0], questionDeck[1]] = [questionDeck[1], questionDeck[0]];
    }
    const question = questionDeck.shift();
    lastQuestionSignature = questionSignature(question);
    return question;
  }
  function questionSignature(question) {
    return `${question.kind}:${question.claimKey}:${JSON.stringify(question.values)}`;
  }
  function chocolateQuestion() {
    const fraction = mission().fraction;
    const isOneBlock = mission().numerator === 1;
    return {
      kind: "chocolate", claimKey: "chocolatePortionQuestion", values: { fraction },
      choices: shuffle([{ labelKey: "yes", correct: isOneBlock }, { labelKey: "no", correct: !isOneBlock }])
    };
  }
  function mission() {
    const order = currentOrder || baseMission(roundIndex);
    return { ...order, numerator: order.numerator || 1, fraction: `${order.numerator || 1}/${order.denominator}` };
  }
  function requiredCuts() { return mission().food === "chocolate" ? 2 : mission().denominator; }
  function swipesNeeded() {
    const cutsNeeded = requiredCuts();
    return mission().food !== "chocolate" && cutsNeeded % 2 === 0 ? cutsNeeded / 2 : cutsNeeded;
  }
  function swipesLeft() {
    const cutsMissing = requiredCuts() - cuts.length;
    return mission().food !== "chocolate" && mission().denominator % 2 === 0 ? cutsMissing / 2 : cutsMissing;
  }
  function skillKey(denominator) {
    if (denominator === 2) return "halves";
    if (denominator === 3) return "thirds";
    if (denominator === 4) return "quarters";
    if (denominator === 8) return "eighths";
    if (denominator === 10 || denominator === 12) return "tenthsTwelfths";
    if (denominator === 16) return "sixteenths";
    if (denominator >= 20) return "largeFractions";
    return "fifthsSixths";
  }
  // lessons unlock in this order, which is not the order they are defined in
  const lessonPlanOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 9, 10, 11, 12, 14, 15, 16, 17];
  let lessonStep = 0;
  let lessonCheckPassed = false;
  function lessonPlanForLevel(level) {
    const index = level <= lessonPlanOrder.length
      ? lessonPlanOrder[level - 1]
      : 12 + ((level - lessonPlanOrder.length - 1) % 6);
    return lessonPlans[lang][index];
  }
  function renderLessonModel(plan) {
    const models = plan.compare || [plan.model];
    const accent = getComputedStyle(document.body).getPropertyValue("--coral").trim() || "#b94f36";
    const neutral = "#eee7db";
    const pictures = models.map(({ numerator, denominator, bar = false }) => {
      if (bar) {
        const gap = 3;
        const width = (232 - gap * (denominator - 1)) / denominator;
        const pieces = Array.from({ length: denominator }, (_, index) =>
          `<rect x="${4 + index * (width + gap)}" y="12" width="${width}" height="72" rx="5" fill="${index < numerator ? accent : neutral}"></rect>`
        ).join("");
        return `<figure class="lesson-model-item lesson-model-bar-item"><svg class="lesson-bar" viewBox="0 0 240 112" aria-hidden="true">${pieces}</svg><figcaption>${fmtNum(numerator)}/${fmtNum(denominator)}</figcaption></figure>`;
      }
      const center = 60;
      const radius = 48;
      const pieces = Array.from({ length: denominator }, (_, index) => {
        const start = (index / denominator) * Math.PI * 2 - Math.PI / 2;
        const end = ((index + 1) / denominator) * Math.PI * 2 - Math.PI / 2;
        const x1 = center + Math.cos(start) * radius;
        const y1 = center + Math.sin(start) * radius;
        const x2 = center + Math.cos(end) * radius;
        const y2 = center + Math.sin(end) * radius;
        const largeArc = end - start > Math.PI ? 1 : 0;
        return `<path d="M ${center} ${center} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${radius} ${radius} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${index < numerator ? accent : neutral}"></path>`;
      }).join("");
      return `<figure class="lesson-model-item"><svg viewBox="0 0 120 120" aria-hidden="true">${pieces}<circle cx="60" cy="60" r="48" fill="none" stroke="#54473c" stroke-width="1.5"></circle></svg><figcaption>${fmtNum(numerator)}/${fmtNum(denominator)}</figcaption></figure>`;
    }).join("");
    const label = models.map(({ numerator, denominator }) => `${fmtNum(numerator)}/${fmtNum(denominator)}`).join(" · ");
    $("#lessonModel").innerHTML = `${pictures}<span class="lesson-model-label">${label}</span>`;
    $("#lessonModel").setAttribute("aria-label", label);
  }
  function renderLevelLesson() {
    if (!lessonLevel) return;
    const plan = lessonPlanForLevel(lessonLevel);
    const checkStage = lessonStep >= plan.steps.length;
    $("#lessonLevel").textContent = fmtNum(lessonLevel);
    $("#lessonTitle").textContent = plan.title;
    $("#lessonProgress").textContent = t("lessonProgress", {
      step: fmtNum(Math.min(lessonStep + 1, plan.steps.length + 1)),
      total: fmtNum(plan.steps.length + 1)
    });
    $("#lessonStepContent").classList.toggle("hidden", checkStage);
    $("#lessonCheck").classList.toggle("hidden", !checkStage);
    if (checkStage) {
      $("#lessonCheckQuestion").textContent = plan.question;
      $("#lessonAnswers").replaceChildren(...plan.answers.map(([label, correct]) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = label;
        button.disabled = lessonCheckPassed;
        if (lessonCheckPassed && correct) button.classList.add("lesson-answer-correct");
        button.addEventListener("click", () => {
          if (lessonCheckPassed) return;
          if (!correct) {
            $("#lessonFeedback").textContent = t("lessonTryAgain");
            $("#lessonFeedback").className = "lesson-feedback retry";
            setBolt("thinking", t("lessonBubble"));
            return;
          }
          lessonCheckPassed = true;
          $("#lessonFeedback").textContent = t("lessonCorrect");
          $("#lessonFeedback").className = "lesson-feedback correct";
          $("#lessonAnswers").querySelectorAll("button").forEach((answer) => { answer.disabled = true; });
          button.classList.add("lesson-answer-correct");
          $("#lessonButton").disabled = false;
          $("#lessonButton").textContent = t("lessonStart");
          setBolt("excited", t("lessonCorrect"));
          playCorrect();
        });
        return button;
      }));
      $("#lessonFeedback").textContent = lessonCheckPassed ? t("lessonCorrect") : "";
      $("#lessonFeedback").className = `lesson-feedback${lessonCheckPassed ? " correct" : ""}`;
      $("#lessonButton").disabled = !lessonCheckPassed;
      $("#lessonButton").textContent = lessonCheckPassed ? t("lessonStart") : t("lessonSelectAnswer");
    } else {
      $("#lessonStepLabel").textContent = `${t("lessonStepLabel")} ${fmtNum(lessonStep + 1)}`;
      $("#lessonStepBody").textContent = plan.steps[lessonStep];
      $("#lessonButton").disabled = false;
      $("#lessonButton").textContent = lessonStep === plan.steps.length - 1
        ? t("lessonCheckLabel")
        : t("lessonContinue");
    }
    $("#lessonBackButton").classList.toggle("hidden", lessonStep === 0);
    const [first, second, paid] = plan.money;
    const total = first + second;
    const change = paid - total;
    $("#lessonMoneyExample").innerHTML = `<span>${t("lessonItemsLabel")}: <bdi dir="ltr">${fmtNum(first)} + ${fmtNum(second)} = ${fmtNum(total)}</bdi> (${t("lessonTotalLabel")})</span><span>${t("lessonPaidLabel")}: <bdi dir="ltr">${fmtNum(paid)} − ${fmtNum(total)} = ${fmtNum(change)}</bdi> (${t("lessonChangeLabel")})</span>`;
    renderLessonModel(plan);
  }
  function showLessonIfNeeded() {
    if (gameMode !== "fractions") return false;
    const level = currentLevel();
    if (stats.seenLessons.includes(level)) return false;
    lessonLevel = level;
    lessonStep = 0;
    lessonCheckPassed = false;
    $("#levelLesson").classList.remove("hidden");
    ["orderRow", "prompt", "instruction", "cutStage", "cutActions", "footerNote"].forEach((id) => $(`#${id}`).classList.add("hidden"));
    $("#teachPanel").classList.add("hidden");
    renderLevelLesson();
    setBolt("thinking", t("lessonBubble"));
    return true;
  }
  function dismissLesson() {
    if (!lessonLevel) return;
    stats.lessonVersion = 2;
    if (!stats.seenLessons.includes(lessonLevel)) stats.seenLessons.push(lessonLevel);
    saveStats();
    lessonLevel = 0;
    $("#levelLesson").classList.add("hidden");
    ["orderRow", "prompt", "instruction", "cutStage", "cutActions", "footerNote"].forEach((id) => $(`#${id}`).classList.remove("hidden"));
    $("#instruction").textContent = t("bubbleCut");
    setBolt("normal", playerGreeting());
  }
  function advanceLesson() {
    if (!lessonLevel) return;
    const plan = lessonPlanForLevel(lessonLevel);
    if (lessonStep === plan.steps.length) {
      if (lessonCheckPassed) dismissLesson();
      return;
    }
    lessonStep++;
    renderLevelLesson();
  }
  $("#lessonButton").addEventListener("click", advanceLesson);
  $("#lessonBackButton").addEventListener("click", () => {
    if (!lessonLevel || lessonStep === 0) return;
    lessonStep--;
    renderLevelLesson();
  });
  function fmtNum(value) {
    return new Intl.NumberFormat(lang, { useGrouping: false }).format(value);
  }
  function swipeText(count, remaining = false) {
    const key = count === 1
      ? (remaining ? "oneSwipeLeft" : "oneSwipe")
      : (remaining ? "manySwipesLeft" : "manySwipes");
    return t(key, { n: fmtNum(count) });
  }
  function playerGreeting() {
    return stats.playerName ? t("welcomeName", { name: stats.playerName }) : t("bubbleStart");
  }
  function openOnboarding() {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.dataset.modal = "onboarding";
    $("#overlayRoot").replaceChildren(backdrop);
    renderOnboarding(backdrop);
  }
  const developerCode = "2010"; // easter egg: type this as your name to open the dev panel
  function savePlayerName(rawName) {
    const name = rawName.trim();
    if (name === developerCode) {
      openDeveloperPanel();
      return false;
    }
    if (!name) return false;
    stats.playerName = name.slice(0, 18);
    saveStats();
    setBolt("normal", playerGreeting());
    return true;
  }
  function renderOnboarding(backdrop, enteredName = "") {
    backdrop.innerHTML = `<form class="modal onboarding-modal" role="dialog" aria-modal="true" aria-labelledby="onboardingTitle">
      <div class="shop-heading"><h2 id="onboardingTitle">${t("onboardingTitle")}</h2><button class="theme-button" type="button" data-onboarding-language>${t("onboardingLanguage")}</button></div>
      <p>${t("onboardingIntro")}</p>
      <ul class="onboarding-list">
        <li>${t("onboardingCut")}</li>
        <li>${t("onboardingQuestion")}</li>
        <li>${t("onboardingOrder")}</li>
      </ul>
      <label for="playerName">${t("onboardingNameLabel")}</label>
      <input id="playerName" name="playerName" type="text" autocomplete="given-name" maxlength="18" required placeholder="${t("onboardingNamePlaceholder")}" value="${escAttr(enteredName)}">
      <div class="modal-actions"><button class="toy-button primary" type="submit">${t("onboardingStart")}</button></div>
    </form>`;
    backdrop.querySelector("[data-onboarding-language]").addEventListener("click", () => {
      const value = backdrop.querySelector("#playerName").value;
      lang = lang === "en" ? "ar" : "en";
      applyLanguage();
      renderOnboarding(backdrop, value);
      backdrop.querySelector("#playerName").focus();
    });
    backdrop.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const name = backdrop.querySelector("#playerName").value.trim();
      if (!name) {
        backdrop.querySelector("#playerName").focus();
        return;
      }
      if (name === developerCode) {
        openDeveloperPanel();
        return;
      }
      stats.playerName = name.slice(0, 18);
      stats.onboarded = true;
      saveStats();
      $("#overlayRoot").replaceChildren();
      if (gameMode !== "fractions") setGameMode(gameMode, true);
      else if (!showLessonIfNeeded()) setBolt("normal", playerGreeting());
    });
    backdrop.querySelector("#playerName").focus();
  }
  function openDeveloperPanel() {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.dataset.modal = "developer";
    backdrop.innerHTML = `<section class="modal developer-modal" role="dialog" aria-modal="true" aria-labelledby="developerTitle">
      <h2 id="developerTitle">${t("devPanelTitle")}</h2><p>${t("devPanelHint")}</p>
      <div class="developer-tools">
        <label for="devCoins">${t("devCoinsLabel")}</label>
        <div class="developer-row"><input id="devCoins" type="number" min="0" max="999999" step="1" value="50">
          <button class="toy-button secondary" type="button" data-dev-action="add-coins">${t("devAddCoins")}</button>
          <button class="toy-button secondary" type="button" data-dev-action="set-coins">${t("devSetCoins")}</button>
        </div>
        <label for="devLevel">${t("devLevelLabel")}</label>
        <div class="developer-row"><input id="devLevel" type="number" min="1" max="100" step="1" value="${currentLevel()}">
          <button class="toy-button secondary" type="button" data-dev-action="set-level">${t("devSetLevel")}</button>
        </div>
        <button class="toy-button helper" type="button" data-dev-action="unlock-all">${t("devUnlockAll")}</button>
        <button class="toy-button danger" type="button" data-dev-reset>${t("devResetAccount")}</button>
        <div class="developer-themes">${["classic", "garden", "tech", "royal", "sweet", "matrix"].map((theme) =>
          `<button class="theme-button" type="button" data-dev-theme="${theme}">${t(`devTheme${theme[0].toUpperCase()}${theme.slice(1)}`)}</button>`
        ).join("")}</div>
        <p id="devFeedback" aria-live="polite"></p>
      </div>
      <div class="modal-actions"><button class="toy-button primary" type="button" data-dev-close>${t("devClose")}</button></div>
    </section>`;
    $("#overlayRoot").replaceChildren(backdrop);
    backdrop.querySelectorAll("[data-dev-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = Number(backdrop.querySelector("#devCoins").value);
        if (button.dataset.devAction === "add-coins" || button.dataset.devAction === "set-coins") {
          if (!Number.isInteger(value) || value < 0 || value > 999999) {
            backdrop.querySelector("#devFeedback").textContent = t("devInvalid");
            return;
          }
          stats.coins = button.dataset.devAction === "add-coins"
            ? Math.min(999999, stats.coins + value)
            : value;
        } else if (button.dataset.devAction === "set-level") {
          const level = Number(backdrop.querySelector("#devLevel").value);
          if (!Number.isInteger(level) || level < 1 || level > 100) {
            backdrop.querySelector("#devFeedback").textContent = t("devInvalid");
            return;
          }
          stats.xp = (level - 1) * levelsPer;
          missionDeck = createMissionDeck();
          questionDeck = createQuestionDeck();
          currentOrder = baseMission();
          cuts = [];
          renderMission();
          drawPizza();
        } else if (button.dataset.devAction === "unlock-all") {
          stats.shop.owned = [...new Set([
            ...stats.shop.owned,
            ...variants.flatMap((variant) => gearKinds.map((kind) => gearId(variant.id, kind)))
          ])];
          stats.shop.ownedThemes = bonusThemes.map((theme) => theme.id);
        }
        backdrop.querySelector("#devFeedback").textContent = "";
        updateProgress();
        saveStats();
      });
    });
    backdrop.querySelectorAll("[data-dev-theme]").forEach((button) => {
      button.addEventListener("click", () => {
        const theme = button.dataset.devTheme;
        if (theme === "matrix") {
          stats.shop.owned = [...new Set([
            ...stats.shop.owned,
            ...variants.slice(1).flatMap((variant) => gearKinds.map((kind) => gearId(variant.id, kind)))
          ])];
          stats.shop.activeTheme = "matrix";
        } else {
          stats.shop.owned = [...new Set([...stats.shop.owned, ...gearKinds.map((kind) => gearId(theme, kind))])];
          stats.shop.equipped = { cutter: theme, oven: theme, food: theme };
          stats.shop.activeVariant = theme;
          stats.shop.activeTheme = theme;
        }
        applyGearAppearance();
        saveStats();
      });
    });
    backdrop.querySelector("[data-dev-reset]").addEventListener("click", () => {
      if (!window.confirm(t("devResetConfirm"))) return;
      stats = structuredClone(defaultStats);
      saveStats();
      $("#overlayRoot").replaceChildren();
      resetSession();
      showToast(t("devResetDone"), true);
    });
    backdrop.querySelector("[data-dev-close]").addEventListener("click", () => {
      $("#overlayRoot").replaceChildren();
      if (!stats.onboarded) openOnboarding();
      else if (gameMode !== "fractions") setGameMode(gameMode, true);
      else if (!showLessonIfNeeded()) setBolt("normal", playerGreeting());
    });
  }
  function escAttr(value) {
    return value.replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $(".coin-pouch").setAttribute("aria-label", t("coins"));
    if ($(".modal-backdrop")?.dataset.modal === "shop") renderShop();
    $("#roundLabel").innerHTML = orderLabel();
    $("#bubble").textContent = t("bubbleStart");
    $("#cutHint").textContent = t("cutHint", { swipes: swipeText(swipesNeeded()) });
    renderMission();
    renderLevelLesson();
    if (lessonLevel) setBolt("thinking", t("lessonBubble"));
    if (!$("#teachPanel").classList.contains("hidden")) {
      renderQuestionText();
      const questionHelpOpen = $("#questionHelpButton").getAttribute("aria-expanded") === "true";
      $("#questionHelpButton").textContent = t(questionHelpOpen ? "solutionHide" : "solutionShow");
      if (questionHelpOpen && activeQuestion) renderSolutionSteps("questionSolution", questionSolutionSteps());
    }
    const changeHelpOpen = $("#changeHelpButton").getAttribute("aria-expanded") === "true";
    $("#changeHelpButton").textContent = t(changeHelpOpen ? "solutionHide" : "solutionShow");
    if (changeHelpOpen && activeChangeChallenge) {
      const changeTotal = activeChangeChallenge.first + activeChangeChallenge.second;
      renderSolutionSteps("changeSolution", [
        t("solutionChangeAdd", {
          first: fmtNum(activeChangeChallenge.first),
          second: fmtNum(activeChangeChallenge.second),
          total: fmtNum(changeTotal)
        }),
        t("solutionChangeSubtract", {
          paid: fmtNum(activeChangeChallenge.paid),
          total: fmtNum(changeTotal),
          change: fmtNum(activeChangeChallenge.change)
        })
      ]);
    }
    renderOrderFlow();
    applyGearAppearance();
    renderModeBar();
    if (gameMode !== "fractions") {
      if (!$("#arcadeLesson").classList.contains("hidden")) renderArcadeLesson();
      else if (!$("#arcadePanel").classList.contains("hidden")) {
        updateScorebar();
        renderArcadeRound();
      }
    }
    drawPizza();
  }
  function renderMission() {
    const current = mission();
    $("#roundLabel").innerHTML = orderLabel();
    $("#foodLabel").textContent = t(current.food);
    $("#prompt").innerHTML = current.food === "chocolate"
      ? t("chocolateMake", { fraction: current.fraction })
      : t("make", {
          n: fmtNum(current.denominator),
          unitFraction: `${fmtNum(1)}/${fmtNum(current.denominator)}`,
          food: t(current.food)
        });
    $("#cutCounter").textContent = t("cutCount", {
      made: fmtNum(cuts.length),
      needed: fmtNum(requiredCuts())
    });
    $("#cutHint").textContent = current.food === "chocolate" ? t("chocolateHint") : t("cutHint", { swipes: swipeText(swipesNeeded()) });
    $("#instruction").textContent = cuts.length
      ? (current.food === "chocolate" ? t("chocolateHint") : t("cutHintLabel"))
      : (current.food === "chocolate" ? t("chocolateHint") : t("bubbleCut"));
    canvas.setAttribute("aria-label", `${t(current.food)}. ${current.food === "chocolate" ? t("chocolateHint") : t("cutHintLabel")}`);
    renderGuideButton();
  }
  function orderLabel() {
    const n = Math.min(roundIndex + 1, roundTotal);
    return t("order", { pair: `<bdi dir="ltr">${n} / ${roundTotal}</bdi>` });
  }
  function cutBounds(food) {
    if (food === "chocolate") return { rx: 164, ry: 106 };
    if (food === "flatbread") return { rx: 208, ry: 208 };
    return { rx: 198, ry: 198 };
  }
  // distance from the center to the crust at a given angle
  function cutRadius(angle, bounds = cutBounds(mission().food)) {
    return 1 / Math.sqrt((Math.cos(angle) ** 2) / (bounds.rx ** 2) + (Math.sin(angle) ** 2) / (bounds.ry ** 2));
  }
  function renderGuideButton() {
    const button = $("#helpButton");
    if (!button) return;
    button.textContent = guideVisible ? t("guideActive") : t("guideCost", { cost: guideCost });
    button.disabled = guideVisible;
    button.setAttribute("aria-pressed", String(guideVisible));
  }
  function buyCutGuide() {
    if (guideVisible || orderStage !== "idle" || !$("#teachPanel").classList.contains("hidden")) return;
    if (stats.coins < guideCost) {
      showToast(t("guideNoCoins", { cost: guideCost }), true);
      return;
    }
    stats.coins -= guideCost;
    guideVisible = true;
    updateProgress();
    saveStats();
    renderMission();
    drawPizza();
    $("#instruction").textContent = t("guideShown");
    showToast(t("coinsSpent", { cost: guideCost }));
  }
  function updateProgress() {
    const level = Math.floor(stats.xp / levelsPer) + 1;
    const inLevel = stats.xp % levelsPer;
    $("#levelValue").textContent = level;
    $("#xpLabel").innerHTML = `<bdi dir="ltr">${inLevel} / ${levelsPer}</bdi>`;
    $("#xpFill").style.width = `${(inLevel / levelsPer) * 100}%`;
    $(".xp-track").setAttribute("aria-valuenow", String(inLevel));
    $("#streakValue").textContent = streak;
    $("#streakBox").classList.toggle("hot", streak >= 3);
    $("#coinValue").textContent = stats.coins;
    if ($(".modal-backdrop")?.dataset.modal === "shop") renderShop();
  }
  function drawPizza() {
    const W = canvas.width, cx = W / 2, cy = W / 2;
    const food = mission().food;
    const bounds = cutBounds(food);
    ctx.clearRect(0, 0, W, W);
    if (food === "chocolate") {
      drawChocolateBar(cx, cy);
    } else {
      const image = foodImages[food];
      const hasFoodImage = image?.complete && image.naturalWidth > 0;
      if (hasFoodImage) {
        const filters = {
          classic: "none",
          garden: "saturate(1.12) hue-rotate(-6deg)",
          tech: "saturate(1.2) hue-rotate(18deg)",
          royal: "saturate(1.12) sepia(.12)",
          sweet: "saturate(1.25) hue-rotate(-12deg)",
          custom: "none"
        };
        ctx.save();
        ctx.filter = filters[stats.shop.equipped.food] || "none";
        ctx.drawImage(image, 0, 0, W, W);
        if (stats.shop.activeTheme === "custom") {
          ctx.globalCompositeOperation = "source-atop";
          ctx.globalAlpha = .2;
          ctx.fillStyle = stats.shop.customColors.food;
          ctx.fillRect(0, 0, W, W);
        }
        ctx.restore();
      } else {
        ctx.save();
        ctx.beginPath(); ctx.ellipse(cx, cy, bounds.rx, bounds.ry, 0, 0, Math.PI * 2); ctx.clip();
        if (food === "flatbread") {
          ctx.fillStyle = "#c87932"; ctx.fillRect(0, 0, W, W);
          ctx.beginPath(); ctx.ellipse(cx, cy, bounds.rx - 15, bounds.ry - 14, 0, 0, Math.PI * 2); ctx.fillStyle = "#f4cf82"; ctx.fill();
          ctx.beginPath(); ctx.ellipse(cx, cy, bounds.rx - 39, bounds.ry - 36, 0, 0, Math.PI * 2); ctx.fillStyle = "#f8dfa7"; ctx.fill();
          ctx.fillStyle = "#c98a4f";
          [[-105,-85],[70,-120],[124,-13],[-135,35],[17,105],[-25,-5],[80,69],[-65,115]].forEach(([x,y], i) => {
            ctx.beginPath(); ctx.ellipse(cx+x,cy+y, i%2?9:13, i%2?6:8, .25, 0, Math.PI*2); ctx.fill();
          });
        } else {
          ctx.fillStyle = "#f4b24e"; ctx.fillRect(0, 0, W, W);
          ctx.beginPath(); ctx.ellipse(cx, cy, bounds.rx - 15, bounds.ry - 15, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffda79"; ctx.fill();
          ctx.beginPath(); ctx.ellipse(cx, cy, bounds.rx - 31, bounds.ry - 31, 0, 0, Math.PI * 2); ctx.fillStyle = "#f36e56"; ctx.fill();
          ctx.beginPath(); ctx.ellipse(cx, cy, bounds.rx - 43, bounds.ry - 43, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd57a"; ctx.fill();
          const toppings = [[-83,-86],[64,-105],[113,-8],[-107,30],[10,115],[-7,-7],[69,69],[-63,105]];
          toppings.forEach(([x,y], i) => {
            ctx.beginPath(); ctx.arc(cx + x, cy + y, i % 2 ? 11 : 13, 0, Math.PI * 2);
            ctx.fillStyle = i % 3 ? "#78a94e" : "#c94c40"; ctx.fill();
            if (i % 3) { ctx.beginPath(); ctx.arc(cx + x - 3, cy + y - 3, 3, 0, Math.PI * 2); ctx.fillStyle = "#d8ed83"; ctx.fill(); }
          });
        }
        ctx.restore();
      }
    }
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (food === "chocolate") {
      const cutterColor = stats.shop.activeTheme === "custom"
        ? stats.shop.customColors.cutter
        : variantFor(stats.shop.equipped.cutter).colors[0];
      for (const axis of cuts) {
        ctx.beginPath();
        if (axis === "horizontal") { ctx.moveTo(cx - bounds.rx, cy); ctx.lineTo(cx + bounds.rx, cy); }
        else { ctx.moveTo(cx, cy - bounds.ry); ctx.lineTo(cx, cy + bounds.ry); }
        ctx.strokeStyle = "#fffdf2"; ctx.lineWidth = 12; ctx.stroke();
        ctx.strokeStyle = cutterColor; ctx.lineWidth = 5; ctx.stroke();
      }
    } else for (const cut of cuts) {
      const edge = cutRadius(cut, bounds) - 5;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(cut) * edge, cy + Math.sin(cut) * edge);
      ctx.strokeStyle = "#fffdf2"; ctx.lineWidth = 8; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(cut) * edge, cy + Math.sin(cut) * edge);
      ctx.strokeStyle = stats.shop.activeTheme === "custom" ? stats.shop.customColors.cutter : "#292b35";
      ctx.lineWidth = 2.6; ctx.stroke();
    }
    if (guideVisible) {
      ctx.save();
      ctx.setLineDash([5, 11]);
      ctx.lineWidth = 7;
      ctx.strokeStyle = stats.shop.activeTheme === "custom" ? stats.shop.customColors.cutter : "#e34f38";
      if (food === "chocolate") {
        ctx.beginPath(); ctx.moveTo(cx - bounds.rx, cy); ctx.lineTo(cx + bounds.rx, cy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, cy - bounds.ry); ctx.lineTo(cx, cy + bounds.ry); ctx.stroke();
      } else {
        for (let index = 0; index < mission().denominator; index++) {
          const angle = index * Math.PI * 2 / mission().denominator;
          const edge = cutRadius(angle, bounds) - 5;
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(angle) * edge, cy + Math.sin(angle) * edge); ctx.stroke();
        }
      }
      ctx.restore();
    }
    if (food !== "chocolate") {
      ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2); ctx.fillStyle = "#fffdf2"; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = "#292b35"; ctx.stroke();
    }
  }
  function drawChocolateBar(cx, cy) {
    const x = cx - 164, y = cy - 106, width = 328, height = 212;
    const colors = stats.shop.activeTheme === "custom"
      ? [
          stats.shop.customColors.food,
          mixColorWithWhite(stats.shop.customColors.food, .2),
          mixColorWithWhite(stats.shop.customColors.food, .52)
        ]
      : ({
      classic: ["#482117", "#71402a", "#9d6242"],
      garden: ["#483421", "#725337", "#b4874b"],
      tech: ["#123a51", "#176d7a", "#55d9d0"],
      royal: ["#58340e", "#a96e17", "#f0c14b"],
      sweet: ["#512538", "#71394d", "#f6a7c7"]
    }[stats.shop.equipped.food] || ["#482117", "#71402a", "#9d6242"]);
    ctx.save();
    ctx.shadowColor = "rgba(40,21,47,.3)"; ctx.shadowBlur = 0; ctx.shadowOffsetY = 8;
    roundedRectPath(x, y, width, height, 20); ctx.fillStyle = colors[0]; ctx.fill();
    ctx.shadowColor = "transparent"; ctx.shadowOffsetY = 0;
    for (let row = 0; row < 2; row++) for (let col = 0; col < 2; col++) {
      const tileX = x + 8 + col * 160, tileY = y + 8 + row * 100;
      roundedRectPath(tileX, tileY, 152, 92, 12); ctx.fillStyle = colors[1]; ctx.fill();
      ctx.beginPath(); ctx.moveTo(tileX + 10, tileY + 9); ctx.lineTo(tileX + 142, tileY + 9); ctx.strokeStyle = colors[2]; ctx.lineWidth = 3; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tileX + 11, tileY + 15); ctx.lineTo(tileX + 11, tileY + 78); ctx.strokeStyle = "rgba(255,255,255,.16)"; ctx.lineWidth = 3; ctx.stroke();
    }
    ctx.restore();
  }
  function roundedRectPath(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y); ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius); ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height); ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius); ctx.quadraticCurveTo(x, y, x + radius, y); ctx.closePath();
  }
  function canvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height };
  }
  function moveCutter(point) {
    const rect = canvas.getBoundingClientRect();
    const wrap = $("#pizzaWrap").getBoundingClientRect();
    const cutter = $("#cutterCursor");
    cutter.style.left = `${rect.left - wrap.left + point.x / canvas.width * rect.width}px`;
    cutter.style.top = `${rect.top - wrap.top + point.y / canvas.height * rect.height}px`;
    if (pointerStart) {
      const angle = Math.atan2(point.y - pointerStart.y, point.x - pointerStart.x) * 180 / Math.PI;
      cutter.style.setProperty("--cutter-angle", `${angle}deg`);
    }
    cutter.classList.add("visible");
  }
  function hideCutterSoon() {
    clearTimeout(cutterHideTimer);
    cutterHideTimer = setTimeout(() => $("#cutterCursor").classList.remove("visible", "active"), 360);
  }
  canvas.addEventListener("pointerdown", (event) => {
    if ($("#teachPanel").classList.contains("hidden") === false || roundIndex >= roundTotal) return;
    const point = canvasPoint(event), center = canvas.width / 2;
    if (mission().food === "chocolate") {
      const bounds = cutBounds("chocolate");
      const nearSide = Math.abs(Math.abs(point.x - center) - bounds.rx) < 40 || Math.abs(Math.abs(point.y - center) - bounds.ry) < 35;
      if (!nearSide || Math.abs(point.x - center) > bounds.rx + 15 || Math.abs(point.y - center) > bounds.ry + 15) {
        showHint("need-bar-edge");
        return;
      }
    } else {
      const bounds = cutBounds(mission().food);
      const centerX = canvas.width / 2, centerY = canvas.height / 2;
      const centerDistance = Math.hypot((point.x - centerX) / bounds.rx, (point.y - centerY) / bounds.ry);
      if (centerDistance > .82) {
        showHint("need-center");
        return;
      }
    }
    clearTimeout(cutterHideTimer);
    pointerStart = point; isDrawing = true; canvas.setPointerCapture(event.pointerId);
    moveCutter(point);
    $("#cutterCursor").classList.add("active");
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!isDrawing) return;
    moveCutter(canvasPoint(event));
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!isDrawing || !pointerStart) return;
    isDrawing = false;
    const point = canvasPoint(event), center = canvas.width / 2;
    moveCutter(point);
    const dx = point.x - pointerStart.x, dy = point.y - pointerStart.y;
    const centerX = canvas.width / 2, centerY = canvas.height / 2;
    let acceptedCut = false;
    if (mission().food === "chocolate") {
      const bounds = cutBounds("chocolate");
      const horizontal = Math.abs(dx) >= Math.abs(dy);
      const axis = horizontal ? "horizontal" : "vertical";
      const valid = horizontal
        ? Math.abs(dx) >= bounds.rx * 1.55 && Math.abs(pointerStart.y - centerY) < 25 && Math.abs(point.y - centerY) < 25 && (pointerStart.x - centerX) * (point.x - centerX) < 0
        : Math.abs(dy) >= bounds.ry * 1.55 && Math.abs(pointerStart.x - centerX) < 25 && Math.abs(point.x - centerX) < 25 && (pointerStart.y - centerY) * (point.y - centerY) < 0;
      if (!valid) showHint("need-bar-edge");
      else if (cuts.includes(axis)) showHint("duplicate");
      else {
        cuts.push(axis);
        acceptedCut = true;
      }
    } else {
      const endX = point.x - centerX, endY = point.y - centerY;
      const bounds = cutBounds(mission().food);
      const startRadius = Math.hypot((pointerStart.x - centerX) / bounds.rx, (pointerStart.y - centerY) / bounds.ry);
      const endRadius = Math.hypot(endX / bounds.rx, endY / bounds.ry);
      const distance = Math.hypot(dx, dy);
      const angle = Math.atan2(endY, endX);
      const minGesture = 55 * variantFor(stats.shop.equipped.cutter).dragLimit;
      if (startRadius > .82 || endRadius < .3 || endRadius <= startRadius + .08 || endRadius > 1.7 || distance < minGesture) {
        showHint("need-edge");
      } else if (cuts.length < requiredCuts()) {
        const count = requiredCuts();
        if (mission().food !== "chocolate" && count % 2 === 0) {
          const normalized = (angle + Math.PI * 2) % (Math.PI * 2);
          let lineAngle;
          if (count === 2) {
            lineAngle = (angle % Math.PI + Math.PI) % Math.PI;
          } else {
            const axisCount = count / 2;
            const spacing = Math.PI / axisCount;
            lineAngle = (Math.round(normalized / spacing) % axisCount) * spacing;
          }
          const opposite = (lineAngle + Math.PI) % (Math.PI * 2);
          if (cuts.some((cut) => angDist(cut, lineAngle) < .2 || angDist(cut, opposite) < .2)) showHint("duplicate");
          else {
            cuts.push(lineAngle, opposite);
            acceptedCut = true;
          }
        } else {
          const spacing = Math.PI * 2 / count;
          const slot = Math.round(((angle + Math.PI * 2) % (Math.PI * 2)) / spacing) % count;
          const snappedAngle = slot * spacing;
          if (cuts.some((cut) => angDist(cut, snappedAngle) < spacing * .5)) showHint("duplicate");
          else {
            cuts.push(snappedAngle);
            acceptedCut = true;
          }
        }
      } else showHint("complete");
    }
    if (acceptedCut) {
      renderMission();
      drawPizza();
      playVariantSound("cutter", "slice");
      showVariantEffect(point, stats.shop.activeTheme === "custom" ? "custom" : stats.shop.equipped.cutter);
    }
    pointerStart = null;
    hideCutterSoon();
  });
  canvas.addEventListener("pointercancel", () => {
    pointerStart = null; isDrawing = false;
    $("#cutterCursor").classList.remove("active");
    hideCutterSoon();
  });
  function angDist(a, b) { const d = Math.abs(a - b) % (Math.PI * 2); return Math.min(d, Math.PI * 2 - d); }
  function showHint(kind) {
    const hint = $("#cutHint");
    if (kind === "need-center") hint.textContent = t("bubbleCut");
    else if (kind === "need-bar-edge") hint.textContent = t("chocolateHint");
    else if (kind === "need-edge") hint.textContent = t("closeHint");
    else if (kind === "duplicate") hint.textContent = t("closeHint");
    else if (kind === "complete") hint.textContent = t("cutsComplete");
    else hint.textContent = mission().food === "chocolate" ? t("chocolateNeedCuts") : t("needCuts", { swipes: swipeText(swipesLeft(), true) });
    hint.animate([{ transform: "translateX(-50%) scale(1)" }, { transform: "translateX(-50%) scale(1.05)" }, { transform: "translateX(-50%) scale(1)" }], { duration: 280 });
  }
  function tagMisconception(key) {
    stats.misconceptions[key] = (stats.misconceptions[key] || 0) + 1;
    const current = mission();
    if (!replayedMisconceptions.has(key) && replayQueue.length < 3) {
      replayedMisconceptions.add(key);
      const nextFood = foods[(foods.indexOf(current.food) + 1) % foods.length];
      replayQueue.push({ denominator: current.denominator, food: nextFood, focus: key });
      roundTotal++;
    }
    saveStats();
  }
  function showStackHint() {
    const overlay = $("#stackOverlay");
    const count = mission().denominator;
    overlay.innerHTML = `<strong>${t("hintUnequal")}</strong><div class="stack-pieces" aria-hidden="true">${Array.from({ length: count }, () => "<span></span>").join("")}</div>`;
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("hidden"), 2400);
  }
  function equalParts() {
    if (mission().food === "chocolate") {
      return { equal: cuts.includes("horizontal") && cuts.includes("vertical"), missing: cuts.length !== 2 };
    }
    const required = requiredCuts();
    if (cuts.length !== required) return { equal: false, missing: true };
    const angles = cuts.map((angle) => ((angle + Math.PI * 2) % (Math.PI * 2))).sort((a,b) => a-b);
    const gaps = angles.map((angle, i) => {
      const next = angles[(i + 1) % angles.length] + (i === angles.length - 1 ? Math.PI * 2 : 0);
      return next - angle;
    });
    const ideal = Math.PI * 2 / required;
    return { equal: gaps.every((gap) => Math.abs(gap - ideal) <= ideal * .2), missing: false, gaps };
  }
  $("#undoButton").addEventListener("click", () => {
    if (mission().food !== "chocolate" && mission().denominator % 2 === 0) cuts.splice(-2);
    else cuts.pop();
    drawPizza();
    renderMission();
  });
  $("#checkButton").addEventListener("click", checkCuts);
  function checkCuts() {
    if (cuts.length !== requiredCuts()) {
      showHint("need-cuts");
      $("#instruction").textContent = mission().food === "chocolate" ? t("chocolateNeedCuts") : t("needCuts", { swipes: swipeText(swipesLeft(), true) });
      retrigger($("#gameCard"), "shake");
      return;
    }
    if (!equalParts().equal) {
      mistakes.unequal++;
      tagMisconception("unequalParts");
      breakStreak();
      retrigger($("#gameCard"), "shake");
      const fairnessHint = mission().food === "chocolate" ? t("chocolateUnequal") : (mistakes.unequal > 1 ? t("hintUnequal") : t("equalHint"));
      $("#cutHint").textContent = fairnessHint;
      $("#instruction").textContent = mission().food === "chocolate" ? fairnessHint : (mistakes.unequal > 1 ? t("hintUnequal") : t("closeHint"));
      setBolt("thinking", t("wrongCut"));
      playTone(180, .22, "sine", .045);
      if (mistakes.unequal > 1) showStackHint();
      return;
    }
    stats.skills.equal++;
    saveStats();
    retrigger($("#pizzaWrap"), "correct");
    $("#cutActions").classList.add("hidden");
    $("#teachPanel").classList.remove("hidden");
    activeQuestion = mission().food === "chocolate" ? chocolateQuestion() : nextQuestion();
    questionKind = activeQuestion.kind;
    setupQuestion();
    setBolt("excited", t("bubbleEqual"));
    playCorrect();
  }
  function setupQuestion() {
    $("#chefClaim").classList.remove("hidden");
    $("#answerGrid").classList.remove("hidden");
    $("#feedback").classList.remove("hidden");
    $("#feedback").textContent = "";
    $("#nextButton").classList.add("hidden");
    $("#questionHelpButton").classList.remove("hidden");
    $("#questionSolution").classList.add("hidden");
    $("#questionHelpButton").setAttribute("aria-expanded", "false");
    $("#questionHelpButton").textContent = t("solutionShow");
    quizLocked = false;
    renderQuestionText();
    $("#answerGrid").replaceChildren(...activeQuestion.choices.map((choice) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.dataset.correct = String(choice.correct);
      button.dataset.choiceIndex = String(activeQuestion.choices.indexOf(choice));
      button.dataset.label = choice.labelKey;
      button.dataset.values = JSON.stringify(choice.values || {});
      button.textContent = t(choice.labelKey, choice.values || {});
      button.addEventListener("click", () => answerQuiz(choice.correct, button));
      return button;
    }));
  }
  function renderQuestionText() {
    if (!activeQuestion) return;
    const values = { ...activeQuestion.values };
    if (values.partNameKey) {
      values.partName = t(values.partNameKey);
      delete values.partNameKey;
    }
    $("#chefClaim").dataset.key = activeQuestion.claimKey;
    $("#chefClaim").dataset.values = JSON.stringify(values);
    $("#chefClaim").textContent = t(activeQuestion.claimKey, values);
    $("#answerGrid").querySelectorAll("button").forEach((answer) => {
      answer.textContent = t(answer.dataset.label, JSON.parse(answer.dataset.values || "{}"));
    });
  }
  function displayFraction(fraction) {
    const [numerator, denominator] = fraction.split("/").map(Number);
    return `${fmtNum(numerator)}/${fmtNum(denominator)}`;
  }
  function renderSolutionSteps(panelId, steps) {
    $(`#${panelId}Title`).textContent = t("solutionTitle");
    $(`#${panelId}Steps`).replaceChildren(...steps.map((step, index) => {
      const item = document.createElement("li");
      item.style.setProperty("--step-index", index);
      item.textContent = step;
      return item;
    }));
  }
  function questionSolutionSteps() {
    const answerChoice = activeQuestion.choices.find((choice) => choice.correct);
    const answer = t(answerChoice.labelKey, answerChoice.values || {});
    if (questionKind === "advanced") {
      const [leftNumerator, leftDenominator] = activeQuestion.values.left.split("/").map(Number);
      const [rightNumerator, rightDenominator] = activeQuestion.values.right.split("/").map(Number);
      const commonDenominator = lcm(leftDenominator, rightDenominator);
      const scaledLeftNumerator = leftNumerator * commonDenominator / leftDenominator;
      const scaledRightNumerator = rightNumerator * commonDenominator / rightDenominator;
      const isAddition = activeQuestion.claimKey === "addFractionsQuestion";
      const numerator = isAddition
        ? scaledLeftNumerator + scaledRightNumerator
        : scaledLeftNumerator - scaledRightNumerator;
      const simplified = simplifyFraction(numerator, commonDenominator);
      const rawResult = `${fmtNum(numerator)}/${fmtNum(commonDenominator)}`;
      return [
        t("solutionCommonDenominator", {
          leftDenominator: fmtNum(leftDenominator),
          rightDenominator: fmtNum(rightDenominator),
          commonDenominator: fmtNum(commonDenominator)
        }),
        t("solutionRewrite", {
          left: displayFraction(activeQuestion.values.left),
          scaledLeft: `${fmtNum(scaledLeftNumerator)}/${fmtNum(commonDenominator)}`,
          right: displayFraction(activeQuestion.values.right),
          scaledRight: `${fmtNum(scaledRightNumerator)}/${fmtNum(commonDenominator)}`
        }),
        t("solutionCombine", {
          operation: t(isAddition ? "solutionAddition" : "solutionSubtraction"),
          symbol: isAddition ? "+" : "−",
          scaledLeft: `${fmtNum(scaledLeftNumerator)}/${fmtNum(commonDenominator)}`,
          scaledRight: `${fmtNum(scaledRightNumerator)}/${fmtNum(commonDenominator)}`,
          rawResult
        }),
        t("solutionSimplify", {
          rawResult,
          answer: `${fmtNum(simplified.numerator)}/${fmtNum(simplified.denominator)}`
        })
      ];
    }
    if (questionKind === "fraction") {
      const { numerator, denominator } = activeQuestion.values;
      return [
        t("solutionFractionWhole", { denominator: fmtNum(denominator) }),
        t("solutionFractionCount", { numerator: fmtNum(numerator) }),
        t("solutionFractionAnswer", { answer: displayFraction(`${numerator}/${denominator}`) })
      ];
    }
    if (questionKind === "compare") {
      const [leftNumerator, leftDenominator] = activeQuestion.values.left.split("/").map(Number);
      const [rightNumerator, rightDenominator] = activeQuestion.values.right.split("/").map(Number);
      const commonDenominator = lcm(leftDenominator, rightDenominator);
      const scaledLeftNumerator = leftNumerator * commonDenominator / leftDenominator;
      const scaledRightNumerator = rightNumerator * commonDenominator / rightDenominator;
      const correctFraction = answerChoice.values.fraction;
      return [
        t("solutionCompareDenominator", {
          left: displayFraction(activeQuestion.values.left),
          scaledLeft: `${fmtNum(scaledLeftNumerator)}/${fmtNum(commonDenominator)}`,
          right: displayFraction(activeQuestion.values.right),
          scaledRight: `${fmtNum(scaledRightNumerator)}/${fmtNum(commonDenominator)}`
        }),
        t("solutionCompareNumerator", {
          leftNumerator: fmtNum(scaledLeftNumerator),
          rightNumerator: fmtNum(scaledRightNumerator),
          answer: displayFraction(correctFraction)
        })
      ];
    }
    if (questionKind === "equivalent") {
      const [leftNumerator, leftDenominator] = activeQuestion.values.left.split("/").map(Number);
      const [rightNumerator, rightDenominator] = activeQuestion.values.right.split("/").map(Number);
      const leftProduct = leftNumerator * rightDenominator;
      const rightProduct = rightNumerator * leftDenominator;
      return [
        t("solutionEquivalentProducts", {
          leftNumerator: fmtNum(leftNumerator),
          rightDenominator: fmtNum(rightDenominator),
          leftProduct: fmtNum(leftProduct),
          rightNumerator: fmtNum(rightNumerator),
          leftDenominator: fmtNum(leftDenominator),
          rightProduct: fmtNum(rightProduct)
        }),
        t("solutionEquivalentConclusion", {
          relation: t(leftProduct === rightProduct ? "solutionProductsSame" : "solutionProductsDifferent"),
          answer
        })
      ];
    }
    if (questionKind === "chocolate") {
      return [
        t("solutionChocolateIntro"),
        t("solutionChocolateAnswer", {
          fraction: displayFraction(activeQuestion.values.fraction),
          answer
        })
      ];
    }
    if (questionKind === "parts") return [t("solutionPartName", { answer })];
    if (questionKind === "numerator" || questionKind === "denominator") {
      const [numerator, denominator] = activeQuestion.values.fraction.split("/").map(Number);
      return [
        t("solutionPosition", {
          fraction: displayFraction(activeQuestion.values.fraction),
          numerator: fmtNum(numerator),
          denominator: fmtNum(denominator)
        }),
        t("solutionPositionAnswer", {
          part: t(questionKind === "numerator" ? "numeratorLabel" : "denominatorLabel"),
          answer
        })
      ];
    }
    if (questionKind === "fair") return [t("solutionFair", { answer })];
    return [t("solutionGeneric", { answer })];
  }
  function toggleSolution(panelId, buttonId, steps) {
    const panel = $(`#${panelId}`);
    const button = $(`#${buttonId}`);
    const opening = panel.classList.contains("hidden");
    if (opening) renderSolutionSteps(panelId, steps);
    panel.classList.toggle("hidden", !opening);
    button.setAttribute("aria-expanded", String(opening));
    button.textContent = t(opening ? "solutionHide" : "solutionShow");
  }
  $("#questionHelpButton").addEventListener("click", () =>
    toggleSolution("questionSolution", "questionHelpButton", questionSolutionSteps())
  );
  $("#changeHelpButton").addEventListener("click", () => {
    if (!activeChangeChallenge) return;
    const challenge = activeChangeChallenge;
    const total = challenge.first + challenge.second;
    toggleSolution("changeSolution", "changeHelpButton", [
      t("solutionChangeAdd", {
        first: fmtNum(challenge.first),
        second: fmtNum(challenge.second),
        total: fmtNum(total)
      }),
      t("solutionChangeSubtract", {
        paid: fmtNum(challenge.paid),
        total: fmtNum(total),
        change: fmtNum(challenge.change)
      })
    ]);
  });
  function answerQuiz(correct, button) {
    if (quizLocked) return;
    if (!correct) {
      mistakes.compare++;
      const misconception = questionKind === "compare" ? "biggerDenominator" : questionKind === "equivalent" ? "halfQuarter" : "unequalParts";
      tagMisconception(misconception);
      breakStreak();
      $("#feedback").textContent = t("encouragement");
      retrigger($("#gameCard"), "shake");
      setBolt("thinking", t("repeatHint"));
      playTone(180, .22, "sine", .045);
      const hintKey = questionKind === "compare" ? "hintCompare" : questionKind === "equivalent" ? "hintSame" : questionKind === "chocolate" ? "chocolateUnequal" : "hintFair";
      $("#feedback").textContent = `${t("encouragement")} ${t(hintKey)}`;
      button.animate([{ transform: "translateX(0)" }, { transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(0)" }], { duration: 300 });
      return;
    }
    quizLocked = true;
    $("#answerGrid").querySelectorAll("button").forEach((answer) => { answer.disabled = true; });
    $("#feedback").textContent = questionKind === "chocolate"
      ? t("chocolateTeach", { fraction: mission().fraction })
      : t("rightTeach");
    $("#chefClaim").classList.add("hidden");
    $("#answerGrid").classList.add("hidden");
    $("#questionHelpButton").classList.add("hidden");
    $("#questionSolution").classList.add("hidden");
    $("#questionHelpButton").setAttribute("aria-expanded", "false");
    orderStage = "ready";
    renderOrderFlow();
    stats.skills[skillKey(mission().denominator)]++;
    streak++;
    stats.bestStreak = Math.max(stats.bestStreak, streak);
    if (streak > 0 && streak % 3 === 0) setTimeout(() => showToast(t("streakBonus", { n: 3 })), 500);
    gainXp(10);
    checkTrophies();
    setBolt("excited", questionKind === "chocolate" ? t("chocolateTeach", { fraction: mission().fraction }) : t("rightTeach"));
    showToast("+10 XP");
    playCorrect();
    $("#pizzaWrap").classList.add("correct");
  }
  function breakStreak() {
    streak = 0;
    updateProgress();
  }
  $("#nextButton").addEventListener("click", () => {
    if (orderStage === "ready") startOrderFlow();
    else if (orderStage === "served") advanceRound();
  });
  function createChangeChallenge() {
    const priceRanges = [[4, 3], [6, 4], [9, 6], [12, 8], [15, 12]];
    const tier = Math.min(priceRanges.length - 1, Math.floor((currentLevel() - 1) / 3));
    const [firstMaximum, secondMaximum] = priceRanges[tier];
    const first = randomInteger(1, firstMaximum);
    const second = randomInteger(1, secondMaximum);
    const total = first + second;
    const payments = [10, 20, ...(currentLevel() >= 13 ? [50] : [])].filter((payment) => payment >= total);
    const paid = payments[Math.floor(Math.random() * payments.length)];
    const change = paid - total;
    const choices = new Set([change, Math.max(0, change - 1), change + 1, change + 2]);
    while (choices.size < 4) choices.add(Math.max(...choices) + 1);
    return {
      first, second, paid, change,
      choices: shuffle([...choices])
    };
  }
  function renderChangeChallenge() {
    if (!activeChangeChallenge) return;
    const challenge = activeChangeChallenge;
    $("#changePrompt").textContent = t("changeQuestion", {
      first: fmtNum(challenge.first),
      second: fmtNum(challenge.second),
      paid: fmtNum(challenge.paid)
    });
    $("#changeFeedback").textContent = changeFeedbackKey ? t(changeFeedbackKey, changeFeedbackValues) : "";
    $("#changeAnswerGrid").replaceChildren(...challenge.choices.map((choice) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.textContent = fmtNum(choice);
      button.disabled = changeChallengeLocked;
      button.addEventListener("click", () => answerChange(choice));
      return button;
    }));
  }
  function answerChange(choice) {
    if (orderStage !== "change" || changeChallengeLocked || !activeChangeChallenge) return;
    if (choice !== activeChangeChallenge.change) {
      changeFeedbackKey = "changeTry";
      changeFeedbackValues = {
        first: fmtNum(activeChangeChallenge.first),
        second: fmtNum(activeChangeChallenge.second),
        paid: fmtNum(activeChangeChallenge.paid)
      };
      renderChangeChallenge();
      retrigger($("#gameCard"), "shake");
      setBolt("thinking", t("repeatHint"));
      playTone(180, .22, "sine", .045);
      return;
    }
    changeChallengeLocked = true;
    changeFeedbackKey = "changeCorrect";
    changeFeedbackValues = { change: fmtNum(activeChangeChallenge.change) };
    renderChangeChallenge();
    const token = orderFlowToken;
    setBolt("excited", t("changeCorrect", changeFeedbackValues));
    playCorrect();
    setTimeout(() => {
      if (token === orderFlowToken && orderStage === "change") runOrderStage("packing", token);
    }, 700);
  }
  function renderOrderFlow() {
    const flow = $("#orderFlow");
    const button = $("#nextButton");
    if (orderStage === "idle") {
      flow.classList.add("hidden");
      flow.removeAttribute("data-stage");
      return;
    }
    if (orderStage === "ready") {
      flow.classList.add("hidden");
      flow.removeAttribute("data-stage");
      button.textContent = t("bakeOrder");
      button.classList.remove("hidden");
      return;
    }
    flow.classList.remove("hidden");
    flow.dataset.stage = orderStage;
    const isChangeStage = orderStage === "change";
    $("#changeChallenge").classList.toggle("hidden", !isChangeStage);
    $("#flowTrack").classList.toggle("hidden", isChangeStage);
    $("#flowSteps").classList.toggle("hidden", isChangeStage);
    $("#flowTrack").setAttribute("aria-label", t("orderProgress"));
    const stages = {
      baking: ["bakingTitle", "bakingMessage"],
      change: ["changeTitle", "changeMessage"],
      packing: ["packingTitle", "packingMessage"],
      delivering: ["deliveringTitle", "deliveringMessage"],
      served: ["servedTitle", "servedMessage"]
    };
    const [titleKey, messageKey] = stages[orderStage];
    const flowIcons = {
      change: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M15 8.5c-.7-.7-1.6-1-2.8-1-1.4 0-2.4.7-2.4 1.8 0 2.8 5.2 1.2 5.2 4.3 0 1.2-1.1 2-2.7 2-1.1 0-2.2-.4-3-1.2M12 6v12"></path></svg>',
      packing: '<svg viewBox="0 0 24 24"><path d="m3 7 9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10M7.5 5l9 4"></path></svg>',
      delivering: '<svg viewBox="0 0 24 24"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 10h5"></path></svg>',
      served: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 2.5 2.5L16.5 9"></path></svg>'
    };
    $("#flowOven").classList.toggle("hidden", orderStage !== "baking");
    $("#flowOven").src = gearPath(stats.shop.activeTheme === "custom" ? "custom" : stats.shop.equipped.oven, "oven");
    $("#flowIcon").classList.toggle("hidden", orderStage === "baking");
    $("#flowIcon").innerHTML = flowIcons[orderStage] || "";
    $("#flowTitle").textContent = t(titleKey);
    $("#flowMessage").textContent = orderStage === "served"
      ? t(messageKey, { coins: orderCoinReward })
      : t(messageKey);
    const activeIndex = ["baking", "packing", "delivering"].indexOf(orderStage);
    document.querySelectorAll("[data-flow-step]").forEach((step, index) => {
      step.classList.toggle("done", orderStage === "served" || index < activeIndex);
      step.classList.toggle("active", index === activeIndex);
    });
    if (orderStage === "served") {
      $("#flowProgress").style.width = "100%";
      $("#flowTrack").setAttribute("aria-valuenow", "100");
      button.textContent = t("next");
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
    if (isChangeStage) renderChangeChallenge();
  }
  const orderCoinReward = 5;
  function startOrderFlow() {
    if (orderStage !== "ready") return;
    const token = ++orderFlowToken;
    runOrderStage("baking", token);
  }
  function runOrderStage(stage, token) {
    orderStage = stage;
    if (stage === "change") {
      activeChangeChallenge = createChangeChallenge();
      changeChallengeLocked = false;
      changeFeedbackKey = "";
      changeFeedbackValues = {};
      $("#changeSolution").classList.add("hidden");
      $("#changeHelpButton").setAttribute("aria-expanded", "false");
      $("#changeHelpButton").textContent = t("solutionShow");
    }
    renderOrderFlow();
    if (stage === "change") return;
    if (stage === "baking") playVariantSound("oven", "start");
    if (stage === "delivering") playVariantSound("food", "deliver");
    const progress = $("#flowProgress"), track = $("#flowTrack");
    const duration = stage === "baking" ? variantFor(stats.shop.equipped.oven).bakeMs : 1250;
    progress.style.width = "0";
    progress.style.transitionDuration = `${duration}ms`;
    track.setAttribute("aria-valuenow", "0");
    void progress.offsetWidth;
    requestAnimationFrame(() => {
      if (token !== orderFlowToken) return;
      progress.style.width = "100%";
    });
    setTimeout(() => {
      if (token !== orderFlowToken) return;
      if (stage === "baking") runOrderStage("change", token);
      else if (stage === "packing") runOrderStage("delivering", token);
      else finishOrderFlow();
    }, duration);
  }
  function finishOrderFlow() {
    orderStage = "served";
    let reward = orderCoinReward;
    if (stats.boost > 0) {
      stats.boost--;
      reward *= 2;
      if (stats.boost > 0) showToast(t("boostActive", { n: stats.boost }), true);
    }
    stats.coins += reward;
    stats.rounds++;
    stats.wheel.sinceLast++;
    if (stats.wheel.sinceLast >= 2) {
      stats.wheel.sinceLast = 0;
      if (stats.wheel.charges < 3) {
        stats.wheel.charges++;
        setTimeout(() => showToast(t("wheelCharge"), true), 800);
      }
    }
    updateProgress();
    saveStats();
    checkTrophies();
    renderOrderFlow();
    showToast(t("coinsEarned", { coins: reward }));
    showVariantEffect({ x: canvas.width / 2, y: canvas.height / 2 }, stats.shop.equipped.food);
    setBolt("excited", t("servedTitle"));
    playCorrect();
  }
  function advanceRound() {
    if (roundIndex + 1 >= roundTotal) { showCompletion(); return; }
    orderFlowToken++;
    orderStage = "idle";
    activeChangeChallenge = null;
    changeChallengeLocked = false;
    changeFeedbackKey = "";
    roundIndex++;
    currentOrder = replayQueue.length ? replayQueue.shift() : baseMission();
    cuts = [];
    guideVisible = false;
    $("#teachPanel").classList.add("hidden");
    $("#orderFlow").classList.add("hidden");
    $("#cutActions").classList.remove("hidden");
    $("#pizzaWrap").classList.remove("correct");
    $("#levelLesson").classList.add("hidden");
    lessonLevel = 0;
    $("#cutHint").textContent = t("cutHint", { swipes: swipeText(swipesNeeded()) });
    renderMission();
    drawPizza();
    const food = mission().food;
    if (!showLessonIfNeeded()) {
      setBolt("normal", t("cutAgain", { food: t(food) }));
      $("#instruction").textContent = t("pickFood");
    }
  }

  function applyGearAppearance() {
    const { shop } = stats;
    document.body.dataset.variant = shop.activeTheme;
    document.body.dataset.theme = shop.activeTheme;
    const customTheme = shop.activeTheme === "custom";
    const themeProperties = ["--custom-cutter", "--custom-oven", "--custom-food", "--custom-cream", "--custom-dot", "--custom-text", "--custom-heading", "--custom-background"];
    if (customTheme) {
      const { cutter: red, oven: yellow, food: teal, text, heading, background } = shop.customColors;
      document.body.style.setProperty("--custom-cutter", red);
      document.body.style.setProperty("--custom-oven", yellow);
      document.body.style.setProperty("--custom-food", teal);
      document.body.style.setProperty("--custom-cream", mixColorWithWhite(background, .91));
      document.body.style.setProperty("--custom-dot", mixColorWithWhite(red, .63));
      document.body.style.setProperty("--custom-text", text);
      document.body.style.setProperty("--custom-heading", heading);
      document.body.style.setProperty("--custom-background", background);
      document.body.style.setProperty("--coral", red);
      document.body.style.setProperty("--pink", red);
      document.body.style.setProperty("--yellow", yellow);
      document.body.style.setProperty("--blue", teal);
      document.body.style.setProperty("--teal", teal);
      document.body.style.setProperty("--green", teal);
      document.body.style.setProperty("--cream", background);
      document.body.style.setProperty("--paper", mixColorWithWhite(yellow, .96));
    } else {
      for (const property of [...themeProperties, "--coral", "--pink", "--yellow", "--blue", "--teal", "--green", "--cream", "--paper"]) {
        document.body.style.removeProperty(property);
      }
    }
    const cutter = customTheme ? "custom" : shop.equipped.cutter;
    const oven = customTheme ? "custom" : shop.equipped.oven;
    $("#cutterCursor").src = gearPath(cutter, "cutter");
    $("#equippedCutter").src = gearPath(cutter, "cutter");
    $("#equippedOven").src = gearPath(oven, "oven");
    $("#equippedCutter").alt = customTheme ? t("colorCutter") : `${t("cutterItem")}: ${t(variantFor(cutter).nameKey)}`;
    $("#equippedOven").alt = customTheme ? t("colorOven") : `${t("ovenItem")}: ${t(variantFor(oven).nameKey)}`;
    drawPizza();
    updateMatrixRain();
  }
  function resizeMatrixCanvas() {
    const rain = $("#matrixRain");
    matrixDpr = Math.min(window.devicePixelRatio || 1, 2);
    rain.width = Math.round(window.innerWidth * matrixDpr);
    rain.height = Math.round(window.innerHeight * matrixDpr);
    const rainContext = rain.getContext("2d");
    rainContext.setTransform(matrixDpr, 0, 0, matrixDpr, 0, 0);
    // one rain column every 18px
    matrixDrops = Array.from({ length: Math.ceil(window.innerWidth / 18) }, () =>
      Math.random() * -window.innerHeight / 20
    );
  }
  function updateMatrixRain() {
    if (document.body.dataset.theme === "matrix" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !document.hidden) {
      if (!matrixFrame) {
        resizeMatrixCanvas();
        matrixFrame = requestAnimationFrame(drawMatrixRain);
      }
      return;
    }
    if (matrixFrame) cancelAnimationFrame(matrixFrame);
    matrixFrame = 0;
    const rainContext = $("#matrixRain").getContext("2d");
    rainContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  function drawMatrixRain() {
    if (document.body.dataset.theme !== "matrix" || document.hidden) {
      matrixFrame = 0;
      return;
    }
    const rainContext = $("#matrixRain").getContext("2d");
    rainContext.fillStyle = "rgba(2, 11, 5, .12)";
    rainContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
    rainContext.font = "15px monospace";
    const glyphs = "01{}[]<>/\\#";
    matrixDrops.forEach((drop, index) => {
      const x = index * 18;
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      rainContext.fillStyle = Math.random() > .985 ? "#d9ffe1" : "#32ff68";
      rainContext.fillText(glyph, x, drop * 18);
      if (drop * 18 > window.innerHeight && Math.random() > .975) matrixDrops[index] = 0;
      else matrixDrops[index] += .35 + Math.random() * .5;
    });
    matrixFrame = requestAnimationFrame(drawMatrixRain);
  }
  window.addEventListener("resize", () => {
    if (document.body.dataset.theme === "matrix") resizeMatrixCanvas();
  });
  document.addEventListener("visibilitychange", updateMatrixRain);
  window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change", updateMatrixRain);
  function openShop() {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.dataset.modal = "shop";
    $("#overlayRoot").replaceChildren(backdrop);
    renderShop();
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop || event.target.closest("[data-shop-close]")) $("#overlayRoot").replaceChildren();
    });
  }
  function renderShop() {
    const backdrop = $(".modal-backdrop[data-modal='shop']");
    if (!backdrop) return;
    const owned = new Set(stats.shop.owned);
    const cards = variants.map((variant) => {
      const itemCards = gearKinds.map((kind) => {
        const id = gearId(variant.id, kind);
        const isOwned = owned.has(id);
        const isEquipped = stats.shop.equipped[kind] === variant.id;
        const price = variant[`${kind}Price`];
        const perk = kind === "oven"
          ? t("ovenPerk", { speed: Math.round((1 - variant.bakeMs / variants[0].bakeMs) * 100) })
          : t(kind === "cutter" ? "cutterPerk" : "foodPerk", { speed: Math.round((1 - variant.dragLimit / variants[0].dragLimit) * 100) });
        const actionLabel = isEquipped ? t("equipped") : isOwned ? t("equip") : `${t("buy")} · ${fmtNum(price)} ${t("coins")}`;
        const action = isEquipped ? "equipped" : isOwned ? "equip" : "buy";
        return `<div class="shop-item">
          <img src="${gearPath(variant.id, kind)}" alt="">
          <strong>${t(`${kind}Item`)}</strong><small>${perk}</small>
          <button class="toy-button secondary" data-gear-action="${action}" data-variant="${variant.id}" data-kind="${kind}" ${isEquipped ? "disabled" : ""}>${actionLabel}</button>
        </div>`;
      }).join("");
      const complete = gearKinds.every((kind) => owned.has(gearId(variant.id, kind)));
      const active = stats.shop.activeTheme === variant.id;
      const pieces = gearKinds.filter((kind) => owned.has(gearId(variant.id, kind))).length;
      const themeControl = !complete
        ? `<button class="theme-button" disabled>${t("themeProgress", { owned: pieces })}</button>`
        : `<button class="theme-button" data-gear-action="theme" data-variant="${variant.id}" ${active ? "disabled" : ""}>${active ? t("themeActive") : t("applyTheme")}</button>`;
      const readyMessage = complete ? `<p class="variant-set-status">${t("themeReady")}</p>` : "";
      return `<section class="variant-card" aria-labelledby="variant-${variant.id}">
        <div class="variant-heading"><h3 id="variant-${variant.id}">${t(variant.nameKey)}</h3>${themeControl}</div>
        <p class="variant-set-status">${t(variant.blurbKey)}</p>
        <div class="variant-items">${itemCards}</div>${readyMessage}
      </section>`;
    }).join("");
    const hasMatrix = matrixUnlocked(owned);
    const matrixCard = `<section class="variant-card" aria-labelledby="variant-matrix">
      <div class="variant-heading"><h3 id="variant-matrix">${t("matrixName")}</h3>
        ${hasMatrix
          ? `<button class="theme-button" data-gear-action="theme" data-variant="matrix" ${stats.shop.activeTheme === "matrix" ? "disabled" : ""}>${stats.shop.activeTheme === "matrix" ? t("matrixActive") : t("applyTheme")}</button>`
          : `<button class="theme-button" disabled>${t("matrixLocked")}</button>`}
      </div>
      <p class="variant-set-status">${t("matrixDescription")}</p>
      <div class="matrix-preview" aria-hidden="true">0101　{ }　0110　[ ]　1010</div>
      ${hasMatrix ? `<p class="variant-set-status">${t("matrixReady")}</p>` : ""}
    </section>`;
    const themeName = (id) => t(`theme${id[0].toUpperCase()}${id.slice(1)}`);
    const themeCards = `<section class="variant-card" aria-labelledby="variant-colors">
      <div class="variant-heading"><h3 id="variant-colors">${t("themeColorsTitle")}</h3></div>
      <p class="variant-set-status">${t("themeColorsIntro")}</p>
      <div class="theme-color-grid">${bonusThemes.map((theme) => {
        const owned = stats.shop.ownedThemes.includes(theme.id);
        const active = stats.shop.activeTheme === theme.id;
        const control = active
          ? `<button class="theme-button" disabled>${t("themeActive")}</button>`
          : owned
            ? `<button class="theme-button" data-gear-action="theme" data-variant="${theme.id}">${t("applyTheme")}</button>`
            : `<button class="theme-button" data-gear-action="buy-theme" data-variant="${theme.id}">${t("themeBuy", { price: fmtNum(theme.price) })}</button>`;
        return `<div class="theme-color-card">
          <span class="theme-swatch" aria-hidden="true">${theme.swatch.map((color) => `<i style="background:${color}"></i>`).join("")}</span>
          <strong>${themeName(theme.id)}</strong>${control}
        </div>`;
      }).join("")}</div>
    </section>`;
    const customUnlocked = stats.shop.customUnlocked;
    const customActive = stats.shop.activeTheme === "custom";
    const customEligible = canUnlockCustomTheme();
    const customControls = customUnlocked
      ? `<div class="custom-color-grid">${customColorKeys.map((kind) =>
          `<label class="custom-color-control">${t(`color${kind[0].toUpperCase()}${kind.slice(1)}`)}
            <input type="color" data-custom-color="${kind}" aria-label="${t(`color${kind[0].toUpperCase()}${kind.slice(1)}`)}" value="${stats.shop.customColors[kind]}">
          </label>`
        ).join("")}</div>`
      : `<p class="variant-set-status">${t("customLocked")}</p>`;
    const customCard = `<section class="variant-card" aria-labelledby="variant-custom">
      <div class="variant-heading"><h3 id="variant-custom">${t("customName")}</h3>
        ${customUnlocked
          ? `<button class="theme-button" data-gear-action="theme" data-variant="custom" ${customActive ? "disabled" : ""}>${customActive ? t("customActive") : t("customApply")}</button>`
          : `<button class="theme-button" data-gear-action="unlock-custom" ${customEligible ? "" : "disabled"}>${t("customUnlock")}</button>`}
      </div>
      <p class="variant-set-status">${t("customDescription")}</p>
      ${customControls}
    </section>`;
    backdrop.innerHTML = `<section class="modal shop-modal" role="dialog" aria-modal="true" aria-labelledby="shopTitle">
      <div class="shop-heading"><h2 id="shopTitle">${t("shopTitle")}</h2><span class="coin-pouch"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M15 8.5c-.7-.7-1.6-1-2.8-1-1.4 0-2.4.7-2.4 1.8 0 2.8 5.2 1.2 5.2 4.3 0 1.2-1.1 2-2.7 2-1.1 0-2.2-.4-3-1.2M12 6v12"></path></svg><span>${stats.coins}</span></span></div>
      <p class="shop-intro">${t("shopIntro")}</p>${cards}${themeCards}${matrixCard}${customCard}
      <div class="modal-actions"><button class="toy-button primary" data-shop-close>${t("closeShop")}</button></div>
    </section>`;
    backdrop.querySelectorAll("[data-gear-action]").forEach((button) => {
      button.addEventListener("click", () => handleGearAction(button.dataset.gearAction, button.dataset.variant, button.dataset.kind));
    });
    backdrop.querySelectorAll("[data-custom-color]").forEach((input) => {
      input.addEventListener("input", () => {
        const kind = input.dataset.customColor;
        if (!customColorKeys.includes(kind) || !isHexColor(input.value)) return;
        stats.shop.customColors[kind] = input.value;
        if (stats.shop.activeTheme === "custom") applyGearAppearance();
        saveStats();
      });
    });
  }
  function handleGearAction(action, variantId, kind) {
    if (action === "buy-theme") {
      const theme = bonusThemeFor(variantId);
      if (!theme || stats.shop.ownedThemes.includes(theme.id)) return;
      if (stats.coins < theme.price) {
        showToast(t("noCoins"), true);
        return;
      }
      addCoins(-theme.price);
      stats.shop.ownedThemes.push(theme.id);
      saveStats();
      renderShop();
      checkTrophies();
      showToast(t("themeReady"), true);
      return;
    }
    if (action === "theme" && bonusThemeIds.has(variantId)) {
      if (!stats.shop.ownedThemes.includes(variantId)) return;
      stats.shop.activeTheme = variantId;
      applyGearAppearance();
      saveStats();
      renderShop();
      showToast(t("themeActive"), true);
      return;
    }
    if (action === "unlock-custom") {
      if (stats.shop.customUnlocked) return;
      if (!canUnlockCustomTheme()) {
        showToast(t("customLocked"), true);
        return;
      }
      stats.coins -= 100;
      stats.shop.customUnlocked = true;
      updateProgress();
      saveStats();
      renderShop();
      playFanfare();
      showToast(t("customUnlocked"), true);
      return;
    }
    if (action === "theme" && variantId === "matrix") {
      if (!matrixUnlocked(new Set(stats.shop.owned))) return;
      stats.shop.activeTheme = "matrix";
      applyGearAppearance();
      saveStats();
      renderShop();
      showToast(t("matrixActive"), true);
      return;
    }
    if (action === "theme" && variantId === "custom") {
      if (!stats.shop.customUnlocked) return;
      stats.shop.activeTheme = "custom";
      applyGearAppearance();
      saveStats();
      renderShop();
      showToast(t("customActive"), true);
      return;
    }
    const variant = variants.find((entry) => entry.id === variantId);
    if (!variant) return;
    if (action === "buy" && gearKinds.includes(kind)) {
      const id = gearId(variant.id, kind);
      if (stats.shop.owned.includes(id)) return;
      const price = variant[`${kind}Price`];
      if (stats.coins < price) {
        showToast(t("noCoins"), true);
        return;
      }
      const matrixWasUnlocked = matrixUnlocked(new Set(stats.shop.owned));
      stats.coins -= price;
      stats.shop.owned.push(id);
      const nowComplete = gearKinds.every((gearKind) => stats.shop.owned.includes(gearId(variant.id, gearKind)));
      const matrixNowUnlocked = !matrixWasUnlocked && matrixUnlocked(new Set(stats.shop.owned));
      updateProgress();
      saveStats();
      checkTrophies();
      renderShop();
      showToast(t(matrixNowUnlocked ? "matrixReady" : nowComplete ? "themeUnlockedToast" : "buySuccess"), nowComplete || matrixNowUnlocked);
      return;
    }
    if (action === "equip" && gearKinds.includes(kind)) {
      const id = gearId(variant.id, kind);
      if (!stats.shop.owned.includes(id)) return;
      stats.shop.equipped[kind] = variant.id;
      stats.shop.activeVariant = variant.id;
      stats.shop.activeTheme = "classic";
      applyGearAppearance();
      saveStats();
      renderShop();
      return;
    }
    if (action === "theme" && gearKinds.every((gearKind) => stats.shop.owned.includes(gearId(variant.id, gearKind)))) {
      stats.shop.equipped = { cutter: variant.id, oven: variant.id, food: variant.id };
      stats.shop.activeVariant = variant.id;
      stats.shop.activeTheme = variant.id;
      applyGearAppearance();
      saveStats();
      renderShop();
      showToast(t("themeReady"));
    }
  }

  // remove the class, force a reflow, add it back: that restarts a CSS animation
  function retrigger(element, className) {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
  }
  function setBolt(mood, message) {
    const bolt = $("#bolt");
    bolt.classList.remove("excited", "thinking");
    bolt.src = bolt.dataset.still;
    if (mood !== "normal") { void bolt.getBoundingClientRect(); bolt.classList.add(mood); }
    $("#bubble").textContent = message;
  }
  function showToast(message, level = false) {
    const toast = document.createElement("div");
    toast.className = `toast${level ? " level-toast" : ""}`;
    toast.textContent = message; $("#toastRoot").append(toast);
    setTimeout(() => toast.remove(), 1100);
    if (!level) confetti();
  }
  function confetti() {
    const colors = stats.shop.activeTheme === "custom"
      ? [stats.shop.customColors.cutter, stats.shop.customColors.oven, stats.shop.customColors.food]
      : variantFor(stats.shop.activeVariant).colors;
    for (let i = 0; i < 28; i++) {
      const piece = document.createElement("i");
      piece.className = "confetti";
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * .28}s`;
      piece.style.transform = `rotate(${Math.random() * 160}deg)`;
      $("#toastRoot").append(piece);
      setTimeout(() => piece.remove(), 1450);
    }
  }
  function getAudio() {
    if (!audioContext) {
      const AudioCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtor) return null;
      audioContext = new AudioCtor();
    }
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }
  function playTone(frequency, duration, type = "sine", volume = .06) {
    if (!soundOn) return;
    const audio = getAudio();
    if (!audio) return;
    const oscillator = audio.createOscillator(), gain = audio.createGain();
    oscillator.type = type; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(); oscillator.stop(audio.currentTime + duration);
  }
  function playCorrect() {
    const variant = variantFor(stats.shop.activeVariant);
    const type = variant.id === "tech" ? "triangle" : variant.id === "royal" ? "square" : "sine";
    variant.tones.forEach((tone, index) => setTimeout(() => playTone(tone, index === 2 ? .2 : .12, type, .05), index * 100));
  }
  function playFanfare() {
    if (!soundOn) return;
    const audio = getAudio();
    if (!audio) return;
    const start = audio.currentTime + .04;
    const beat = .21;
    const scheduleNote = (frequency, offset, duration, type, volume) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const at = start + offset;
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, at);
      gain.gain.setValueAtTime(.001, at);
      gain.gain.linearRampToValueAtTime(volume, at + .018);
      gain.gain.exponentialRampToValueAtTime(.001, at + duration);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.start(at);
      oscillator.stop(at + duration);
    };
    const bassNotes = [65.41, 65.41, 98, 73.42, 87.31, 65.41, 110, 98];
    bassNotes.forEach((frequency, index) => scheduleNote(frequency, index * beat, .18, "square", .075));
    const brassChords = [
      { at: 0, notes: [261.63, 329.63, 392] },
      { at: beat * 2, notes: [293.66, 369.99, 440] },
      { at: beat * 4, notes: [349.23, 440, 523.25] },
      { at: beat * 6, notes: [392, 493.88, 587.33] }
    ];
    brassChords.forEach(({ at, notes }) =>
      notes.forEach((frequency) => scheduleNote(frequency, at, .24, "sawtooth", .026))
    );
    [523.25, 587.33, 659.25, 783.99, 1046.5].forEach((frequency, index) =>
      scheduleNote(frequency, beat * (index + 2), .16, "square", .035)
    );
  }
  function playVariantSound(kind, action) {
    const variantId = stats.shop.equipped[kind] || stats.shop.activeVariant;
    const variant = variantFor(variantId);
    const type = variant.id === "tech" ? "triangle" : variant.id === "royal" ? "square" : "sine";
    if (action === "slice") {
      playTone(variant.tones[0], .07, type, .035);
      setTimeout(() => playTone(variant.tones[1], .045, type, .025), 55);
    } else if (action === "start") {
      playTone(variant.tones[0] / 2, .18, type, .04);
    } else if (action === "deliver") {
      variant.tones.slice(1).forEach((tone, index) => setTimeout(() => playTone(tone, .14, type, .045), index * 90));
    }
  }
  function showVariantEffect(point, variantId) {
    const wrap = $("#pizzaWrap");
    const rect = wrap.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const iconEffect = variantId === "sweet" || variantId === "custom";
    const effect = document.createElement(iconEffect ? "span" : "img");
    effect.className = `variant-pop${iconEffect ? " sweet-pop" : ""}`;
    if (iconEffect) {
      effect.innerHTML = '<svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"></path><circle cx="19" cy="5" r="1.5"></circle><circle cx="5" cy="19" r="1.2"></circle></svg>';
      effect.style.color = variantId === "custom" ? stats.shop.customColors.food : variantFor(variantId).colors[0];
      effect.setAttribute("aria-hidden", "true");
    } else {
      effect.src = `assets/variants/${variantId}-effect.png`;
      effect.alt = "";
    }
    effect.style.left = `${canvasRect.left - rect.left + point.x / canvas.width * canvasRect.width}px`;
    effect.style.top = `${canvasRect.top - rect.top + point.y / canvas.height * canvasRect.height}px`;
    wrap.append(effect);
    setTimeout(() => effect.remove(), 800);
  }
  function addCoins(amount) {
    stats.coins += amount;
    updateProgress();
    const pouch = $(".progress-card .coin-pouch");
    if (pouch) retrigger(pouch, "coin-pulse");
    saveStats();
  }
  function gainXp(amount) {
    const oldLevel = currentLevel();
    stats.xp += amount;
    const newLevel = currentLevel();
    if (newLevel > oldLevel) {
      missionDeck = createMissionDeck();
      questionDeck = createQuestionDeck();
      stats.coins += 20;
      setTimeout(() => showToast(`${t("level")} ${newLevel} · ${t("levelCoins", { n: 20 })}`, true), 350);
    }
    updateProgress();
    saveStats();
    checkTrophies();
  }
  const trophyDefs = [
    { id: "firstOrder", key: "trophyFirstOrder", test: (s) => s.rounds >= 1 },
    { id: "tenOrders", key: "trophyTenOrders", test: (s) => s.rounds >= 10 },
    { id: "streak5", key: "trophyStreak5", test: (s) => s.bestStreak >= 5 },
    { id: "streak10", key: "trophyStreak10", test: (s) => s.bestStreak >= 10 },
    { id: "level5", key: "trophyLevel5", test: () => currentLevel() >= 5 },
    { id: "level10", key: "trophyLevel10", test: () => currentLevel() >= 10 },
    { id: "rich", key: "trophyRich", test: (s) => s.coins >= 150 },
    { id: "gear", key: "trophyGear", test: (s) => s.shop.owned.length >= 9 },
    { id: "matrix", key: "trophyMatrix", test: (s) => matrixUnlocked(new Set(s.shop.owned)) },
    { id: "arcade10", key: "trophyArcade10", test: (s) => Object.values(s.arcade.best).some((score) => score >= 10) },
    { id: "lessons", key: "trophyLessons", test: (s) => s.seenLessons.length >= 10 },
    { id: "spinner", key: "trophySpinner", test: (s) => s.wheelSpins >= 1 }
  ];
  function checkTrophies() {
    for (const trophy of trophyDefs) {
      if (stats.trophies.includes(trophy.id)) continue;
      if (trophy.test(stats)) {
        stats.trophies.push(trophy.id);
        saveStats();
        showToast(`🏆 ${t(trophy.key)}`, true);
      }
    }
  }

  let musicEngine = null;
  const musicChords = [
    { bass: 130.81, notes: [261.63, 329.63, 392, 493.88] },
    { bass: 98, notes: [246.94, 293.66, 392, 440] },
    { bass: 110, notes: [220, 261.63, 329.63, 523.25] },
    { bass: 87.31, notes: [261.63, 349.23, 440, 523.25] }
  ];
  function stopMusic() {
    if (!musicEngine) return;
    clearInterval(musicEngine.timer);
    try { musicEngine.gain.disconnect(); } catch (error) { /* already detached */ }
    musicEngine = null;
  }
  function scheduleMusicBar(when, chord) {
    const audio = audioContext;
    const playNote = (frequency, at, duration, peak, type) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.0001, at);
      gain.gain.linearRampToValueAtTime(peak, at + .45);
      gain.gain.exponentialRampToValueAtTime(.0001, at + duration);
      oscillator.connect(gain);
      gain.connect(musicEngine.gain);
      oscillator.start(at);
      oscillator.stop(at + duration + .05);
    };
    chord.notes.forEach((frequency, index) =>
      playNote(frequency, when, 2.2, index === 0 ? .05 : .022, index === 0 ? "sine" : "triangle")
    );
    playNote(chord.bass, when, 1.1, .06, "sine");
    const melodyPool = [523.25, 587.33, 659.25, 783.99, 880];
    playNote(melodyPool[Math.floor(Math.random() * melodyPool.length)], when + .9, .9, .028, "sine");
  }
  function startMusic() {
    if (!soundOn || musicEngine) return;
    const audio = getAudio();
    if (!audio) return;
    const gain = audio.createGain();
    gain.gain.value = .85;
    gain.connect(audio.destination);
    musicEngine = { gain, timer: 0, next: audio.currentTime + .15, chord: Math.floor(Math.random() * musicChords.length) };
    musicEngine.timer = setInterval(() => {
      if (!soundOn) { stopMusic(); return; }
      if (document.hidden) return;
      if (audio.state !== "running") { audio.resume?.(); return; }
      const now = audio.currentTime;
      if (musicEngine.next < now) musicEngine.next = now + .1;
      while (musicEngine.next < now + 1.4) {
        scheduleMusicBar(musicEngine.next, musicChords[musicEngine.chord % musicChords.length]);
        musicEngine.chord++;
        musicEngine.next += 2.4;
      }
    }, 420);
  }
  ["pointerdown", "keydown"].forEach((eventName) =>
    document.addEventListener(eventName, () => startMusic(), { passive: true })
  );

  const arcadeModes = [
    { id: "add", nameKey: "modeAdd", descKey: "modeAddDesc" },
    { id: "sub", nameKey: "modeSub", descKey: "modeSubDesc" },
    { id: "mul", nameKey: "modeMul", descKey: "modeMulDesc" },
    { id: "div", nameKey: "modeDiv", descKey: "modeDivDesc" },
    { id: "mixed", nameKey: "modeMixed", descKey: "modeMixedDesc" }
  ];
  const modeTabs = [{ id: "fractions", nameKey: "modeFractions" }, ...arcadeModes];
  const arcadeModeIds = arcadeModes.map((mode) => mode.id);
  let gameMode = "fractions";
  let arcadeMode = null;
  let arcadeScore = 0;
  let arcadeCurrent = null;
  let arcadeLocked = false;
  let arcadeLessonStep = 0;
  let arcadeLessonDone = false;
  let fractionTeachVisible = false;
  const arcadeCoinReward = 2;
  const arcadeXpReward = 5;
  const arcadePlans = {
    en: {
      add: {
        title: "Adding puts groups together",
        steps: [
          { text: "Adding joins two groups into one bigger group. Here are 3 coral dots and 2 teal dots.", model: { kind: "add", a: 3, b: 2 } },
          { text: "The plus sign (+) means combine. 3 + 2 makes 5 dots in total. The order never matters: 2 + 3 is also 5.", model: { kind: "add", a: 2, b: 3 } },
          { text: "To add fast, count on from the bigger number. For 4 + 3, start at 4 and count 5, 6, 7.", model: { kind: "line", max: 7, marked: [4, 7] } }
        ],
        question: "What is 4 + 3?", answers: [["7", true], ["8", false]]
      },
      sub: {
        title: "Taking away makes groups smaller",
        steps: [
          { text: "Subtracting takes some away. Here are 5 dots, and 2 of them are crossed out.", model: { kind: "sub", a: 5, b: 2 } },
          { text: "The minus sign (−) means take away. What is left is the answer: 5 − 2 = 3.", model: { kind: "sub", a: 5, b: 2 } },
          { text: "You can also count back. From 5, step back 2: 4, 3. So 5 − 2 = 3.", model: { kind: "line", max: 5, marked: [5, 3] } }
        ],
        question: "What is 6 − 4?", answers: [["2", true], ["3", false]]
      },
      mul: {
        title: "Multiplying adds equal groups fast",
        steps: [
          { text: "3 × 2 means 3 groups with 2 dots each. Multiplying is a fast way to add equal groups.", model: { kind: "groups", groups: 3, per: 2 } },
          { text: "Count all the dots: 2, 4, 6. So 3 × 2 = 6.", model: { kind: "groups", groups: 3, per: 2 } },
          { text: "Times tables are shortcuts. Counting in 2s: 2, 4, 6, 8. That is 1×2, 2×2, 3×2, 4×2.", model: { kind: "line", max: 8, marked: [2, 4, 6, 8] } }
        ],
        question: "What is 3 × 4?", answers: [["12", true], ["7", false]]
      },
      div: {
        title: "Dividing shares into fair groups",
        steps: [
          { text: "Dividing splits a number into equal groups. 6 ÷ 2 means sharing 6 dots into 2 fair groups.", model: { kind: "groups", groups: 2, per: 3 } },
          { text: "Each group has 3 dots, so 6 ÷ 2 = 3.", model: { kind: "groups", groups: 2, per: 3 } },
          { text: "Dividing undoes multiplying. Because 2 × 3 = 6, we know 6 ÷ 2 = 3.", model: { kind: "groups", groups: 3, per: 2 } }
        ],
        question: "What is 8 ÷ 2?", answers: [["4", true], ["3", false]]
      },
      mixed: {
        title: "Pick the right operation",
        steps: [
          { text: "Putting groups together? That is adding.", model: { kind: "add", a: 3, b: 2 } },
          { text: "Taking some away? That is subtracting.", model: { kind: "sub", a: 5, b: 2 } },
          { text: "Equal groups? Multiply. Sharing fairly? Divide.", model: { kind: "groups", groups: 3, per: 2 } }
        ],
        question: "There are 3 bags with 4 marbles each. How many marbles in total?", answers: [["12", true], ["7", false]]
      }
    },
    ar: {
      add: {
        title: "الجمع يجمع المجموعات معاً",
        steps: [
          { text: "الجمع يدمج مجموعتين في مجموعة أكبر. هنا ٣ نقاط مرجانية ونقطتان خضراوان.", model: { kind: "add", a: 3, b: 2 } },
          { text: "علامة الزائد (+) تعني الدمج. ٣ + ٢ تساوي ٥ نقاط في المجموع. الترتيب لا يهم: ٢ + ٣ تساوي ٥ أيضاً.", model: { kind: "add", a: 2, b: 3 } },
          { text: "للجمع بسرعة، اعدّ من الرقم الأكبر. في ٤ + ٣، ابدأ من ٤ وعدّ ٥، ٦، ٧.", model: { kind: "line", max: 7, marked: [4, 7] } }
        ],
        question: "كم يساوي ٤ + ٣؟", answers: [["٧", true], ["٨", false]]
      },
      sub: {
        title: "الطرح يجعل المجموعات أصغر",
        steps: [
          { text: "الطرح يأخذ بعض النقاط بعيداً. هنا ٥ نقاط، وشُطب منها نقطتان.", model: { kind: "sub", a: 5, b: 2 } },
          { text: "علامة الطرح (−) تعني الأخذ بعيداً. ما يتبقى هو الناتج: ٥ − ٢ = ٣.", model: { kind: "sub", a: 5, b: 2 } },
          { text: "يمكنك أيضاً العد التنازلي. من ٥، ترجع خطوتين: ٤، ٣. إذن ٥ − ٢ = ٣.", model: { kind: "line", max: 5, marked: [5, 3] } }
        ],
        question: "كم يساوي ٦ − ٤؟", answers: [["٢", true], ["٣", false]]
      },
      mul: {
        title: "الضرب يجمع المجموعات المتساوية بسرعة",
        steps: [
          { text: "٣ × ٢ تعني ٣ مجموعات فيها نقطتان لكل مجموعة. الضرب طريقة سريعة لجمع مجموعات متساوية.", model: { kind: "groups", groups: 3, per: 2 } },
          { text: "عدّ كل النقاط: ٢، ٤، ٦. إذن ٣ × ٢ = ٦.", model: { kind: "groups", groups: 3, per: 2 } },
          { text: "جداول الضرب اختصارات. العد بالاثنين: ٢، ٤، ٦، ٨. وهي ١×٢، ٢×٢، ٣×٢، ٤×٢.", model: { kind: "line", max: 8, marked: [2, 4, 6, 8] } }
        ],
        question: "كم يساوي ٣ × ٤؟", answers: [["١٢", true], ["٧", false]]
      },
      div: {
        title: "القسمة تشارك بالتساوي",
        steps: [
          { text: "القسمة توزع عدداً على مجموعات متساوية. ٦ ÷ ٢ تعني توزيع ٦ نقاط على مجموعتين متساويتين.", model: { kind: "groups", groups: 2, per: 3 } },
          { text: "كل مجموعة فيها ٣ نقاط، إذن ٦ ÷ ٢ = ٣.", model: { kind: "groups", groups: 2, per: 3 } },
          { text: "القسمة تعكس الضرب. لأن ٢ × ٣ = ٦، نعرف أن ٦ ÷ ٢ = ٣.", model: { kind: "groups", groups: 3, per: 2 } }
        ],
        question: "كم يساوي ٨ ÷ ٢؟", answers: [["٤", true], ["٣", false]]
      },
      mixed: {
        title: "اختر العملية المناسبة",
        steps: [
          { text: "تجمع مجموعات معاً؟ هذه هي الإضافة.", model: { kind: "add", a: 3, b: 2 } },
          { text: "تأخذ بعض النقاط بعيداً؟ هذه هي الطرح.", model: { kind: "sub", a: 5, b: 2 } },
          { text: "مجموعات متساوية؟ اضرب. تشارك بالتساوي؟ اقسم.", model: { kind: "groups", groups: 3, per: 2 } }
        ],
        question: "هناك ٣ حقائب فيها ٤ كرات زجاج لكل حقيبة. كم كرة في المجموع؟", answers: [["١٢", true], ["٧", false]]
      }
    }
  };
  const arcadePlanFor = (modeId) => arcadePlans[lang][modeId] || arcadePlans.en[modeId];
  function arcadeMaxOperand() { return Math.min(99, 8 + currentLevel() * 2); }
  function arcadeTopTable() { return Math.min(12, 2 + Math.floor(currentLevel() / 2)); }
  function makeNumberChoices(correct) {
    const options = new Set([correct]);
    for (let step = 1; options.size < 4 && step <= 40; step++) {
      options.add(Math.max(0, correct + step));
      if (options.size < 4) options.add(Math.max(0, correct - step));
    }
    while (options.size < 4) options.add(correct + options.size * 7 + 40);
    return shuffle([...options]);
  }
  function buildArcadeQuestion(modeId) {
    const kind = modeId === "mixed" ? ["add", "sub", "mul", "div"][Math.floor(Math.random() * 4)] : modeId;
    const maximum = arcadeMaxOperand();
    const table = arcadeTopTable();
    let left, right, answer, symbol;
    if (kind === "add") { left = randomInteger(1, maximum); right = randomInteger(1, maximum); answer = left + right; symbol = "+"; }
    else if (kind === "sub") { left = randomInteger(2, maximum); right = randomInteger(1, left); answer = left - right; symbol = "\u2212"; }
    else if (kind === "mul") { left = randomInteger(2, table); right = randomInteger(2, table); answer = left * right; symbol = "\u00d7"; }
    else { right = randomInteger(2, table); answer = randomInteger(2, table); left = right * answer; symbol = "\u00f7"; }
    return {
      text: `<bdi dir="ltr">${fmtNum(left)} ${symbol} ${fmtNum(right)} = ?</bdi>`,
      answer, choices: makeNumberChoices(answer)
    };
  }
  function renderArcadeModel(spec) {
    const coral = "var(--coral)", teal = "var(--teal)", ink = "#54473c", soft = "#e7e0d4";
    const dot = (cx, cy, r, fill) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"></circle>`;
    if (spec.kind === "add") {
      const r = 13, gap = 32, y = 42;
      let x = 26, partA = "";
      for (let i = 0; i < spec.a; i++) { partA += dot(x, y, r, coral); x += gap; }
      const plusX = x + 8;
      x += 44;
      let partB = "";
      for (let i = 0; i < spec.b; i++) { partB += dot(x, y, r, teal); x += gap; }
      return `<svg viewBox="0 0 ${x + 4} 84" aria-hidden="true">${partA}<text x="${plusX}" y="${y + 8}" text-anchor="middle" font-size="27" font-weight="700" fill="${ink}">+</text>${partB}</svg>`;
    }
    if (spec.kind === "sub") {
      const r = 13, gap = 34, y = 42;
      let x = 26, body = "";
      for (let i = 0; i < spec.a; i++) {
        const gone = i >= spec.a - spec.b;
        body += dot(x, y, r, gone ? soft : teal);
        if (gone) body += `<path d="M${x - 9} ${y - 9} L${x + 9} ${y + 9} M${x + 9} ${y - 9} L${x - 9} ${y + 9}" stroke="${coral}" stroke-width="3.5" stroke-linecap="round"/>`;
        x += gap;
      }
      return `<svg viewBox="0 0 ${x} 84" aria-hidden="true">${body}</svg>`;
    }
    if (spec.kind === "groups") {
      const cellW = 58, gap = 14, rows = Math.min(spec.per, 4);
      const height = 24 + rows * 30 + 12;
      let body = "";
      for (let g = 0; g < spec.groups; g++) {
        const gx = 16 + g * (cellW + gap);
        body += `<rect x="${gx}" y="14" width="${cellW}" height="${24 + rows * 30}" rx="10" fill="none" stroke="${ink}" stroke-width="2" stroke-dasharray="5 4"/>`;
        for (let d = 0; d < spec.per; d++) {
          const col = d % 2, row = Math.floor(d / 2);
          body += dot(gx + cellW / 2 + (col === 0 ? -12 : 12), 40 + row * 30, 10, d % 2 ? teal : coral);
        }
      }
      return `<svg viewBox="0 0 ${16 + spec.groups * (cellW + gap) + 2} ${height}" aria-hidden="true">${body}</svg>`;
    }
    if (spec.kind === "line") {
      const startX = 24, stepX = Math.min(34, 268 / spec.max), y = 38;
      let body = `<line x1="${startX}" y1="${y}" x2="${startX + spec.max * stepX}" y2="${y}" stroke="${ink}" stroke-width="2.5" stroke-linecap="round"/>`;
      for (let n = 0; n <= spec.max; n++) {
        const x = startX + n * stepX;
        const marked = (spec.marked || []).includes(n);
        body += `<line x1="${x}" y1="${y - (marked ? 9 : 5)}" x2="${x}" y2="${y + (marked ? 9 : 5)}" stroke="${marked ? coral : ink}" stroke-width="${marked ? 3 : 2}"/>`;
        body += `<text x="${x}" y="${y + 22}" text-anchor="middle" font-size="12" font-weight="${marked ? 700 : 500}" fill="${marked ? coral : "#746b61"}">${fmtNum(n)}</text>`;
        if (marked && n > 0) body += dot(x, y, 5, coral);
      }
      return `<svg class="lesson-bar" viewBox="0 0 ${startX + spec.max * stepX + 12} 68" aria-hidden="true">${body}</svg>`;
    }
    return "";
  }
  function renderModeBar() {
    const bar = $("#modeBar");
    if (!bar) return;
    bar.setAttribute("aria-label", t("modeBarLabel"));
    bar.replaceChildren(...modeTabs.map((mode) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `mode-tab${gameMode === mode.id ? " active" : ""}`;
      button.textContent = t(mode.nameKey);
      button.setAttribute("aria-pressed", String(gameMode === mode.id));
      button.addEventListener("click", () => setGameMode(mode.id));
      return button;
    }));
  }
  function startArcadeMode(modeId) {
    arcadeMode = modeId;
    stats.lastArcadeMode = modeId;
    arcadeScore = 0;
    if (!stats.arcade.tutorialDone[modeId]) {
      arcadeLessonStep = 0;
      arcadeLessonDone = false;
      $("#arcadePanel").classList.add("hidden");
      $("#arcadeLesson").classList.remove("hidden");
      renderArcadeLesson();
      setBolt("thinking", t("lessonBubble"));
    } else {
      showArcadeRun();
    }
  }
  function renderArcadeLesson() {
    const plan = arcadePlanFor(arcadeMode);
    const checkStage = arcadeLessonStep >= plan.steps.length;
    $("#arcadeLessonProgress").textContent = t("lessonProgress", {
      step: fmtNum(Math.min(arcadeLessonStep + 1, plan.steps.length + 1)),
      total: fmtNum(plan.steps.length + 1)
    });
    $("#arcadeLessonTitle").textContent = plan.title;
    $("#arcadeLessonStepContent").classList.toggle("hidden", checkStage);
    $("#arcadeLessonCheck").classList.toggle("hidden", !checkStage);
    if (checkStage) {
      $("#arcadeLessonCheckQuestion").textContent = plan.question;
      $("#arcadeLessonAnswers").replaceChildren(...plan.answers.map(([label, correct]) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = label;
        button.disabled = arcadeLessonDone;
        if (arcadeLessonDone && correct) button.classList.add("lesson-answer-correct");
        button.addEventListener("click", () => {
          if (arcadeLessonDone) return;
          if (!correct) {
            $("#arcadeLessonFeedback").textContent = t("lessonTryAgain");
            $("#arcadeLessonFeedback").className = "lesson-feedback retry";
            setBolt("thinking", t("lessonBubble"));
            playTone(180, .22, "sine", .045);
            return;
          }
          arcadeLessonDone = true;
          $("#arcadeLessonFeedback").textContent = t("lessonCorrect");
          $("#arcadeLessonFeedback").className = "lesson-feedback correct";
          $("#arcadeLessonAnswers").querySelectorAll("button").forEach((answer) => { answer.disabled = true; });
          button.classList.add("lesson-answer-correct");
          $("#arcadeLessonButton").disabled = false;
          $("#arcadeLessonButton").textContent = t("arcadePlay");
          setBolt("excited", t("lessonCorrect"));
          playCorrect();
        });
        return button;
      }));
      $("#arcadeLessonFeedback").textContent = arcadeLessonDone ? t("lessonCorrect") : "";
      $("#arcadeLessonFeedback").className = `lesson-feedback${arcadeLessonDone ? " correct" : ""}`;
      $("#arcadeLessonButton").disabled = !arcadeLessonDone;
      $("#arcadeLessonButton").textContent = arcadeLessonDone ? t("arcadePlay") : t("lessonSelectAnswer");
    } else {
      $("#arcadeLessonStepLabel").textContent = `${t("lessonStepLabel")} ${fmtNum(arcadeLessonStep + 1)}`;
      $("#arcadeLessonStepBody").textContent = plan.steps[arcadeLessonStep].text;
      $("#arcadeLessonModel").innerHTML = renderArcadeModel(plan.steps[arcadeLessonStep].model);
      $("#arcadeLessonButton").disabled = false;
      $("#arcadeLessonButton").textContent = arcadeLessonStep === plan.steps.length - 1
        ? t("lessonCheckLabel")
        : t("lessonContinue");
    }
    $("#arcadeLessonBackButton").classList.toggle("hidden", arcadeLessonStep === 0);
  }
  function advanceArcadeLesson() {
    if (!arcadeMode) return;
    const plan = arcadePlanFor(arcadeMode);
    if (arcadeLessonStep >= plan.steps.length) {
      if (arcadeLessonDone) {
        stats.arcade.tutorialDone[arcadeMode] = true;
        saveStats();
        $("#arcadeLesson").classList.add("hidden");
        showArcadeRun();
      }
      return;
    }
    arcadeLessonStep++;
    renderArcadeLesson();
  }
  $("#arcadeLessonButton").addEventListener("click", advanceArcadeLesson);
  $("#arcadeLessonBackButton").addEventListener("click", () => {
    if (!arcadeMode || arcadeLessonStep === 0) return;
    arcadeLessonStep--;
    renderArcadeLesson();
  });
  function showArcadeRun() {
    arcadeScore = 0;
    arcadeLocked = false;
    $("#arcadeLesson").classList.add("hidden");
    $("#arcadePanel").classList.remove("hidden");
    updateScorebar();
    renderArcadeRound();
    setBolt("normal", t("arcadeBubble"));
  }
  function updateScorebar() {
    const mode = arcadeModes.find((entry) => entry.id === arcadeMode);
    if (!mode) return;
    $("#arcadeRunTitle").textContent = t(mode.nameKey);
    $("#arcadeScoreValue").textContent = fmtNum(arcadeScore);
    $("#arcadeBestValue").textContent = t("arcadeBest", { n: fmtNum(stats.arcade.best[arcadeMode] || 0) });
  }
  function renderArcadeRound() {
    if (!$("#arcadeScoreValue")) return;
    arcadeCurrent = buildArcadeQuestion(arcadeMode);
    arcadeLocked = false;
    $("#arcadeFeedback").textContent = "";
    $("#arcadeFeedback").className = "arcade-feedback";
    $("#arcadeQuestion").innerHTML = arcadeCurrent.text;
    $("#arcadeNewButton").classList.add("hidden");
    $("#arcadeAnswers").replaceChildren(...arcadeCurrent.choices.map((choice) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.dataset.value = String(choice);
      button.textContent = fmtNum(choice);
      button.addEventListener("click", () => answerArcade(choice, button));
      return button;
    }));
  }
  function answerArcade(choice, button) {
    if (arcadeLocked || gameMode !== arcadeMode) return;
    if (choice !== arcadeCurrent.answer) {
      arcadeLocked = true;
      $("#arcadeAnswers").querySelectorAll("button").forEach((answer) => {
        answer.disabled = true;
        if (Number(answer.dataset.value) === arcadeCurrent.answer) answer.classList.add("lesson-answer-correct");
      });
      button.classList.add("shake");
      $("#arcadeFeedback").textContent = `${t("arcadeBad")} ${t("arcadeYourScore")}: ${fmtNum(arcadeScore)}`;
      $("#arcadeFeedback").className = "arcade-feedback bad";
      setBolt("thinking", t("arcadeBad"));
      playTone(180, .22, "sine", .045);
      stats.arcade.best[arcadeMode] = Math.max(stats.arcade.best[arcadeMode] || 0, arcadeScore);
      saveStats();
      checkTrophies();
      $("#arcadeNewButton").classList.remove("hidden");
      return;
    }
    arcadeScore++;
    addCoins(arcadeCoinReward);
    gainXp(arcadeXpReward);
    updateScorebar();
    $("#arcadeFeedback").textContent = t("arcadeGood");
    $("#arcadeFeedback").className = "arcade-feedback good";
    playTone(660, .1, "triangle", .05);
    setTimeout(() => playTone(880, .12, "triangle", .04), 90);
    setTimeout(() => { if (gameMode === arcadeMode && !arcadeLocked) renderArcadeRound(); }, 420);
  }
  $("#arcadeHowButton").addEventListener("click", () => {
    if (!arcadeMode) return;
    arcadeLessonStep = 0;
    arcadeLessonDone = false;
    $("#arcadePanel").classList.add("hidden");
    $("#arcadeLesson").classList.remove("hidden");
    renderArcadeLesson();
  });
  $("#arcadeNewButton").addEventListener("click", () => renderArcadeRound());
  function setGameMode(modeId, force = false) {
    if (modeId === gameMode && !force) return;
    gameMode = modeId;
    stats.activeMode = modeId;
    saveStats();
    renderModeBar();
    if (modeId === "fractions") {
      $("#arcadeLesson").classList.add("hidden");
      $("#arcadePanel").classList.add("hidden");
      if (showLessonIfNeeded()) return;
      restoreFractionStage();
    } else {
      fractionTeachVisible = !$("#teachPanel").classList.contains("hidden");
      $("#levelLesson").classList.add("hidden");
      $("#teachPanel").classList.add("hidden");
      $("#orderFlow").classList.add("hidden");
      $("#nextButton").classList.add("hidden");
      fractionElementIds.forEach((id) => $(`#${id}`).classList.add("hidden"));
      $("#questCard").classList.add("hidden");
      startArcadeMode(modeId);
    }
  }
  const fractionElementIds = ["orderRow", "prompt", "instruction", "cutStage", "cutActions", "footerNote"];
  function restoreFractionStage() {
    const lessonActive = lessonLevel > 0;
    const teach = fractionTeachVisible && !lessonActive;
    ["orderRow", "prompt", "instruction", "cutStage"].forEach((id) => $(`#${id}`).classList.toggle("hidden", lessonActive));
    $("#cutActions").classList.toggle("hidden", lessonActive || teach);
    $("#questCard").classList.remove("hidden");
    $("#levelLesson").classList.toggle("hidden", !lessonActive);
    $("#teachPanel").classList.toggle("hidden", !teach);
    $("#orderFlow").classList.toggle("hidden", !teach);
    $("#nextButton").classList.toggle("hidden", !teach);
    if (lessonActive) setBolt("thinking", t("lessonBubble"));
    else if (!teach) { $("#instruction").textContent = t("bubbleCut"); setBolt("normal", playerGreeting()); }
    drawPizza();
  }

  const WHEEL_SEG = Math.PI * 2 / 8;
  const wheelPrizes = [
    { id: "coins5", weight: 20, label: () => fmtNum(5), apply: () => addCoins(5) },
    { id: "coins10", weight: 18, label: () => fmtNum(10), apply: () => addCoins(10) },
    { id: "xp15", weight: 12, label: () => `+${fmtNum(15)}`, apply: () => gainXp(15) },
    { id: "coins25", weight: 10, label: () => fmtNum(25), apply: () => addCoins(25) },
    { id: "boost", weight: 14, label: () => "×2", apply: () => { stats.boost = Math.min(10, stats.boost + 2); saveStats(); showToast(t("boostActive", { n: 2 }), true); } },
    { id: "coins15", weight: 14, label: () => fmtNum(15), apply: () => addCoins(15) },
    { id: "xp30", weight: 8, label: () => `+${fmtNum(30)}`, apply: () => gainXp(30) },
    { id: "coins50", weight: 4, label: () => fmtNum(50), apply: () => addCoins(50) }
  ];
  let wheelSpinning = false;
  let wheelRotation = 0;
  function prizeMessage(prize) {
    return prize.id === "boost" ? t("prizeBoost") : prize.id.startsWith("coins") ? t("prizeCoins", { n: prize.label() }) : t("prizeXp", { n: prize.label().replace("+", "") });
  }
  function drawWheel(rotation = 0) {
    const wheelCanvas = $("#prizeWheel");
    if (!wheelCanvas) return;
    const size = wheelCanvas.width;
    const center = size / 2;
    const radius = center - 16;
    const context = wheelCanvas.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, size, size);
    const style = getComputedStyle(document.body);
    const palette = ["--coral", "--yellow", "--teal", "--green", "--blue", "--pink"].map((name) => style.getPropertyValue(name).trim() || "#ffd02e");
    const ink = style.getPropertyValue("--ink").trim() || "#342d27";
    context.save();
    context.translate(center, center);
    context.rotate(rotation);
    wheelPrizes.forEach((prize, index) => {
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, radius, -Math.PI / 2 + index * WHEEL_SEG, -Math.PI / 2 + (index + 1) * WHEEL_SEG);
      context.closePath();
      context.fillStyle = palette[index % palette.length];
      context.fill();
      context.lineWidth = 4;
      context.strokeStyle = "rgba(52,45,39,.35)";
      context.stroke();
      context.save();
      context.rotate(-Math.PI / 2 + (index + .5) * WHEEL_SEG);
      context.translate(radius * .6, 0);
      context.rotate(Math.PI / 2);
      context.fillStyle = ink;
      context.font = "700 34px Fredoka, sans-serif";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(prize.label(), 0, 0);
      context.restore();
    });
    context.restore();
    context.beginPath();
    context.arc(center, center, radius, 0, Math.PI * 2);
    context.lineWidth = 12;
    context.strokeStyle = ink;
    context.stroke();
  }
  function pointerSegmentIndex(rotation) {
    const position = ((-rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    return Math.floor(position / WHEEL_SEG);
  }
  function updateWheelMeta() {
    const meta = $("#wheelMeta");
    if (meta) {
      meta.textContent = stats.wheel.charges > 0
        ? t("wheelSpins", { n: fmtNum(stats.wheel.charges) })
        : t("wheelNone", { n: fmtNum(2 - stats.wheel.sinceLast) });
    }
    const button = $("#wheelSpinButton");
    if (button) button.disabled = wheelSpinning || stats.wheel.charges <= 0;
  }
  function openWheel() {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.dataset.modal = "wheel";
    backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="wheelTitle">
      <h2 id="wheelTitle">${t("wheelTitle")}</h2>
      <p class="shop-intro">${t("wheelIntro")}</p>
      <div class="wheel-stage">
        <div class="wheel-wrap"><span class="wheel-pointer" aria-hidden="true"></span><canvas id="prizeWheel" width="640" height="640" role="img" aria-label="Prize wheel"></canvas><span class="wheel-hub" aria-hidden="true"></span></div>
        <p class="wheel-prize" id="wheelPrize" aria-live="polite"></p>
        <button class="toy-button primary" type="button" id="wheelSpinButton">${t("wheelSpin")}</button>
        <p class="wheel-meta" id="wheelMeta"></p>
      </div>
      <div class="modal-actions"><button class="toy-button secondary" type="button" data-wheel-close>${t("closeShop")}</button></div>
    </section>`;
    $("#overlayRoot").replaceChildren(backdrop);
    wheelSpinning = false;
    drawWheel(wheelRotation);
    updateWheelMeta();
    backdrop.querySelector("#wheelSpinButton").addEventListener("click", spinWheel);
    backdrop.addEventListener("click", (event) => {
      if (wheelSpinning) return;
      if (event.target === backdrop || event.target.closest("[data-wheel-close]")) $("#overlayRoot").replaceChildren();
    });
  }
  function spinWheel() {
    if (wheelSpinning || stats.wheel.charges <= 0) return;
    wheelSpinning = true;
    stats.wheel.charges--;
    stats.wheelSpins++;
    saveStats();
    $("#wheelPrize").textContent = "";
    updateWheelMeta();
    const totalWeight = wheelPrizes.reduce((sum, prize) => sum + prize.weight, 0);
    let roll = Math.random() * totalWeight;
    let prizeIndex = 0;
    for (let index = 0; index < wheelPrizes.length; index++) {
      roll -= wheelPrizes[index].weight;
      if (roll < 0) { prizeIndex = index; break; }
    }
    const jitter = (Math.random() - .5) * WHEEL_SEG * .6;
    const target = Math.PI * 2 * 6 - (prizeIndex + .5) * WHEEL_SEG + jitter;
    const duration = 4200;
    const startedAt = performance.now();
    let lastIndex = -1;
    const animate = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      wheelRotation = target * eased;
      drawWheel(wheelRotation);
      const index = pointerSegmentIndex(wheelRotation);
      if (index !== lastIndex) {
        lastIndex = index;
        playTone(640 + index * 45, .045, "square", .03);
      }
      if (progress < 1) requestAnimationFrame(animate);
      else finishWheelSpin(prizeIndex);
    };
    requestAnimationFrame(animate);
  }
  function finishWheelSpin(prizeIndex) {
    const prize = wheelPrizes[prizeIndex];
    prize.apply();
    wheelSpinning = false;
    checkTrophies();
    const label = $("#wheelPrize");
    if (label) label.textContent = t("wheelWon", { prize: prizeMessage(prize) });
    showToast(t("wheelWon", { prize: prizeMessage(prize) }), prize.id.startsWith("xp") || prize.id === "boost");
    setBolt("excited", t("wheelWon", { prize: prizeMessage(prize) }));
    playCorrect();
    updateWheelMeta();
  }
  $("#arcadeButton").addEventListener("click", () => {
    if (arcadeModeIds.includes(gameMode)) return;
    setGameMode(stats.lastArcadeMode || "add");
  });
  $("#wheelButton").addEventListener("click", openWheel);
  $("#soundButton").addEventListener("click", (event) => {
    soundOn = !soundOn;
    const button = event.currentTarget;
    button.classList.toggle("muted", !soundOn);
    button.setAttribute("aria-label", soundOn ? "Disable sound" : "Enable sound");
    if (soundOn) startMusic(); else stopMusic();
  });
  $("#languageButton").addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    applyLanguage();
  });
  $("#shopButton").addEventListener("click", openShop);
  $("#reportButton").addEventListener("click", showReport);
  $("#helpButton").addEventListener("click", buyCutGuide);

  function showCompletion() {
    roundIndex = roundTotal;
    renderMission();
    setBolt("excited", t("allDone"));
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="doneTitle">
      <h2 id="doneTitle">${t("allDone")}</h2><p>${t("doneSub")}</p>
      <div class="quest-card"><div class="quest-copy"><strong>${t("questTitle")}</strong><span>${t("questReport")}</span></div></div>
      <div class="modal-actions"><button class="toy-button primary" data-action="again">${t("startFresh")}</button><button class="toy-button secondary" data-action="report">${t("grownup")}</button></div>
    </section>`;
    $("#overlayRoot").replaceChildren(backdrop);
    backdrop.querySelector('[data-action="again"]').addEventListener("click", () => { $("#overlayRoot").replaceChildren(); resetSession(); });
    backdrop.querySelector('[data-action="report"]').addEventListener("click", showReport);
    confetti();
  }
  function showReport() {
    const skills = [
      ["halves", "skillHalves"], ["thirds", "skillThirds"], ["quarters", "skillQuarters"],
      ["fifthsSixths", "skillFifthsSixths"], ["eighths", "skillEighths"], ["tenthsTwelfths", "skillTenthsTwelfths"],
      ["sixteenths", "skillSixteenths"], ["largeFractions", "skillLargeFractions"], ["equal", "skillEqual"]
    ];
    const list = skills.map(([key, label]) => {
      const count = stats.skills[key];
      const settled = count >= 2;
      return `<li class="map-item"><span>${t(label)}</span><span>${settled ? t("understood") : t("practicing")} <small>(${count})</small></span></li>`;
    }).join("");
    const misconceptions = [
      ["unequalParts", "unequalTag"], ["biggerDenominator", "biggerDenominatorTag"], ["halfQuarter", "halfQuarterTag"]
    ].map(([key, label]) => {
      const count = stats.misconceptions?.[key] || 0;
      return `<li class="map-item"><span>${t(label)}</span><span>${count ? t("detected", { n: count }) : t("noSignal")}</span></li>`;
    }).join("");
    const trophies = trophyDefs.map((trophy) => {
      const won = stats.trophies.includes(trophy.id);
      return `<li class="${won ? "won" : ""}"><span class="trophy-medal" aria-hidden="true">${won ? "🏆" : "·"}</span><span>${t(trophy.key)}</span></li>`;
    }).join("");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="reportTitle">
      <h2 id="reportTitle">${t("reportTitle")}</h2><p>${t("reportIntro")}</p>
      <form id="playerNameForm" class="player-name-form">
        <label for="reportPlayerName">${t("onboardingNameLabel")}</label>
        <div class="developer-row"><input id="reportPlayerName" name="playerName" maxlength="18" value="${escAttr(stats.playerName)}" required>
          <button class="toy-button secondary" type="submit">${t("playerNameSave")}</button></div>
      </form>
      <div class="report-stats"><div class="stat"><strong>${stats.rounds}</strong>${t("rounds")}</div><div class="stat"><strong>${stats.xp}</strong>${t("xpEarned")}</div><div class="stat"><strong>${stats.bestStreak}</strong>${t("bestStreak")}</div></div>
      <h3>${t("mapTitle")}</h3><ul class="map-list">${list}</ul>
      <h3>${t("misconceptionsTitle")}</h3><ul class="map-list">${misconceptions}</ul>
      <h3>${t("trophyTitle")}</h3><ul class="trophy-list">${trophies}</ul>
      <div class="quest-card"><div class="quest-copy"><strong>${t("questTitle")}</strong><span>${t("questReport")}</span></div></div>
      <div class="modal-actions"><button class="toy-button primary" data-action="close">${t("close")}</button></div>
    </section>`;
    $("#overlayRoot").replaceChildren(backdrop);
    backdrop.querySelector("#playerNameForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (savePlayerName(backdrop.querySelector("#reportPlayerName").value)) showReport();
    });
    backdrop.querySelector('[data-action="close"]').addEventListener("click", () => $("#overlayRoot").replaceChildren());
    backdrop.addEventListener("click", (event) => { if (event.target === backdrop) $("#overlayRoot").replaceChildren(); });
  }
  function resetSession() {
    roundIndex = 0; streak = 0; cuts = []; mistakes = { unequal: 0, compare: 0 };
    orderFlowToken++; orderStage = "idle";
    activeChangeChallenge = null; changeChallengeLocked = false; changeFeedbackKey = ""; changeFeedbackValues = {};
    lessonLevel = 0; quizLocked = false; lastQuestionSignature = "";
    roundTotal = 12; replayQueue = []; replayedMisconceptions = new Set(); guideVisible = false;
    missionDeck = createMissionDeck(); questionDeck = createQuestionDeck(); activeQuestion = null; currentOrder = baseMission();
    $("#teachPanel").classList.add("hidden"); $("#cutActions").classList.remove("hidden"); $("#levelLesson").classList.add("hidden");
    ["orderRow", "prompt", "instruction", "cutStage", "footerNote"].forEach((id) => $(`#${id}`).classList.remove("hidden"));
    $("#orderFlow").classList.add("hidden"); $("#nextButton").classList.add("hidden");
    $("#questionSolution").classList.add("hidden");
    $("#changeSolution").classList.add("hidden");
    $("#questionHelpButton").setAttribute("aria-expanded", "false");
    $("#changeHelpButton").setAttribute("aria-expanded", "false");
    applyGearAppearance(); updateProgress(); renderMission(); drawPizza();
    fractionTeachVisible = false;
    gameMode = stats.activeMode;
    if (gameMode !== "fractions") setGameMode(gameMode, true);
    else restoreFractionStage();
    if (!stats.onboarded) openOnboarding();
    else if (gameMode === "fractions" && !showLessonIfNeeded()) setBolt("normal", playerGreeting());
  }
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") $("#overlayRoot").replaceChildren();
  });
  missionDeck = createMissionDeck();
  questionDeck = createQuestionDeck();
  currentOrder = baseMission();
  gameMode = stats.activeMode;
  applyLanguage();
  updateProgress();
  if (gameMode !== "fractions") setGameMode(gameMode, true);
  if (!stats.onboarded) openOnboarding();
  else if (gameMode === "fractions" && !showLessonIfNeeded()) setBolt("normal", playerGreeting());
})();
