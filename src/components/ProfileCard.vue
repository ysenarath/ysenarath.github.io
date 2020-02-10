<template>
  <div>
    <div class="row">
      <div class="profile-avatar-container col-md-4 mt-5">
        <img class="profile-avatar" src="static/profile.jpg" itemprop="image" alt="Avatar" />
      </div>
      <div class="col mt-5">
        <div class="profile-body">
          <div class="row">
            <div class="col col-sm-auto">
              <h3 class="profile-title">Yasas Senarath</h3>
            </div>
            <div class="tagline">
              <ul class="list-group list-group-horizontal">
                <li v-for="item in tagLine" class="list-group-item borderless-item">
                  <span class="spacer">|</span>
                  {{ item }}
                </li>
                <li class="list-group-item borderless-item">
                  <span class="spacer">|</span>
                </li>
              </ul>
            </div>
          </div>
          <p class="profile-desc">
            Yasas is a graduate student at George Mason University. He is a member of the Humanitarian, Semantics & Informatics Lab (Human-Info-Lab). Prof. Hemant Purohit, the head of Human-Info-Lab advices Yasas on his current research activities.
            <br />
            <br />He completed his Bachelor's Degree in Computer Science and Engineering at the University of Moratuwa in 2018. He is also a former member at DataSEARCH, a multi-disciplinary research centre at the University of Moratuwa. His project at DataSEARCH was related to Social Media Analytics and Opinion Mining.
            <br />
            <br />His research interests lie in the area of Natural Language Processing and Artificial Intelligence. In his current research, he is aiming to provide solutions to problems in Natural and Societal Crises by analyzing social media content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tagLine: ["Researcher", "PhD Candidate", "AI for Social Good"]
    };
  }
};
</script>

<style>
.borderless-item {
  border: none;
}

.profile-avatar-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 5%;
  object-fit: cover;
  background: #00000010;
  margin: 10px;
}

.list-group-item {
  padding: 0;
}

.spacer {
  padding: 10px;
}
</style>