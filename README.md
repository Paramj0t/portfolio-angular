<div [ngSwitch]="value">
        <p *ngSwitchCase="5">value is 5</p>
        <p *ngSwitchCase="10">value is 10</p>
        <p *ngSwitchDefault>value is default</p>
</div>
