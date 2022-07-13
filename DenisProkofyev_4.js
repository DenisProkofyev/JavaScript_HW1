    let age_2 = 18
    let age_3 = 60
    const checkAge_4 = function(age){
if (age && !isNaN(age)){
    if(age<age_2){
        alert("You don't have access cause your age is " + age + ". It's less then " + age_2)
    }   else if(age>=age_2 && age<age_3) {
        alert("Welcome!")
    }   else if(age>=age_3){ 
        alert("Keep calm and watch Culture channel")
    }   
    }   else alert("Not an int")
    }
    let YearsOld = prompt('Please, specify your age')
    
checkAge_4(YearsOld)