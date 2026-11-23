function isTopHalf(window) {
    const tile = window.tile;
    if (!tile) return false;
    const r = tile.relativeGeometry;
    return r.x === 0 && r.y === 0 && r.width === 1 && r.height === 0.5;
}

registerShortcut(
    "ToggleTopSnapMaximise",
    "Toggle top snap / maximise",
    "Meta+Up",
    () => {
        const window = workspace.activeWindow;
        if (!window || !window.normalWindow || !window.maximizable) return;
        if (isTopHalf(window)) {
            window.tile = null;
            window.setMaximize(true, true);
        } else {
            workspace.slotWindowQuickTileTop();
        }
    }
);
