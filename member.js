function skillsMember() {
  // get the skills from the member
  var memberSkills = member.skills;
  // if the member has no skills, return an empty array
  if (!memberSkills) {
    return [];
  }
  // if the member has skills, return the skills
  return memberSkills;
}

