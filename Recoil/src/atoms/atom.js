import { atom, selector } from "recoil";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 110
// })

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// })

// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 0
// })

// export const noificationAtom = atom({
//     key: "noificationAtom",
//     default: 110
// })

// export const totalNotification = selector({
//     key: "totalNotification",
//     get: ({ get }) => {
//         let networkCount = get(networkAtom);
//         let jobsCount = get(jobsAtom)
//         let messagingCount = get(messagingAtom);
//         let noificationCount = get(noificationAtom);
//         return networkCount + jobsCount + messagingCount + noificationCount
//     }
// })

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notifications/selector",
        get: async ({ get }) => {
            try {
                let data = await fetch("http://localhost:3000/data");
                let response = await data.json();
                let randomIndex = Math.floor(Math.random() * response.length);
                // await new Promise((resolve) => setTimeout(resolve, 5000));
                return response[randomIndex];
            } catch (error) {
                console.error("Error fetching notifications:", error);
                return [];  // Return a default value in case of an error
            }
        }
    })
});

export const totalNotification = selector({
    key: "totalNotification",
    get: ({ get }) => {
        let data = get(notifications);
        return data.network + data.jobs + data.messaging + data.notifications;
    }
})

