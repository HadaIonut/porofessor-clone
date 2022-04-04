import {writable} from "svelte/store";
import {getDataFromAPI} from "../utils.js";

const createFeaturedGamesStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    set,
    update,
    clear: () => set([]),
    populate: async () => {
      const data = await getDataFromAPI("featured");
      set([]);

      return update((prev) => ([
        ...prev,
        ...data.data
      ]).slice(0, 9));
    }
  }
}

let featuredGames;
export default featuredGames = createFeaturedGamesStore();