import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PeopleState {
  people: string[];
}

const initialState = {
  people: []
} as PeopleState;

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    editName: (
      state,
      action: PayloadAction<{ index: number; newName: string }>
    ) => {
      state.people[action.payload.index] = action.payload.newName;
    },
    addPerson: state => {
      state.people.push('');
    },
    removePerson: (state, action: PayloadAction<{ index: number }>) => {
      state.people.splice(action.payload.index, 1);
    }
  }
});

export const { editName, addPerson, removePerson } = peopleSlice.actions;

export default peopleSlice.reducer;
