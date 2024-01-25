<div *ngFor=“let item of obst; index as i; trackBy: trackByFn“>
{ { i + 1 }} { {item.name}}
</div>
