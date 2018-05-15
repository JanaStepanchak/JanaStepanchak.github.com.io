cookBook.controller("myCookBookCtrl", function () {
    var vm = this;

    vm.CookBook = [
        {
            nameRecipe: "ЯЄЧНЯ СМАЖЕНА З ОВОЧАМИ",
            recipeContent: "Суміш, не розморожуючи, смажити на розігрітій олії 5—8 хв. посолити і приправити за смаком. На пательні в смажених овочах зробити 3 заглибини, вбити в них по одному яйцю і смажити ще 3—5 хв. на помірному вогні, не закриваючи кришкою. Страву подавати гарячою.",
            showRecipe: "false",
            dateCreated:"2018:03:12",
            historyOfChange: [{
                dateCreated:"2018:03:12",
                nameRecipe: "false",
                recipeContent: "Суміш, не розморожуючие закриваючи кришкою. Страву подавати гарячою."
                              
            },{
                dateCreated:"22222222",
                nameRecipe: "22222222222false",
                recipeContent: "Суміш, не розморожуючие закриваючи кришкою. Страву подавати гарячою."
            }]
		}
		, {
            nameRecipe: "ОПИС СТРАВИ",
            recipeContent: "Смачні, леши мільйони сердець у всьому світі, вони були і залишаються найбільш затребуваною стравою на нашому столі. Швидкість приготування та відсутність підігріву — ось дві основні переваги салатів, таких важливих при сьогоднішньому темпі життя. А чого ",
            showRecipe: "false",
            dateCreated:"2018:04:10",
            historyOfChange: [{
                dateCreated:"2018:03:12",
                nameRecipe: "false",
                recipeContent: "Суміш, не розморожуючие закриваючи кришкою. Страву подавати гарячою."                   }
            ]
		}
		, {
            nameRecipe: "САЛАТ ЗІ СМАЖЕНИМИ ШАМПІНЬЙОНАМИ",
            recipeContent: "Шампіньйони цінують за відмінні смакові якості та низьку калорійність. В 1 кг цих грибів міститься всього 400 ккал. Та чи знаєте Ви, що шампіньйони — гарний косметичний засіб, що покращує стан шкіри та бореться зі зморшками. ",
            showRecipe: "false",
            dateCreated:"2017:05:10",
            historyOfChange: []
		}
 , ];
//     //----------------------------------------------

vm.sortField = undefined;
vm.reverse = false;
vm.sort = function(recipe) {
    if(vm.sortField === recipe) {
        vm.reverse = !vm.reverse;
    } else {
        vm.sortField = recipe ;
        vm.reverse = false; 
    }
};
vm.isSortUp = function(recipe) {
    return vm.sortField === recipe && !vm.reverse;
};
vm.isSortDown = function(recipe) {
    return vm.sortField === recipe && vm.reverse;
};

////////////////////////////////////////////


vm.showRecipe = function(recipe) {
    recipe.showRecipe = !recipe.showRecipe;
};
vm.newNameRecipek = "";
vm.newRecipeContent = "";
 
vm.ShowHistoryCookBook= function (recipe){
    vm.CookBookRecipe = recipe.historyOfChange;
};
       
vm.delCookBookhHistory = function (history) {
    for (var i in vm.CookBookRecipe) {
        if (vm.CookBookRecipe[i].nameRecipe == history.nameRecipe) {
            vm.CookBookRecipe.splice(i, 1);
        }}
};
    
//////////////////////////////
vm.addInCookBook = function () {
    var date = new Date();
    DateRecipe = date.getFullYear() + ':' + ('0' + (date.getMonth() + 1)).slice(-2) + ':' + ('0' + date.getDate()).slice(-2);
    if ( vm.newNameRecipek != "" && vm.newRecipeContent != ""){
        vm.CookBook.push({
            dateCreated: DateRecipe,
            nameRecipe: vm.newNameRecipek,
            recipeContent:vm.newRecipeContent,
            showRecipe: "false",
            checkbox: "true",
            progress: "In Progres",
            historyOfChange: [{
                dateCreated: DateRecipe,
                nameRecipe: vm.newNameRecipek,
                recipeContent:vm.newRecipeContent
                }]                
            });
            vm.newNameRecipek = "";
            vm.newRecipeContent = "";
        };
    }

vm.editCookBook = function (recipe) {
    vm.contentRecipe=recipe.recipeContent;
    vm.nameRecipe=recipe.nameRecipe;
    
    vm.editRecipe = function () {
        var date = new Date();
        DateRecipe = date.getFullYear() + ':' + ('0' + (date.getMonth() + 1)).slice(-2) + ':' + ('0' + date.getDate()).slice(-2);
        vm.CookBookRecipe = recipe.historyOfChange;
        
        if ( vm.nameRecipe != recipe.nameRecipe || vm.contentRecipe != recipe.recipeContent){
            vm.CookBookRecipe.push({
                dateCreated: DateRecipe,
                nameRecipe: vm.nameRecipe,
                recipeContent:vm.contentRecipe
            });
};
        recipe.nameRecipe = vm.nameRecipe;
        recipe.recipeContent = vm.contentRecipe;
        };
};
});