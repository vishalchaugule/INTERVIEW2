import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RXJS'
  obs: any

    Observable() {
      this.obs = new Observable((observer) => {
        observer.next('Hello')
        observer.next('Hello')
        observer.error('error')
        observer.complete()
      })

      this.obs.subscribe({
        next: (val:any) => console.log(val),
        error: (err:any) => console.log('Error:', err),
        complete: () => console.log('Done')
      });

      //   🔹 Observable
      // 👉 Data चं stream आहे – जे वेळोवेळी values emit करतं.
      // 👉 आपण subscribe() केल्यावर data मिळतो.
      // 👉 तीन प्रकारचे notification देतो: next, error, complete.

      // "An Observable is a core concept in RxJS which represents a stream of data that can be observed over time. It can emit multiple values, errors, or a completion signal. We subscribe to an Observable to start receiving data. It's very useful for handling asynchronous operations like API calls, user interactions, or timers."

  //     Observable म्हणजे एक data stream आहे — म्हणजेच data हळूहळू वेळोवेळी येतो.
  // आपण subscribe केल्यावर तो आपल्याला data पाठवतो (next()), error आल्यास error(), आणि process पूर्ण झाल्यावर complete() पाठवतो.
  // हे asynchronous operations साठी खूप उपयुक्त आहे — जसं की API call, input events, time intervals, इ.

  // Observable म्हणजे एक अशी गोष्ट जी वेळोवेळी डेटा "push" करत राहते. म्हणजेच, तो डेटा निर्माण करतो आणि तुमच्याकडे पाठवतो — कधी एकच वेळेला, कधी अनेक वेळा.

  // Pull: तु उपाशी आहेस आणि स्वयंपाकघरात जाऊन काहीतरी खाण्यासाठी स्वतःच शोधतोस. (तुला जेव्हा पाहिजे तेव्हा तू घेतोस)

  // Push: आई स्वतःहून प्लेटमध्ये वाढून देते — तुला काहीही विचारायची गरज नाही. (ती कधी वाढेल ते तिच्या हातात आहे)

  // Observable = अनेक मूल्ये वेळेनुसार Push करणारा producer.

  // subscribe() = चालू करतो.

  // unsubscribe() = बंद करतो.

  // next(), error(), complete() — हेच ३ मुख्य इव्हेंट्स आहेत.

  // Lazy असतो — म्हणजे Subscribing केल्यावरच चालतो.

    }

  OBSERVER() {
    //     Observer म्हणजे एक असं object किंवा function set असतं, जे Observable कडून येणाऱ्या values (डेटा) ला receive करतं.
    // ते 3 प्रकारचे संदेश receive करू शकतं:

    // ✅ next: नवीन value आली की next() कॉल होतो

    // ❌ error: काही चूक झाली तर error() कॉल होतो

    // ✅✅ complete: सर्व values देऊन Observable पूर्ण झाला की complete() कॉल होतो

    // 🎯 उदाहरण:
    // const observer = {
    //   next: x => console.log('Observer ला नवीन value मिळाली: ' + x),
    //   error: err => console.error('Observer ला error मिळाला: ' + err),
    //   complete: () => console.log('Observable पूर्ण झाला.'),
    // };
    // आणि हे observer आपण Observable.subscribe() मध्ये वापरतो:
    // observable.subscribe(observer);
    // 🔹 पूर्ण Observer vs Partial Observer
    // 🔸 Full Observer:
    // जर तू next, error, आणि complete – सगळी callback functions दिलीस, तर ते full observer असतं.
    // 🔸 Partial Observer:
    // जर तू फक्त काही callbacks दिल्या (उदाहरणार्थ next आणि error), तरी चालतं. उरलेल्या notifications ना RxJS simply ignore करतं.
    // const partialObserver = {
    //   next: x => console.log('फक्त next callback: ' + x),
    //   // complete callback नाही दिली तरी observable चालेल
    // };
    // ✅ Short Syntax:
    // जर तुला फक्त next value वापरायची असेल, तर तू असंही करू शकतो:
    // observable.subscribe(x => console.log('मिळालेली value: ' + x));
    // ➡️ यात internally RxJS एक Observer तयार करतो जिथे next ला तू दिलेला callback असतो, आणि उरलेले (error, complete) default असतात.
    // 🔁 थोडक्यात सारांश:
    // Term	अर्थ
    // Observable	डेटा तयार करणारा (producer)
    // Observer	डेटा consume करणारा (listener)
    // next()	नवीन value आली
    // error()	काही चूक झाली
    // complete()	सर्व values दिल्या आणि observable संपलं


// -------------------------------👉 subscribe() करतानाच Observer वापरतो.----------------------------------------

//     <!DOCTYPE html>
// <html>
//   <head>
//     <title>RxJS Example</title>
//     <script src="https://unpkg.com/rxjs@7/dist/bundles/rxjs.umd.min.js"></script>
//   </head>
//   <body>
//     <h2>RxJS Observer Example</h2>
//     <script>
//       const { Observable } = rxjs;

//       // ✅ 1. Observable तयार करतो
//       const myObservable = new Observable((subscriber) => {
//         subscriber.next('Hello');
//         subscriber.next('from');
//         subscriber.next('RxJS!');
//         subscriber.complete();
//       });

//       // ✅ 2. Observer तयार करतो
//       const myObserver = {
//         next: (value) => console.log('✅ Value:', value),
//         error: (err) => console.error('❌ Error:', err),
//         complete: () => console.log('🎉 Completed'),
//       };

//       // ✅ 3. Observable ला subscribe करतो
//       myObservable.subscribe(myObserver);
//     </script>
//   </body>
// </html>

  }


  OPERATOR(){
//     💡 RxJS Operators म्हणजे काय?
// Operators म्हणजे functions (कार्ये) जे Observable वर प्रक्रिया करतात. हे दोन प्रकारचे असतात:

// ✅ 1. Pipeable Operators (पाइपने वापरले जाणारे ऑपरेटर्स)
// हे .pipe() मेथड वापरून वापरले जातात.

// याचा मूळ Observable बदलत नाही, पण नवीन Observable तयार होतो.

// हे pure functions असतात.

// उदाहरण:


// import { of, map } from 'rxjs';

// of(1, 2, 3)
//   .pipe(map(x => x * 2))
//   .subscribe(x => console.log('Value:', x));
// 📌 Output:



// Value: 2
// Value: 4
// Value: 6
// ✅ 2. Creation Operators (नवीन Observable तयार करणारे ऑपरेटर्स)
// हे नवीन Observables तयार करतात.

// उदाहरण:


// import { interval } from 'rxjs';

// const obs = interval(1000); // प्रत्येक 1000ms ला एक नंबर emit होईल
// obs.subscribe(x => console.log(x));
// 🔄 Higher-order Observables म्हणजे काय?
// जर एक Observable दुसरं Observable emit करत असेल, तर त्याला Higher-order Observable म्हणतात.

// 🧠 Example:


// urlObservable.pipe(
//   map(url => http.get(url)), // http.get एक Observable परत करतं
//   concatAll() // सगळी inner observables flatten करतो
// )
// 🔀 Flattening Operators (जसे की join operators):
// concatAll()

// mergeAll()

// switchAll()

// exhaustAll()

// 🔧 Custom Operator बनवण्याचे उदाहरण:

// import { pipe, filter, map } from 'rxjs';

// function discardOddDoubleEven() {
//   return pipe(
//     filter(v => v % 2 === 0),
//     map(v => v * 2)
//   );
// }
// 🔢 Operator Categories (श्रेणी):

// श्रेणी	उदाहरण
// Creation--	of, interval, from
// Transformation	--map, mergeMap, concatMap
// Filtering	filter,---- take, first
// Joining	merge, concat, zip
// Multicasting--	share, publish
// Error handling--	catchError, retry
// Utility--	tap, delay, timeout
  }


  SUBSCRIBE(){
//     📌 Subscription म्हणजे काय?
// RxJS मध्ये Subscription म्हणजे एक object आहे जो एका Observable च्या execution चं प्रतिनिधित्व करतो.

// जेव्हा आपण एखाद्या Observable ला .subscribe() करतो, तेव्हा तो काहीतरी data emit करणं सुरू करतो — आणि ते execution चालू राहतं, जोपर्यंत आपण ते थांबवत नाही.

// ही execution थांबवण्यासाठी आपण unsubscribe() ही method वापरतो.

// 🔧 Subscription चे मुख्य वैशिष्ट्य:
// unsubscribe() → ही method कॉल केली की, तो Observable पुढे काही emit करणार नाही, म्हणजेच resource मुक्त होतो.

// RxJS च्या जुन्या versions मध्ये Subscription ला "Disposable" म्हणायचे.

// 🧪 उदाहरण:
// ts

// import { interval } from 'rxjs';

// const observable = interval(1000); // प्रत्येक 1 सेकंदाला value emit होईल

// const subscription = observable.subscribe(x => console.log(x));

// // काही वेळानंतर आपल्याला हे थांबवायचं असेल...
// setTimeout(() => {
//   subscription.unsubscribe(); // execution cancel केली
// }, 5000);
// 📝 वरील उदाहरणात interval प्रत्येक सेकंदाला एक नवीन value emit करतं, पण आपण 5 सेकंदांनंतर unsubscribe() केल्यामुळे तो थांबतो.

// 🔗 Multiple Subscriptions एकत्र करणे:
// आपण एक Subscription मध्ये दुसरं Subscription "add" करू शकतो. त्यामुळे एकाच वेळी अनेक Observables चं execution थांबवता येतं.

// उदाहरण:
// ts

// import { interval } from 'rxjs';

// const observable1 = interval(400); // प्रत्येक 400ms ला emit
// const observable2 = interval(300); // प्रत्येक 300ms ला emit

// const subscription = observable1.subscribe(x => console.log('first: ' + x));
// const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

// subscription.add(childSubscription); // दुसरं Subscription पहिल्यात add केलं

// setTimeout(() => {
//   subscription.unsubscribe(); // दोन्ही subscriptions cancel होतील
// }, 1000);
// 📤 कन्सोल output:
// makefile

// second: 0
// first: 0
// second: 1
// first: 1
// second: 2
// 1 सेकंद झाल्यावर unsubscribe() केल्याने दोन्ही Observable थांबतील.

// 🔄 Subscription काढून टाकणे (remove):
// जर तुम्ही दुसरं Subscription चुकून add केलं असेल किंवा तुम्हाला ते वेगळं ठेवायचं असेल, तर तुम्ही ते remove() वापरून मुख्य Subscription मधून काढू शकता.

// ts

// subscription.remove(childSubscription);
// 📌 थोडक्यात सांगायचं झालं तर:

// संज्ञा	अर्थ
// Subscription	Observable सुरू झाल्यावर तयार होणारा resource
// unsubscribe()	Observable बंद करतो, resource release करतो
// add()	दुसरं subscription add करतो
// remove()	दुसरं subscription remove करतो
// RxJS मध्ये काम करताना Subscription आणि unsubscribe() योग्य वेळी वापरणं अत्यंत महत्त्वाचं आहे, विशेषतः memory leak टाळण्यासाठी!
  }
}


