import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App';
import Servers, { MessageDetail } from "./pages/Servers";


function AppRouting() {
    return (
        <BrowserRouter>
            <Routes basename={``}>
                <Route path="/*" element={<App />}>
                    <Route path="server/:serverId" element={<Servers />}  >
                        <Route path="channel/:channelId" element={<MessageDetail />} >
                        </Route>
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter >
    )
}

export default AppRouting;


