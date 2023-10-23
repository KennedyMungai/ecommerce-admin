import { createSlice } from '@reduxjs/toolkit'

interface IModalState {
	isOpen: boolean
}

const initialState: IModalState = { isOpen: false }

const modalSlice = createSlice({
	name: 'ModalSlice',
	initialState,
	reducers: {
		toggleModal: ({ isOpen }) => {
			isOpen = !isOpen
		}
	}
})

export const { toggleModal } = modalSlice.actions

export const selectIsOpen = (state: IModalState) => state.isOpen

export default modalSlice.reducer
