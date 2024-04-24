const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      devTools: true, //是否开启 DevTools
      nodeIntegration: true,
    },
  });

  win.loadFile("build/index.html");
  // eslint-disable-next-line no-undef
  Menu.setApplicationMenu(null);
  // 解决应用启动白屏问题
  win.on("ready-to-show", () => {
    win.show();
    win.focus();
  });
  // 打开开发者工具
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
