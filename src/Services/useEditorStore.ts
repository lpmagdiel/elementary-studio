import create from 'zustand';

interface EditorState {
    html: string;
    css: string;
    js: string;
    updateHTML: (by: string) => void,
    updateCSS: (by: string) => void,
    updateJS: (by: string) => void
}

export const useEditorStore = create<EditorState>()((set) => ({
    html: '',
    css: '',
    js: '',
    updateHTML: (by) => set((state) => ({ html: by })),
    updateCSS: (by) => set((state) => ({ css: by })),
    updateJS: (by) => set((state) => ({ js: by })),
}))