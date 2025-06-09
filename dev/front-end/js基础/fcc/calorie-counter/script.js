const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

calorieCounter.addEventListener("submit",calculateCalories);
// 清除输入字符
function cleanInputString(str){
    // 匹配+-空 /g全局查找
    const regex = /[+-\s]/g; 
    // 使用replace()去除找找到后的字符
    return str.replace(regex,'');
}

//输入校验
function isInvalidInput(str){
    //i 忽略大小区别
    const regex = /\d+e\d+/i;
    // match 方法返回一个包含字符串中找到的所有匹配项的数组。
    return str.match(regex)
}

function getCaloriesFromInputs(list) {
    // 从输入中获取卡路里数据
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
          alert(`Invalid Input: ${invalidInputMatch[0]}`);
          isError = true;
          return null;
        }
        calories += Number(currVal);
        return calories;
    }
}

function calculateCalories(e){
    //e is a eventlistener
    e.preventDefault();
    isError = false;
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    //为什么要使用数组来获取budgetCalories
    const budgetCalories =  getCaloriesFromInputs([budgetNumberInput]);
    if(isError) return ;
    // 这东西怎么变成摄取卡路里
    let consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    // 
    let remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    let surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    // 直接使用模板字符串进行添加，而不变动html文件
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>

    <p>${exerciseCalories} Calories Burned</p>
    `;
    // 使用classList控制元素的类
    output.classList.remove('hide');

}

function clearForm() {
    // 再次强调querySelectorAll返回的是NodeList，这里，如果要处理数组对象，可以使用Array.form()方法，转换成数组
    let inputContainers = document.querySelectorAll(".input-container");
    for(const container of inputContainers){
        container.innerHTML = "";
      }
      budgetNumberInput.value = "";
      output.innerText = "";
      output.classList.add("hide");


    }

clearButton.addEventListener("click",cleanForm);
//本章主要学习了，事件触发，一些常用的dom操作（classList,querySelectorAll,selectElementById···),还有就是处理
//附加html元素的方法