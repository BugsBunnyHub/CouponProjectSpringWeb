package coupon.project.web;

import coupon.project.facades.ClientFacade;

public class Session {
    private ClientFacade clientFacade;
    private long lastActionTimer;

    public Session(ClientFacade clientFacade, long lastActionTimer) {
        this.clientFacade = clientFacade;
        this.lastActionTimer = lastActionTimer;
    }

    public long getLastAction() {
        return lastActionTimer;
    }

    public void setLastActionTimer(long lastActionTimer) {
        this.lastActionTimer = lastActionTimer;
    }

    public ClientFacade getClientFacade() {
        return clientFacade;
    }
}
