// All jobs count secion
const cardContainer = document.getElementById("card-container");
const allJobs = cardContainer.children.length;
console.log(allJobs);
document.getElementById("totall-jobs").innerText = `${allJobs}`;
document.getElementById("jobs-count").innerText = `${allJobs}`;

// interview & rejected count
let interviewList = [];
let rejectedList = [];

const interviewCount = document.getElementById("totall-interview");
const rejectedCount = document.getElementById("totall-rejected");
const filterSection = document.getElementById("filter-section");
const cardHidden = document.getElementById("card-hidden");
function calculateCount() {
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// toggle btn
let currentStatus = "all";
const filterbtnAll = document.getElementById("filter-btn-all");
const filterbtnInterview = document.getElementById("filter-btn-interview");
const filterbtnRejected = document.getElementById("filter-btn-rejected");

function toggleStyle(id) {
  filterbtnAll.classList.remove("btn-primary");
  filterbtnInterview.classList.remove("btn-primary");
  filterbtnRejected.classList.remove("btn-primary");

  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");

  if (id == "filter-btn-interview") {
    cardContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");
    // cardHidden.classList.remove("hidden")
  } else if (id == "filter-btn-all") {
    cardContainer.classList.remove("hidden");
    filterSection.classList.add("hidden");
    // cardHidden.classList.add("hidden");
  } else if (id == "filter-btn-rejected") {
    cardContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");
    //  cardHidden.classList.remove("hidden");
  }
  
  if (allJobs == 0) {
    cardHidden.classList.remove("hidden");
    cardContainer.classList.add("hidden");
  } else if (interviewList.length == 0) {
    cardHidden.classList.remove("hidden");
  } else if (rejectedList.length == 0) {
    cardHidden.classList.remove("hidden");
  }
}

// event delegation

cardContainer.addEventListener("click", function (event) {
  console.log(event.target.classList.contains("interview-btn"));
  if (event.target.classList.contains("interview-btn")) {
    const parent = event.target.parentNode.parentNode;
    const companyName = parent.querySelector(".company-name").innerText;
    const position = parent.querySelector(".position").innerText;
    const locationTypeSalary = parent.querySelector(
      ".location-type-salary",
    ).innerText;
    let status = parent.querySelector(".Status").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".Status").innerText = "Interview";
    parent
      .querySelector(".Status")
      .classList.add("btn btn-outline btn-success");
    console.log(status);
    const cardInfo = {
      companyName,
      position,
      locationTypeSalary,
      status: "Interview",
      description,
    };

    const companyExis = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExis) {
      interviewList.push(cardInfo);
    }
    if (interviewList.length == 0) {
    }
    renderInterview();
    calculateCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parent = event.target.parentNode.parentNode;
    const companyName = parent.querySelector(".company-name").innerText;
    const position = parent.querySelector(".position").innerText;
    const locationTypeSalary = parent.querySelector(
      ".location-type-salary",
    ).innerText;
    // let status = parent.querySelector(".Status").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".Status").innerText = "Rejected";
    parent.querySelector(".Status").className = "btn btn-outline btn-error";
    // console.log(status);
    const cardInfo = {
      companyName,
      position,
      locationTypeSalary,
      status: "Rejected",
      description,
    };

    const companyExis = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExis) {
      rejectedList.push(cardInfo);
    }
    renderRejected();
    calculateCount();
  }
});

function renderInterview() {
  filterSection.innerHTML = ``;
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement(`div`);
    div.className = "w-11/12 container mx-auto space-y-5 py-10";
    div.innerHTML = `<div class="bg-base-100 shadow-md py-6 px-5 space-y-5">
          <div class="flex justify-between">
            <div class="">
              <h2 class="company-name text-[20px] font-bold">
                ${interview.companyName}
              </h2>
              <p class="position">${interview.position}</p>
            </div>
            <div class="">
              <button class="delet-btn cursor-pointer">
                <img src="./asset/delet.png" alt="" />
              </button>
            </div>
          </div>
          <p class="location-type-salary">
            ${interview.locationTypeSalary}
          </p>
          <div class="">
            <button class="Status btn btn-outline btn-success">${interview.status}</button>
            <p class="description cpt-2">
             ${interview.description}
            </p>
          </div>
          <div class="flex space-x-4">
            <button class="interview-btn btn btn-outline btn-success">
              INTERVIEW
            </button>
            <button class="rejected-btn btn btn-outline btn-error">
              REJECTED
            </button>
          </div>
        </div>
          
          `;
    filterSection.appendChild(div);
  }
}
function renderRejected() {
  filterSection.innerHTML = ``;
  for (let rejected of rejectedList) {
    console.log(rejected);
    let div = document.createElement(`div`);
    div.className = "w-11/12 container mx-auto space-y-5 py-10";
    div.innerHTML = `<div class="bg-base-100 shadow-md py-6 px-5 space-y-5">
          <div class="flex justify-between">
            <div class="">
              <h2 class="company-name text-[20px] font-bold">
                ${rejected.companyName}
              </h2>
              <p class="position">${rejected.position}</p>
            </div>
            <div class="">
              <button class="delet-btn cursor-pointer">
                <img src="./asset/delet.png" alt="" />
              </button>
            </div>
          </div>
          <p class="location-type-salary">
            ${rejected.locationTypeSalary}
          </p>
          <div class="">
            <button class="Status btn btn-outline btn-error">${rejected.status}</button>
            <p class="description cpt-2">
             ${rejected.description}
            </p>
          </div>
          <div class="flex space-x-4">
            <button class="interview-btn btn btn-outline btn-success">
              INTERVIEW
            </button>
            <button class="rejected-btn btn btn-outline btn-error">
              REJECTED
            </button>
          </div>
        </div>
          
          `;
    filterSection.appendChild(div);
  }
}
