var appSelector = '#app';
var container1Selector = appSelector + " > *";
var container2Selector = container1Selector + " > *";
main();
function main() {
    // @ts-ignore
    var Polipop = window.Polipop;
    // @ts-ignore
    var polipop = new Polipop('site-content', {
        layout: 'popups',
        insert: 'before',
        pool: 5,
        life: 4000,
        closer: false,
        effect: 'slide',
        progressbar: true,
    });
    // Popup
    var puSelector = '#gateway-content';
    var notified = false;
    var int = setInterval(function () {
        var container = document.querySelector(container1Selector);
        var container2 = document.querySelector(container2Selector);
        // // Remove Popup
        var pu = container.querySelector(puSelector);
        if (pu && pu != null && !notified) {
            console.log('\n\n\n\n\nREMOVED AD!!!!\n\n\n\n\n');
            notified = true;
            polipop.add({
                content: 'NYTimes Free AF blocked the paywall for you. Cheers!!!.',
                title: 'NYTimes Free AF',
                type: 'info',
            });
        }
    }, 1000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQzNCLElBQU0sa0JBQWtCLEdBQU0sV0FBVyxTQUFNLENBQUM7QUFDaEQsSUFBTSxrQkFBa0IsR0FBTSxrQkFBa0IsU0FBTSxDQUFDO0FBRXZELElBQUksRUFBRSxDQUFDO0FBQ1AsU0FBUyxJQUFJO0lBQ1QsYUFBYTtJQUNiLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDL0IsYUFBYTtJQUNiLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtRQUN0QyxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLEtBQUs7UUFDYixNQUFNLEVBQUUsT0FBTztRQUNmLFdBQVcsRUFBRSxJQUFJO0tBQ3BCLENBQUMsQ0FBQztJQUVILFFBQVE7SUFDUixJQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztJQUN0QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFckIsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQ3BCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUQsa0JBQWtCO1FBQ2xCLElBQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0MsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDbEQsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNSLE9BQU8sRUFDSCx5REFBeUQ7Z0JBQzdELEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxNQUFNO2FBQ2YsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDIn0=