let currentStatus = "all";
const filterbtnAll = document.getElementById("filter-btn-all");
const filterbtnInterview = document.getElementById("filter-btn-interview");
const filterbtnRejected = document.getElementById("filter-btn-rejected");
const cardContainer = document.getElementById("card-container");
const interView = document.getElementById("interview-section");
const rejected = document.getElementById("reject-section");
const cardHidden = document.getElementById("card-hidden");

// toggle style
function toggleStyle(id) {
  filterbtnAll.classList.remove("btn-primary");
  filterbtnInterview.classList.remove("btn-primary");
  filterbtnRejected.classList.remove("btn-primary");
  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.add("btn-primary");
  const pages = [cardContainer, interView, rejected];
  for (let page of pages) {
    page.classList.add("hidden");
  }
  if (id == "filter-btn-all") {
    cardContainer.classList.remove("hidden");
    cardHidden.classList.add("hidden");
    if (cardContainer.childElementCount == 0) {
      cardHidden.classList.remove("hidden");
    }
  } else if (id == "filter-btn-interview") {
    interView.classList.remove("hidden");
    cardHidden.classList.add("hidden");
    const allInterview = interView.children;
    for (let listofInterview of allInterview) {
      let jobStatus = listofInterview.querySelector(".Status");
      jobStatus.innerText = "Interview";
      jobStatus.className = "Status btn btn-outline btn-success";
    }
    if (interView.childElementCount == 0) {
      cardHidden.classList.remove("hidden");
    }
  } else if (id == "filter-btn-rejected") {
    rejected.classList.remove("hidden");
    cardHidden.classList.add("hidden");
    const allRejectlist = rejected.children;
    for (let listofreject of allRejectlist) {
      let jobStatus = listofreject.querySelector(".Status");
      jobStatus.innerText = "Rejected";
      jobStatus.className = "Status btn btn-outline btn-error";
    }
    if (rejected.childElementCount == 0) {
      cardHidden.classList.remove("hidden");
    }
  }
  count();
}
toggleStyle("filter-btn-all");
function count() {
  const totallJobs = document.getElementById("totall-jobs");
  const jobsCount = document.getElementById("jobs-count");
  const interviewCount = document.getElementById("totall-interview");
  const rejectedCount = document.getElementById("totall-rejected");

  const tabCount = {
    "filter-btn-all": cardContainer.children.length,
    "filter-btn-interview": interView.children.length,
    "filter-btn-rejected": rejected.children.length,
  };
  // console.log(tabCount)
  // console.log(currentStatus)
  totallJobs.innerText = tabCount["filter-btn-all"];
  jobsCount.innerText = tabCount[currentStatus];
  interviewCount.innerText = tabCount["filter-btn-interview"];
  rejectedCount.innerText = tabCount["filter-btn-rejected"];
  // console.log(tabCount[all])
}
// count();
document.querySelector("main").addEventListener("click", function (event) {
  const btn = event.target;
  const parent = btn.closest(".bg-base-100");
  // console.log(btn , parent)
  let status = document.querySelector(".Status");
  // status.innerText = "Interview";
  // status.className = "btn btn-outline btn-success";

  if (btn.classList.contains("interview-btn")) {
    status.innerText = "Interview";
    status.className = "Status btn btn-outline btn-success";
    parent.classList.add("interview");
    parent.classList.remove("reject");
    interView.appendChild(parent);
    if (rejected.childElementCount == 0) {
      cardHidden.classList.remove("hidden");
    }
  }
  if (btn.classList.contains("rejected-btn")) {
    status.innerText = "Rejected";
    status.className = "Status btn btn-outline btn-error";
    //  console.log(status)
    parent.classList.add("reject");
    parent.classList.remove("interview");
    rejected.appendChild(parent);

    //  console.log(rejected.getAttribute("id"));
    if (interView.childElementCount == 0) {
      cardHidden.classList.remove("hidden");
    }
  }
  if (!cardContainer.classList.contains("hidden")) {
    cardHidden.classList.add("hidden");
  }
  if (
    !cardContainer.classList.contains("hidden") &&
    cardContainer.childElementCount == 0
  ) {
    cardHidden.classList.remove("hidden");
  }
  if (btn.classList.contains("delet-btn")) {
    console.log(parent);
    let previousParent = parent;
    parent.remove();
    if (
      previousParent.classList.contains("interview") &&
      interView.childElementCount == 0
    ) {
      cardHidden.classList.remove("hidden");
    }
    if (
      previousParent.classList.contains("reject") &&
      rejected.childElementCount == 0
    ) {
      cardHidden.classList.remove("hidden");
    }
    if (
      cardContainer.childElementCount == 0 &&
      previousParent.classList.contains("alljob")
    ) {
      cardHidden.classList.remove("hidden");
    }
  }
  count();
});
