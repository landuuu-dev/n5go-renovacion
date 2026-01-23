export {};

declare global {
  interface Window {
    ChatWidgetConfig: {
      webhook: {
        url: string;
        route: string;
      };
      branding: {
        logo: string;
        name: string;
        welcomeText: string;
        responseTimeText: string;
      };
      style: {
        primaryColor: string;
        secondaryColor: string;
        position: "left" | "right";
        backgroundColor: string;
        fontColor: string;
      };
    };
  }
}
