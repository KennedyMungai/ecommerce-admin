import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IModalState {
	isOpen: boolean
}

const initialState: IModalState = { isOpen: true }

const modalSlice = createSlice({
	name: 'ModalSlice',
	initialState,
	reducers: {
		openModal: ({ isOpen }) => {
			isOpen = true
		},
		closeModal: ({ isOpen }) => {
			isOpen = false
		}
	}
})

export const { openModal, closeModal } = modalSlice.actions

export const selectIsOpen = (state: RootState) => state.modalToggle.isOpen

export default modalSlice.reducer
