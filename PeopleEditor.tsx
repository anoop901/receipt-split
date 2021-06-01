import React, {useState} from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { editName, addPerson, removePerson } from './peopleSlice'

export default function PeopleEditor() {
  const people = useAppSelector((state) => state.people.people)
  const dispatch = useAppDispatch();
  return (<div>
    <h2>People</h2>
    {
      people.map((person, index) =>
        <div>
          <input value={person} onChange={(e) => {
            dispatch(editName({index, newName}))
          }} />
          <button onClick={() => {
            dispatch(removePerson({index}))
          }}>Remove</button>
        </div>
      )
    }
    <button onClick={() => {
      dispatch(addPerson())
    }}>Add person</button>
  </div>);
}