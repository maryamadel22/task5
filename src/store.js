
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userType: '', 
  setUserType: (type) => set({ userType: type }), 
}));

export default useAuthStore;
