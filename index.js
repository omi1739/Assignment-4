 let totalNumber = document.getElementById('total-number');
 
 let interviewNumber = document.getElementById('interview-number');
 let interviewList = [] ;

 let rejectedNumber =  document.getElementById('rejected-number');
 let rejectedList = [];

 let jobnumber = document.getElementById('number-of-jobs'); 

 let allCards = document.getElementById('all-cards');
 
 const mainContainer = document.querySelector('main');
 
 const allButton = document.getElementById('all-button');
 const interviewButton = document.getElementById('interview-button');
 const rejectedButton = document.getElementById('rejected-button');
 
 

 function calculateNumber(){

    totalNumber.innerText = allCards.children.length;
    jobnumber.innerText = allCards.children.length;

    interviewNumber.innerText = interviewList.length;

    rejectedNumber.innerText = rejectedList.length;
 }

 calculateNumber();
 

 function toggleStyle(id){

    allButton.classList.remove('btn-info','text-white');
    interviewButton.classList.remove('btn-info','text-white');
    rejectedButton.classList.remove('btn-info','text-white');

    allButton.classList.add('btn');
    interviewButton.classList.add('btn');
    rejectedButton.classList.add('btn');

    const selectedButton = document.getElementById(id);
    selectedButton.classList.add('btn-info','text-white');

 }


 mainContainer.addEventListener('click', function(event){
    
    const parentNode = event.target.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobPost = parentNode.querySelector('.job-post').innerText;
    const jobDetails = parentNode.querySelector('.job-details').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    
    const cardInfo = {
        companyName,
        jobPost,
        jobDetails,
        status,
        notes
    }
    
   const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

   if(!companyExist){
      interviewList.push(cardInfo);
   }
   console.log(interviewList);
   
    
 })