//4***:
//Преобразовать задание 3* таким образом, чтобы возраст вводился, используя функцию prompt, в привязанной вёрстке

// В HTML сохраняется одной строкой. Мне кажется, проще скопировать строки из этого файла в консоль разработчика и запустить. Кусок с '2' из прошлого задания убрал, так как, по-моему, он не влияет на функционал

let YearsOld = prompt('Please, specify your age')
    YearsOld = +YearsOld
const checkAge_4 = function(age){
    let age_2 = 18
    let age_3 = 60
    if (typeof(age) != 'number'){
        console.log("Error! Wrong data type")
    } else if(age<age_2){
    console.log("You don't have access cause your age is " + age + ". It's less then " + age_2)
    } else if(age>=age_2 && age<age_3) {
    console.log("Welcome!")
    } else if(age>=age_3){ 
    console.log("Keep calm and watch Culture channel")
    } else {
    console.log("Technical work")
    }
}
checkAge_4(YearsOld)