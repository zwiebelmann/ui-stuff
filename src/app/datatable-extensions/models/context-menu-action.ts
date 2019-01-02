export interface ContextMenuAction {
    display: string;
    icon: string;
    conditionProperty?: string;
    action(item: any): void;
}
