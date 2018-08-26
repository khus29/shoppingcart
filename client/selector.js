import { createSelector } from 'reselect';

const sectionDataSelector = state => state.SectionReducer.sectionData;
const filterSelector =  state => state.FiltersReducer.selectedCategory;

