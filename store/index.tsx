import { ZutandsToretype } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const Trending = create<ZutandsToretype>()(
  persist(
    (set) => ({
      data:[] ,
      isComplet: false ,
      isStarted:false ,
      setdate(aregument) {
          set((state)=>({
            data:[...state.data ,aregument]
          }))
      },
      setisComplet() {
        set((state)=>({
          isComplet: state.isComplet ? true : false
        }))
      },
      setisStarted() {
          set((state)=>({
          isStarted: state.isStarted ? false: true
        }))
      },
    }),
    {
      name: 'Trending', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
