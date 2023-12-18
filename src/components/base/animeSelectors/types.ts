export interface SelectedItem {
  index: number;
  newItem: string | number;
}

type AnimeSelectorContent = {
  key: string;
  name: string;
};

export interface AnimeSelector {
  title: string;
  content: Array<AnimeSelectorContent>;
}
