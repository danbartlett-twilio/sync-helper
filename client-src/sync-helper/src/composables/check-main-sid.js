
import { useRouter } from 'vue-router'
import { useSyncStore } from '../stores/syncStore'

export function useCheckMainSid() {

    const syncStore = useSyncStore() 
    const router = useRouter();

    if (syncStore.syncHelperSID === null) {
        router.replace( { name: 'listList' })
    }

    return true
}