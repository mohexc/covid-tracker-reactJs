import React from 'react';
import PersonalInformationForm from './components/PersonalInformationForm';
import PersonalInformationTable from './components/PeopleInformationTable';

// main
const PeopleInformationList = () => {

  return (
    <div>
      <PersonalInformationForm />
      <PersonalInformationTable />
    </div>
  );
}

export default PeopleInformationList;