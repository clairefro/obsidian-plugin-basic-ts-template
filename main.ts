import { Plugin, Notice } from "obsidian";

export default class DullPlusPlugin extends Plugin {
  async onload() {
    console.log("[Dull Plus] loaded");

    this.addCommand({
      id: "sample-command",
      name: "Sample Command",
      callback: () => {
        // This is the command callback
        new Notice("Hello from Dull Plus!!");
      },
    });
  }

  onunload() {
    console.log("[Dull Plus] unloaded");
  }
}
