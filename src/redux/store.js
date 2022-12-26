import { configureStore } from '@reduxjs/toolkit';
import tableSlice from '../components/Table/tableSlice';


export const store = configureStore({
    reducer: {
        table: tableSlice,
    }
});