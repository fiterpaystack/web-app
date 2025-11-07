import{a as vo}from"./chunk-TIHNVXJO.js";import{a as Co,b as Ue,c as dn,d as qn,e as Hn}from"./chunk-GUJPJH4J.js";import{a as zn,b as ra,c as bo,d as So}from"./chunk-FIQE6C7M.js";import"./chunk-FK6H3RFT.js";import{a as ho}from"./chunk-7VMA7J5Y.js";import{$ as o,$b as Pe,$c as it,$e as jt,$f as uo,Aa as Q,Ad as Tt,Ba,Bc as Mn,Bd as Lt,Be as we,Cc as Y,Cd as Ne,Cf as ao,D as Mt,Da as ee,Dc as G,Dd as ot,Df as oo,E as Dn,Ea as ne,Ef as Ie,Fa as ie,Fc as Ga,Ff as ro,G as At,Ga as F,Gb as Ze,Gd as Ot,Ha as t,Hc as nt,Hd as Me,Ia as x,Ic as q,Id as ae,If as lo,Ja as f,Jc as J,Jd as xe,Jf as Nn,K as Ge,Ka as V,Kc as st,Kd as Za,Ke as Ee,Kf as Wt,L as P,La as fn,Le,Lf as Vn,M,Ma as gn,Md as On,Me as Ln,Mf as pn,Na as _n,Nc as K,Nd as Ve,Ne as rn,Nf as mo,Oa as Cn,Oc as Ua,Oe as ln,Of as cn,Pa as hn,Pc as gt,Pe as mn,Qc as le,Qd as In,Qe as sn,Qf as R,R as Je,Ra as N,Rc as ke,Rd as En,Re as Ae,Sa as Te,Sc as pt,Sd as An,Se as Oe,Sf as so,Tb as B,Td as me,Te as Rt,Ua as s,Ub as ja,Ue as Ft,Uf as po,V as Ra,Va as p,Vc as ct,Ve as Bt,Wa as Et,Wb as $,Wc as $a,We as Rn,Wf as co,X as aa,Xa as ka,Xb as H,Xc as Wa,Xe as kt,Xf as fe,Y as Tn,Ya as vt,Yb as qa,Yc as _t,Ye as Nt,Yf as pe,Zb as oa,Zd as wn,Ze as Fn,Zf as vn,_e as Vt,ac as j,ad as Qa,af as Bn,ag as xo,bd as w,bf as qt,c as Aa,ca as Fa,cd as et,ce as be,cf as zt,da as v,db as he,dd as Ya,df as kn,e as wa,ea as E,eb as It,ed as Ka,ef as Ht,eg as fo,fa as Pn,fb as k,fd as mt,gg as go,hd as ht,hf as se,ia as d,id as Ja,ka as ue,kb as Na,la as c,ld as Z,mc as Xe,md as Ct,mf as eo,nc as tn,nf as no,ng as jn,oc as Zt,oe as Xa,of as io,og as ce,pa as i,pb as Va,pc as en,pd as bt,pe as to,pg as _o,qa as a,qb as ye,qc as nn,qd as X,ra as g,rb as A,rc as an,rd as Yt,sa as b,sc as on,sd as at,ta as S,td as Gt,va as O,vd as Ut,wa as T,wc as ve,xa as C,xc as L,yc as za,yd as yt,z as La,zc as Ha,zd as Dt}from"./chunk-3AC4ZTGY.js";import{a as W,b as ft}from"./chunk-QDSGMOWV.js";var Gn=class{constructor(r,n){this.setOptions(r,n),this.setButtons(r)}get singleButtons(){return this.buttonsArray}get options(){return this.optionArray}get optionsPayment(){return this.optionPaymentArray}setButtons(r){switch(r){case"Active":this.buttonsArray=[{name:"Add Loan Charge",icon:"plus",taskPermissionName:"CREATE_LOANCHARGE"},{name:"Foreclosure",icon:"heart-broken",taskPermissionName:"FORECLOSURE_LOAN"},{name:"Make Repayment",icon:"coins",taskPermissionName:"REPAYMENT_LOAN"},{name:"Undo Disbursal",icon:"undo",taskPermissionName:"DISBURSALUNDO_LOAN"}];break;case"Submitted and pending approval":this.buttonsArray=[{name:"Add Loan Charge",icon:"plus",taskPermissionName:"CREATE_LOANCHARGE"},{name:"Approve",icon:"check",taskPermissionName:"APPROVE_LOAN"},{name:"Modify Application",icon:"edit",taskPermissionName:"UPDATE_LOAN"},{name:"Reject",icon:"times",taskPermissionName:"REJECT_LOAN"}];break;case"Approved":this.buttonsArray=[{name:"Disburse",icon:"hand-holding-usd",taskPermissionName:"DISBURSE_LOAN"},{name:"Disburse to Savings",icon:"piggy-bank",taskPermissionName:"DISBURSETOSAVINGS_LOAN"},{name:"Undo Approval",icon:"undo",taskPermissionName:"APPROVALUNDO_LOAN"}];break;case"Overpaid":this.buttonsArray=[{name:"Transfer Funds",icon:"exchange",taskPermissionName:"CREATE_ACCOUNTTRANSFER"},{name:"Credit Balance Refund",icon:"coins",taskPermissionName:"CREATE_CREDIT_BALANCE_REFUND"}];break;case"Closed (written off)":this.buttonsArray=[{name:"Recovery Payment",icon:"briefcase",taskPermissionName:"RECOVERYPAYMENT_LOAN"}];break;case"Closed (obligations met)":this.buttonsArray=[{name:"Goodwill Credit",icon:"coins",taskPermissionName:"CREATE_GOODWILL_TRANSACTION"},{name:"Interest Payment Waiver",icon:"coins",taskPermissionName:"CREATE_INTERESTPAYMENTWAIVER_TRANSACTION"},{name:"Payout Refund",icon:"coins",taskPermissionName:"CREATE_PAYOUT_REFUND"},{name:"Merchant Issued Refund",icon:"coins",taskPermissionName:"CREATE_MERCHANT_ISSUED_REFUND"}];break;default:this.buttonsArray=[]}}setOptions(r,n){switch(r){case"Active":this.optionArray=[{name:"Waive Interest",taskPermissionName:"WAIVEINTERESTPORTION_LOAN"},{name:"Reschedule",taskPermissionName:"CREATE_RESCHEDULELOAN"},{name:"Write Off",taskPermissionName:"WRITEOFF_LOAN"},{name:"Close (as Rescheduled)",taskPermissionName:"CLOSEASRESCHEDULED_LOAN"},{name:"Close",taskPermissionName:"CLOSE_LOAN"},{name:"Loan Screen Report",taskPermissionName:"READ_LOAN"},{name:"View Guarantors",taskPermissionName:"READ_GUARANTOR"},{name:"Create Guarantor",taskPermissionName:"CREATE_GUARANTOR"},{name:"Recover From Guarantor",taskPermissionName:"RECOVERGUARANTEES_LOAN"},{name:"Sell Loan",taskPermissionName:"SALE_LOAN"}],this.isContractTermination(n)||this.optionArray.push({name:"Contract Termination",taskPermissionName:"CONTRACT_TERMINATION_LOAN"}),this.optionPaymentArray=[{name:"Goodwill Credit",taskPermissionName:"CREATE_GOODWILL_TRANSACTION"},{name:"Interest Payment Waiver",taskPermissionName:"CREATE_INTERESTPAYMENTWAIVER_TRANSACTION"},{name:"Payout Refund",taskPermissionName:"CREATE_PAYOUT_REFUND"},{name:"Merchant Issued Refund",taskPermissionName:"CREATE_MERCHANT_ISSUED_REFUND"}];break;case"Submitted and pending approval":this.optionArray=[{name:"Withdrawn by Client",taskPermissionName:"WITHDRAW_LOAN"},{name:"Delete",taskPermissionName:"DELETE_LOAN"},{name:"Add Collateral",taskPermissionName:"CREATE_COLLATERAL"},{name:"View Guarantors",taskPermissionName:"READ_GUARANTOR"},{name:"Create Guarantor",taskPermissionName:"CREATE_GUARANTOR"},{name:"Loan Screen Reports",taskPermissionName:"READ_LOAN"}],this.optionPaymentArray=[];break;case"Approved":this.optionArray=[{name:"Add Loan Charge",taskPermissionName:"CREATE_LOANCHARGE"},{name:"View Guarantors",taskPermissionName:"READ_GUARANTOR"},{name:"Create Guarantor",taskPermissionName:"CREATE_GUARANTOR"},{name:"Loan Screen Report",taskPermissionName:"READ_LOAN"}],this.optionPaymentArray=[];break;default:this.optionArray=[],this.optionPaymentArray=[]}}addOption(r){this.optionArray.push(r)}addButton(r){this.buttonsArray.push(r)}isContractTermination(r){return r==null?!1:r.code==="loanSubStatus.loanSubStatusType.contractTermination"}};var nr=()=>["./general"],ir=()=>["./accountdetail"],ar=()=>["./repayment-schedule"],or=()=>["./loan-documents"],rr=()=>["./original-schedule"],lr=()=>["./transactions"],mr=()=>["./delinquencytags"],sr=()=>["./loan-collateral"],pr=()=>["./loan-tranche-details"],cr=()=>["./term-variations"],dr=()=>["./overdue-charges"],ur=()=>["./floating-interest-rates"],xr=()=>["./charges"],fr=()=>["./loan-reschedules"],gr=()=>["./notes"],_r=()=>["./standing-instruction"],Cr=()=>["./external-asset-owner"],hr=e=>["./datatables",e];function vr(e,r){if(e&1&&(i(0,"tr"),t(1,`
                      `),i(2,"td"),t(3),s(4,"translate"),a(),t(5,`
                      `),i(6,"td"),t(7,`
                        `),i(8,"span",47),g(9,"i",48),a(),t(10),a(),t(11,`
                    `),a()),e&2){let n=C(2);o(3),f("",p(4,3,"labels.inputs.Delinquency Classification")," :"),o(6),c("ngClass",n.loanDelinquencyClassificationStyle),o(),f(`
                        `,n.loanDetailsData==null?null:n.loanDetailsData.delinquencyRange.classification,`
                      `)}}function br(e,r){if(e&1&&(i(0,"tr"),t(1,`
                      `),i(2,"td"),t(3),s(4,"translate"),a(),t(5,`
                      `),i(6,"td"),t(7),s(8,"formatNumber"),a(),t(9,`
                    `),a()),e&2){let n=C(2);o(3),f("",p(4,2,"labels.inputs.Past Due Days")," :"),o(4),x(p(8,4,n.loanDetailsData==null?null:n.loanDetailsData.delinquent.pastDueDays))}}function Sr(e,r){if(e&1&&(i(0,"tr"),t(1,`
                      `),i(2,"td"),t(3),s(4,"translate"),a(),t(5,`
                      `),i(6,"td"),t(7),s(8,"formatNumber"),a(),t(9,`
                    `),a()),e&2){let n=C(2);o(3),f("",p(4,2,"labels.inputs.Delinquent Days")," :"),o(4),x(p(8,4,n.loanDetailsData==null?null:n.loanDetailsData.delinquent.delinquentDays))}}function yr(e,r){if(e&1&&(i(0,"div"),t(1,`
                `),i(2,"table",46),t(3,`
                  `),i(4,"tbody"),t(5,`
                    `),d(6,vr,12,5,"tr",37),t(7,`
                    `),d(8,br,10,6,"tr",37),t(9,`
                    `),d(10,Sr,10,6,"tr",37),t(11,`
                  `),a(),t(12,`
                `),a(),t(13,`
              `),a()),e&2){let n=C();o(6),c("ngIf",n.loanDetailsData.delinquencyRange),o(2),c("ngIf",n.loanDetailsData.delinquent&&n.loanDetailsData.delinquent.pastDueDays>0),o(2),c("ngIf",n.loanDetailsData.delinquent&&n.loanDetailsData.delinquent.delinquentDays>0&&n.loanDetailsData.delinquent.pastDueDays!==n.loanDetailsData.delinquent.delinquentDays)}}function Dr(e,r){if(e&1&&(i(0,"td",50),t(1),s(2,"currency"),a()),e&2){let n=C(3);o(),f(`
                      `,vt(2,1,n.loanDetailsData.summary.totalOverdue,n.currency.code,"symbol-narrow","1.2-2"),`
                    `)}}function Tr(e,r){e&1&&(i(0,"td"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
                      `,p(2,1,"labels.inputs.Not Provided"),`
                    `))}function Pr(e,r){if(e&1&&(i(0,"tr"),t(1,`
                    `),i(2,"td"),t(3),s(4,"translate"),a(),t(5,`
                    `),d(6,Dr,3,6,"td",51),t(7,`
                    `),d(8,Tr,3,3,"td",37),t(9,`
                  `),a()),e&2){let n=C(2);o(3),x(p(4,3,"labels.inputs.Arrears By")),o(3),c("ngIf",n.loanDetailsData.summary.totalOverdue>=0),o(2),c("ngIf",!(n.loanDetailsData.summary.totalOverdue>=0))}}function Mr(e,r){if(e&1&&(i(0,"tr"),t(1,`
                    `),i(2,"td"),t(3),s(4,"translate"),a(),t(5,`
                    `),i(6,"td"),t(7),s(8,"dateFormat"),a(),t(9,`
                  `),a()),e&2){let n=C(2);o(3),x(p(4,2,"labels.inputs.Arrears Since")),o(4),x(p(8,4,n.loanDetailsData.summary.overdueSinceDate))}}function Or(e,r){if(e&1&&(i(0,"tr"),t(1,`
                    `),i(2,"td"),t(3),s(4,"translate"),a(),t(5,`
                    `),i(6,"td",50),t(7),s(8,"currency"),a(),t(9,`
                  `),a()),e&2){let n=C(2);o(3),x(p(4,2,"labels.inputs.Overpaid By")),o(4),f(`
                      `,vt(8,4,n.loanDetailsData.totalOverpaid,n.currency.code,"symbol-narrow","1.2-2"),`
                    `)}}function Ir(e,r){if(e&1&&(i(0,"div",49),t(1,`
              `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`
              `),i(6,"table",46),t(7,`
                `),i(8,"tbody"),t(9,`
                  `),i(10,"tr"),t(11,`
                    `),i(12,"td"),t(13),s(14,"translate"),a(),t(15,`
                    `),i(16,"td",50),t(17),s(18,"currency"),a(),t(19,`
                  `),a(),t(20,`
                  `),d(21,Pr,10,5,"tr",37),t(22,`
                  `),d(23,Mr,10,6,"tr",37),t(24,`
                  `),d(25,Or,10,9,"tr",37),t(26,`
                `),a(),t(27,`
              `),a(),t(28,`
            `),a()),e&2){let n=C();o(3),x(p(4,6,"labels.heading.Account Overview")),o(10),x(p(14,8,"labels.inputs.Current Balance")),o(4),f(`
                      `,vt(18,10,n.loanDetailsData.summary.totalOutstanding,n.currency.code,"symbol-narrow","1.2-2"),`
                    `),o(4),c("ngIf",n.loanDisplayArrearsDelinquency<2),o(2),c("ngIf",n.loanDetailsData.inArrears),o(2),c("ngIf",n.loanDetailsData.totalOverpaid&&n.loanDetailsData.totalOverpaid>0)}}function Er(e,r){if(e&1&&(i(0,"button",52),t(1,`
                `),i(2,"mat-icon",53),t(3,`
                  `),g(4,"fa-icon",54),t(5,`
                `),a(),t(6,`
              `),a()),e&2){C();let n=F(66);c("matMenuTriggerFor",n)}}function Ar(e,r){if(e&1){let n=O();i(0,"button",56),T("click",function(){P(n);let l=C().$implicit,u=C();return M(u.loanAction(l.name))}),t(1,`
            `),i(2,"mat-icon",57),t(3,`
              `),g(4,"fa-icon",58),t(5,`
            `),a(),t(6,`
            `),i(7,"span"),t(8),s(9,"translate"),a(),t(10,`
          `),a()}if(e&2){let n=C().$implicit;o(4),Q("icon",n.icon),o(4),x(p(9,2,"labels.menus."+n.name))}}function wr(e,r){if(e&1&&(b(0),t(1,`
          `),d(2,Ar,11,4,"button",55),t(3,`
        `),S()),e&2){let n=r.$implicit;o(2),c("mifosxHasPermission",n.taskPermissionName)}}function Lr(e,r){if(e&1){let n=O();i(0,"button",56),T("click",function(){P(n);let l=C().$implicit,u=C(2);return M(u.loanAction(l.name))}),t(1),s(2,"translate"),a()}if(e&2){let n=C().$implicit;o(),f(`
                `,p(2,1,"labels.menus."+n.name),`
              `)}}function Rr(e,r){if(e&1&&(i(0,"span"),t(1,`
              `),d(2,Lr,3,3,"button",55),t(3,`
            `),a()),e&2){let n=r.$implicit;o(2),c("mifosxHasPermission",n.taskPermissionName)}}function Fr(e,r){if(e&1&&(b(0,59),t(1,`
          `),i(2,"button",60),t(3),s(4,"translate"),a(),t(5,`
          `),i(6,"mat-menu",null,6),t(8,`
            `),d(9,Rr,4,1,"span",41),t(10,`
          `),a(),t(11,`
        `),S()),e&2){let n=F(7),m=C();o(2),c("matMenuTriggerFor",n),o(),x(p(4,3,"labels.menus.Payments")),o(6),c("ngForOf",m.buttonConfig.optionsPayment)}}function Br(e,r){if(e&1){let n=O();i(0,"button",56),T("click",function(){P(n);let l=C().$implicit,u=C(2);return M(u.loanAction(l.name))}),t(1),s(2,"translate"),a()}if(e&2){let n=C().$implicit;o(),f(`
                `,p(2,1,"labels.menus."+n.name),`
              `)}}function kr(e,r){if(e&1&&(i(0,"span"),t(1,`
              `),d(2,Br,3,3,"button",55),t(3,`
            `),a()),e&2){let n=r.$implicit;o(2),c("mifosxHasPermission",n.taskPermissionName)}}function Nr(e,r){if(e&1&&(b(0,59),t(1,`
          `),i(2,"button",60),t(3),s(4,"translate"),a(),t(5,`
          `),i(6,"mat-menu",null,7),t(8,`
            `),d(9,kr,4,1,"span",41),t(10,`
          `),a(),t(11,`
        `),S()),e&2){let n=F(7),m=C();o(2),c("matMenuTriggerFor",n),o(),x(p(4,3,"labels.menus.More")),o(6),c("ngForOf",m.buttonConfig.options)}}function Vr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,8),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,rr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Original Schedule"),`
        `)}}function jr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,9),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,lr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Transactions"),`
        `)}}function qr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,10),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,mr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Delinquency Tags"),`
        `)}}function zr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,11),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,sr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Loan Collateral Details"),`
        `)}}function Hr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,12),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,pr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Loan Tranche Details"),`
        `)}}function Gr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,13),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,cr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Term Variations"),`
        `)}}function Ur(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,14),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,dr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Overdue Charges"),`
        `)}}function $r(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,15),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,ur))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Floating Interest Rates"),`
        `)}}function Wr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,16),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,xr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Charges"),`
        `)}}function Qr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,17),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,fr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Loan Reschedules"),`
        `)}}function Yr(e,r){if(e&1&&(i(0,"a",44,18),t(2),s(3,"translate"),a()),e&2){let n=F(1);c("routerLink",N(5,gr))("active",n.isActive),o(2),f(`
        `,p(3,3,"labels.inputs.Notes"),`
      `)}}function Kr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,19),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,_r))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.Standing Instruction"),`
        `)}}function Jr(e,r){if(e&1&&(b(0),t(1,`
        `),i(2,"a",44,20),t(4),s(5,"translate"),a(),t(6,`
      `),S()),e&2){let n=F(3);o(2),c("routerLink",N(5,Cr))("active",n.isActive),o(2),f(`
          `,p(5,3,"labels.inputs.External Asset Owner"),`
        `)}}function Zr(e,r){if(e&1&&(i(0,"a",44,21),t(2),a()),e&2){let n=F(1),m=C().$implicit;c("routerLink",Te(3,hr,m.registeredTableName))("active",n.isActive),o(2),f(`
          `,m.registeredTableName,`
        `)}}function Xr(e,r){if(e&1&&(b(0),t(1,`
        `),d(2,Zr,3,5,"a",45),t(3,`
      `),S()),e&2){let n=r.$implicit;o(2),c("mifosxHasPermission","READ_"+n.registeredTableName)}}var Un=(()=>{class e{constructor(n,m,l,u,_){this.route=n,this.router=m,this.loansService=l,this.translateService=u,this.dialog=_,this.disburseTransactionNo=0,this.loanDelinquencyClassificationStyle="",this.loanSubStatus=null,this.loanReAged=!1,this.loanReAmortized=!1,this.route.data.subscribe(h=>{this.loanDetailsData=h.loanDetailsData,this.loanDatatables=h.loanDatatables,this.loanDisplayArrearsDelinquency=h.loanArrearsDelinquencyConfig.value||0,this.loanStatus=this.loanDetailsData.status,this.loanSubStatus=this.loanDetailsData.subStatus===void 0?null:this.loanDetailsData.subStatus,this.currency=this.loanDetailsData.currency,l.saveLoanDisbursementDetailsData(this.loanDetailsData.disbursementDetails),this.loanStatus.active&&this.loanDetailsData.transactions.forEach(y=>{y.manuallyReversed||(y.type.reAge?this.loanReAged=!0:y.type.reAmortize&&(this.loanReAmortized=!0))}),this.setConditionalButtons()}),this.loanId=this.route.snapshot.params.loanId,this.clientId=this.loanDetailsData.clientId}ngOnInit(){this.route.params.subscribe(n=>{this.loanId!=n.loanId&&(this.loanId=n.loanId,this.reload())}),this.recalculateInterest=this.loanDetailsData.recalculateInterest||!0,this.status=this.loanDetailsData.status.value,this.loanStatus=this.loanDetailsData.status,this.loanSubStatus=this.loanDetailsData.subStatus===void 0?null:this.loanDetailsData.subStatus,this.loanStatus.active&&this.loanDetailsData.multiDisburseLoan&&this.loanDetailsData&&this.loanDetailsData.transactions&&this.loanDetailsData.transactions.forEach(n=>{n.type.disbursement&&this.disburseTransactionNo++}),this.setConditionalButtons(),this.router.url.includes("clients")?this.entityType="Client":this.router.url.includes("groups")?this.entityType="Group":this.router.url.includes("centers")&&(this.entityType="Center"),this.loanDelinquencyClassification()}setConditionalButtons(){this.buttonConfig=new Gn(this.status,this.loanSubStatus),this.status==="Submitted and pending approval"?(this.buttonConfig.addOption({name:this.loanDetailsData.loanOfficerName?"Change Loan Officer":"Assign Loan Officer",icon:"user-tie",taskPermissionName:"DISBURSE_LOAN"}),this.loanDetailsData.isVariableInstallmentsAllowed&&this.buttonConfig.addOption({name:"Edit Repayment Schedule",icon:"edit",taskPermissionName:"ADJUST_REPAYMENT_SCHEDULE"})):this.status==="Approved"?this.buttonConfig.addButton({name:this.loanDetailsData.loanOfficerName?"Change Loan Officer":"Assign Loan Officer",icon:"user-tie",taskPermissionName:"DISBURSE_LOAN"}):this.status==="Active"?(this.loanDetailsData.enableBuyDownFee&&this.buttonConfig.addButton({name:"Buy Down Fee",icon:"plus",taskPermissionName:"BUYDOWNFEE_LOAN"}),this.loanDetailsData.enableIncomeCapitalization&&this.buttonConfig.addButton({name:"Capitalized Income",icon:"coins",taskPermissionName:"CAPITALIZEDINCOME_LOAN"}),(this.loanDetailsData.canDisburse||this.loanDetailsData.multiDisburseLoan)&&this.buttonConfig.addButton({name:"Disburse",icon:"hand-holding-usd",taskPermissionName:"DISBURSE_LOAN"}),this.loanDetailsData.canDisburse&&this.buttonConfig.addButton({name:"Disburse to Savings",icon:"piggy-bank",taskPermissionName:"DISBURSETOSAVINGS_LOAN"}),this.loanDetailsData.multiDisburseLoan&&this.disburseTransactionNo>1&&this.buttonConfig.addButton({name:"Undo Last Disbursal",icon:"undo",taskPermissionName:"DISBURSALLASTUNDO_LOAN"}),this.recalculateInterest&&this.buttonConfig.addButton({name:"Add Interest Pause",icon:"calendar",taskPermissionName:"CREATE_INTEREST_PAUSE"}),this.loanDetailsData.loanOfficerName||this.buttonConfig.addButton({name:"Assign Loan Officer",icon:"user-tie",taskPermissionName:"UPDATELOANOFFICER_LOAN"}),this.recalculateInterest&&this.buttonConfig.addButton({name:"Prepay Loan",icon:"coins",taskPermissionName:"REPAYMENT_LOAN"}),this.loanDetailsData.chargedOff?this.buttonConfig.addButton({name:"Undo Charge-Off",icon:"undo",taskPermissionName:"UNDOCHARGEOFF_LOAN"}):this.buttonConfig.addButton({name:"Charge-Off",icon:"coins",taskPermissionName:"CHARGEOFF_LOAN"}),this.loanReAged?this.buttonConfig.addButton({name:"Undo Re-Age",icon:"undo",taskPermissionName:"UNDO_REAGE_LOAN"}):this.buttonConfig.addButton({name:"Re-Age",icon:"calendar",taskPermissionName:"REAGE_LOAN"}),this.loanReAmortized?this.buttonConfig.addButton({name:"Undo Re-Amortize",icon:"undo",taskPermissionName:"UNDO_REAMORTIZE_LOAN"}):this.buttonConfig.addButton({name:"Re-Amortize",icon:"calendar-alt",taskPermissionName:"REAMORTIZE_LOAN"})):(this.status==="Closed (obligations met)"||this.status==="Overpaid")&&this.loanDetailsData.multiDisburseLoan&&this.buttonConfig.addButton({name:"Disburse",icon:"hand-holding-usd",taskPermissionName:"DISBURSE_LOAN"})}loanAction(n){switch(n){case"Recover From Guarantor":this.recoverFromGuarantor();break;case"Delete":this.deleteLoanAccount();break;case"Modify Application":this.router.navigate(["edit-loans-account"],{relativeTo:this.route});break;case"Transfer Funds":let m={loanId:this.loanId,accountType:"fromloans"};this.router.navigate(["transfer-funds/make-account-transfer"],{relativeTo:this.route,queryParams:m});break;case"Undo Re-Age":case"Undo Re-Amortize":case"Undo Charge-Off":this.undoLoanAction(n);break;default:let l={relativeTo:this.route,state:{data:this.loanDetailsData}};this.router.navigate(["actions",n],l);break}}recoverFromGuarantor(){this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Recover from Guarantor"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want recover from Guarantor"),type:"Mild"}}).afterClosed().subscribe(m=>{m.confirm&&this.loansService.loanActionButtons(this.loanId,"recoverGuarantees").subscribe(()=>{this.reload()})})}loanDelinquencyClassification(){this.loanDelinquencyClassificationStyle="",this.loanDetailsData.delinquent&&this.loanDetailsData.delinquent.delinquencyPausePeriods&&this.loanDetailsData.delinquent.delinquencyPausePeriods.some(n=>{n.active&&(this.loanDelinquencyClassificationStyle="fa fa-stop status-pending")})}undoLoanAction(n){n=n.replace("Undo ",""),this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Undo Transaction"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want undo the transaction type")+" "+this.translateService.instant("labels.menus."+n)}}).afterClosed().subscribe(l=>{if(l.confirm){let u="";switch(n){case"Re-Age":u="undoReAge";break;case"Re-Amortize":u="undoReAmortize";break;case"Charge-Off":u="undo-charge-off";break}this.loansService.executeLoansAccountTransactionsCommand(String(this.loanId),u,{}).subscribe(()=>{this.reload()})}})}iconLoanStatusColor(){return this.loanDetailsData.chargedOff?"loanStatusType.chargeoff":this.isContractTermination(this.loanSubStatus)?"loanSubStatusType.contractTermination":this.loanDetailsData.inArrears?"loanStatusType.activeOverdue":this.loanDetailsData.status.code}loanStatusTooltip(){return this.loanDetailsData.chargedOff?"Chargeoff":this.loanDetailsData.inArrears?"activeOverdue":this.loanDetailsData.status.code}loanSubStatusTooltip(){return this.isContractTermination(this.loanSubStatus)?"contractTermination":""}deleteLoanAccount(){this.dialog.open(xe,{data:{deleteContext:`with loan id: ${this.loanId}`}}).afterClosed().subscribe(m=>{m.delete&&this.loansService.deleteLoanAccount(this.loanId).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route})})})}reload(){let n=this.clientId,m=this.router.url;this.router.navigateByUrl(`/clients/${n}/loans-accounts`,{skipLocationChange:!0}).then(()=>this.router.navigate([m]))}isContractTermination(n){return n==null?!1:n.code==="loanSubStatus.loanSubStatusType.contractTermination"}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(R),v(ve),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-view"]],decls:138,vars:67,consts:[["accountMenu","matMenu"],["general","routerLinkActive"],["accountdetail","routerLinkActive"],["repaymentSchedule","routerLinkActive"],["loanDocuments","routerLinkActive"],["tabPanel",""],["Payments","matMenu"],["More","matMenu"],["originalSchedule","routerLinkActive"],["transactions","routerLinkActive"],["delinquencytags","routerLinkActive"],["loanCollateralDetails","routerLinkActive"],["loanTrancheDetails","routerLinkActive"],["termVariations","routerLinkActive"],["overduecharges","routerLinkActive"],["floatingInterestRates","routerLinkActive"],["charges","routerLinkActive"],["loanReschedules","routerLinkActive"],["notes","routerLinkActive"],["standingInstruction","routerLinkActive"],["externalAssetOwner","routerLinkActive"],["datatable","routerLinkActive"],[1,"account-card"],[1,"header","layout-column"],[1,"header-title-group"],[1,"profile-image-container"],["iconFile","account_placeholder","iconName","LOAN_ACCOUNT","iconWidth","210",3,"iconClass","matTooltip"],[1,"mat-typography","account-card-title"],[1,"layout-row","responsive-column"],[1,"flex-60"],[1,"fa","fa-stop",3,"matTooltip","ngClass"],[1,"m-r-5"],[3,"textValue"],["display","left",3,"accountNo"],[1,"loans-overview"],[1,"m-r-10"],[1,"m-l-5"],[4,"ngIf"],["class","loans-overview mat-typography flex-30",4,"ngIf"],[1,"flex-5"],["mat-icon-button","","aria-label","Loan account actions","yPosition","below",3,"matMenuTriggerFor",4,"ngIf"],[4,"ngFor","ngForOf"],["class","loan-span",4,"ngIf"],["mat-tab-nav-bar","",1,"navigation-tabs",3,"tabPanel"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"mifosxHasPermission"],[1,"account-overview"],[1,"m-r-3"],[3,"ngClass"],[1,"loans-overview","mat-typography","flex-30"],[1,"r-amount"],["class","r-amount",4,"ngIf"],["mat-icon-button","","aria-label","Loan account actions","yPosition","below",3,"matMenuTriggerFor"],["matListIcon","",1,"actions-menu"],["icon","bars","size","sm"],["mat-menu-item","",3,"click",4,"mifosxHasPermission"],["mat-menu-item","",3,"click"],["matListIcon",""],["size","sm",3,"icon"],[1,"loan-span"],["mat-menu-item","",3,"matMenuTriggerFor"]],template:function(m,l){if(m&1&&(i(0,"mat-card",22),t(1,`
  `),i(2,"mat-card-header",23),t(3,`
    `),i(4,"mat-card-title-group",24),t(5,`
      `),i(6,"div",25),t(7,`
        `),i(8,"div"),t(9,`
          `),i(10,"mifosx-svg-icon",26),s(11,"translate"),t(12,`
          `),a(),t(13,`
        `),a(),t(14,`
      `),a(),t(15,`

      `),i(16,"div",27),t(17,`
        `),i(18,"mat-card-title"),t(19,`
          `),i(20,"div",28),t(21,`
            `),i(22,"div",29),t(23,`
              `),i(24,"h3"),t(25,`
                `),g(26,"i",30),s(27,"translate"),s(28,"statusLookup"),t(29,`
                `),i(30,"span",31),t(31),s(32,"translate"),a(),t(33,`
                `),i(34,"span",31),g(35,"mifosx-long-text",32),a(),t(36,`
                `),g(37,"mifosx-account-number",33),t(38,`
              `),a(),t(39,`
              `),i(40,"span",34),t(41,`
                `),i(42,"span",35),t(43),s(44,"translate"),s(45,"translate"),a(),t(46),i(47,"span",36),t(48),a(),g(49,"br"),t(50,`
              `),a(),t(51,`
              `),d(52,yr,14,3,"div",37),t(53,`
            `),a(),t(54,`

            `),d(55,Ir,29,15,"div",38),t(56,`

            `),i(57,"div",39),t(58,`
              `),d(59,Er,7,1,"button",40),t(60,`
            `),a(),t(61,`
          `),a(),t(62,`
        `),a(),t(63,`
      `),a(),t(64,`

      `),i(65,"mat-menu",null,0),t(67,`
        `),d(68,wr,4,1,"ng-container",41),t(69,`

        `),d(70,Fr,12,5,"ng-container",42),t(71,`

        `),d(72,Nr,12,5,"ng-container",42),t(73,`
      `),a(),t(74,`
    `),a(),t(75,`
  `),a(),t(76,`

  `),i(77,"mat-card-content"),t(78,`
    `),i(79,"nav",43),t(80,`
      `),i(81,"a",44,1),t(83),s(84,"translate"),a(),t(85,`
      `),i(86,"a",44,2),t(88),s(89,"translate"),a(),t(90,`
      `),d(91,Vr,7,6,"ng-container",37),t(92,`
      `),i(93,"a",44,3),t(95),s(96,"translate"),a(),t(97,`
      `),d(98,jr,7,6,"ng-container",37),t(99,`
      `),d(100,qr,7,6,"ng-container",37),t(101,`
      `),d(102,zr,7,6,"ng-container",37),t(103,`
      `),d(104,Hr,7,6,"ng-container",37),t(105,`
      `),d(106,Gr,7,6,"ng-container",37),t(107,`
      `),d(108,Ur,7,6,"ng-container",37),t(109,`
      `),d(110,$r,7,6,"ng-container",37),t(111,`
      `),d(112,Wr,7,6,"ng-container",37),t(113,`
      `),d(114,Qr,7,6,"ng-container",37),t(115,`
      `),i(116,"a",44,4),t(118),s(119,"translate"),a(),t(120,`
      `),d(121,Yr,4,6,"a",45),t(122,`
      `),d(123,Kr,7,6,"ng-container",37),t(124,`
      `),d(125,Jr,7,6,"ng-container",37),t(126,`
      `),d(127,Xr,4,1,"ng-container",41),t(128,`
    `),a(),t(129,`
    `),i(130,"mat-tab-nav-panel",null,5),t(132,`
      `),g(133,"router-outlet"),t(134,`
    `),a(),t(135,`
  `),a(),t(136,`
`),a(),t(137,`
`)),m&2){let u=F(82),_=F(87),h=F(94),y=F(117),D=F(131);o(10),Q("matTooltip",p(11,43,"tooltips.Loan Account")),o(16),Q("matTooltip",p(27,45,"labels.status."+l.loanDetailsData.status.value)),c("ngClass",p(28,47,l.iconLoanStatusColor())),o(5),f("",p(32,49,"labels.heading.Loan Product")," :"),o(4),Q("textValue",l.loanDetailsData.loanProductName),o(2),Q("accountNo",l.loanDetailsData.accountNo),o(6),V("",p(44,51,"labels.text."+l.entityType)," ",p(45,53,"labels.inputs.name")," :"),o(3),f(`
                `,l.loanDetailsData.clientName||l.loanDetailsData.group.name,""),o(2),f("(",l.loanDetailsData.clientAccountNo||l.loanDetailsData.group.accountNo,")"),o(4),c("ngIf",l.loanDisplayArrearsDelinquency!==1),o(3),c("ngIf",l.loanDetailsData.summary),o(4),c("ngIf",l.buttonConfig.singleButtons.length>0),o(9),c("ngForOf",l.buttonConfig.singleButtons),o(2),c("ngIf",l.buttonConfig.optionsPayment.length),o(2),c("ngIf",l.buttonConfig.options.length),o(7),c("tabPanel",D),o(2),c("routerLink",N(63,nr))("active",u.isActive),o(2),f(`
        `,p(84,55,"labels.inputs.General"),`
      `),o(3),c("routerLink",N(64,ir))("active",_.isActive),o(2),f(`
        `,p(89,57,"labels.inputs.Account Details"),`
      `),o(3),c("ngIf",l.loanDetailsData.originalSchedule),o(2),c("routerLink",N(65,ar))("active",h.isActive),o(2),f(`
        `,p(96,59,"labels.inputs.Repayment Schedule"),`
      `),o(3),c("ngIf",l.loanDetailsData.transactions),o(2),c("ngIf",l.loanDetailsData.status.active),o(2),c("ngIf",l.loanDetailsData.collateral),o(2),c("ngIf",l.loanDetailsData.multiDisburseLoan),o(2),c("ngIf",l.loanDetailsData.loanTermVariations),o(2),c("ngIf",l.loanDetailsData.overdueCharges.length>0),o(2),c("ngIf",l.loanDetailsData.isLoanProductLinkedToFloatingRate),o(2),c("ngIf",l.loanDetailsData.charges),o(2),c("ngIf",l.loanDetailsData.status.active),o(2),c("routerLink",N(66,or))("active",y.isActive),o(2),f(`
        `,p(119,61,"labels.inputs.Loan Documents"),`
      `),o(3),c("mifosxHasPermission","READ_LOANNOTE"),o(2),c("ngIf",l.loanDetailsData.clientId),o(2),c("ngIf",l.loanDetailsData.status.active),o(2),c("ngForOf",l.loanDatatables)}},dependencies:[A,he,It,k,ye,w,H,et,mt,Lt,ot,L,Ja,Ka,xo,me,Ya,jn,fo,Pe,An,wn,Ot,En,In,eo,no,qa,io,ja,Vn,Wt],styles:[".loans-overview[_ngcontent-%COMP%]{font-size:14px}.account-overview[_ngcontent-%COMP%]{min-width:80%;font-weight:400}"]})}}return e})();function tl(e,r){if(e&1&&(b(0),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"div",2),t(7,`
      `),i(8,"table"),t(9,`
        `),i(10,"tbody"),t(11,`
          `),i(12,"tr"),t(13,`
            `),i(14,"td",3),t(15,`
              `),i(16,"b"),t(17),s(18,"translate"),a(),t(19,`
            `),a(),t(20,`
            `),i(21,"td",4),t(22),s(23,"formatNumber"),a(),t(24,`
            `),i(25,"td",3),t(26,`
              `),i(27,"b"),t(28),s(29,"translate"),a(),t(30,`
            `),a(),t(31,`
            `),i(32,"td",4),t(33),s(34,"dateFormat"),a(),t(35,`
          `),a(),t(36,`
        `),a(),t(37,`
      `),a(),t(38,`
    `),a(),t(39,`
  `),S()),e&2){let n=C();o(3),x(p(4,5,"labels.heading.Performance History")),o(14),f("",p(18,7,"labels.inputs.Number of Repayments")," :"),o(5),f(`
              `,p(23,9,n.loanDetails==null?null:n.loanDetails.numberOfRepayments),`
            `),o(6),f("",p(29,11,"labels.inputs.Maturity Date")," :"),o(5),f(`
              `,p(34,13,n.loanDetails==null?null:n.loanDetails.timeline.expectedMaturityDate),`
            `)}}function el(e,r){e&1&&g(0,"th",22)}function nl(e,r){if(e&1&&(i(0,"td",23),t(1),a()),e&2){let n=r.$implicit;o(),x(n.property)}}function il(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Original")))}function al(e,r){if(e&1&&(i(0,"td",25),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.original,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function ol(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Paid")))}function rl(e,r){if(e&1&&(i(0,"td",26),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.paid,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function ll(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Credit Adjustments")))}function ml(e,r){if(e&1&&(i(0,"td",27),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.adjustment,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function sl(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Waived")))}function pl(e,r){if(e&1&&(i(0,"td",26),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.waived,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function cl(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Written Off")))}function dl(e,r){if(e&1&&(i(0,"td",26),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.writtenOff,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function ul(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Outstanding")))}function xl(e,r){if(e&1&&(i(0,"td",25),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.outstanding,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function fl(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Over Due")))}function gl(e,r){if(e&1&&(i(0,"td",25),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.overdue,m.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function _l(e,r){e&1&&g(0,"tr",28)}function Cl(e,r){e&1&&g(0,"tr",29)}function hl(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`

    `),i(6,"table",5),t(7,`
      `),b(8,6),t(9,`
        `),d(10,el,1,0,"th",7),t(11,`
        `),d(12,nl,2,1,"td",8),t(13,`
      `),S(),t(14,`

      `),b(15,9),t(16,`
        `),d(17,il,3,3,"th",10),t(18,`
        `),d(19,al,3,6,"td",11),t(20,`
      `),S(),t(21,`

      `),b(22,12),t(23,`
        `),d(24,ol,3,3,"th",10),t(25,`
        `),d(26,rl,3,6,"td",13),t(27,`
      `),S(),t(28,`

      `),b(29,14),t(30,`
        `),d(31,ll,3,3,"th",10),t(32,`
        `),d(33,ml,3,6,"td",15),t(34,`
      `),S(),t(35,`

      `),b(36,16),t(37,`
        `),d(38,sl,3,3,"th",10),t(39,`
        `),d(40,pl,3,6,"td",13),t(41,`
      `),S(),t(42,`

      `),b(43,17),t(44,`
        `),d(45,cl,3,3,"th",10),t(46,`
        `),d(47,dl,3,6,"td",13),t(48,`
      `),S(),t(49,`

      `),b(50,18),t(51,`
        `),d(52,ul,3,3,"th",10),t(53,`
        `),d(54,xl,3,6,"td",11),t(55,`
      `),S(),t(56,`

      `),b(57,19),t(58,`
        `),d(59,fl,3,3,"th",10),t(60,`
        `),d(61,gl,3,6,"td",11),t(62,`
      `),S(),t(63,`

      `),d(64,_l,1,0,"tr",20),t(65,`
      `),d(66,Cl,1,0,"tr",21),t(67,`
    `),a(),t(68,`
  `),a()),e&2){let n=C();o(3),x(p(4,4,"labels.heading.Loan Summary")),o(3),c("dataSource",n.dataSource),o(58),c("matHeaderRowDef",n.loanSummaryColumns),o(2),c("matRowDefColumns",n.loanSummaryColumns)}}function vl(e,r){if(e&1&&(i(0,"td",23),t(1),s(2,"translate"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,"labels.inputs."+n.key))}}function bl(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C(4);o(),f(`
              `,p(2,1,n.loanDetails.timeline.actualDisbursementDate),`
            `)}}function Sl(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
              `,p(2,1,"labels.inputs.Not Available"),`
            `))}function yl(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,bl,3,3,"span",1),t(3,`
            `),d(4,Sl,3,3,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",n.loanDetails.timeline.actualDisbursementDate),o(2),c("ngIf",!n.loanDetails.timeline.actualDisbursementDate)}}function Dl(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(4);o(),f(" ",n.loanDetails.loanPurposeName," ")}}function Tl(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Not Available")," "))}function Pl(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,Dl,2,1,"span",1),t(3,`
            `),d(4,Tl,3,3,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",n.loanDetails.loanPurposeName),o(2),c("ngIf",!n.loanDetails.loanPurposeName)}}function Ml(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Unassigned")," "))}function Ol(e,r){e&1&&(i(0,"span"),t(1," "),a())}function Il(e,r){if(e&1&&(i(0,"span"),t(1),d(2,Ol,2,0,"span",1),t(3,`
            `),a()),e&2){let n=C(4);o(),f(`
              `,n.loanDetails.loanOfficerName,` \xA0
              `),o(),c("ngIf",n.loanDetails.loanOfficerName)}}function El(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,Ml,3,3,"span",1),t(3,`
            `),d(4,Il,4,2,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",!n.loanDetails.loanOfficerName),o(2),c("ngIf",n.loanDetails.loanOfficerName)}}function Al(e,r){if(e&1&&(b(0),t(1,`
            `),i(2,"span"),t(3),a(),t(4,`
          `),S()),e&2){let n=C(3);o(3),V(" ",n.loanDetails.currency.name," ",n.loanDetails.currency.code," ")}}function wl(e,r){if(e&1&&(i(0,"span"),t(1,`
              `),g(2,"mifosx-external-identifier",32),t(3,`
            `),a()),e&2){let n=C(4);o(2),Q("externalId",n.loanDetails.externalId)}}function Ll(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Not Available")," "))}function Rl(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,wl,4,1,"span",1),t(3,`
            `),d(4,Ll,3,3,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",n.loanDetails.externalId),o(2),c("ngIf",!n.loanDetails.externalId)}}function Fl(e,r){if(e&1&&(b(0),t(1),S()),e&2){let n=C().$implicit;o(),f(`
            `,n.value,`
          `)}}function Bl(e,r){if(e&1&&(i(0,"td",23),t(1,`
          `),d(2,yl,6,2,"ng-container",1),t(3,`

          `),d(4,Pl,6,2,"ng-container",1),t(5,`

          `),d(6,El,6,2,"ng-container",1),t(7,`

          `),d(8,Al,5,2,"ng-container",1),t(9,`

          `),d(10,Rl,6,2,"ng-container",1),t(11,`

          `),d(12,Fl,2,1,"ng-container",1),t(13,`
        `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.key==="Disbursement Date"),o(2),c("ngIf",n.key==="Loan Purpose"),o(2),c("ngIf",n.key==="Loan Officer"),o(2),c("ngIf",n.key==="Currency"),o(2),c("ngIf",n.key==="External Id"),o(2),c("ngIf",n.key==="Proposed Amount"||n.key==="Approved Amount"||n.key==="Disburse Amount")}}function kl(e,r){e&1&&g(0,"tr",29)}function Nl(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"table",5),t(7,`
      `),b(8,30),t(9,`
        `),d(10,vl,3,3,"td",8),t(11,`
      `),S(),t(12,`

      `),b(13,31),t(14,`
        `),d(15,Bl,14,6,"td",8),t(16,`
      `),S(),t(17,`

      `),d(18,kl,1,0,"tr",21),t(19,`
    `),a(),t(20,`
  `),a()),e&2){let n=C();o(3),x(p(4,3,"labels.heading.Loan Details")),o(3),c("dataSource",n.detailsDataSource),o(12),c("matRowDefColumns",n.loanDetailsColumns)}}function Vl(e,r){if(e&1&&(i(0,"td",23),t(1),s(2,"translate"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,"labels.inputs."+n.key))}}function jl(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C(4);o(),f(`
              `,p(2,1,n.loanDetails.timeline.actualDisbursementDate),`
            `)}}function ql(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
              `,p(2,1,"labels.inputs.Not Available"),`
            `))}function zl(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,jl,3,3,"span",1),t(3,`
            `),d(4,ql,3,3,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",n.loanDetails.timeline.actualDisbursementDate),o(2),c("ngIf",!n.loanDetails.timeline.actualDisbursementDate)}}function Hl(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Unassigned")," "))}function Gl(e,r){e&1&&(i(0,"span"),t(1," "),a())}function Ul(e,r){if(e&1&&(i(0,"span"),t(1),d(2,Gl,2,0,"span",1),t(3,`
            `),a()),e&2){let n=C(4);o(),f(`
              `,n.loanDetails.loanOfficerName,` \xA0
              `),o(),c("ngIf",n.loanDetails.loanOfficerName)}}function $l(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,Hl,3,3,"span",1),t(3,`
            `),d(4,Ul,4,2,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",!n.loanDetails.loanOfficerName),o(2),c("ngIf",n.loanDetails.loanOfficerName)}}function Wl(e,r){if(e&1&&(b(0),t(1,`
            `),i(2,"span"),t(3),a(),t(4,`
          `),S()),e&2){let n=C(3);o(3),V(" ",n.loanDetails.currency.name," ",n.loanDetails.currency.code," ")}}function Ql(e,r){if(e&1&&(i(0,"span"),t(1,`
              `),g(2,"mifosx-external-identifier",32),t(3,`
            `),a()),e&2){let n=C(4);o(2),Q("externalId",n.loanDetails.externalId)}}function Yl(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Not Available")," "))}function Kl(e,r){if(e&1&&(b(0),t(1,`
            `),d(2,Ql,4,1,"span",1),t(3,`
            `),d(4,Yl,3,3,"span",1),t(5,`
          `),S()),e&2){let n=C(3);o(2),c("ngIf",n.loanDetails.externalId),o(2),c("ngIf",!n.loanDetails.externalId)}}function Jl(e,r){if(e&1&&(i(0,"td",23),t(1,`
          `),d(2,zl,6,2,"ng-container",1),t(3,`

          `),d(4,$l,6,2,"ng-container",1),t(5,`

          `),d(6,Wl,5,2,"ng-container",1),t(7,`

          `),d(8,Kl,6,2,"ng-container",1),t(9,`
        `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.key==="Disbursement Date"),o(2),c("ngIf",n.key==="Loan Officer"),o(2),c("ngIf",n.key==="Currency"),o(2),c("ngIf",n.key==="External Id")}}function Zl(e,r){e&1&&g(0,"tr",29)}function Xl(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"table",5),t(7,`
      `),b(8,30),t(9,`
        `),d(10,Vl,3,3,"td",8),t(11,`
      `),S(),t(12,`

      `),b(13,31),t(14,`
        `),d(15,Jl,10,4,"td",8),t(16,`
      `),S(),t(17,`

      `),d(18,Zl,1,0,"tr",21),t(19,`
    `),a(),t(20,`
  `),a()),e&2){let n=C();o(3),x(p(4,3,"labels.heading.Loan Details")),o(3),c("dataSource",n.detailsDataSource),o(12),c("matRowDefColumns",n.loanDetailsColumns)}}function t0(e,r){if(e&1&&(i(0,"span",36),t(1),a()),e&2){let n=C(2);o(),f(`
            `,n.loanDetails.loanPurposeName,`
          `)}}function e0(e,r){e&1&&(i(0,"span",36),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
            `,p(2,1,"labels.inputs.Not Provided"),`
          `))}function n0(e,r){if(e&1&&(i(0,"div",35),t(1,`
          `),i(2,"span",36),t(3),s(4,"translate"),a(),t(5,`
          `),i(6,"span",36),t(7),s(8,"currency"),a(),t(9,`
        `),a()),e&2){let n=C(2);o(3),f("",p(4,2,"labels.inputs.Approved Amount"),":"),o(4),x(vt(8,4,n.loanDetails.approvedPrincipal,n.currencyCode,"symbol-narrow","1.2-2"))}}function i0(e,r){if(e&1&&(i(0,"div",35),t(1,`
          `),i(2,"span",36),t(3),s(4,"translate"),a(),t(5,`
          `),i(6,"span",36),t(7),s(8,"currency"),a(),t(9,`
        `),a()),e&2){let n=C(2);o(3),f("",p(4,2,"labels.inputs.Disburse Amount"),":"),o(4),x(vt(8,4,n.loanDetails.principal,n.currencyCode,"symbol-narrow","1.2-2"))}}function a0(e,r){if(e&1&&(i(0,"div",35),t(1,`
          `),i(2,"span",36),t(3),s(4,"translate"),a(),t(5,`
          `),i(6,"span",36),t(7),s(8,"currency"),a(),t(9,`
        `),a()),e&2){let n=C(2);o(3),f("",p(4,2,"labels.inputs.Balloon Repayment Amount"),":"),o(4),x(vt(8,4,n.loanDetails.balloonRepaymentAmount,n.currencyCode,"symbol-narrow","1.2-2"))}}function o0(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"div",33),t(7,`
      `),i(8,"div",34),t(9,`
        `),i(10,"div",35),t(11,`
          `),i(12,"span",36),t(13),s(14,"translate"),a(),t(15,`
          `),d(16,t0,2,1,"span",37),t(17,`
          `),d(18,e0,3,3,"span",37),t(19,`
        `),a(),t(20,`

        `),i(21,"div",35),t(22,`
          `),i(23,"span",36),t(24),s(25,"translate"),a(),t(26,`
          `),i(27,"span",36),t(28),s(29,"currency"),a(),t(30,`
        `),a(),t(31,`

        `),d(32,n0,10,9,"div",38),t(33,`

        `),d(34,i0,10,9,"div",38),t(35,`

        `),d(36,a0,10,9,"div",38),t(37,`

        `),i(38,"div",35),t(39,`
          `),i(40,"span",36),t(41),s(42,"translate"),a(),t(43,`
          `),i(44,"span",36),t(45),s(46,"translate"),a(),t(47,`
        `),a(),t(48,`
      `),a(),t(49,`
    `),a(),t(50,`
  `),a()),e&2){let n=C();o(3),x(p(4,11,"labels.heading.Loan Purpose")),o(10),f("",p(14,13,"labels.inputs.Loan Purpose"),":"),o(3),c("ngIf",n.loanDetails.loanPurposeName),o(2),c("ngIf",!n.loanDetails.loanPurposeName),o(6),f("",p(25,15,"labels.inputs.Proposed Amount"),":"),o(4),x(vt(29,17,n.loanDetails.proposedPrincipal,n.currencyCode,"symbol-narrow","1.2-2")),o(4),c("ngIf",n.showApprovedAmountBasedOnStatus()),o(2),c("ngIf",n.showDisbursedAmountBasedOnStatus()),o(2),c("ngIf",n.loanDetails.balloonRepaymentAmount>0),o(5),f("",p(42,22,"labels.inputs.Arrears By"),":"),o(4),x(p(46,24,"labels.inputs.Not Provided"))}}var $n=(()=>{class e{constructor(n){this.route=n,this.loanSummaryColumns=["Empty","Original","Paid","Waived","Written Off","Outstanding","Over Due"],this.loanDetailsColumns=["Key","Value"],this.showDisbursedAmountBasedOnStatus=function(){return!(this.status==="Submitted and pending approval"||this.status==="Withdrawn by applicant"||this.status==="Rejected"||this.status==="Approved")},this.route.parent.data.subscribe(m=>{this.loanDetails=m.loanDetailsData,this.currencyCode=this.loanDetails.currency.code,this.loanDetails.transactions&&this.loanDetails.transactions.some(l=>{if(l.type.code==="loanTransactionType.chargeback"){this.loanSummaryColumns=["Empty","Original","Adjustments","Paid","Waived","Written Off","Outstanding","Over Due"];return}})})}ngOnInit(){this.status=this.loanDetails.value,this.loanDetails.summary?(this.setloanSummaryTableData(),this.setloanDetailsTableData()):this.setloanNonDetailsTableData()}setloanSummaryTableData(){this.loanSummaryTableData=[{property:"Principal",original:this.loanDetails.summary.totalPrincipal,adjustment:this.loanDetails.summary.principalAdjustments||0,paid:this.loanDetails.summary.principalPaid,waived:this.loanDetails.summary.principalWaived||0,writtenOff:this.loanDetails.summary.principalWrittenOff,outstanding:this.loanDetails.summary.principalOutstanding,overdue:this.loanDetails.summary.principalOverdue},{property:"Interest",original:this.loanDetails.summary.interestCharged,adjustment:"0",paid:this.loanDetails.summary.interestPaid,waived:this.loanDetails.summary.interestWaived,writtenOff:this.loanDetails.summary.interestWrittenOff,outstanding:this.loanDetails.summary.interestOutstanding,overdue:this.loanDetails.summary.interestOverdue},{property:"Fees",original:this.loanDetails.summary.feeChargesCharged,adjustment:"0",paid:this.loanDetails.summary.feeChargesPaid,waived:this.loanDetails.summary.feeChargesWaived,writtenOff:this.loanDetails.summary.feeChargesWrittenOff,outstanding:this.loanDetails.summary.feeChargesOutstanding,overdue:this.loanDetails.summary.feeChargesOverdue},{property:"Penalties",original:this.loanDetails.summary.penaltyChargesCharged,adjustment:"0",paid:this.loanDetails.summary.penaltyChargesPaid,waived:this.loanDetails.summary.penaltyChargesWaived,writtenOff:this.loanDetails.summary.penaltyChargesWrittenOff,outstanding:this.loanDetails.summary.penaltyChargesOutstanding,overdue:this.loanDetails.summary.penaltyChargesOverdue},{property:"Total",original:this.loanDetails.summary.totalExpectedRepayment,adjustment:this.loanDetails.summary.principalAdjustments||0,paid:this.loanDetails.summary.totalRepayment,waived:this.loanDetails.summary.totalWaived,writtenOff:this.loanDetails.summary.totalWrittenOff,outstanding:this.loanDetails.summary.totalOutstanding,overdue:this.loanDetails.summary.totalOverdue}],this.dataSource=new se(this.loanSummaryTableData)}setloanDetailsTableData(){this.loanDetailsTableData=[{key:"Disbursement Date"},{key:"Loan Purpose"},{key:"Loan Officer"},{key:"Currency"},{key:"External Id"},{key:"Proposed Amount",value:this.loanDetails.proposedPrincipal},{key:"Approved Amount",value:this.loanDetails.approvedPrincipal},{key:"Disburse Amount",value:this.loanDetails.principal}],this.detailsDataSource=new se(this.loanDetailsTableData)}setloanNonDetailsTableData(){this.loanDetailsTableData=[{key:"Disbursement Date"},{key:"Currency"},{key:"Loan Officer"},{key:"External Id"}],this.detailsDataSource=new se(this.loanDetailsTableData)}showApprovedAmountBasedOnStatus(){return!(this.status==="Submitted and pending approval"||this.status==="Withdrawn by applicant"||this.status==="Rejected")}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-general-tab"]],decls:13,vars:5,consts:[[1,"tab-container","mat-typography"],[4,"ngIf"],[1,"layout-row","gap-32px","performance-history-container"],[1,"flex-25"],[1,"flex-25","left"],["mat-table","",3,"dataSource"],["matColumnDef","Empty"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Original"],["mat-header-cell","","class","r-amount",4,"matHeaderCellDef"],["mat-cell","","class","r-amount",4,"matCellDef"],["matColumnDef","Paid"],["mat-cell","","class","r-amount amount-minus",4,"matCellDef"],["matColumnDef","Adjustments"],["mat-cell","","class","r-amount amount-plus",4,"matCellDef"],["matColumnDef","Waived"],["matColumnDef","Written Off"],["matColumnDef","Outstanding"],["matColumnDef","Over Due"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"r-amount"],["mat-cell","",1,"r-amount"],["mat-cell","",1,"r-amount","amount-minus"],["mat-cell","",1,"r-amount","amount-plus"],["mat-header-row",""],["mat-row",""],["matColumnDef","Key"],["matColumnDef","Value"],["completed","true",3,"externalId"],[1,"container"],[1,"layout-row-wrap","responsive-column"],[1,"flex-contents"],[1,"flex-50"],["class","flex-50",4,"ngIf"],["class","flex-contents",4,"ngIf"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),d(2,tl,40,15,"ng-container",1),t(3,`

  `),d(4,hl,69,6,"div",1),t(5,`

  `),d(6,Nl,21,5,"div",1),t(7,`

  `),d(8,Xl,21,5,"div",1),t(9,`

  `),d(10,o0,51,26,"div",1),t(11,`
`),a(),t(12,`
`)),m&2&&(o(2),c("ngIf",l.loanDetails.summary),o(2),c("ngIf",l.loanDetails.summary),o(2),c("ngIf",l.loanDetails.summary),o(2),c("ngIf",!l.loanDetails.summary),o(2),c("ngIf",!l.loanDetails.summary))},dependencies:[A,k,ye,w,Lt,L,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht,Ie,Wt],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   .performance-history-container[_ngcontent-%COMP%]{border:1px solid;padding:1%;margin-bottom:20px}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}span[_ngcontent-%COMP%]{margin:.5em 0}"]})}}return e})();function r0(e,r){if(e&1&&(i(0,"span"),t(1,`
            `),i(2,"span",7),t(3),s(4,"translate"),a(),t(5),i(6,"span",7),t(7),s(8,"translateKey"),a(),t(9,`
          `),a()),e&2){let n=C(2);o(3),x(p(4,3,"labels.commons.on")),o(2),f("",n.loanDetails.repaymentFrequencyNthDayType==null?null:n.loanDetails.repaymentFrequencyNthDayType.value,`
            `),o(2),x(Et(8,5,n.loanDetails.repaymentFrequencyDayOfWeekType==null?null:n.loanDetails.repaymentFrequencyDayOfWeekType.value,"catalogs"))}}function l0(e,r){if(e&1&&(i(0,"span",7),t(1,`
          `),d(2,r0,10,8,"span",8),t(3,`
        `),a()),e&2){let n=C();o(2),c("ngIf",n.loanDetails.repaymentFrequencyDayOfWeekType)}}function m0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,3,"labels.inputs.Fixed Length")," "),o(4),V(`
        `,n.loanDetails.fixedLength," ",Et(8,5,n.loanDetails.repaymentFrequencyType.value,"catalogs"),"")}}function s0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"formatNumber"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Principal Percentage Per Installment")," "),o(4),f(" ",p(8,4,n.loanDetails.fixedPrincipalPercentagePerInstallment)," %")}}function p0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Income capitalization calculation type"),""),o(4),f(`
        `,Et(8,4,n.loanDetails.capitalizedIncomeCalculationType==null?null:n.loanDetails.capitalizedIncomeCalculationType.value,"catalogs"),`
      `)}}function c0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Income capitalization strategy"),""),o(4),f(" ",Et(8,4,n.loanDetails.capitalizedIncomeStrategy==null?null:n.loanDetails.capitalizedIncomeStrategy.value,"catalogs")," ")}}function d0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Income capitalization type"),""),o(4),f(" ",Et(8,4,n.loanDetails.capitalizedIncomeType==null?null:n.loanDetails.capitalizedIncomeType.value,"catalogs")," ")}}function u0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Buy down fee calculation type"),""),o(4),f(`
        `,Et(8,4,n.loanDetails.buyDownFeeCalculationType==null?null:n.loanDetails.buyDownFeeCalculationType.value,"catalogs"),`
      `)}}function x0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Buy down fee strategy"),""),o(4),f(" ",Et(8,4,n.loanDetails.buyDownFeeStrategy==null?null:n.loanDetails.buyDownFeeStrategy.value,"catalogs")," ")}}function f0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Buy down fee income type"),""),o(4),f(" ",Et(8,4,n.loanDetails.buyDownFeeIncomeType==null?null:n.loanDetails.buyDownFeeIncomeType.value,"catalogs")," ")}}function g0(e,r){if(e&1&&(i(0,"span",3),t(1),a()),e&2){let n=C();o(),f(" ",n.loanDetails.fundName," ")}}function _0(e,r){e&1&&(i(0,"span",3),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Unassigned")," "))}function C0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"formatNumber"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Fixed EMI amount"),""),o(4),f(" ",p(8,4,n.loanDetails.fixedEmiAmount)," ")}}function h0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"yesNo"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Is Topup Loan"),"?"),o(4),f(" ",p(8,4,n.loanDetails.isTopup)," ")}}function v0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7,`
        `),i(8,"a",9),t(9),a(),t(10,`
      `),a(),t(11,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Loan closed with Topup")," "),o(6),x(n.loanDetails.closureLoanAccountNo)}}function b0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"formatNumber"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Topup closure amount"),""),o(4),f(" ",p(8,4,n.loanDetails.topupAmount)," ")}}function S0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Interest recalculation compounding on"),""),o(4),f(`
        `,Et(8,4,n.loanDetails.interestRecalculationData.interestRecalculationCompoundingType.value,"catalogs"),`
      `)}}function y0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Advance payments adjustment type"),""),o(4),f(`
        `,Et(8,4,n.loanDetails.interestRecalculationData.rescheduleStrategyType.value,"catalogs"),`
      `)}}function D0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),a(),t(8,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Frequency for recalculate Outstanding Principal"),""),o(4),f(" ",n.loanDetails.interestRecalculationData.calendarData.humanReadable," ")}}function T0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),a(),t(8,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Frequency for compounding"),""),o(4),f(" ",n.loanDetails.interestRecalculationData.compoundingCalendarData.humanReadable," ")}}function P0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"yesNo"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,2,"labels.inputs.Variable Installments Allowed"),""),o(4),f(" ",p(8,4,n.loanDetails.isVariableInstallmentsAllowed)," ")}}function M0(e,r){if(e&1&&(i(0,"div",2),t(1,`
      `),i(2,"span",3),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",3),t(7),s(8,"formatNumber"),s(9,"translate"),s(10,"formatNumber"),s(11,"translate"),a(),t(12,`
    `),a()),e&2){let n=C();o(3),f(" ",p(4,5,"labels.inputs.Gap between Installments"),""),o(4),gn(`
        `,p(8,7,n.loanDetails.minimumGap),"\xA0",p(9,9,"labels.text.Days"),"\xA0, Max:",p(10,11,n.loanDetails.maximumGap),"\xA0",p(11,13,"labels.text.Days"),`
      `)}}var Qn=(()=>{class e{constructor(n){this.route=n,this.route.parent.data.subscribe(m=>{this.loanDetails=m.loanDetailsData})}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-account-details"]],decls:332,vars:186,consts:[[1,"container","p-b-20"],[1,"responsive-column"],[1,"flex-fill","layout-row"],[1,"flex-50"],["class","m-l-10",4,"ngIf"],["class","flex-fill layout-row",4,"ngIf"],["class","flex-50",4,"ngIf"],[1,"m-l-10"],[4,"ngIf"],["href","#"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`

  `),i(6,"div",1),t(7,`
    `),i(8,"div",2),t(9,`
      `),i(10,"span",3),t(11),s(12,"translate"),a(),t(13,`
      `),i(14,"span",3),t(15),s(16,"translateKey"),a(),t(17,`
    `),a(),t(18,`

    `),i(19,"div",2),t(20,`
      `),i(21,"span",3),t(22),s(23,"translate"),a(),t(24,`
      `),i(25,"span",3),t(26),s(27,"translateKey"),d(28,l0,4,1,"span",4),t(29,`
      `),a(),t(30,`
    `),a(),t(31,`

    `),d(32,m0,10,8,"div",5),t(33,`

    `),i(34,"div",2),t(35,`
      `),i(36,"span",3),t(37),s(38,"translate"),a(),t(39,`
      `),i(40,"span",3),t(41),s(42,"translateKey"),a(),t(43,`
    `),a(),t(44,`

    `),d(45,s0,10,6,"div",5),t(46,`

    `),i(47,"div",2),t(48,`
      `),i(49,"span",3),t(50),s(51,"translate"),a(),t(52,`
      `),i(53,"span",3),t(54),s(55,"yesNo"),a(),t(56,`
    `),a(),t(57,`

    `),i(58,"div",2),t(59,`
      `),i(60,"span",3),t(61),s(62,"translate"),a(),t(63,`
      `),i(64,"span",3),t(65),s(66,"formatNumber"),s(67,"translate"),s(68,"translateKey"),a(),t(69,`
    `),a(),t(70,`

    `),i(71,"div",2),t(72,`
      `),i(73,"span",3),t(74),s(75,"translate"),a(),t(76,`
      `),i(77,"span",3),t(78),s(79,"translate"),a(),t(80,`
    `),a(),t(81,`

    `),i(82,"div",2),t(83,`
      `),i(84,"span",3),t(85),s(86,"translate"),a(),t(87,`
      `),i(88,"span",3),t(89),s(90,"yesNo"),a(),t(91,`
    `),a(),t(92,`

    `),i(93,"div",2),t(94,`
      `),i(95,"span",3),t(96),s(97,"translate"),a(),t(98,`
      `),i(99,"span",3),t(100),s(101,"translateKey"),a(),t(102,`
    `),a(),t(103,`

    `),i(104,"div",2),t(105,`
      `),i(106,"span",3),t(107),s(108,"translate"),a(),t(109,`
      `),i(110,"span",3),t(111),s(112,"yesNo"),a(),t(113,`
    `),a(),t(114,`

    `),d(115,p0,10,7,"div",5),t(116,`

    `),d(117,c0,10,7,"div",5),t(118,`

    `),d(119,d0,10,7,"div",5),t(120,`

    `),i(121,"div",2),t(122,`
      `),i(123,"span",3),t(124),s(125,"translate"),a(),t(126,`
      `),i(127,"span",3),t(128),s(129,"yesNo"),a(),t(130,`
    `),a(),t(131,`

    `),d(132,u0,10,7,"div",5),t(133,`

    `),d(134,x0,10,7,"div",5),t(135,`

    `),d(136,f0,10,7,"div",5),t(137,`

    `),i(138,"div",2),t(139,`
      `),i(140,"span",3),t(141),s(142,"translate"),a(),t(143,`
      `),i(144,"span",3),t(145),a(),t(146,`
    `),a(),t(147,`

    `),i(148,"div",2),t(149,`
      `),i(150,"span",3),t(151),s(152,"translate"),a(),t(153,`
      `),i(154,"span",3),t(155),a(),t(156,`
    `),a(),t(157,`

    `),i(158,"div",2),t(159,`
      `),i(160,"span",3),t(161),s(162,"translate"),a(),t(163,`
      `),i(164,"span",3),t(165),a(),t(166,`
    `),a(),t(167,`

    `),i(168,"div",2),t(169,`
      `),i(170,"span",3),t(171),s(172,"translate"),a(),t(173,`
      `),i(174,"span",3),t(175),s(176,"yesNo"),a(),t(177,`
    `),a(),t(178,`

    `),i(179,"div",2),t(180,`
      `),i(181,"span",3),t(182),s(183,"translate"),a(),t(184,`
      `),d(185,g0,2,1,"span",6),t(186,`
      `),d(187,_0,3,3,"span",6),t(188,`
    `),a(),t(189,`

    `),i(190,"div",2),t(191,`
      `),i(192,"span",3),t(193),s(194,"translate"),a(),t(195,`
      `),i(196,"span",3),t(197),a(),t(198,`
    `),a(),t(199,`

    `),i(200,"div",2),t(201,`
      `),i(202,"span",3),t(203),s(204,"translate"),a(),t(205,`
      `),i(206,"span",3),t(207),s(208,"translateKey"),a(),t(209,`
    `),a(),t(210,`

    `),i(211,"div",2),t(212,`
      `),i(213,"span",3),t(214),s(215,"translate"),a(),t(216,`
      `),i(217,"span",3),t(218),s(219,"yesNo"),a(),t(220,`
    `),a(),t(221,`

    `),i(222,"div",2),t(223,`
      `),i(224,"span",3),t(225),s(226,"translate"),a(),t(227,`
      `),i(228,"span",3),t(229),s(230,"yesNo"),a(),t(231,`
    `),a(),t(232,`

    `),i(233,"div",2),t(234,`
      `),i(235,"span",3),t(236),s(237,"translate"),a(),t(238,`
      `),i(239,"span",3),t(240),s(241,"dateFormat"),a(),t(242,`
    `),a(),t(243,`

    `),i(244,"div",2),t(245,`
      `),i(246,"span",3),t(247),s(248,"translate"),a(),t(249,`
      `),i(250,"span",3),t(251),s(252,"dateFormat"),a(),t(253,`
    `),a(),t(254,`

    `),i(255,"div",2),t(256,`
      `),i(257,"span",3),t(258),s(259,"translate"),a(),t(260,`
      `),i(261,"span",3),t(262),s(263,"dateFormat"),a(),t(264,`
    `),a(),t(265,`

    `),i(266,"div",2),t(267,`
      `),i(268,"span",3),t(269),s(270,"translate"),a(),t(271,`
      `),i(272,"span",3),t(273),s(274,"dateFormat"),a(),t(275,`
    `),a(),t(276,`

    `),d(277,C0,10,6,"div",5),t(278,`

    `),d(279,h0,10,6,"div",5),t(280,`

    `),d(281,v0,12,4,"div",5),t(282,`

    `),d(283,b0,10,6,"div",5),t(284,`

    `),i(285,"div",2),t(286,`
      `),i(287,"span",3),t(288),s(289,"translate"),a(),t(290,`
      `),i(291,"span",3),t(292),s(293,"yesNo"),a(),t(294,`
    `),a(),t(295,`

    `),i(296,"div",2),t(297,`
      `),i(298,"span",3),t(299),s(300,"translate"),a(),t(301,`
      `),i(302,"span",3),t(303),s(304,"translateKey"),a(),t(305,`
    `),a(),t(306,`

    `),i(307,"div",2),t(308,`
      `),i(309,"span",3),t(310),s(311,"translate"),a(),t(312,`
      `),i(313,"span",3),t(314),s(315,"translateKey"),a(),t(316,`
    `),a(),t(317,`

    `),d(318,S0,10,7,"div",5),t(319,`

    `),d(320,y0,10,7,"div",5),t(321,`

    `),d(322,D0,9,4,"div",5),t(323,`

    `),d(324,T0,9,4,"div",5),t(325,`

    `),d(326,P0,10,6,"div",5),t(327,`

    `),d(328,M0,13,15,"div",5),t(329,`
  `),a(),t(330,`
`),a(),t(331,`
`)),m&2&&(o(3),x(p(4,78,"labels.heading.Loan Details")),o(8),x(p(12,80,"labels.inputs.Repayment Strategy")),o(4),x(Et(16,82,l.loanDetails.transactionProcessingStrategyName,"catalogs")),o(7),x(p(23,85,"labels.inputs.Repayments")),o(4),fn("",l.loanDetails.numberOfRepayments," every ",l.loanDetails.repaymentEvery,"\xA0",Et(27,87,l.loanDetails.repaymentFrequencyType.value,"catalogs"),`
        `),o(2),c("ngIf",(l.loanDetails.repaymentFrequencyType==null?null:l.loanDetails.repaymentFrequencyType.id)===2&&(l.loanDetails.repaymentFrequencyNthDayType==null?null:l.loanDetails.repaymentFrequencyNthDayType.id)!==0&&(l.loanDetails.repaymentFrequencyDayOfWeekType==null?null:l.loanDetails.repaymentFrequencyDayOfWeekType.id)!==0),o(4),c("ngIf",l.loanDetails.fixedLength),o(5),f(" ",p(38,90,"labels.inputs.Amortization")," "),o(4),f(" ",Et(42,92,l.loanDetails.amortizationType.value,"catalogs")," "),o(4),c("ngIf",l.loanDetails.fixedPrincipalPercentagePerInstallment),o(5),f(" ",p(51,95,"labels.inputs.Equal Amortization")," "),o(4),f(" ",p(55,97,l.loanDetails.isEqualAmortization)," "),o(7),f(" ",p(62,99,"labels.inputs.Interest")," "),o(4),gn(`
        `,p(66,101,l.loanDetails.annualInterestRate)," % ",p(67,103,"labels.text.per annum")," (",l.loanDetails.interestRatePerPeriod,`
        %\xA0 `,Et(68,105,l.loanDetails.interestRateFrequencyType.value,"catalogs"),`)
      `),o(9),f(" ",p(75,108,"labels.inputs.Interest Type")," "),o(4),f(" ",p(79,110,"labels.text."+l.loanDetails.interestType.value)," "),o(7),f("",p(86,112,"labels.inputs.Enable Down Payments"),":"),o(4),x(p(90,114,l.loanDetails.enableDownPayment)),o(7),f("",p(97,116,"labels.inputs.Loan Charge-off behaviour"),":"),o(4),x(Et(101,118,l.loanDetails.chargeOffBehaviour.value,"catalogs")),o(7),f(" ",p(108,121,"labels.inputs.Enable income capitalization"),""),o(4),f(" ",p(112,123,l.loanDetails.enableIncomeCapitalization)," "),o(4),c("ngIf",l.loanDetails.enableIncomeCapitalization),o(2),c("ngIf",l.loanDetails.enableIncomeCapitalization),o(2),c("ngIf",l.loanDetails.enableIncomeCapitalization),o(5),f(" ",p(125,125,"labels.inputs.Enable Buy down fee"),""),o(4),f(" ",p(129,127,l.loanDetails.enableBuyDownFee)," "),o(4),c("ngIf",l.loanDetails.enableBuyDownFee),o(2),c("ngIf",l.loanDetails.enableBuyDownFee),o(2),c("ngIf",l.loanDetails.enableBuyDownFee),o(5),f(" ",p(142,129,"labels.inputs.Grace: On Principal Payment"),""),o(4),f(" ",l.loanDetails.graceOnPrincipalPayment," "),o(6),f(" ",p(152,131,"labels.inputs.Grace: On Interest Payment"),""),o(4),f(" ",l.loanDetails.graceOnInterestPayment," "),o(6),f(" ",p(162,133,"labels.inputs.Grace on Arrears Ageing"),""),o(4),f(" ",l.loanDetails.graceOnArrearsAgeing," "),o(6),f(" ",p(172,135,"labels.inputs.Enable installment level Delinquency")," "),o(4),f(" ",p(176,137,l.loanDetails.enableInstallmentLevelDelinquency)," "),o(7),f(" ",p(183,139,"labels.inputs.Fund Source")," "),o(3),c("ngIf",l.loanDetails.fundName),o(2),c("ngIf",!l.loanDetails.fundName),o(6),f(" ",p(194,141,"labels.inputs.Interest Free Period"),""),o(4),f(" ",l.loanDetails.graceOnInterestCharged," "),o(6),f(" ",p(204,143,"labels.inputs.Interest Calculation Period"),""),o(4),f(" ",Et(208,145,l.loanDetails.interestCalculationPeriodType.value,"catalogs")," "),o(7),f(`
        `,p(215,148,"labels.inputs.Allow Partial Interest Calculation with same as repayment"),""),o(4),f(" ",p(219,150,l.loanDetails.allowPartialPeriodInterestCalculation)," "),o(7),f("",p(226,152,"labels.inputs.Is interest recognition on disbursement date?"),":"),o(4),x(p(230,154,l.loanDetails.interestRecognitionOnDisbursementDate)),o(7),f(" ",p(237,156,"labels.inputs.Submitted on"),""),o(4),f(" ",p(241,158,l.loanDetails.timeline.submittedOnDate)," "),o(7),f(" ",p(248,160,"labels.inputs.Approved on"),""),o(4),f(" ",p(252,162,l.loanDetails.timeline.approvedOnDate)," "),o(7),f(" ",p(259,164,"labels.inputs.Disbursed on"),""),o(4),f(" ",p(263,166,l.loanDetails.timeline.actualDisbursementDate)," "),o(7),f(" ",p(270,168,"labels.inputs.Matures on"),""),o(4),f(" ",p(274,170,l.loanDetails.timeline.expectedMaturityDate)," "),o(4),c("ngIf",l.loanDetails.canDefineInstallmentAmount),o(2),c("ngIf",l.loanDetails.isTopup),o(2),c("ngIf",l.loanDetails.isTopup),o(2),c("ngIf",l.loanDetails.isTopup),o(5),f(" ",p(289,172,"labels.inputs.Recalculate Interest based on new terms"),""),o(4),f(" ",p(293,174,l.loanDetails.isInterestRecalculationEnabled)," "),o(7),f(" ",p(300,176,"labels.inputs.Days in year"),""),o(4),f(" ",Et(304,178,l.loanDetails.daysInYearType.value,"catalogs")," "),o(7),f(" ",p(311,181,"labels.inputs.Days in month"),""),o(4),f(" ",Et(315,183,l.loanDetails.daysInMonthType.value,"catalogs")," "),o(4),c("ngIf",l.loanDetails.isInterestRecalculationEnabled),o(2),c("ngIf",l.loanDetails.isInterestRecalculationEnabled),o(2),c("ngIf",l.loanDetails.isInterestRecalculationEnabled),o(2),c("ngIf",l.loanDetails.isInterestRecalculationEnabled&&l.loanDetails.interestRecalculationData.interestRecalculationCompoundingType.id!==0),o(2),c("ngIf",l.loanDetails.isVariableInstallmentsAllowed),o(2),c("ngIf",l.loanDetails.isVariableInstallmentsAllowed))},dependencies:[A,k,w,Lt,L,Ne,Wt,pn],styles:["table[_ngcontent-%COMP%]{width:100%}span[_ngcontent-%COMP%]{margin:.5em 0}"]})}}return e})();var Yn=(()=>{class e{constructor(n,m,l){this.route=n,this.loansService=m,this.authenticationService=l;let u=this.authenticationService.getCredentials();this.username=u.username,this.entityId=this.route.parent.snapshot.params.loanId,this.route.data.subscribe(_=>{this.entityNotes=_.loanNotes})}ngOnInit(){this.route.parent.params.subscribe(n=>{this.entityId=n.loanId})}addNote(n){this.loansService.createLoanNote(this.entityId,n).subscribe(m=>{this.entityNotes.push({id:m.resourceId,createdByUsername:this.username,createdOn:new Date,note:n.note})})}editNote(n,m,l){this.loansService.editLoanNote(this.entityId,n,m).subscribe(()=>{this.entityNotes[l].note=m.note})}deleteNote(n,m){this.loansService.deleteLoanNote(this.entityId,n).subscribe(()=>{this.entityNotes.splice(m,1)})}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(R),v(Ga))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-notes-tab"]],decls:3,vars:5,consts:[[3,"entityId","entityNotes","callbackAdd","callbackEdit","callbackDelete"]],template:function(m,l){m&1&&(i(0,"mifosx-entity-notes-tab",0),t(1,`
`),a(),t(2,`
`)),m&2&&c("entityId",l.entityId)("entityNotes",l.entityNotes)("callbackAdd",l.addNote)("callbackEdit",l.editNote)("callbackDelete",l.deleteNote)},dependencies:[A,w,so],encapsulation:2})}}return e})();function Oo(e,r,n,m,l){m=m||{};var u=1.15,_=l.internal.scaleFactor,h=l.internal.getFontSize()/_,y=l.getLineHeightFactor?l.getLineHeightFactor():u,D=h*y,I=/\r\n|\r|\n/g,U="",tt=1;if((m.valign==="middle"||m.valign==="bottom"||m.halign==="center"||m.halign==="right")&&(U=typeof e=="string"?e.split(I):e,tt=U.length||1),n+=h*(2-u),m.valign==="middle"?n-=tt/2*D:m.valign==="bottom"&&(n-=tt*D),m.halign==="center"||m.halign==="right"){var St=h;if(m.halign==="center"&&(St*=.5),U&&tt>=1){for(var $t=0;$t<U.length;$t++)l.text(U[$t],r-l.getStringUnitWidth(U[$t])*St,n),n+=D;return l}r-=l.getStringUnitWidth(e)*St}return m.halign==="justify"?l.text(e,r,n,{maxWidth:m.maxWidth||100,align:"justify"}):l.text(e,r,n),l}var yo={},un=function(){function e(r){this.jsPDFDocument=r,this.userStyles={textColor:r.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:r.internal.getFontSize(),fontStyle:r.internal.getFont().fontStyle,font:r.internal.getFont().fontName,lineWidth:r.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:r.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return e.setDefaults=function(r,n){n===void 0&&(n=null),n?n.__autoTableDocumentDefaults=r:yo=r},e.unifyColor=function(r){return Array.isArray(r)?r:typeof r=="number"?[r,r,r]:typeof r=="string"?[r]:null},e.prototype.applyStyles=function(r,n){var m,l,u;n===void 0&&(n=!1),r.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(r.fontStyle);var _=this.jsPDFDocument.internal.getFont(),h=_.fontStyle,y=_.fontName;if(r.font&&(y=r.font),r.fontStyle){h=r.fontStyle;var D=this.getFontList()[y];D&&D.indexOf(h)===-1&&this.jsPDFDocument.setFontStyle&&(this.jsPDFDocument.setFontStyle(D[0]),h=D[0])}if(this.jsPDFDocument.setFont(y,h),r.fontSize&&this.jsPDFDocument.setFontSize(r.fontSize),!n){var I=e.unifyColor(r.fillColor);I&&(m=this.jsPDFDocument).setFillColor.apply(m,I),I=e.unifyColor(r.textColor),I&&(l=this.jsPDFDocument).setTextColor.apply(l,I),I=e.unifyColor(r.lineColor),I&&(u=this.jsPDFDocument).setDrawColor.apply(u,I),typeof r.lineWidth=="number"&&this.jsPDFDocument.setLineWidth(r.lineWidth)}},e.prototype.splitTextToSize=function(r,n,m){return this.jsPDFDocument.splitTextToSize(r,n,m)},e.prototype.rect=function(r,n,m,l,u){return this.jsPDFDocument.rect(r,n,m,l,u)},e.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},e.prototype.getTextWidth=function(r){return this.jsPDFDocument.getTextWidth(r)},e.prototype.getDocument=function(){return this.jsPDFDocument},e.prototype.setPage=function(r){this.jsPDFDocument.setPage(r)},e.prototype.addPage=function(){return this.jsPDFDocument.addPage()},e.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},e.prototype.getGlobalOptions=function(){return yo||{}},e.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},e.prototype.pageSize=function(){var r=this.jsPDFDocument.internal.pageSize;return r.width==null&&(r={width:r.getWidth(),height:r.getHeight()}),r},e.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},e.prototype.getLineHeightFactor=function(){var r=this.jsPDFDocument;return r.getLineHeightFactor?r.getLineHeightFactor():1.15},e.prototype.getLineHeight=function(r){return r/this.scaleFactor()*this.getLineHeightFactor()},e.prototype.pageNumber=function(){var r=this.jsPDFDocument.internal.getCurrentPageInfo();return r?r.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},e}(),ua=function(e,r){return ua=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,m){n.__proto__=m}||function(n,m){for(var l in m)Object.prototype.hasOwnProperty.call(m,l)&&(n[l]=m[l])},ua(e,r)};function Io(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");ua(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var Eo=function(e){Io(r,e);function r(n){var m=e.call(this)||this;return m._element=n,m}return r}(Array);function O0(e){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/e,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}function I0(e){var r={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return r[e]}function Kn(e,r,n){n.applyStyles(r,!0);var m=Array.isArray(e)?e:[e],l=m.map(function(u){return n.getTextWidth(u)}).reduce(function(u,_){return Math.max(u,_)},0);return l}function Ao(e,r,n,m){var l=r.settings.tableLineWidth,u=r.settings.tableLineColor;e.applyStyles({lineWidth:l,lineColor:u});var _=wo(l,!1);_&&e.rect(n.x,n.y,r.getWidth(e.pageSize().width),m.y-n.y,_)}function wo(e,r){var n=e>0,m=r||r===0;return n&&m?"DF":n?"S":m?"F":null}function Zn(e,r){var n,m,l,u;if(e=e||r,Array.isArray(e)){if(e.length>=4)return{top:e[0],right:e[1],bottom:e[2],left:e[3]};if(e.length===3)return{top:e[0],right:e[1],bottom:e[2],left:e[1]};if(e.length===2)return{top:e[0],right:e[1],bottom:e[0],left:e[1]};e.length===1?e=e[0]:e=r}return typeof e=="object"?(typeof e.vertical=="number"&&(e.top=e.vertical,e.bottom=e.vertical),typeof e.horizontal=="number"&&(e.right=e.horizontal,e.left=e.horizontal),{left:(n=e.left)!==null&&n!==void 0?n:r,top:(m=e.top)!==null&&m!==void 0?m:r,right:(l=e.right)!==null&&l!==void 0?l:r,bottom:(u=e.bottom)!==null&&u!==void 0?u:r}):(typeof e!="number"&&(e=r),{top:e,right:e,bottom:e,left:e})}function Lo(e,r){var n=Zn(r.settings.margin,0);return e.pageSize().width-(n.left+n.right)}function E0(e,r,n,m,l){var u={},_=1.3333333333333333,h=la(r,function(je){return l.getComputedStyle(je).backgroundColor});h!=null&&(u.fillColor=h);var y=la(r,function(je){return l.getComputedStyle(je).color});y!=null&&(u.textColor=y);var D=w0(m,n);D&&(u.cellPadding=D);var I="borderTopColor",U=_*n,tt=m.borderTopWidth;if(m.borderBottomWidth===tt&&m.borderRightWidth===tt&&m.borderLeftWidth===tt){var St=(parseFloat(tt)||0)/U;St&&(u.lineWidth=St)}else u.lineWidth={top:(parseFloat(m.borderTopWidth)||0)/U,right:(parseFloat(m.borderRightWidth)||0)/U,bottom:(parseFloat(m.borderBottomWidth)||0)/U,left:(parseFloat(m.borderLeftWidth)||0)/U},u.lineWidth.top||(u.lineWidth.right?I="borderRightColor":u.lineWidth.bottom?I="borderBottomColor":u.lineWidth.left&&(I="borderLeftColor"));var $t=la(r,function(je){return l.getComputedStyle(je)[I]});$t!=null&&(u.lineColor=$t);var De=["left","right","center","justify"];De.indexOf(m.textAlign)!==-1&&(u.halign=m.textAlign),De=["middle","bottom","top"],De.indexOf(m.verticalAlign)!==-1&&(u.valign=m.verticalAlign);var re=parseInt(m.fontSize||"");isNaN(re)||(u.fontSize=re/_);var Se=A0(m);Se&&(u.fontStyle=Se);var He=(m.fontFamily||"").toLowerCase();return e.indexOf(He)!==-1&&(u.font=He),u}function A0(e){var r="";return(e.fontWeight==="bold"||e.fontWeight==="bolder"||parseInt(e.fontWeight)>=700)&&(r="bold"),(e.fontStyle==="italic"||e.fontStyle==="oblique")&&(r+="italic"),r}function la(e,r){var n=Ro(e,r);if(!n)return null;var m=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!m||!Array.isArray(m))return null;var l=[parseInt(m[1]),parseInt(m[2]),parseInt(m[3])],u=parseInt(m[4]);return u===0||isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function Ro(e,r){var n=r(e);return n==="rgba(0, 0, 0, 0)"||n==="transparent"||n==="initial"||n==="inherit"?e.parentElement==null?null:Ro(e.parentElement,r):n}function w0(e,r){var n=[e.paddingTop,e.paddingRight,e.paddingBottom,e.paddingLeft],m=96/(72/r),l=(parseInt(e.lineHeight)-parseInt(e.fontSize))/r/2,u=n.map(function(h){return parseInt(h||"0")/m}),_=Zn(u,0);return l>_.top&&(_.top=l),l>_.bottom&&(_.bottom=l),_}function Fo(e,r,n,m,l){var u,_;m===void 0&&(m=!1),l===void 0&&(l=!1);var h;typeof r=="string"?h=n.document.querySelector(r):h=r;var y=Object.keys(e.getFontList()),D=e.scaleFactor(),I=[],U=[],tt=[];if(!h)return console.error("Html table could not be found with input: ",r),{head:I,body:U,foot:tt};for(var St=0;St<h.rows.length;St++){var $t=h.rows[St],De=(_=(u=$t?.parentElement)===null||u===void 0?void 0:u.tagName)===null||_===void 0?void 0:_.toLowerCase(),re=L0(y,D,n,$t,m,l);re&&(De==="thead"?I.push(re):De==="tfoot"?tt.push(re):U.push(re))}return{head:I,body:U,foot:tt}}function L0(e,r,n,m,l,u){for(var _=new Eo(m),h=0;h<m.cells.length;h++){var y=m.cells[h],D=n.getComputedStyle(y);if(l||D.display!=="none"){var I=void 0;u&&(I=E0(e,y,r,D,n)),_.push({rowSpan:y.rowSpan,colSpan:y.colSpan,styles:I,_element:y,content:R0(y)})}}var U=n.getComputedStyle(m);if(_.length>0&&(l||U.display!=="none"))return _}function R0(e){var r=e.cloneNode(!0);return r.innerHTML=r.innerHTML.replace(/\n/g,"").replace(/ +/g," "),r.innerHTML=r.innerHTML.split(/<br.*?>/).map(function(n){return n.trim()}).join(`
`),r.innerText||r.textContent||""}function F0(e,r,n){for(var m=0,l=[e,r,n];m<l.length;m++){var u=l[m];u&&typeof u!="object"&&console.error("The options parameter should be of type object, is: "+typeof u),u.startY&&typeof u.startY!="number"&&(console.error("Invalid value for startY option",u.startY),delete u.startY)}}function qe(e,r,n,m,l){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var u=Object(e),_=1;_<arguments.length;_++){var h=arguments[_];if(h!=null)for(var y in h)Object.prototype.hasOwnProperty.call(h,y)&&(u[y]=h[y])}return u}function Bo(e,r){var n=new un(e),m=n.getDocumentOptions(),l=n.getGlobalOptions();F0(l,m,r);var u=qe({},l,m,r),_;typeof window<"u"&&(_=window);var h=B0(l,m,r),y=k0(l,m,r),D=N0(n,u),I=j0(n,u,_);return{id:r.tableId,content:I,hooks:y,styles:h,settings:D}}function B0(e,r,n){for(var m={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},l=function(y){if(y==="columnStyles"){var D=e[y],I=r[y],U=n[y];m.columnStyles=qe({},D,I,U)}else{var tt=[e,r,n],St=tt.map(function($t){return $t[y]||{}});m[y]=qe({},St[0],St[1],St[2])}},u=0,_=Object.keys(m);u<_.length;u++){var h=_[u];l(h)}return m}function k0(e,r,n){for(var m=[e,r,n],l={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},u=0,_=m;u<_.length;u++){var h=_[u];h.didParseCell&&l.didParseCell.push(h.didParseCell),h.willDrawCell&&l.willDrawCell.push(h.willDrawCell),h.didDrawCell&&l.didDrawCell.push(h.didDrawCell),h.willDrawPage&&l.willDrawPage.push(h.willDrawPage),h.didDrawPage&&l.didDrawPage.push(h.didDrawPage)}return l}function N0(e,r){var n,m,l,u,_,h,y,D,I,U,tt,St,$t=Zn(r.margin,40/e.scaleFactor()),De=(n=V0(e,r.startY))!==null&&n!==void 0?n:$t.top,re;r.showFoot===!0?re="everyPage":r.showFoot===!1?re="never":re=(m=r.showFoot)!==null&&m!==void 0?m:"everyPage";var Se;r.showHead===!0?Se="everyPage":r.showHead===!1?Se="never":Se=(l=r.showHead)!==null&&l!==void 0?l:"everyPage";var He=(u=r.useCss)!==null&&u!==void 0?u:!1,je=r.theme||(He?"plain":"striped"),Ke=!!r.horizontalPageBreak,er=(_=r.horizontalPageBreakRepeat)!==null&&_!==void 0?_:null;return{includeHiddenHtml:(h=r.includeHiddenHtml)!==null&&h!==void 0?h:!1,useCss:He,theme:je,startY:De,margin:$t,pageBreak:(y=r.pageBreak)!==null&&y!==void 0?y:"auto",rowPageBreak:(D=r.rowPageBreak)!==null&&D!==void 0?D:"auto",tableWidth:(I=r.tableWidth)!==null&&I!==void 0?I:"auto",showHead:Se,showFoot:re,tableLineWidth:(U=r.tableLineWidth)!==null&&U!==void 0?U:0,tableLineColor:(tt=r.tableLineColor)!==null&&tt!==void 0?tt:200,horizontalPageBreak:Ke,horizontalPageBreakRepeat:er,horizontalPageBreakBehaviour:(St=r.horizontalPageBreakBehaviour)!==null&&St!==void 0?St:"afterAllRows"}}function V0(e,r){var n=e.getLastAutoTable(),m=e.scaleFactor(),l=e.pageNumber(),u=!1;if(n&&n.startPageNumber){var _=n.startPageNumber+n.pageNumber-1;u=_===l}return typeof r=="number"?r:(r==null||r===!1)&&u&&n?.finalY!=null?n.finalY+20/m:null}function j0(e,r,n){var m=r.head||[],l=r.body||[],u=r.foot||[];if(r.html){var _=r.includeHiddenHtml;if(n){var h=Fo(e,r.html,n,_,r.useCss)||{};m=h.head||m,l=h.body||m,u=h.foot||m}else console.error("Cannot parse html in non browser environment")}var y=r.columns||q0(m,l,u);return{columns:y,head:m,body:l,foot:u}}function q0(e,r,n){var m=e[0]||r[0]||n[0]||[],l=[];return Object.keys(m).filter(function(u){return u!=="_element"}).forEach(function(u){var _=1,h;Array.isArray(m)?h=m[parseInt(u)]:h=m[u],typeof h=="object"&&!Array.isArray(h)&&(_=h?.colSpan||1);for(var y=0;y<_;y++){var D=void 0;Array.isArray(m)?D=l.length:D=u+(y>0?"_".concat(y):"");var I={dataKey:D};l.push(I)}}),l}var xa=function(){function e(r,n,m){this.table=n,this.pageNumber=n.pageNumber,this.settings=n.settings,this.cursor=m,this.doc=r.getDocument()}return e}(),z0=function(e){Io(r,e);function r(n,m,l,u,_,h){var y=e.call(this,n,m,h)||this;return y.cell=l,y.row=u,y.column=_,y.section=u.section,y}return r}(xa),H0=function(){function e(r,n){this.pageNumber=1,this.id=r.id,this.settings=r.settings,this.styles=r.styles,this.hooks=r.hooks,this.columns=n.columns,this.head=n.head,this.body=n.body,this.foot=n.foot}return e.prototype.getHeadHeight=function(r){return this.head.reduce(function(n,m){return n+m.getMaxCellHeight(r)},0)},e.prototype.getFootHeight=function(r){return this.foot.reduce(function(n,m){return n+m.getMaxCellHeight(r)},0)},e.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},e.prototype.callCellHooks=function(r,n,m,l,u,_){for(var h=0,y=n;h<y.length;h++){var D=y[h],I=new z0(r,this,m,l,u,_),U=D(I)===!1;if(m.text=Array.isArray(m.text)?m.text:[m.text],U)return!1}return!0},e.prototype.callEndPageHooks=function(r,n){r.applyStyles(r.userStyles);for(var m=0,l=this.hooks.didDrawPage;m<l.length;m++){var u=l[m];u(new xa(r,this,n))}},e.prototype.callWillDrawPageHooks=function(r,n){for(var m=0,l=this.hooks.willDrawPage;m<l.length;m++){var u=l[m];u(new xa(r,this,n))}},e.prototype.getWidth=function(r){if(typeof this.settings.tableWidth=="number")return this.settings.tableWidth;if(this.settings.tableWidth==="wrap"){var n=this.columns.reduce(function(l,u){return l+u.wrappedWidth},0);return n}else{var m=this.settings.margin;return r-m.left-m.right}},e}(),ko=function(){function e(r,n,m,l,u){u===void 0&&(u=!1),this.height=0,this.raw=r,r instanceof Eo&&(this.raw=r._element,this.element=r._element),this.index=n,this.section=m,this.cells=l,this.spansMultiplePages=u}return e.prototype.getMaxCellHeight=function(r){var n=this;return r.reduce(function(m,l){var u;return Math.max(m,((u=n.cells[l.index])===null||u===void 0?void 0:u.height)||0)},0)},e.prototype.hasRowSpan=function(r){var n=this;return r.filter(function(m){var l=n.cells[m.index];return l?l.rowSpan>1:!1}).length>0},e.prototype.canEntireRowFit=function(r,n){return this.getMaxCellHeight(n)<=r},e.prototype.getMinimumRowHeight=function(r,n){var m=this;return r.reduce(function(l,u){var _=m.cells[u.index];if(!_)return 0;var h=n.getLineHeight(_.styles.fontSize),y=_.padding("vertical"),D=y+h;return D>l?D:l},0)},e}(),No=function(){function e(r,n,m){var l;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=n,this.section=m,this.raw=r;var u=r;r!=null&&typeof r=="object"&&!Array.isArray(r)?(this.rowSpan=r.rowSpan||1,this.colSpan=r.colSpan||1,u=(l=r.content)!==null&&l!==void 0?l:r,r._element&&(this.raw=r._element)):(this.rowSpan=1,this.colSpan=1);var _=u!=null?""+u:"",h=/\r\n|\r|\n/g;this.text=_.split(h)}return e.prototype.getTextPos=function(){var r;if(this.styles.valign==="top")r=this.y+this.padding("top");else if(this.styles.valign==="bottom")r=this.y+this.height-this.padding("bottom");else{var n=this.height-this.padding("vertical");r=this.y+n/2+this.padding("top")}var m;if(this.styles.halign==="right")m=this.x+this.width-this.padding("right");else if(this.styles.halign==="center"){var l=this.width-this.padding("horizontal");m=this.x+l/2+this.padding("left")}else m=this.x+this.padding("left");return{x:m,y:r}},e.prototype.getContentHeight=function(r,n){n===void 0&&(n=1.15);var m=Array.isArray(this.text)?this.text.length:1,l=this.styles.fontSize/r*n,u=m*l+this.padding("vertical");return Math.max(u,this.styles.minCellHeight)},e.prototype.padding=function(r){var n=Zn(this.styles.cellPadding,0);return r==="vertical"?n.top+n.bottom:r==="horizontal"?n.left+n.right:n[r]},e}(),G0=function(){function e(r,n,m){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=r,this.raw=n,this.index=m}return e.prototype.getMaxCustomCellWidth=function(r){for(var n=0,m=0,l=r.allRows();m<l.length;m++){var u=l[m],_=u.cells[this.index];_&&typeof _.styles.cellWidth=="number"&&(n=Math.max(n,_.styles.cellWidth))}return n},e}();function U0(e,r){$0(e,r);var n=[],m=0;r.columns.forEach(function(u){var _=u.getMaxCustomCellWidth(r);_?u.width=_:(u.width=u.wrappedWidth,n.push(u)),m+=u.width});var l=r.getWidth(e.pageSize().width)-m;l&&(l=fa(n,l,function(u){return Math.max(u.minReadableWidth,u.minWidth)})),l&&(l=fa(n,l,function(u){return u.minWidth})),l=Math.abs(l),!r.settings.horizontalPageBreak&&l>.1/e.scaleFactor()&&(l=l<1?l:Math.round(l),console.warn("Of the table content, ".concat(l," units width could not fit page"))),Q0(r),Y0(r,e),W0(r)}function $0(e,r){var n=e.scaleFactor(),m=r.settings.horizontalPageBreak,l=Lo(e,r);r.allRows().forEach(function(u){for(var _=0,h=r.columns;_<h.length;_++){var y=h[_],D=u.cells[y.index];if(D){var I=r.hooks.didParseCell;r.callCellHooks(e,I,D,u,y,null);var U=D.padding("horizontal");D.contentWidth=Kn(D.text,D.styles,e)+U;var tt=Kn(D.text.join(" ").split(/[^\S\u00A0]+/),D.styles,e);if(D.minReadableWidth=tt+D.padding("horizontal"),typeof D.styles.cellWidth=="number")D.minWidth=D.styles.cellWidth,D.wrappedWidth=D.styles.cellWidth;else if(D.styles.cellWidth==="wrap"||m===!0)D.contentWidth>l?(D.minWidth=l,D.wrappedWidth=l):(D.minWidth=D.contentWidth,D.wrappedWidth=D.contentWidth);else{var St=10/n;D.minWidth=D.styles.minCellWidth||St,D.wrappedWidth=D.contentWidth,D.minWidth>D.wrappedWidth&&(D.wrappedWidth=D.minWidth)}}}}),r.allRows().forEach(function(u){for(var _=0,h=r.columns;_<h.length;_++){var y=h[_],D=u.cells[y.index];if(D&&D.colSpan===1)y.wrappedWidth=Math.max(y.wrappedWidth,D.wrappedWidth),y.minWidth=Math.max(y.minWidth,D.minWidth),y.minReadableWidth=Math.max(y.minReadableWidth,D.minReadableWidth);else{var I=r.styles.columnStyles[y.dataKey]||r.styles.columnStyles[y.index]||{},U=I.cellWidth||I.minCellWidth;U&&typeof U=="number"&&(y.minWidth=U,y.wrappedWidth=U)}D&&(D.colSpan>1&&!y.minWidth&&(y.minWidth=D.minWidth),D.colSpan>1&&!y.wrappedWidth&&(y.wrappedWidth=D.minWidth))}})}function fa(e,r,n){for(var m=r,l=e.reduce(function(St,$t){return St+$t.wrappedWidth},0),u=0;u<e.length;u++){var _=e[u],h=_.wrappedWidth/l,y=m*h,D=_.width+y,I=n(_),U=D<I?I:D;r-=U-_.width,_.width=U}if(r=Math.round(r*1e10)/1e10,r){var tt=e.filter(function(St){return r<0?St.width>n(St):!0});tt.length&&(r=fa(tt,r,n))}return r}function W0(e){for(var r={},n=1,m=e.allRows(),l=0;l<m.length;l++)for(var u=m[l],_=0,h=e.columns;_<h.length;_++){var y=h[_],D=r[y.index];if(n>1)n--,delete u.cells[y.index];else if(D)D.cell.height+=u.height,n=D.cell.colSpan,delete u.cells[y.index],D.left--,D.left<=1&&delete r[y.index];else{var I=u.cells[y.index];if(!I)continue;if(I.height=u.height,I.rowSpan>1){var U=m.length-l,tt=I.rowSpan>U?U:I.rowSpan;r[y.index]={cell:I,left:tt,row:u}}}}}function Q0(e){for(var r=e.allRows(),n=0;n<r.length;n++)for(var m=r[n],l=null,u=0,_=0,h=0;h<e.columns.length;h++){var y=e.columns[h];if(_-=1,_>1&&e.columns[h+1])u+=y.width,delete m.cells[y.index];else if(l){var D=l;delete m.cells[y.index],l=null,D.width=y.width+u}else{var D=m.cells[y.index];if(!D)continue;if(_=D.colSpan,u=0,D.colSpan>1){l=D,u+=y.width;continue}D.width=y.width+u}}}function Y0(e,r){for(var n={count:0,height:0},m=0,l=e.allRows();m<l.length;m++){for(var u=l[m],_=0,h=e.columns;_<h.length;_++){var y=h[_],D=u.cells[y.index];if(D){r.applyStyles(D.styles,!0);var I=D.width-D.padding("horizontal");if(D.styles.overflow==="linebreak")D.text=r.splitTextToSize(D.text,I+1/r.scaleFactor(),{fontSize:D.styles.fontSize});else if(D.styles.overflow==="ellipsize")D.text=Do(D.text,I,D.styles,r,"...");else if(D.styles.overflow==="hidden")D.text=Do(D.text,I,D.styles,r,"");else if(typeof D.styles.overflow=="function"){var U=D.styles.overflow(D.text,I);typeof U=="string"?D.text=[U]:D.text=U}D.contentHeight=D.getContentHeight(r.scaleFactor(),r.getLineHeightFactor());var tt=D.contentHeight/D.rowSpan;D.rowSpan>1&&n.count*n.height<tt*D.rowSpan?n={height:tt,count:D.rowSpan}:n&&n.count>0&&n.height>tt&&(tt=n.height),tt>u.height&&(u.height=tt)}}n.count--}}function Do(e,r,n,m,l){return e.map(function(u){return K0(u,r,n,m,l)})}function K0(e,r,n,m,l){var u=1e4*m.scaleFactor();if(r=Math.ceil(r*u)/u,r>=Kn(e,n,m))return e;for(;r<Kn(e+l,n,m)&&!(e.length<=1);)e=e.substring(0,e.length-1);return e.trim()+l}function Vo(e,r){var n=new un(e),m=J0(r,n.scaleFactor()),l=new H0(r,m);return U0(n,l),n.applyStyles(n.userStyles),l}function J0(e,r){var n=e.content,m=X0(n.columns);if(n.head.length===0){var l=To(m,"head");l&&n.head.push(l)}if(n.foot.length===0){var l=To(m,"foot");l&&n.foot.push(l)}var u=e.settings.theme,_=e.styles;return{columns:m,head:ma("head",n.head,m,_,u,r),body:ma("body",n.body,m,_,u,r),foot:ma("foot",n.foot,m,_,u,r)}}function ma(e,r,n,m,l,u){var _={},h=r.map(function(y,D){for(var I=0,U={},tt=0,St=0,$t=0,De=n;$t<De.length;$t++){var re=De[$t];if(_[re.index]==null||_[re.index].left===0)if(St===0){var Se=void 0;Array.isArray(y)?Se=y[re.index-tt-I]:Se=y[re.dataKey];var He={};typeof Se=="object"&&!Array.isArray(Se)&&(He=Se?.styles||{});var je=tm(e,re,D,l,m,u,He),Ke=new No(Se,je,e);U[re.dataKey]=Ke,U[re.index]=Ke,St=Ke.colSpan-1,_[re.index]={left:Ke.rowSpan-1,times:St}}else St--,tt++;else _[re.index].left--,St=_[re.index].times,I++}return new ko(y,D,e,U)});return h}function To(e,r){var n={};return e.forEach(function(m){if(m.raw!=null){var l=Z0(r,m.raw);l!=null&&(n[m.dataKey]=l)}}),Object.keys(n).length>0?n:null}function Z0(e,r){if(e==="head"){if(typeof r=="object")return r.header||null;if(typeof r=="string"||typeof r=="number")return r}else if(e==="foot"&&typeof r=="object")return r.footer;return null}function X0(e){return e.map(function(r,n){var m,l;return typeof r=="object"?l=(m=r.dataKey)!==null&&m!==void 0?m:n:l=n,new G0(l,r,n)})}function tm(e,r,n,m,l,u,_){var h=I0(m),y;e==="head"?y=l.headStyles:e==="body"?y=l.bodyStyles:e==="foot"&&(y=l.footStyles);var D=qe({},h.table,h[e],l.styles,y),I=l.columnStyles[r.dataKey]||l.columnStyles[r.index]||{},U=e==="body"?I:{},tt=e==="body"&&n%2===0?qe({},h.alternateRow,l.alternateRowStyles):{},St=O0(u),$t=qe({},St,D,tt,U);return qe($t,_)}function em(e,r,n){var m;n===void 0&&(n={});var l=Lo(e,r),u=new Map,_=[],h=[],y=[];Array.isArray(r.settings.horizontalPageBreakRepeat)?y=r.settings.horizontalPageBreakRepeat:(typeof r.settings.horizontalPageBreakRepeat=="string"||typeof r.settings.horizontalPageBreakRepeat=="number")&&(y=[r.settings.horizontalPageBreakRepeat]),y.forEach(function(tt){var St=r.columns.find(function($t){return $t.dataKey===tt||$t.index===tt});St&&!u.has(St.index)&&(u.set(St.index,!0),_.push(St.index),h.push(r.columns[St.index]),l-=St.wrappedWidth)});for(var D=!0,I=(m=n?.start)!==null&&m!==void 0?m:0;I<r.columns.length;){if(u.has(I)){I++;continue}var U=r.columns[I].wrappedWidth;if(D||l>=U)D=!1,_.push(I),h.push(r.columns[I]),l-=U;else break;I++}return{colIndexes:_,columns:h,lastIndex:I-1}}function nm(e,r){for(var n=[],m=0;m<r.columns.length;m++){var l=em(e,r,{start:m});l.columns.length&&(n.push(l),m=l.lastIndex)}return n}function jo(e,r){var n=r.settings,m=n.startY,l=n.margin,u={x:l.left,y:m},_=r.getHeadHeight(r.columns)+r.getFootHeight(r.columns),h=m+l.bottom+_;if(n.pageBreak==="avoid"){var y=r.body,D=y.reduce(function(tt,St){return tt+St.height},0);h+=D}var I=new un(e);(n.pageBreak==="always"||n.startY!=null&&h>I.pageSize().height)&&(zo(I),u.y=l.top),r.callWillDrawPageHooks(I,u);var U=qe({},u);r.startPageNumber=I.pageNumber(),n.horizontalPageBreak?im(I,r,U,u):(I.applyStyles(I.userStyles),(n.showHead==="firstPage"||n.showHead==="everyPage")&&r.head.forEach(function(tt){return ze(I,r,tt,u,r.columns)}),I.applyStyles(I.userStyles),r.body.forEach(function(tt,St){var $t=St===r.body.length-1;Jn(I,r,tt,$t,U,u,r.columns)}),I.applyStyles(I.userStyles),(n.showFoot==="lastPage"||n.showFoot==="everyPage")&&r.foot.forEach(function(tt){return ze(I,r,tt,u,r.columns)})),Ao(I,r,U,u),r.callEndPageHooks(I,u),r.finalY=u.y,e.lastAutoTable=r,I.applyStyles(I.userStyles)}function im(e,r,n,m){var l=nm(e,r),u=r.settings;if(u.horizontalPageBreakBehaviour==="afterAllRows")l.forEach(function(D,I){e.applyStyles(e.userStyles),I>0?bn(e,r,n,m,D.columns,!0):Po(e,r,m,D.columns),am(e,r,n,m,D.columns),sa(e,r,m,D.columns)});else for(var _=-1,h=l[0],y=function(){var D=_;if(h){e.applyStyles(e.userStyles);var I=h.columns;_>=0?bn(e,r,n,m,I,!0):Po(e,r,m,I),D=Mo(e,r,_+1,m,I),sa(e,r,m,I)}var U=D-_;l.slice(1).forEach(function(tt){e.applyStyles(e.userStyles),bn(e,r,n,m,tt.columns,!0),Mo(e,r,_+1,m,tt.columns,U),sa(e,r,m,tt.columns)}),_=D};_<r.body.length-1;)y()}function Po(e,r,n,m){var l=r.settings;e.applyStyles(e.userStyles),(l.showHead==="firstPage"||l.showHead==="everyPage")&&r.head.forEach(function(u){return ze(e,r,u,n,m)})}function am(e,r,n,m,l){e.applyStyles(e.userStyles),r.body.forEach(function(u,_){var h=_===r.body.length-1;Jn(e,r,u,h,n,m,l)})}function Mo(e,r,n,m,l,u){e.applyStyles(e.userStyles),u=u??r.body.length;var _=Math.min(n+u,r.body.length),h=-1;return r.body.slice(n,_).forEach(function(y,D){var I=n+D===r.body.length-1,U=qo(e,r,I,m);y.canEntireRowFit(U,l)&&(ze(e,r,y,m,l),h=n+D)}),h}function sa(e,r,n,m){var l=r.settings;e.applyStyles(e.userStyles),(l.showFoot==="lastPage"||l.showFoot==="everyPage")&&r.foot.forEach(function(u){return ze(e,r,u,n,m)})}function om(e,r,n){var m=n.getLineHeight(e.styles.fontSize),l=e.padding("vertical"),u=Math.floor((r-l)/m);return Math.max(0,u)}function rm(e,r,n,m){var l={};e.spansMultiplePages=!0,e.height=0;for(var u=0,_=0,h=n.columns;_<h.length;_++){var y=h[_],D=e.cells[y.index];if(D){Array.isArray(D.text)||(D.text=[D.text]);var I=new No(D.raw,D.styles,D.section);I=qe(I,D),I.text=[];var U=om(D,r,m);D.text.length>U&&(I.text=D.text.splice(U,D.text.length));var tt=m.scaleFactor(),St=m.getLineHeightFactor();D.contentHeight=D.getContentHeight(tt,St),D.contentHeight>=r&&(D.contentHeight=r,I.styles.minCellHeight-=r),D.contentHeight>e.height&&(e.height=D.contentHeight),I.contentHeight=I.getContentHeight(tt,St),I.contentHeight>u&&(u=I.contentHeight),l[y.index]=I}}var $t=new ko(e.raw,-1,e.section,l,!0);$t.height=u;for(var De=0,re=n.columns;De<re.length;De++){var y=re[De],I=$t.cells[y.index];I&&(I.height=$t.height);var D=e.cells[y.index];D&&(D.height=e.height)}return $t}function lm(e,r,n,m){var l=e.pageSize().height,u=m.settings.margin,_=u.top+u.bottom,h=l-_;r.section==="body"&&(h-=m.getHeadHeight(m.columns)+m.getFootHeight(m.columns));var y=r.getMinimumRowHeight(m.columns,e),D=y<n;if(y>h)return console.error("Will not be able to print row ".concat(r.index," correctly since it's minimum height is larger than page height")),!0;if(!D)return!1;var I=r.hasRowSpan(m.columns),U=r.getMaxCellHeight(m.columns)>h;return U?(I&&console.error("The content of row ".concat(r.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(I||m.settings.rowPageBreak==="avoid")}function Jn(e,r,n,m,l,u,_){var h=qo(e,r,m,u);if(n.canEntireRowFit(h,_))ze(e,r,n,u,_);else if(lm(e,n,h,r)){var y=rm(n,h,r,e);ze(e,r,n,u,_),bn(e,r,l,u,_),Jn(e,r,y,m,l,u,_)}else bn(e,r,l,u,_),Jn(e,r,n,m,l,u,_)}function ze(e,r,n,m,l){m.x=r.settings.margin.left;for(var u=0,_=l;u<_.length;u++){var h=_[u],y=n.cells[h.index];if(!y){m.x+=h.width;continue}e.applyStyles(y.styles),y.x=m.x,y.y=m.y;var D=r.callCellHooks(e,r.hooks.willDrawCell,y,n,h,m);if(D===!1){m.x+=h.width;continue}mm(e,y,m);var I=y.getTextPos();Oo(y.text,I.x,I.y,{halign:y.styles.halign,valign:y.styles.valign,maxWidth:Math.ceil(y.width-y.padding("left")-y.padding("right"))},e.getDocument()),r.callCellHooks(e,r.hooks.didDrawCell,y,n,h,m),m.x+=h.width}m.y+=n.height}function mm(e,r,n){var m=r.styles;if(e.getDocument().setFillColor(e.getDocument().getFillColor()),typeof m.lineWidth=="number"){var l=wo(m.lineWidth,m.fillColor);l&&e.rect(r.x,n.y,r.width,r.height,l)}else typeof m.lineWidth=="object"&&(m.fillColor&&e.rect(r.x,n.y,r.width,r.height,"F"),sm(e,r,n,m.lineWidth))}function sm(e,r,n,m){var l,u,_,h;m.top&&(l=n.x,u=n.y,_=n.x+r.width,h=n.y,m.right&&(_+=.5*m.right),m.left&&(l-=.5*m.left),y(m.top,l,u,_,h)),m.bottom&&(l=n.x,u=n.y+r.height,_=n.x+r.width,h=n.y+r.height,m.right&&(_+=.5*m.right),m.left&&(l-=.5*m.left),y(m.bottom,l,u,_,h)),m.left&&(l=n.x,u=n.y,_=n.x,h=n.y+r.height,m.top&&(u-=.5*m.top),m.bottom&&(h+=.5*m.bottom),y(m.left,l,u,_,h)),m.right&&(l=n.x+r.width,u=n.y,_=n.x+r.width,h=n.y+r.height,m.top&&(u-=.5*m.top),m.bottom&&(h+=.5*m.bottom),y(m.right,l,u,_,h));function y(D,I,U,tt,St){e.getDocument().setLineWidth(D),e.getDocument().line(I,U,tt,St,"S")}}function qo(e,r,n,m){var l=r.settings.margin.bottom,u=r.settings.showFoot;return(u==="everyPage"||u==="lastPage"&&n)&&(l+=r.getFootHeight(r.columns)),e.pageSize().height-m.y-l}function bn(e,r,n,m,l,u){l===void 0&&(l=[]),u===void 0&&(u=!1),e.applyStyles(e.userStyles),r.settings.showFoot==="everyPage"&&!u&&r.foot.forEach(function(h){return ze(e,r,h,m,l)}),r.callEndPageHooks(e,m);var _=r.settings.margin;Ao(e,r,n,m),zo(e),r.pageNumber++,m.x=_.left,m.y=_.top,n.y=_.top,r.callWillDrawPageHooks(e,m),r.settings.showHead==="everyPage"&&(r.head.forEach(function(h){return ze(e,r,h,m,l)}),e.applyStyles(e.userStyles))}function zo(e){var r=e.pageNumber();e.setPage(r+1);var n=e.pageNumber();return n===r?(e.addPage(),!0):!1}function pm(e){e.API.autoTable=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var m=r[0],l=Bo(this,m),u=Vo(this,l);return jo(this,u),this},e.API.lastAutoTable=!1,e.API.autoTableText=function(r,n,m,l){Oo(r,n,m,l,this)},e.API.autoTableSetDefaults=function(r){return un.setDefaults(r,this),this},e.autoTableSetDefaults=function(r,n){un.setDefaults(r,n)},e.API.autoTableHtmlToJson=function(r,n){var m;if(n===void 0&&(n=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var l=new un(this),u=Fo(l,r,window,n,!1),_=u.head,h=u.body,y=((m=_[0])===null||m===void 0?void 0:m.map(function(D){return D.content}))||[];return{columns:y,rows:h,data:h}}}var pa;function Ho(e,r){var n=Bo(e,r),m=Vo(e,n);jo(e,m)}try{typeof window<"u"&&window&&(ca=window,da=ca.jsPDF||((pa=ca.jspdf)===null||pa===void 0?void 0:pa.jsPDF),da&&pm(da))}catch(e){console.error("Could not apply autoTable plugin",e)}var ca,da;var cm=()=>["header","header-amount","header-total-cost","header-installment-totals"];function dm(e,r){if(e&1){let n=O();i(0,"div",4),t(1,`
    `),i(2,"button",5),T("click",function(){P(n);let l=C();return M(l.exportToPDF())}),t(3,`
      `),g(4,"fa-icon",6),t(5,`Export to PDF
    `),a(),t(6,`
  `),a()}}function um(e,r){e&1&&(i(0,"th",44),t(1,"#"),a())}function xm(e,r){if(e&1&&(i(0,"td",45),t(1),a()),e&2){let n=r.$implicit;o(),x(n.period)}}function fm(e,r){e&1&&(i(0,"td",46),t(1,"\xA0"),a())}function gm(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Days")))}function _m(e,r){if(e&1&&(i(0,"td",47),t(1),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),x(n.daysInPeriod)}}function Cm(e,r){e&1&&(i(0,"td",48)(1,"b"),t(2," Total"),a()())}function hm(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Date")))}function vm(e,r){if(e&1&&(i(0,"td",49),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.dueDate),`
      `)}}function bm(e,r){e&1&&g(0,"td",46)}function Sm(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Paid Date"),`
      `))}function ym(e,r){if(e&1&&(i(0,"td",47),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.obligationsMetOnDate),`
      `)}}function Dm(e,r){e&1&&g(0,"td",46)}function Tm(e,r){e&1&&(i(0,"th",50),t(1,"\xA0"),a())}function Pm(e,r){e&1&&(i(0,"span"),t(1," "),g(2,"i",51),t(3," "),a())}function Mm(e,r){if(e&1&&(i(0,"td",47),t(1,`
        `),d(2,Pm,4,0,"span",34),t(3,`
      `),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(2),c("ngIf",n.obligationsMetOnDate)}}function Om(e,r){e&1&&g(0,"td",46)}function Im(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Balance Of Loan"),`
      `))}function Em(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.principalLoanBalanceOutstanding),`
      `)}}function Am(e,r){e&1&&(i(0,"td",54),t(1,"\xA0"),a())}function wm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Principal Due"),`
      `))}function Lm(e,r){if(e&1&&(i(0,"td",55),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.principalDue),`
      `)}}function Rm(e,r){if(e&1&&(i(0,"td",56),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(`
          `,vt(4,1,n.repaymentScheduleDetails.totalPrincipalExpected,n.currencyCode,"symbol-narrow","1.2-2"),"")}}function Fm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Interest"),`
      `))}function Bm(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.interestOriginalDue),`
      `)}}function km(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(`
          `,vt(4,1,n.repaymentScheduleDetails.totalInterestCharged,n.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function Nm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Fees")))}function Vm(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.feeChargesDue),`
      `)}}function jm(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(`
          `,vt(4,1,n.repaymentScheduleDetails.totalFeeChargesCharged,n.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function qm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Penalties"),`
      `))}function zm(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.penaltyChargesDue),`
      `)}}function Hm(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(`
          `,vt(4,1,n.repaymentScheduleDetails.totalPenaltyChargesCharged,n.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function Gm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Due")))}function Um(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.totalDueForPeriod),`
      `)}}function $m(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(`
          `,vt(4,1,n.repaymentScheduleDetails.totalRepaymentExpected,n.currencyCode,"symbol-narrow","1.2-2"),`
        `)}}function Wm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Paid")))}function Qm(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.totalPaidForPeriod),`
      `)}}function Ym(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(" ",vt(4,1,n.repaymentScheduleDetails.totalRepayment,n.currencyCode,"symbol-narrow","1.2-2")," ")}}function Km(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.In advance"),`
      `))}function Jm(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.totalPaidInAdvanceForPeriod),`
      `)}}function Zm(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(" ",vt(4,1,n.repaymentScheduleDetails.totalPaidInAdvance,n.currencyCode,"symbol-narrow","1.2-2")," ")}}function Xm(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Late")))}function ts(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(2);c("ngClass",m.installmentStyle(n)),o(),f(`
        `,p(2,2,n.totalPaidLateForPeriod),`
      `)}}function es(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(" ",vt(4,1,n.repaymentScheduleDetails.totalPaidLate,n.currencyCode,"symbol-narrow","1.2-2")," ")}}function ns(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
          `,p(2,1,"labels.inputs.Waived"),`
        `))}function is(e,r){if(e&1&&(i(0,"td",53),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit,m=C(3);c("ngClass",m.installmentStyle(n)),o(),f(`
          `,p(2,2,n.totalWaivedForPeriod),`
        `)}}function as(e,r){if(e&1&&(i(0,"td",54),t(1,`
          `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
        `),a()),e&2){let n=C(3);o(3),f(" ",vt(4,1,n.repaymentScheduleDetails.totalWaived,n.currencyCode,"symbol-narrow","1.2-2")," ")}}function os(e,r){e&1&&(b(0),t(1,`
      `),b(2,57),t(3,`
        `),d(4,ns,3,3,"th",21),t(5,`
        `),d(6,is,3,4,"td",22),t(7,`
        `),d(8,as,6,6,"td",23),t(9,`
      `),S(),t(10,`
    `),S())}function rs(e,r){e&1&&g(0,"th",50)}function ls(e,r){e&1&&g(0,"td",59)}function ms(e,r){e&1&&(i(0,"td",46)(1,"b"),t(2," "),a()())}function ss(e,r){e&1&&(b(0),t(1,`
      `),b(2,57),t(3,`
        `),d(4,rs,1,0,"th",19),t(5,`
        `),d(6,ls,1,0,"td",58),t(7,`
        `),d(8,ms,3,0,"td",11),t(9,`
      `),S(),t(10,`
    `),S())}function ps(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Outstanding"),`
      `))}function cs(e,r){if(e&1&&(i(0,"td",60),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.totalOutstandingForPeriod))}}function ds(e,r){if(e&1&&(i(0,"td",54),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C(2);o(3),f(" ",vt(4,1,n.repaymentScheduleDetails.totalOutstanding,n.currencyCode,"symbol-narrow","1.2-2")," ")}}function us(e,r){e&1&&g(0,"th",50),e&2&&ue("colspan",5)}function xs(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",2),o(),f(`
        `,p(2,2,"labels.inputs.Loan Amount and Balance"),`
      `))}function fs(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",3),o(),f(`
        `,p(2,2,"labels.inputs.Total Cost of Loan"),`
      `))}function gs(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",6),o(),f(`
        `,p(2,2,"labels.inputs.Installment Totals"),`
      `))}function _s(e,r){e&1&&g(0,"tr",61)}function Cs(e,r){e&1&&g(0,"tr",61)}function hs(e,r){e&1&&g(0,"tr",62)}function vs(e,r){e&1&&g(0,"tr",63)}function bs(e,r){if(e&1&&(i(0,"table",7),t(1,`
    `),b(2,8),t(3,`
      `),d(4,um,2,0,"th",9),t(5,`
      `),d(6,xm,2,1,"td",10),t(7,`
      `),d(8,fm,2,0,"td",11),t(9,`
    `),S(),t(10,`

    `),b(11,12),t(12,`
      `),d(13,gm,3,3,"th",9),t(14,`
      `),d(15,_m,2,2,"td",13),t(16,`
      `),d(17,Cm,3,0,"td",14),t(18,`
    `),S(),t(19,`

    `),b(20,15),t(21,`
      `),d(22,hm,3,3,"th",9),t(23,`
      `),d(24,vm,3,4,"td",16),t(25,`
      `),d(26,bm,1,0,"td",11),t(27,`
    `),S(),t(28,`

    `),b(29,17),t(30,`
      `),d(31,Sm,3,3,"th",9),t(32,`
      `),d(33,ym,3,4,"td",13),t(34,`
      `),d(35,Dm,1,0,"td",11),t(36,`
    `),S(),t(37,`

    `),b(38,18),t(39,`
      `),d(40,Tm,2,0,"th",19),t(41,`
      `),d(42,Mm,4,2,"td",13),t(43,`
      `),d(44,Om,1,0,"td",11),t(45,`
    `),S(),t(46,`

    `),b(47,20),t(48,`
      `),d(49,Im,3,3,"th",21),t(50,`
      `),d(51,Em,3,4,"td",22),t(52,`
      `),d(53,Am,2,0,"td",23),t(54,`
    `),S(),t(55,`

    `),b(56,24),t(57,`
      `),d(58,wm,3,3,"th",21),t(59,`
      `),d(60,Lm,3,4,"td",25),t(61,`
      `),d(62,Rm,6,6,"td",26),t(63,`
    `),S(),t(64,`

    `),b(65,27),t(66,`
      `),d(67,Fm,3,3,"th",21),t(68,`
      `),d(69,Bm,3,4,"td",22),t(70,`
      `),d(71,km,6,6,"td",23),t(72,`
    `),S(),t(73,`

    `),b(74,28),t(75,`
      `),d(76,Nm,3,3,"th",21),t(77,`
      `),d(78,Vm,3,4,"td",22),t(79,`
      `),d(80,jm,6,6,"td",23),t(81,`
    `),S(),t(82,`

    `),b(83,29),t(84,`
      `),d(85,qm,3,3,"th",21),t(86,`
      `),d(87,zm,3,4,"td",22),t(88,`
      `),d(89,Hm,6,6,"td",23),t(90,`
    `),S(),t(91,`

    `),b(92,30),t(93,`
      `),d(94,Gm,3,3,"th",21),t(95,`
      `),d(96,Um,3,4,"td",22),t(97,`
      `),d(98,$m,6,6,"td",23),t(99,`
    `),S(),t(100,`

    `),b(101,31),t(102,`
      `),d(103,Wm,3,3,"th",21),t(104,`
      `),d(105,Qm,3,4,"td",22),t(106,`
      `),d(107,Ym,6,6,"td",23),t(108,`
    `),S(),t(109,`

    `),b(110,32),t(111,`
      `),d(112,Km,3,3,"th",21),t(113,`
      `),d(114,Jm,3,4,"td",22),t(115,`
      `),d(116,Zm,6,6,"td",23),t(117,`
    `),S(),t(118,`

    `),b(119,33),t(120,`
      `),d(121,Xm,3,3,"th",21),t(122,`
      `),d(123,ts,3,4,"td",22),t(124,`
      `),d(125,es,6,6,"td",23),t(126,`
    `),S(),t(127,`

    `),d(128,os,11,0,"ng-container",34),t(129,`

    `),d(130,ss,11,0,"ng-container",34),t(131,`

    `),b(132,35),t(133,`
      `),d(134,ps,3,3,"th",21),t(135,`
      `),d(136,cs,3,3,"td",36),t(137,`
      `),d(138,ds,6,6,"td",23),t(139,`
    `),S(),t(140,`

    `),b(141,37),t(142,`
      `),d(143,us,1,1,"th",19),t(144,`
    `),S(),t(145,`

    `),b(146,38),t(147,`
      `),d(148,xs,3,4,"th",9),t(149,`
    `),S(),t(150,`

    `),b(151,39),t(152,`
      `),d(153,fs,3,4,"th",9),t(154,`
    `),S(),t(155,`

    `),b(156,40),t(157,`
      `),d(158,gs,3,4,"th",9),t(159,`
    `),S(),t(160,`

    `),d(161,_s,1,0,"tr",41),t(162,`
    `),d(163,Cs,1,0,"tr",41),t(164,`
    `),d(165,hs,1,0,"tr",42),t(166,`
    `),d(167,vs,1,0,"tr",43),t(168,`
  `),a()),e&2){let n=C();c("dataSource",n.repaymentScheduleDetails.periods),o(128),c("ngIf",n.isWaived),o(2),c("ngIf",!n.isWaived),o(31),c("matHeaderRowDef",N(7,cm)),o(2),c("matHeaderRowDef",n.displayedColumns),o(2),c("matRowDefColumns",n.displayedColumns),o(2),c("matFooterRowDef",n.displayedColumns)}}function Ss(e,r){e&1&&(i(0,"th",44),t(1,"#"),a())}function ys(e,r){if(e&1&&(i(0,"td",59),t(1),a()),e&2){let n=r.$implicit;o(),x(n.period)}}function Ds(e,r){e&1&&(i(0,"th",44),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Date")))}function Ts(e,r){if(e&1&&(i(0,"td",69),t(1,`
        `),b(2),t(3),s(4,"dateFormat"),S(),t(5,`
      `),a()),e&2){let n=r.$implicit;o(3),f(`
          `,p(4,1,n.dueDate),`
        `)}}function Ps(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Balance Of Loan"),`
      `))}function Ms(e,r){if(e&1&&(i(0,"td",60),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),f(`
        `,p(2,1,n.principalLoanBalanceOutstanding),`
      `)}}function Os(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Principal Due"),`
      `))}function Is(e,r){if(e&1&&(i(0,"td",60),t(1,`
        `),b(2),t(3),s(4,"formatNumber"),S(),t(5,`
      `),a()),e&2){let n=r.$implicit;o(3),f(`
          `,p(4,1,n.principalDue),`
        `)}}function Es(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Interest"),`
      `))}function As(e,r){if(e&1&&(i(0,"td",60),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.interestOriginalDue))}}function ws(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Fees")))}function Ls(e,r){if(e&1&&(i(0,"td",60),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.feeChargesDue))}}function Rs(e,r){e&1&&(i(0,"th",52),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Installment Amount"),`
      `))}function Fs(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"formatNumber"),a()),e&2){let n=C().$implicit;o(),f(`
          `,p(2,1,n.totalDueForPeriod),`
        `)}}function Bs(e,r){if(e&1&&(i(0,"span",71),t(1,`
          `),i(2,"b"),t(3),s(4,"formatNumber"),a(),t(5,`
        `),a()),e&2){let n=C().$implicit;o(3),x(p(4,1,n.totalDueForPeriod))}}function ks(e,r){if(e&1&&(i(0,"td",60),t(1,`
        `),d(2,Fs,3,3,"span",34),t(3,`
        `),d(4,Bs,6,3,"span",70),t(5,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.changed),o(2),c("ngIf",n.changed)}}function Ns(e,r){e&1&&(i(0,"th",50),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function Vs(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
          `),b(2),t(3,`
            `),i(4,"button",73),s(5,"translate"),T("click",function(){P(n);let l=C().$implicit,u=C(2);return M(u.editInstallment(l))}),t(6,`
              `),g(7,"fa-icon",74),t(8,`
            `),a(),t(9,`
            `),i(10,"button",75),s(11,"translate"),T("click",function(){P(n);let l=C().$implicit,u=C(2);return M(u.startEdit(l.period))}),t(12,`
              `),g(13,"fa-icon",76),t(14,`
            `),a(),t(15,`
          `),S(),t(16,`
        `),a()}e&2&&(o(4),Q("matTooltip",p(5,2,"tooltips.Edit")),o(6),Q("matTooltip",p(11,4,"tooltips.Delete")))}function js(e,r){if(e&1&&(i(0,"td",72),t(1,`
        `),d(2,Vs,17,6,"span",34),t(3,`
      `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("ngIf",n.period&&n.period+1<m.repaymentScheduleDetails.periods.length)}}function qs(e,r){e&1&&g(0,"td",46)}function zs(e,r){e&1&&g(0,"tr",61)}function Hs(e,r){e&1&&g(0,"tr",77)}function Gs(e,r){if(e&1&&(i(0,"table",64),t(1,`
    `),b(2,8),t(3,`
      `),d(4,Ss,2,0,"th",9),t(5,`
      `),d(6,ys,2,1,"td",58),t(7,`
    `),S(),t(8,`

    `),b(9,15),t(10,`
      `),d(11,Ds,3,3,"th",9),t(12,`
      `),d(13,Ts,6,3,"td",65),t(14,`
    `),S(),t(15,`

    `),b(16,20),t(17,`
      `),d(18,Ps,3,3,"th",21),t(19,`
      `),d(20,Ms,3,3,"td",36),t(21,`
    `),S(),t(22,`

    `),b(23,24),t(24,`
      `),d(25,Os,3,3,"th",21),t(26,`
      `),d(27,Is,6,3,"td",36),t(28,`
    `),S(),t(29,`

    `),b(30,27),t(31,`
      `),d(32,Es,3,3,"th",21),t(33,`
      `),d(34,As,3,3,"td",36),t(35,`
    `),S(),t(36,`

    `),b(37,28),t(38,`
      `),d(39,ws,3,3,"th",21),t(40,`
      `),d(41,Ls,3,3,"td",36),t(42,`
    `),S(),t(43,`

    `),b(44,30),t(45,`
      `),d(46,Rs,3,3,"th",21),t(47,`
      `),d(48,ks,6,2,"td",36),t(49,`
    `),S(),t(50,`

    `),b(51,66),t(52,`
      `),d(53,Ns,3,3,"th",19),t(54,`
      `),d(55,js,4,1,"td",67),t(56,`
      `),d(57,qs,1,0,"td",11),t(58,`
    `),S(),t(59,`

    `),d(60,zs,1,0,"tr",41),t(61,`
    `),d(62,Hs,1,0,"tr",68),t(63,`
  `),a()),e&2){let n=C();c("dataSource",n.repaymentScheduleDetails.periods),o(60),c("matHeaderRowDef",n.displayedColumnsEdit),o(2),c("matRowDefColumns",n.displayedColumnsEdit)}}var $e=(()=>{class e{constructor(n,m,l,u){this.route=n,this.settingsService=m,this.dateUtils=l,this.dialog=u,this.forEditing=!1,this.repaymentScheduleDetails=null,this.loanDetailsDataRepaymentSchedule=[],this.editCache={},this.listOfData=[],this.repaymentSchedulePeriods=[],this.totalRepaymentExpected=0,this.displayedColumns=["number","days","date","paiddate","check","balanceOfLoan","principalDue","interest","fees","penalties","due","paid","inadvance","late","waived","outstanding"],this.displayedColumnsEdit=["number","date","balanceOfLoan","principalDue","interest","fees","due","actions"],this.editPeriod=new Je,this.businessDate=new Date,this.route.parent.data.subscribe(_=>{_.loanDetailsData&&(this.currencyCode=_.loanDetailsData.currency.code),this.loanDetailsDataRepaymentSchedule=_.loanDetailsData?_.loanDetailsData.repaymentSchedule:[]}),this.businessDate=this.settingsService.businessDate}ngOnInit(){this.repaymentScheduleDetails==null&&(this.repaymentScheduleDetails=this.loanDetailsDataRepaymentSchedule),this.isWaived=this.repaymentScheduleDetails.totalWaived>0,this.updateEditCache()}ngOnChanges(n){this.totalRepaymentExpected=0,this.listOfData.forEach(m=>{this.totalRepaymentExpected=this.totalRepaymentExpected+m.totalDueForPeriod})}installmentStyle(n){if(n.complete)return"paid";let m=this.isCurrent(n);return m!==""?m:n.isAdditional?"additional":n.downPaymentPeriod?"downpayment":""}isCurrent(n){if(n.fromDate){let m=this.dateUtils.parseDate(n.fromDate),l=this.dateUtils.parseDate(n.dueDate);if(m<=this.businessDate&&this.businessDate<l)return"current";if(this.businessDate>l)return"overdued"}else return"";return""}exportToPDF(){let m=`repaymentschedule-${this.dateUtils.formatDate(this.settingsService.businessDate,Y.DEFAULT_DATEFORMAT)}.pdf`,l={orientation:"l",unit:"in",format:"letter",precision:2,compress:!0,putOnlyUsedFonts:!0},u=new Co(l);Ho(u,{html:"#repaymentSchedule",bodyStyles:{lineColor:[0,0,0]},styles:{fontSize:8,cellWidth:"auto",halign:"center"}}),u.save(m)}editInstallment(n){this.editCache[n.period].edit=!0;let l={title:"Period",formfields:[new fe({controlName:"dueDate",label:"Due Date",value:this.dateUtils.parseDate(n.dueDate),type:"date",required:!0}),new pe({controlName:"principalDue",label:"Amount",value:n.principalDue,type:"number",required:!0})]};this.dialog.open(ae,{data:l,width:"50rem"}).afterClosed().subscribe(_=>{_.data})}cancelEdit(n){let m=this.listOfData.findIndex(l=>l.id===n);this.editCache[n]={data:W({},this.listOfData[m]),edit:!1}}saveEdit(n){let m=this.listOfData.findIndex(l=>l.period===n);Object.assign(this.listOfData[m],this.editCache[n].data),this.editCache[n].edit=!1,this.editPeriod.emit(n)}updateEditCache(){this.repaymentScheduleDetails!=null&&(this.listOfData=this.repaymentScheduleDetails.periods,this.totalRepaymentExpected=0,this.listOfData.forEach(n=>{this.editCache[n.period]={edit:!1,data:W({},n)},this.totalRepaymentExpected=this.totalRepaymentExpected+n.totalDueForPeriod}))}numberOnly(n,m){let l=m.which?m.which:m.keyCode;return l===46?!(n.value.indexOf(".")>-1):!(l>31&&(l<48||l>57))}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(G),v(Y),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-repayment-schedule-tab"]],inputs:{currencyCode:"currencyCode",forEditing:"forEditing",repaymentScheduleDetails:"repaymentScheduleDetails"},outputs:{editPeriod:"editPeriod"},features:[Ge],decls:10,vars:3,consts:[[1,"container"],["class","layout-row m-t-20 align-end align-items-center",4,"ngIf"],["mat-table","","id","repaymentSchedule",3,"dataSource",4,"ngIf"],["mat-table","","id","repaymentScheduleEdit",3,"dataSource",4,"ngIf"],[1,"layout-row","m-t-20","align-end","align-items-center"],["mat-raised-button","","color","primary",3,"click"],["icon","download",1,"m-r-10"],["mat-table","","id","repaymentSchedule",3,"dataSource"],["matColumnDef","number"],["mat-header-cell","","class","center mat-header-cell",4,"matHeaderCellDef"],["mat-cell","","class","right",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","days"],["mat-cell","","class","center",3,"ngClass",4,"matCellDef"],["mat-footer-cell","","class","center",4,"matFooterCellDef"],["matColumnDef","date"],["mat-cell","","class","m-r-5",3,"ngClass",4,"matCellDef"],["matColumnDef","paiddate"],["matColumnDef","check"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","balanceOfLoan"],["mat-header-cell","","class","r-amount mat-header-cell",4,"matHeaderCellDef"],["mat-cell","","class","r-amount",3,"ngClass",4,"matCellDef"],["mat-footer-cell","","class","r-amount",4,"matFooterCellDef"],["matColumnDef","principalDue"],["mat-cell","","class","check r-amount",3,"ngClass",4,"matCellDef"],["mat-footer-cell","","class","check r-amount",4,"matFooterCellDef"],["matColumnDef","interest"],["matColumnDef","fees"],["matColumnDef","penalties"],["matColumnDef","due"],["matColumnDef","paid"],["matColumnDef","inadvance"],["matColumnDef","late"],[4,"ngIf"],["matColumnDef","outstanding"],["mat-cell","","class","r-amount",4,"matCellDef"],["matColumnDef","header"],["matColumnDef","header-amount"],["matColumnDef","header-total-cost"],["matColumnDef","header-installment-totals"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","table-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell","",1,"center","mat-header-cell"],["mat-cell","",1,"right"],["mat-footer-cell",""],["mat-cell","",1,"center",3,"ngClass"],["mat-footer-cell","",1,"center"],["mat-cell","",1,"m-r-5",3,"ngClass"],["mat-header-cell",""],[1,"fa","fa-check"],["mat-header-cell","",1,"r-amount","mat-header-cell"],["mat-cell","",1,"r-amount",3,"ngClass"],["mat-footer-cell","",1,"r-amount"],["mat-cell","",1,"check","r-amount",3,"ngClass"],["mat-footer-cell","",1,"check","r-amount"],["matColumnDef","waived"],["mat-cell","",4,"matCellDef"],["mat-cell",""],["mat-cell","",1,"r-amount"],["mat-header-row",""],["mat-row","",1,"table-row"],["mat-footer-row",""],["mat-table","","id","repaymentScheduleEdit",3,"dataSource"],["mat-cell","","class","m-r-10",4,"matCellDef"],["matColumnDef","actions"],["mat-cell","","class","center",4,"matCellDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"m-r-10"],["class","amount-changed",4,"ngIf"],[1,"amount-changed"],["mat-cell","",1,"center"],["type","button","color","primary","mat-icon-button","","matTooltipPosition","above",3,"click","matTooltip"],["icon","edit","size","lg"],["type","button","color","warn","mat-icon-button","","matTooltipPosition","above",3,"click","matTooltip"],["icon","trash","size","lg"],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),d(2,dm,7,0,"div",1),t(3,`

  `),d(4,bs,169,8,"table",2),t(5,`

  `),t(6,`
  `),d(7,Gs,64,3,"table",3),t(8,`
`),a(),t(9,`
`)),m&2&&(o(2),c("ngIf",!l.forEditing),o(2),c("ngIf",!l.forEditing),o(3),c("ngIf",l.forEditing&&l.repaymentScheduleDetails.periods.length>0))},dependencies:[A,he,k,ye,w,j,Lt,L,Ot,Rt,kt,Bt,Nt,Ft,Vt,Rn,Fn,jt,zt,qt,Ht,Bn,kn,Pe,me,Wt],styles:["body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.bg-black[_ngcontent-%COMP%]{background-color:#000}.bg-light-grey[_ngcontent-%COMP%]{background-color:#e5e5e5}.bg-medium-grey[_ngcontent-%COMP%]{background-color:#ccc}.bg-grey[_ngcontent-%COMP%]{background-color:#999}.bg-dark-grey[_ngcontent-%COMP%]{background-color:#222}.bg-white[_ngcontent-%COMP%], .bg-fff[_ngcontent-%COMP%]{background-color:#fff}.bg-none[_ngcontent-%COMP%], .no-bg[_ngcontent-%COMP%]{background:none;background-image:none;background-color:transparent}.bg-facebook[_ngcontent-%COMP%]{background-color:#47639e}.bg-twitter[_ngcontent-%COMP%]{background-color:#02a8f3}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}.no-border[_ngcontent-%COMP%]{border:none}.no-border-t[_ngcontent-%COMP%]{border-top:none}.no-border-r[_ngcontent-%COMP%]{border-right:none}.no-border-b[_ngcontent-%COMP%]{border-bottom:none}.no-border-l[_ngcontent-%COMP%]{border-left:none}.no-border-lr[_ngcontent-%COMP%], .no-border-rl[_ngcontent-%COMP%]{border-left:none;border-right:none}.no-border-tb[_ngcontent-%COMP%], .no-border-bt[_ngcontent-%COMP%]{border-top:none;border-bottom:none}.no-border-tl[_ngcontent-%COMP%], .no-border-lt[_ngcontent-%COMP%]{border-top:none;border-left:none}.no-border-tr[_ngcontent-%COMP%], .no-border-rt[_ngcontent-%COMP%]{border-top:none;border-right:none}.no-border-bl[_ngcontent-%COMP%], .no-border-lb[_ngcontent-%COMP%]{border-bottom:none;border-left:none}.no-border-br[_ngcontent-%COMP%], .no-border-rb[_ngcontent-%COMP%]{border-bottom:none;border-right:none}.border-dashed[_ngcontent-%COMP%], .border-dotted[_ngcontent-%COMP%]{border-style:dashed}.border-black[_ngcontent-%COMP%]{border-color:#000}.border-light-grey[_ngcontent-%COMP%]{border-color:#e5e5e5}.border-medium-grey[_ngcontent-%COMP%]{border-color:#ccc}.border-grey[_ngcontent-%COMP%]{border-color:#999}.border-dark-grey[_ngcontent-%COMP%]{border-color:#2222}.border-white[_ngcontent-%COMP%], .border-fff[_ngcontent-%COMP%]{border-color:#fff}.no-border-radius[_ngcontent-%COMP%]{border-radius:0}.radius3[_ngcontent-%COMP%]{border-radius:3px}.radius5[_ngcontent-%COMP%]{border-radius:5px}.radius10[_ngcontent-%COMP%]{border-radius:10px}.column-mandatory[_ngcontent-%COMP%]{color:#5cb85c;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.yes[_ngcontent-%COMP%]{color:#5cb85c!important;background-color:#5cb85c;height:4px;cursor:none}.no[_ngcontent-%COMP%]{color:red;background-color:red;height:4px;cursor:none}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.transfer[_ngcontent-%COMP%]{color:#16a085}.linked[_ngcontent-%COMP%]{color:#4461e2}.accrual[_ngcontent-%COMP%]{color:#999}.fa-question[_ngcontent-%COMP%]{color:#4461e2}.enabled[_ngcontent-%COMP%]{color:#32cd32}.disabled[_ngcontent-%COMP%]{color:#f44366}.v-mid[_ngcontent-%COMP%], .v-m[_ngcontent-%COMP%]{vertical-align:middle}.v-top[_ngcontent-%COMP%], .v-t[_ngcontent-%COMP%]{vertical-align:top}.v-bottom[_ngcontent-%COMP%], .v-b[_ngcontent-%COMP%]{vertical-align:bottom}.v-super[_ngcontent-%COMP%]{vertical-align:super}.r-amount[_ngcontent-%COMP%]{text-align:right!important;padding-right:5px!important}.left[_ngcontent-%COMP%]{text-align:left!important}.right[_ngcontent-%COMP%]{text-align:right!important}.center[_ngcontent-%COMP%]{text-align:center!important}.amount-plus[_ngcontent-%COMP%]{color:#000}.amount-minus[_ngcontent-%COMP%]{color:#4461e2}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.in-block[_ngcontent-%COMP%]{display:inline-block;zoom:1}.d-none[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}.t-0[_ngcontent-%COMP%]{top:0}.b-0[_ngcontent-%COMP%]{bottom:0}.l-0[_ngcontent-%COMP%]{left:0}.r-0[_ngcontent-%COMP%]{right:0}.tb-0[_ngcontent-%COMP%]{top:0;bottom:0}.lr-0[_ngcontent-%COMP%]{left:0;right:0}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.f-none[_ngcontent-%COMP%]{float:none}textarea[_ngcontent-%COMP%]{resize:both}textarea.vertical[_ngcontent-%COMP%], textarea.horizontal[_ngcontent-%COMP%]{resize:vertical}textarea.noresize[_ngcontent-%COMP%]{resize:none}.full-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{width:auto}.mat-tab-body-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-datepicker-input[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.loader-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw}.loader-wrapper[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;position:absolute;animation:_ngcontent-%COMP%_rotate .8s infinite .2s}.loader-wrapper[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{border-width:0 90px 90px;border-color:transparent transparent #1fb050;bottom:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{border-width:90px 90px 0;border-color:#b4d575 transparent transparent;top:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{border-width:90px 0 90px 90px;border-color:transparent transparent transparent #1074b9;top:calc(50% - 90px);left:calc(50% - 100px)}.loader-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{border-width:90px 90px 90px 0;border-color:transparent #1daeec transparent transparent;top:calc(50% - 90px);right:calc(50% - 100px)}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}body[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{margin:0 auto}.mb-05[_ngcontent-%COMP%]{margin-bottom:.5rem}.mr-05[_ngcontent-%COMP%]{margin-right:.5rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:1rem}.m-5[_ngcontent-%COMP%]{margin:5px}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.m-r-5[_ngcontent-%COMP%]{margin-right:5px}.m-b-5[_ngcontent-%COMP%]{margin-bottom:5px}.m-l-5[_ngcontent-%COMP%]{margin-left:5px}.m-v-5[_ngcontent-%COMP%]{margin:5px 0}.m-h-5[_ngcontent-%COMP%]{margin:0 5px}.m-10[_ngcontent-%COMP%]{margin:10px}.m-t-10[_ngcontent-%COMP%]{margin-top:10px}.m-r-10[_ngcontent-%COMP%]{margin-right:10px}.m-b-10[_ngcontent-%COMP%]{margin-bottom:10px}.m-l-10[_ngcontent-%COMP%]{margin-left:10px}.m-v-10[_ngcontent-%COMP%]{margin:10px 0}.m-h-10[_ngcontent-%COMP%]{margin:0 10px}.m-15[_ngcontent-%COMP%]{margin:15px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}.m-r-15[_ngcontent-%COMP%]{margin-right:15px}.m-b-15[_ngcontent-%COMP%]{margin-bottom:15px}.m-l-15[_ngcontent-%COMP%]{margin-left:15px}.m-v-15[_ngcontent-%COMP%]{margin:15px 0}.m-h-15[_ngcontent-%COMP%]{margin:0 15px}.m-20[_ngcontent-%COMP%]{margin:20px}.m-t-20[_ngcontent-%COMP%]{margin-top:20px}.m-r-20[_ngcontent-%COMP%]{margin-right:20px}.m-b-20[_ngcontent-%COMP%]{margin-bottom:20px}.m-l-20[_ngcontent-%COMP%]{margin-left:20px}.m-v-20[_ngcontent-%COMP%]{margin:20px 0}.m-h-20[_ngcontent-%COMP%]{margin:0 20px}.m-25[_ngcontent-%COMP%]{margin:25px}.m-t-25[_ngcontent-%COMP%]{margin-top:25px}.m-r-25[_ngcontent-%COMP%]{margin-right:25px}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}.m-l-25[_ngcontent-%COMP%]{margin-left:25px}.m-v-25[_ngcontent-%COMP%]{margin:25px 0}.m-h-25[_ngcontent-%COMP%]{margin:0 25px}.m-30[_ngcontent-%COMP%]{margin:30px}.m-t-30[_ngcontent-%COMP%]{margin-top:30px}.m-r-30[_ngcontent-%COMP%]{margin-right:30px}.m-b-30[_ngcontent-%COMP%]{margin-bottom:30px}.m-l-30[_ngcontent-%COMP%]{margin-left:30px}.m-v-30[_ngcontent-%COMP%]{margin:30px 0}.m-h-30[_ngcontent-%COMP%]{margin:0 30px}.m-35[_ngcontent-%COMP%]{margin:35px}.m-t-35[_ngcontent-%COMP%]{margin-top:35px}.m-r-35[_ngcontent-%COMP%]{margin-right:35px}.m-b-35[_ngcontent-%COMP%]{margin-bottom:35px}.m-l-35[_ngcontent-%COMP%]{margin-left:35px}.m-v-35[_ngcontent-%COMP%]{margin:35px 0}.m-h-35[_ngcontent-%COMP%]{margin:0 35px}.m-40[_ngcontent-%COMP%]{margin:40px}.m-t-40[_ngcontent-%COMP%]{margin-top:40px}.m-r-40[_ngcontent-%COMP%]{margin-right:40px}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.m-l-40[_ngcontent-%COMP%]{margin-left:40px}.m-v-40[_ngcontent-%COMP%]{margin:40px 0}.m-h-40[_ngcontent-%COMP%]{margin:0 40px}.m-45[_ngcontent-%COMP%]{margin:45px}.m-t-45[_ngcontent-%COMP%]{margin-top:45px}.m-r-45[_ngcontent-%COMP%]{margin-right:45px}.m-b-45[_ngcontent-%COMP%]{margin-bottom:45px}.m-l-45[_ngcontent-%COMP%]{margin-left:45px}.m-v-45[_ngcontent-%COMP%]{margin:45px 0}.m-h-45[_ngcontent-%COMP%]{margin:0 45px}.m-50[_ngcontent-%COMP%]{margin:50px}.m-t-50[_ngcontent-%COMP%]{margin-top:50px}.m-r-50[_ngcontent-%COMP%]{margin-right:50px}.m-b-50[_ngcontent-%COMP%]{margin-bottom:50px}.m-l-50[_ngcontent-%COMP%]{margin-left:50px}.m-v-50[_ngcontent-%COMP%]{margin:50px 0}.m-h-50[_ngcontent-%COMP%]{margin:0 50px}.m-55[_ngcontent-%COMP%]{margin:55px}.m-t-55[_ngcontent-%COMP%]{margin-top:55px}.m-r-55[_ngcontent-%COMP%]{margin-right:55px}.m-b-55[_ngcontent-%COMP%]{margin-bottom:55px}.m-l-55[_ngcontent-%COMP%]{margin-left:55px}.m-v-55[_ngcontent-%COMP%]{margin:55px 0}.m-h-55[_ngcontent-%COMP%]{margin:0 55px}.m-60[_ngcontent-%COMP%]{margin:60px}.m-t-60[_ngcontent-%COMP%]{margin-top:60px}.m-r-60[_ngcontent-%COMP%]{margin-right:60px}.m-b-60[_ngcontent-%COMP%]{margin-bottom:60px}.m-l-60[_ngcontent-%COMP%]{margin-left:60px}.m-v-60[_ngcontent-%COMP%]{margin:60px 0}.m-h-60[_ngcontent-%COMP%]{margin:0 60px}.m-65[_ngcontent-%COMP%]{margin:65px}.m-t-65[_ngcontent-%COMP%]{margin-top:65px}.m-r-65[_ngcontent-%COMP%]{margin-right:65px}.m-b-65[_ngcontent-%COMP%]{margin-bottom:65px}.m-l-65[_ngcontent-%COMP%]{margin-left:65px}.m-v-65[_ngcontent-%COMP%]{margin:65px 0}.m-h-65[_ngcontent-%COMP%]{margin:0 65px}.m-70[_ngcontent-%COMP%]{margin:70px}.m-t-70[_ngcontent-%COMP%]{margin-top:70px}.m-r-70[_ngcontent-%COMP%]{margin-right:70px}.m-b-70[_ngcontent-%COMP%]{margin-bottom:70px}.m-l-70[_ngcontent-%COMP%]{margin-left:70px}.m-v-70[_ngcontent-%COMP%]{margin:70px 0}.m-h-70[_ngcontent-%COMP%]{margin:0 70px}.m-75[_ngcontent-%COMP%]{margin:75px}.m-t-75[_ngcontent-%COMP%]{margin-top:75px}.m-r-75[_ngcontent-%COMP%]{margin-right:75px}.m-b-75[_ngcontent-%COMP%]{margin-bottom:75px}.m-l-75[_ngcontent-%COMP%]{margin-left:75px}.m-v-75[_ngcontent-%COMP%]{margin:75px 0}.m-h-75[_ngcontent-%COMP%]{margin:0 75px}.m-80[_ngcontent-%COMP%]{margin:80px}.m-t-80[_ngcontent-%COMP%]{margin-top:80px}.m-r-80[_ngcontent-%COMP%]{margin-right:80px}.m-b-80[_ngcontent-%COMP%]{margin-bottom:80px}.m-l-80[_ngcontent-%COMP%]{margin-left:80px}.m-v-80[_ngcontent-%COMP%]{margin:80px 0}.m-h-80[_ngcontent-%COMP%]{margin:0 80px}.no-m[_ngcontent-%COMP%]{margin:0}.no-m-t[_ngcontent-%COMP%]{margin-top:0}.no-m-r[_ngcontent-%COMP%]{margin-right:0}.no-m-b[_ngcontent-%COMP%]{margin-bottom:0}.no-m-l[_ngcontent-%COMP%]{margin-left:0}.no-m-v[_ngcontent-%COMP%], .no-m-h[_ngcontent-%COMP%], .no-margin[_ngcontent-%COMP%]{margin:0}.no-m-lr[_ngcontent-%COMP%], .no-m-rl[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.no-m-tb[_ngcontent-%COMP%], .no-m-bt[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.m-t-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-bottom:0}.m-b-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0}.m-l-only[_ngcontent-%COMP%]{margin-right:0;margin-top:0;margin-bottom:0}.m-r-only[_ngcontent-%COMP%]{margin-left:0;margin-top:0;margin-bottom:0}.m-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.ls-0[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}div[_ngcontent-%COMP%]{box-sizing:border-box}.color-inherit[_ngcontent-%COMP%]{color:inherit}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}.nolist[_ngcontent-%COMP%]{list-style:none}.actions-menu[_ngcontent-%COMP%]{color:#fff}.alert[_ngcontent-%COMP%]{background-color:#e8f4fd;padding:6px 16px;font-size:.875rem;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;line-height:1.43;border-radius:4px;letter-spacing:normal;margin:10px}.alert[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 0;font-size:18px}.alert[_ngcontent-%COMP%]   .alert-check[_ngcontent-%COMP%]{color:#359ff4;margin-right:2px;font-size:1.4rem}  .mat-tooltip{font-size:15px;color:#fff!important;background-color:#4461e2b3;border:1px solid rgb(25.7777777778,51.5555555556,166.2222222222);max-width:400px!important;white-space:pre-line!important}.loading[_ngcontent-%COMP%]{position:absolute;min-width:100%;width:100px;height:12px;background:linear-gradient(125deg,#fff,#4461e2,#fff);animation:grow 4s linear infinite,move 4s linear infinite}mat-card-title[_ngcontent-%COMP%]{font-weight:600;font-size:x-large;padding-left:20px;padding-top:20px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.overflow-x-scroll[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.overflow-no[_ngcontent-%COMP%]{overflow:hidden}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll}.table-container[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}body[_ngcontent-%COMP%], .no-p[_ngcontent-%COMP%]{padding:0}.no-p-t[_ngcontent-%COMP%]{padding-top:0}.no-p-r[_ngcontent-%COMP%]{padding-right:0}.no-p-b[_ngcontent-%COMP%]{padding-bottom:0}.no-p-l[_ngcontent-%COMP%]{padding-left:0}.no-p-v[_ngcontent-%COMP%], .no-p-h[_ngcontent-%COMP%]{padding:0}.p-5[_ngcontent-%COMP%]{padding:5px}.p-t-5[_ngcontent-%COMP%]{padding-top:5px}.p-r-5[_ngcontent-%COMP%]{padding-right:5px}.p-b-5[_ngcontent-%COMP%]{padding-bottom:5px}.p-l-5[_ngcontent-%COMP%]{padding-left:5px}.p-v-5[_ngcontent-%COMP%]{padding:5px 0}.p-h-5[_ngcontent-%COMP%]{padding:0 5px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-t-10[_ngcontent-%COMP%]{padding-top:10px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.p-v-10[_ngcontent-%COMP%]{padding:10px 0}.p-h-10[_ngcontent-%COMP%]{padding:0 10px}.p-15[_ngcontent-%COMP%]{padding:15px}.p-t-15[_ngcontent-%COMP%]{padding-top:15px}.p-r-15[_ngcontent-%COMP%]{padding-right:15px}.p-b-15[_ngcontent-%COMP%]{padding-bottom:15px}.p-l-15[_ngcontent-%COMP%]{padding-left:15px}.p-v-15[_ngcontent-%COMP%]{padding:15px 0}.p-h-15[_ngcontent-%COMP%]{padding:0 15px}.p-20[_ngcontent-%COMP%]{padding:20px}.p-t-20[_ngcontent-%COMP%]{padding-top:20px}.p-r-20[_ngcontent-%COMP%]{padding-right:20px}.p-b-20[_ngcontent-%COMP%]{padding-bottom:20px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-v-20[_ngcontent-%COMP%]{padding:20px 0}.p-h-20[_ngcontent-%COMP%]{padding:0 20px}.p-25[_ngcontent-%COMP%]{padding:25px}.p-t-25[_ngcontent-%COMP%]{padding-top:25px}.p-r-25[_ngcontent-%COMP%]{padding-right:25px}.p-b-25[_ngcontent-%COMP%]{padding-bottom:25px}.p-l-25[_ngcontent-%COMP%]{padding-left:25px}.p-v-25[_ngcontent-%COMP%]{padding:25px 0}.p-h-25[_ngcontent-%COMP%]{padding:0 25px}.p-30[_ngcontent-%COMP%]{padding:30px}.p-t-30[_ngcontent-%COMP%]{padding-top:30px}.p-r-30[_ngcontent-%COMP%]{padding-right:30px}.p-b-30[_ngcontent-%COMP%]{padding-bottom:30px}.p-l-30[_ngcontent-%COMP%]{padding-left:30px}.p-v-30[_ngcontent-%COMP%]{padding:30px 0}.p-h-30[_ngcontent-%COMP%]{padding:0 30px}.p-35[_ngcontent-%COMP%]{padding:35px}.p-t-35[_ngcontent-%COMP%]{padding-top:35px}.p-r-35[_ngcontent-%COMP%]{padding-right:35px}.p-b-35[_ngcontent-%COMP%]{padding-bottom:35px}.p-l-35[_ngcontent-%COMP%]{padding-left:35px}.p-v-35[_ngcontent-%COMP%]{padding:35px 0}.p-h-35[_ngcontent-%COMP%]{padding:0 35px}.p-40[_ngcontent-%COMP%]{padding:40px}.p-t-40[_ngcontent-%COMP%]{padding-top:40px}.p-r-40[_ngcontent-%COMP%]{padding-right:40px}.p-b-40[_ngcontent-%COMP%]{padding-bottom:40px}.p-l-40[_ngcontent-%COMP%]{padding-left:40px}.p-v-40[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px}.p-h-40[_ngcontent-%COMP%]{padding:0 40px}.p-45[_ngcontent-%COMP%]{padding:45px}.p-t-45[_ngcontent-%COMP%]{padding-top:45px}.p-r-45[_ngcontent-%COMP%]{padding-right:45px}.p-b-45[_ngcontent-%COMP%]{padding-bottom:45px}.p-l-45[_ngcontent-%COMP%]{padding-left:45px}.p-v-45[_ngcontent-%COMP%]{padding:45px 0}.p-h-45[_ngcontent-%COMP%]{padding:0 45px}.p-50[_ngcontent-%COMP%]{padding:50px}.p-t-50[_ngcontent-%COMP%]{padding-top:50px}.p-r-50[_ngcontent-%COMP%]{padding-right:50px}.p-b-50[_ngcontent-%COMP%]{padding-bottom:50px}.p-l-50[_ngcontent-%COMP%]{padding-left:50px}.p-v-50[_ngcontent-%COMP%]{padding:50px 0}.p-h-50[_ngcontent-%COMP%]{padding:0 50px}.p-55[_ngcontent-%COMP%]{padding:55px}.p-t-55[_ngcontent-%COMP%]{padding-top:55px}.p-r-55[_ngcontent-%COMP%]{padding-right:55px}.p-b-55[_ngcontent-%COMP%]{padding-bottom:55px}.p-l-55[_ngcontent-%COMP%]{padding-left:55px}.p-v-55[_ngcontent-%COMP%]{padding:55px 0}.p-h-55[_ngcontent-%COMP%]{padding:0 55px}.p-60[_ngcontent-%COMP%]{padding:60px}.p-t-60[_ngcontent-%COMP%]{padding-top:60px}.p-r-60[_ngcontent-%COMP%]{padding-right:60px}.p-b-60[_ngcontent-%COMP%]{padding-bottom:60px}.p-l-60[_ngcontent-%COMP%]{padding-left:60px}.p-v-60[_ngcontent-%COMP%]{padding:60px 0}.p-h-60[_ngcontent-%COMP%]{padding:0 60px}.p-65[_ngcontent-%COMP%]{padding:65px}.p-t-65[_ngcontent-%COMP%]{padding-top:65px}.p-r-65[_ngcontent-%COMP%]{padding-right:65px}.p-b-65[_ngcontent-%COMP%]{padding-bottom:65px}.p-l-65[_ngcontent-%COMP%]{padding-left:65px}.p-v-65[_ngcontent-%COMP%]{padding:65px 0}.p-h-65[_ngcontent-%COMP%]{padding:0 65px}.p-70[_ngcontent-%COMP%]{padding:70px}.p-t-70[_ngcontent-%COMP%]{padding-top:70px}.p-r-70[_ngcontent-%COMP%]{padding-right:70px}.p-b-70[_ngcontent-%COMP%]{padding-bottom:70px}.p-l-70[_ngcontent-%COMP%]{padding-left:70px}.p-v-70[_ngcontent-%COMP%]{padding:70px 0}.p-h-70[_ngcontent-%COMP%]{padding:0 70px}.p-75[_ngcontent-%COMP%]{padding:75px}.p-t-75[_ngcontent-%COMP%]{padding-top:75px}.p-r-75[_ngcontent-%COMP%]{padding-right:75px}.p-b-75[_ngcontent-%COMP%]{padding-bottom:75px}.p-l-75[_ngcontent-%COMP%]{padding-left:75px}.p-v-75[_ngcontent-%COMP%]{padding:75px 0}.p-h-75[_ngcontent-%COMP%]{padding:0 75px}.p-80[_ngcontent-%COMP%]{padding:80px}.p-t-80[_ngcontent-%COMP%]{padding-top:80px}.p-r-80[_ngcontent-%COMP%]{padding-right:80px}.p-b-80[_ngcontent-%COMP%]{padding-bottom:80px}.p-l-80[_ngcontent-%COMP%]{padding-left:80px}.p-v-80[_ngcontent-%COMP%]{padding:80px 0}.p-h-80[_ngcontent-%COMP%]{padding:0 80px}.no-padding[_ngcontent-%COMP%]{padding:0!important}.no-pad-lr[_ngcontent-%COMP%], .no-pad-rl[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.no-pad-tb[_ngcontent-%COMP%], .no-pad-bt[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.pad-t-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0}.pad-b-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0}.pad-l-only[_ngcontent-%COMP%]{padding-right:0;padding-top:0;padding-bottom:0}.pad-r-only[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-bottom:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], .relative[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%], .absolute[_ngcontent-%COMP%]{position:absolute}.fixed[_ngcontent-%COMP%]{position:fixed}.status-active[_ngcontent-%COMP%]{color:#5cb85c}.status-inactive[_ngcontent-%COMP%]{color:#666f73}.status-deleted[_ngcontent-%COMP%]{color:#000}.status-pending[_ngcontent-%COMP%]{color:orange}.status-approved[_ngcontent-%COMP%]{color:#4461e2}.status-overpaid[_ngcontent-%COMP%]{color:purple}.status-chargeoff[_ngcontent-%COMP%]{color:#f39c12}.status-active-overdue[_ngcontent-%COMP%], .status-block[_ngcontent-%COMP%]{color:red}.status-matured[_ngcontent-%COMP%]{color:#ff4000}.subStatus-contract-termination[_ngcontent-%COMP%]{color:#b3b3b3}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]{background-color:#2af72a}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-progress[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-hold[_ngcontent-%COMP%]{color:#df0101}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}html[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:14px;color:#000000de;line-height:1.5;letter-spacing:normal}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.lh-1[_ngcontent-%COMP%]{line-height:1}.lh-13[_ngcontent-%COMP%]{line-height:1.3}.lh-15[_ngcontent-%COMP%]{line-height:1.5}.bold[_ngcontent-%COMP%], .strong[_ngcontent-%COMP%]{font-weight:700}.no-bold[_ngcontent-%COMP%]{font-weight:400}.italic[_ngcontent-%COMP%], .em[_ngcontent-%COMP%]{font-style:italic}.strike[_ngcontent-%COMP%]{text-decoration:line-through}.normal[_ngcontent-%COMP%]{font-weight:400;font-style:normal}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.w100[_ngcontent-%COMP%]{font-weight:100}.w200[_ngcontent-%COMP%]{font-weight:200}.w300[_ngcontent-%COMP%]{font-weight:300}.w400[_ngcontent-%COMP%]{font-weight:400}.w500[_ngcontent-%COMP%]{font-weight:500}.w600[_ngcontent-%COMP%]{font-weight:600}.w700[_ngcontent-%COMP%]{font-weight:700}.w800[_ngcontent-%COMP%]{font-weight:800}.w900[_ngcontent-%COMP%]{font-weight:900}.f9[_ngcontent-%COMP%]{font-size:9px}.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f15[_ngcontent-%COMP%]{font-size:15px}.f16[_ngcontent-%COMP%]{font-size:16px}.f17[_ngcontent-%COMP%]{font-size:17px}.f18[_ngcontent-%COMP%]{font-size:18px;line-height:30px}.f19[_ngcontent-%COMP%]{font-size:19px}.f20[_ngcontent-%COMP%]{font-size:20px}.f30[_ngcontent-%COMP%]{font-size:30px}.f40[_ngcontent-%COMP%]{font-size:40px}.f50[_ngcontent-%COMP%]{font-size:50px}.f60[_ngcontent-%COMP%]{font-size:60px}.size-small[_ngcontent-%COMP%]{font-size:75%}.size-normal[_ngcontent-%COMP%]{font-size:100%}.size-medium[_ngcontent-%COMP%]{font-size:125%}.size-big[_ngcontent-%COMP%], .size-large[_ngcontent-%COMP%]{font-size:150%}.size-huge[_ngcontent-%COMP%]{font-size:200%}.inherit[_ngcontent-%COMP%]{font:inherit}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.text-rgb-2[_ngcontent-%COMP%]{color:#0003}.text-rgb-3[_ngcontent-%COMP%]{color:#0000004d}.text-rgb-4[_ngcontent-%COMP%]{color:#0006}.text-rgb-5[_ngcontent-%COMP%]{color:#00000080}.no-ul[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]:hover, .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.auto-cell-size[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.ls-0[_ngcontent-%COMP%]{letter-spacing:-3px;white-space:nowrap}.label-field[_ngcontent-%COMP%]{margin-top:32px}.fit[_ngcontent-%COMP%]{max-width:100%}.half-width[_ngcontent-%COMP%]{width:50%}.full-width[_ngcontent-%COMP%]{width:100%}.full-height[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100%}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{max-width:74rem;width:90%}.mw300[_ngcontent-%COMP%]{max-width:300px}.mw400[_ngcontent-%COMP%]{max-width:400px}.mw500[_ngcontent-%COMP%]{max-width:500px}.mw600[_ngcontent-%COMP%]{max-width:600px}.fullwidth[_ngcontent-%COMP%]{width:100%}.zindex-1[_ngcontent-%COMP%]{z-index:1}.zindex-2[_ngcontent-%COMP%]{z-index:2}.zindex-3[_ngcontent-%COMP%]{z-index:3}.zindex-4[_ngcontent-%COMP%]{z-index:4}table[_ngcontent-%COMP%]{width:100%;margin:2% 0%}.table-row[_ngcontent-%COMP%]{font-size:small}.container[_ngcontent-%COMP%]{padding-bottom:2%;width:98%}.check[_ngcontent-%COMP%]{padding-left:15px}.amount-changed[_ngcontent-%COMP%], .additional[_ngcontent-%COMP%]{color:#4461e2}.downpayment[_ngcontent-%COMP%]{color:#16a085}.paid[_ngcontent-%COMP%]{color:#666f73}.current[_ngcontent-%COMP%]{color:#5cb85c}.overdued[_ngcontent-%COMP%]{color:#ff4000}#repaymentSchedule[_ngcontent-%COMP%], #repaymentScheduleEdit[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{color:#0000008a;font-size:12px;font-weight:500}div.container[_ngcontent-%COMP%]{overflow:auto;max-width:100%}"]})}}return e})();var $s=()=>[50,100,200],Ws=()=>["export"],Qs=e=>[e,"reciept"],Ys=e=>["/","journal-entry","view",e];function Ks(e,r){if(e&1){let n=O();i(0,"div",46),t(1,`
    `),i(2,"mat-checkbox",47),T("click",function(){P(n);let l=C();return M(l.hideReversed())}),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"mat-checkbox",47),T("click",function(){P(n);let l=C();return M(l.hideAccruals())}),t(7),s(8,"translate"),a(),t(9,`
    `),i(10,"button",48),t(11),s(12,"translate"),a(),t(13,`
  `),a()}if(e&2){let n=C();o(2),c("formControl",n.hideReversedParam),o(),f(`
      `,p(4,6,"labels.inputs.Hide Reversed"),""),o(3),c("formControl",n.hideAccrualsParam),o(),f(`
      `,p(8,8,"labels.inputs.Hide Accruals"),""),o(3),c("routerLink",N(12,Ws)),o(),f(`
      `,p(12,10,"labels.buttons.Export"),`
    `)}}function Js(e,r){if(e&1){let n=O();i(0,"td",49),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),a()}if(e&2){let n=r.index;o(),f(`
        `,n+1,`
      `)}}function Zs(e,r){if(e&1){let n=O();i(0,"td",50),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,n.id,`
      `)}}function Xs(e,r){if(e&1){let n=O();i(0,"td",51),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,n.officeName,`
      `)}}function tp(e,r){if(e&1&&(i(0,"td",52),t(1,`
        `),g(2,"mifosx-external-identifier",53),t(3,`
      `),a()),e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(2),Q("externalId",n.externalId)}}function ep(e,r){if(e&1){let n=O();i(0,"td",51),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"dateFormat"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.date),`
      `)}}function np(e,r){if(e&1){let n=O();i(0,"td",51),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"translateKey"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,Et(2,2,n.type.value,"catalogs"),`
      `)}}function ip(e,r){if(e&1){let n=O();i(0,"td",54),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"formatNumber"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.amount),`
      `)}}function ap(e,r){if(e&1){let n=O();i(0,"td",54),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"formatNumber"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.principalPortion),`
      `)}}function op(e,r){if(e&1){let n=O();i(0,"td",54),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"formatNumber"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.interestPortion),`
      `)}}function rp(e,r){if(e&1){let n=O();i(0,"td",54),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"formatNumber"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.feeChargesPortion),`
      `)}}function lp(e,r){if(e&1){let n=O();i(0,"td",54),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"formatNumber"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.penaltyChargesPortion),`
      `)}}function mp(e,r){if(e&1){let n=O();i(0,"td",54),T("click",function(){let l=P(n).$implicit,u=C();return M(u.showTransactions(l))}),t(1),s(2,"formatNumber"),a()}if(e&2){let n=r.$implicit,m=C();c("ngClass",m.loanTransactionColor(n)),o(),f(`
        `,p(2,2,n.outstandingLoanBalance),`
      `)}}function sp(e,r){if(e&1&&(i(0,"button",58),t(1,`
          `),i(2,"mat-icon"),t(3,"more_vert"),a(),t(4,`
        `),a()),e&2){C();let n=F(5);c("matMenuTriggerFor",n)}}function pp(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
            `),i(2,"button",59),T("click",function(){P(n);let l=C().$implicit,u=C();return M(u.showTransactions(l))}),t(3,`
              `),i(4,"mat-icon"),g(5,"fa-icon",60),a(),t(6,`
              `),i(7,"span"),t(8),s(9,"translate"),a(),t(10,`
            `),a(),t(11,`
          `),a()}e&2&&(o(8),x(p(9,1,"labels.text.View Transaction")))}function cp(e,r){if(e&1){let n=O();i(0,"button",59),T("click",function(l){P(n);let u=C(2).$implicit,_=C();return M(_.undoTransaction(u,l))}),t(1,`
              `),i(2,"mat-icon"),g(3,"fa-icon",64),a(),t(4,`
              `),i(5,"span"),t(6),s(7,"translate"),a(),t(8,`
            `),a()}e&2&&(o(6),x(p(7,1,"tooltips.Undo Transaction")))}function dp(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
            `),d(2,cp,9,3,"button",61),t(3,`
            `),i(4,"button",62),T("click",function(l){P(n);let u=C(2);return M(u.routeEdit(l))}),t(5,`
              `),i(6,"mat-icon"),g(7,"fa-icon",63),a(),t(8,`
              `),i(9,"span"),t(10),s(11,"translate"),a(),t(12,`
            `),a(),t(13,`
          `),a()}if(e&2){let n=C().$implicit;o(2),c("mifosxHasPermission","ADJUST_LOAN"),o(2),c("routerLink",Te(5,Qs,n.id)),o(6),x(p(11,3,"tooltips.View Receipts"))}}function up(e,r){if(e&1){let n=O();i(0,"button",59),T("click",function(l){P(n);let u=C(2).$implicit,_=C();return M(_.undoReAgeOrReAmortize(u,l))}),t(1,`
              `),i(2,"mat-icon"),g(3,"fa-icon",64),a(),t(4,`
              `),i(5,"span"),t(6),s(7,"translate"),a(),t(8,`
            `),a()}e&2&&(o(6),x(p(7,1,"labels.menus.Undo Re-Age")))}function xp(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,up,9,3,"button",61),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","UNDO_REAGE_LOAN"))}function fp(e,r){if(e&1){let n=O();i(0,"button",59),T("click",function(l){P(n);let u=C(2).$implicit,_=C();return M(_.undoReAgeOrReAmortize(u,l))}),t(1,`
              `),i(2,"mat-icon"),g(3,"fa-icon",64),a(),t(4,`
              `),i(5,"span"),t(6),s(7,"translate"),a(),t(8,`
            `),a()}e&2&&(o(6),x(p(7,1,"labels.menus.Undo Re-Amortize")))}function gp(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,fp,9,3,"button",61),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","UNDO_REAMORTIZE_LOAN"))}function _p(e,r){if(e&1){let n=O();i(0,"button",59),T("click",function(l){P(n);let u=C(2).$implicit,_=C();return M(_.capitalizedIncomeAdjustmentTransaction(u,l))}),t(1,`
              `),i(2,"mat-icon"),g(3,"fa-icon",65),a(),t(4,`
              `),i(5,"span"),t(6),s(7,"translate"),a(),t(8,`
            `),a()}e&2&&(o(6),x(p(7,1,"labels.menus.Capitalized Income Adjustment")))}function Cp(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,_p,9,3,"button",61),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","CAPITALIZEDINCOME_LOAN"))}function hp(e,r){if(e&1){let n=O();i(0,"button",59),T("click",function(l){P(n);let u=C(2).$implicit,_=C();return M(_.buyDownFeeAdjustmentTransaction(u,l))}),t(1,`
              `),i(2,"mat-icon"),g(3,"fa-icon",65),a(),t(4,`
              `),i(5,"span"),t(6),s(7,"translate"),a(),t(8,`
            `),a()}e&2&&(o(6),x(p(7,1,"labels.menus.Buy Down Fee Adjustment")))}function vp(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,hp,9,3,"button",61),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","BUYDOWNFEE_LOAN"))}function bp(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
            `),i(2,"button",66),T("click",function(l){P(n);let u=C(2);return M(u.routeEdit(l))}),t(3,`
              `),i(4,"mat-icon"),g(5,"fa-icon",67),a(),t(6,`
              `),i(7,"span"),t(8),s(9,"translate"),a(),t(10,`
            `),a(),t(11,`
          `),a()}if(e&2){let n=C().$implicit;o(2),c("routerLink",Te(4,Ys,"L"+n.id)),o(6),x(p(9,2,"tooltips.View Journal Entries"))}}function Sp(e,r){if(e&1&&(i(0,"td",55),t(1,`
        `),d(2,sp,5,1,"button",56),t(3,`
        `),i(4,"mat-menu",null,0),t(6,`
          `),d(7,pp,12,3,"span",57),t(8,`
          `),d(9,dp,14,7,"span",57),t(10,`
          `),d(11,xp,4,1,"span",57),t(12,`
          `),d(13,gp,4,1,"span",57),t(14,`
          `),d(15,Cp,4,1,"span",57),t(16,`
          `),d(17,vp,4,1,"span",57),t(18,`
          `),d(19,bp,12,6,"span",57),t(20,`
        `),a(),t(21,`
      `),a()),e&2){let n=r.$implicit,m=C();o(2),c("ngIf",m.displaySubMenu(n)),o(5),c("ngIf",m.showTransaction(n)),o(2),c("ngIf",m.allowUndoTransaction(n)),o(2),c("ngIf",m.isReAge(n.type)&&!n.manuallyReversed),o(2),c("ngIf",m.isReAmortize(n.type)&&!n.manuallyReversed),o(2),c("ngIf",m.isCapitalizedIncome(n.type)&&!n.manuallyReversed),o(2),c("ngIf",m.isBuyDownFee(n.type)&&!n.manuallyReversed),o(2),c("ngIf",m.viewJournalEntry(n.type))}}function yp(e,r){e&1&&(i(0,"th",68),t(1,"#"),a())}function Dp(e,r){e&1&&(i(0,"th",68),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Id")))}function Tp(e,r){e&1&&(i(0,"th",68),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Office")))}function Pp(e,r){e&1&&(i(0,"th",68),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.External Id")))}function Mp(e,r){e&1&&(i(0,"th",68),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Transaction Date")))}function Op(e,r){e&1&&(i(0,"th",68),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Transaction Type")))}function Ip(e,r){e&1&&g(0,"th",68)}function Ep(e,r){e&1&&(i(0,"th",69),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",4),o(),f(`
        `,p(2,2,"labels.inputs.Breakdown"),`
      `))}function Ap(e,r){e&1&&(i(0,"th",68),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Loan Balance")))}function wp(e,r){e&1&&(i(0,"th",69),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function Lp(e,r){e&1&&g(0,"th",68),e&2&&ue("colspan",6)}function Rp(e,r){e&1&&(i(0,"th",70),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",1),o(),f(`
        `,p(2,2,"labels.inputs.Amount"),`
      `))}function Fp(e,r){e&1&&(i(0,"th",70),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",1),o(),f(`
        `,p(2,2,"labels.inputs.Principal"),`
      `))}function Bp(e,r){e&1&&(i(0,"th",70),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",1),o(),f(`
        `,p(2,2,"labels.inputs.Interest"),`
      `))}function kp(e,r){e&1&&(i(0,"th",70),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",1),o(),f(`
        `,p(2,2,"labels.inputs.Fees"),`
      `))}function Np(e,r){e&1&&(i(0,"th",70),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",1),o(),f(`
        `,p(2,2,"labels.inputs.Penalties"),`
      `))}function Vp(e,r){e&1&&g(0,"th",68),e&2&&ue("colspan",2)}function jp(e,r){e&1&&g(0,"tr",71)}function qp(e,r){e&1&&g(0,"tr",71)}function zp(e,r){e&1&&g(0,"tr",72)}var Xn=(()=>{class e{constructor(n,m,l,u,_,h,y,D){this.route=n,this.dateUtils=m,this.router=l,this.dialog=u,this.loansService=_,this.translateService=h,this.settingsService=y,this.alertService=D,this.transactionsData=[],this.displayedColumns=["row","id","office","externalId","date","transactionType","amount","principal","interest","fee","penalties","loanBalance","actions"],this.displayedHeader1Columns=["h1-row","h1-id","h1-office","h1-external-id","h1-transaction-date","h1-transaction-type","h1-space","h1-breakdown","h1-loan-balance","h1-actions"],this.displayedHeader2Columns=["h2-space","h2-amount","h2-principal","h2-interest","h2-fees","h2-penalties","h2-action"],this.route.parent.parent.data.subscribe(I=>{this.loanDetailsData=I.loanDetailsData,this.status=I.loanDetailsData.status.value}),this.loanId=this.route.parent.parent.snapshot.params.loanId}ngOnInit(){this.transactionsData=this.loanDetailsData.transactions,this.hideAccrualsParam=new K(!1),this.hideReversedParam=new K(!1),this.setLoanTransactions()}setLoanTransactions(){this.transactionsData.forEach(n=>{n.date=this.dateUtils.parseDate(n.date)}),this.dataSource=new se(this.transactionsData),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}checkStatus(){return this.status==="Active"||this.status==="Closed (obligations met)"||this.status==="Overpaid"||this.status==="Closed (rescheduled)"||this.status==="Closed (written off)"}hideAccruals(){this.filterTransactions(this.hideReversedParam.value,this.hideAccrualsParam.value)}hideReversed(){this.filterTransactions(this.hideReversedParam.value,this.hideAccrualsParam.value)}filterTransactions(n,m){let l=this.transactionsData;(m||n)&&(l=this.transactionsData.filter(u=>!(n&&u.manuallyReversed)&&!(m&&(u.type.accrual||u.type.capitalizedIncomeAmortization)))),this.dataSource=new se(l),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(n=""){this.dataSource.filter=n.trim().toLowerCase()}removeItem(n,m){return n.filter(l=>l!==m)}showTransactions(n){this.showTransaction(n)&&this.router.navigate([n.id],{relativeTo:this.route})}showTransaction(n){return[1,2,4,9,20,21,22,23,26,28,29,30,31,33,35,37,38,40,41].includes(n.type.id)}allowUndoTransaction(n){return n.manuallyReversed?!1:!(n.type.disbursement||n.type.chargeoff||this.isReAgoeOrReAmortize(n.type)||n.type.interestRefund||n.type.contractTermination)}loanTransactionColor(n){return n.manuallyReversed?"strike":n.transactionRelations&&n.transactionRelations.length>0?"linked":this.isAccrual(n.type)||this.isCapitalizedIncomeAmortization(n.type)?"accrual":this.isChargeOff(n.type)?"chargeoff":this.isDownPayment(n.type)?"down-payment":this.isReAge(n.type)?"reage":this.isReAmortize(n.type)?"reamortize":""}routeEdit(n){n.stopPropagation()}undoTransaction(n,m){m.stopPropagation();let l=this.settingsService.language.code,u=this.settingsService.dateFormat,_=this.route.parent.parent.snapshot.params.loanId,h="undo",y=this.dateUtils.parseDate(n.date),D={};this.isChargeOff(n.type)?(h="undo-charge-off",y=this.settingsService.businessDate,D={}):D={transactionDate:this.dateUtils.formatDate(y&&new Date(y),u),transactionAmount:0,dateFormat:u,locale:l},this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Undo Transaction"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want undo the transaction type")+`${n.type.value}`+this.translateService.instant("labels.dialogContext.with id")+`${n.id}`}}).afterClosed().subscribe(U=>{if(U.confirm){let tt=n.id;this.isChargeOff(n.type)&&(tt=null),this.loansService.executeLoansAccountTransactionsCommand(_,h,D,tt).subscribe(St=>{n.manuallyReversed=!0,this.reload()})}})}undoReAgeOrReAmortize(n){let m=n.type.reAmortize?"Re-Amortize":"Re-Age";this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Undo Transaction"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want undo the transaction type")+" "+this.translateService.instant("labels.menus."+m)}}).afterClosed().subscribe(u=>{if(u.confirm){let _=m==="Re-Age"?"undoReAge":"undoReAmortize";this.loansService.executeLoansAccountTransactionsCommand(String(this.loanId),_,{}).subscribe(()=>{this.reload()})}})}isAccrual(n){return n.accrual||n.code==="loanTransactionType.overdueCharge"}isChargeOff(n){return n.chargeoff||n.code==="loanTransactionType.chargeOff"}isDownPayment(n){return n.downPayment||n.code==="loanTransactionType.downPayment"}isReAge(n){return n.reAge||n.code==="loanTransactionType.reAge"}isReAmortize(n){return n.reAmortize||n.code==="loanTransactionType.reAmortize"}isCapitalizedIncome(n){return n.capitalizedIncome||n.code==="loanTransactionType.capitalizedIncome"}isCapitalizedIncomeAmortization(n){return n.capitalizedIncomeAmortization||n.code==="loanTransactionType.capitalizedIncomeAmortization"}isReAgoeOrReAmortize(n){return this.isReAmortize(n)||this.isReAge(n)}isBuyDownFee(n){return n.buyDownFee||n.code==="loanTransactionType.buyDownFee"}viewJournalEntry(n){return!(this.isReAmortize(n)||this.isReAge(n))}reload(){let n=this.route.parent.parent.snapshot.params.clientId,m=this.router.url;this.router.navigateByUrl("/clients",{skipLocationChange:!0}).then(()=>this.router.navigate([m]))}displaySubMenu(n){return!(this.isReAgoeOrReAmortize(n.type)&&n.manuallyReversed)}capitalizedIncomeAdjustmentTransaction(n){let m=`${this.loanId}`;this.loansService.getLoanTransactionActionTemplate(m,"capitalizedIncomeAdjustment",`${n.id}`).subscribe(l=>{let u=l.date||n.date;if(l.amount==0)this.displayAlertMessage("Capitalized Income amount adjusted already adjusted",n.amount);else{let _=l.amount||n.amount,h=[new fe({controlName:"transactionDate",label:"Date",value:this.dateUtils.parseDate(u),type:"datetime-local",required:!0,minDate:this.dateUtils.parseDate(n.date),order:1}),new pe({controlName:"amount",label:"Amount",value:_,type:"number",required:!0,max:_,min:.001,order:2})],y={title:`Adjustment ${n.type.value} Transaction`,layout:{addButtonText:"Adjustment"},formfields:h};this.dialog.open(ae,{data:y}).afterClosed().subscribe(I=>{if(I.data){let U=this.settingsService.dateFormat;if(I.data.value.amount<=_){let tt=this.settingsService.language.code,St={transactionDate:this.dateUtils.formatDate(I.data.value.transactionDate,U),transactionAmount:I.data.value.amount,locale:tt,dateFormat:U};this.loansService.executeLoansAccountTransactionsCommand(m,"capitalizedIncomeAdjustment",St,n.id).subscribe(()=>{this.reload()})}else this.displayAlertMessage("Capitalized Income Adjustment amount must be lower or equal to",_)}})}})}buyDownFeeAdjustmentTransaction(n){let m=`${this.loanId}`;this.loansService.getLoanTransactionActionTemplate(m,"buyDownFeeAdjustment",`${n.id}`).subscribe(l=>{let u=l.date||n.date;if(l.amount==0)this.displayAlertMessage("Buy Down Fee amount already adjusted",n.amount);else{let _=l.amount||n.amount,h=[new fe({controlName:"transactionDate",label:"Date",value:this.dateUtils.parseDate(u),type:"datetime-local",required:!0,minDate:this.dateUtils.parseDate(n.date),order:1}),new pe({controlName:"amount",label:"Amount",value:_,type:"number",required:!0,max:_,min:.001,order:2})],y={title:`Adjustment ${n.type.value} Transaction`,layout:{addButtonText:"Adjustment"},formfields:h};this.dialog.open(ae,{data:y}).afterClosed().subscribe(I=>{if(I.data){let U=this.settingsService.dateFormat;if(I.data.value.amount<=_){let tt=this.settingsService.language.code,St={transactionDate:this.dateUtils.formatDate(I.data.value.transactionDate,U),transactionAmount:I.data.value.amount,locale:tt,dateFormat:U};this.loansService.executeLoansAccountTransactionsCommand(m,"buyDownFeeAdjustment",St,n.id).subscribe(()=>{this.reload()})}else this.displayAlertMessage("Buy Down Fee Adjustment amount must be lower or equal to",_)}})}})}displayAlertMessage(n,m){let l=this.translateService.instant("errors."+n);m&&(l=l+": "+m),this.alertService.alert({type:"BusinessRule",message:l})}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(Y),v($),v(Zt),v(R),v(ve),v(G),v(Mn))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-transactions-tab"]],viewQuery:function(m,l){if(m&1&&(ee(we,7),ee(Le,7)),m&2){let u;ne(u=ie())&&(l.paginator=u.first),ne(u=ie())&&(l.sort=u.first)}},decls:168,vars:8,consts:[["transactionMenu","matMenu"],[1,"container"],["class","layout-row transaction-buttons align-end gap-20px",4,"ngIf"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","row"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","id"],["mat-cell","","class","td-select",3,"ngClass","click",4,"matCellDef"],["matColumnDef","office"],["mat-cell","",3,"ngClass","click",4,"matCellDef"],["matColumnDef","externalId"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","transactionType"],["matColumnDef","amount"],["mat-cell","","class","r-amount td-min-space",3,"ngClass","click",4,"matCellDef"],["matColumnDef","principal"],["matColumnDef","interest"],["matColumnDef","fee"],["matColumnDef","penalties"],["matColumnDef","loanBalance"],["matColumnDef","actions"],["mat-cell","","class","center",4,"matCellDef"],["matColumnDef","h1-row"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","h1-id"],["matColumnDef","h1-office"],["matColumnDef","h1-external-id"],["matColumnDef","h1-transaction-date"],["matColumnDef","h1-transaction-type"],["matColumnDef","h1-space"],["matColumnDef","h1-breakdown"],["mat-header-cell","","class","center",4,"matHeaderCellDef"],["matColumnDef","h1-loan-balance"],["matColumnDef","h1-actions"],["matColumnDef","h2-space"],["matColumnDef","h2-amount"],["mat-header-cell","","class","r-amount",4,"matHeaderCellDef"],["matColumnDef","h2-principal"],["matColumnDef","h2-interest"],["matColumnDef","h2-fees"],["matColumnDef","h2-penalties"],["matColumnDef","h2-action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","select-row",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions"],[1,"layout-row","transaction-buttons","align-end","gap-20px"],[1,"accruals",3,"click","formControl"],["mat-raised-button","","color","primary",1,"transaction-button",3,"routerLink"],["mat-cell","",3,"click"],["mat-cell","",1,"td-select",3,"click","ngClass"],["mat-cell","",3,"click","ngClass"],["mat-cell","",3,"ngClass"],[3,"externalId"],["mat-cell","",1,"r-amount","td-min-space",3,"click","ngClass"],["mat-cell","",1,"center"],["mat-icon-button","","aria-label","","class","action-button",3,"matMenuTriggerFor",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","aria-label","",1,"action-button",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["icon","eye","size","sm"],["mat-menu-item","",3,"click",4,"mifosxHasPermission"],["mat-menu-item","",1,"account-action-button",3,"click","routerLink"],["icon","receipt","size","sm"],["icon","undo","size","sm"],["icon","coins","size","sm"],["mat-menu-item","",3,"click","routerLink"],["icon","table-cells","size","sm"],["mat-header-cell",""],["mat-header-cell","",1,"center"],["mat-header-cell","",1,"r-amount"],["mat-header-row",""],["mat-row","",1,"select-row"]],template:function(m,l){m&1&&(i(0,"div",1),t(1,`
  `),d(2,Ks,14,13,"div",2),t(3,`

  `),i(4,"table",3),t(5,`
    `),b(6,4),t(7,`
      `),d(8,Js,2,1,"td",5),t(9,`
    `),S(),t(10,`

    `),b(11,6),t(12,`
      `),d(13,Zs,2,2,"td",7),t(14,`
    `),S(),t(15,`

    `),b(16,8),t(17,`
      `),d(18,Xs,2,2,"td",9),t(19,`
    `),S(),t(20,`

    `),b(21,10),t(22,`
      `),d(23,tp,4,2,"td",11),t(24,`
    `),S(),t(25,`

    `),b(26,12),t(27,`
      `),d(28,ep,3,4,"td",9),t(29,`
    `),S(),t(30,`

    `),b(31,13),t(32,`
      `),d(33,np,3,5,"td",9),t(34,`
    `),S(),t(35,`

    `),b(36,14),t(37,`
      `),d(38,ip,3,4,"td",15),t(39,`
    `),S(),t(40,`

    `),b(41,16),t(42,`
      `),d(43,ap,3,4,"td",15),t(44,`
    `),S(),t(45,`

    `),b(46,17),t(47,`
      `),d(48,op,3,4,"td",15),t(49,`
    `),S(),t(50,`

    `),b(51,18),t(52,`
      `),d(53,rp,3,4,"td",15),t(54,`
    `),S(),t(55,`

    `),b(56,19),t(57,`
      `),d(58,lp,3,4,"td",15),t(59,`
    `),S(),t(60,`

    `),b(61,20),t(62,`
      `),d(63,mp,3,4,"td",15),t(64,`
    `),S(),t(65,`

    `),b(66,21),t(67,`
      `),d(68,Sp,22,8,"td",22),t(69,`
    `),S(),t(70,`

    `),t(71,`
    `),b(72,23),t(73,`
      `),d(74,yp,2,0,"th",24),t(75,`
    `),S(),t(76,`

    `),b(77,25),t(78,`
      `),d(79,Dp,3,3,"th",24),t(80,`
    `),S(),t(81,`

    `),b(82,26),t(83,`
      `),d(84,Tp,3,3,"th",24),t(85,`
    `),S(),t(86,`

    `),b(87,27),t(88,`
      `),d(89,Pp,3,3,"th",24),t(90,`
    `),S(),t(91,`

    `),b(92,28),t(93,`
      `),d(94,Mp,3,3,"th",24),t(95,`
    `),S(),t(96,`

    `),b(97,29),t(98,`
      `),d(99,Op,3,3,"th",24),t(100,`
    `),S(),t(101,`

    `),b(102,30),t(103,`
      `),d(104,Ip,1,0,"th",24),t(105,`
    `),S(),t(106,`

    `),b(107,31),t(108,`
      `),d(109,Ep,3,4,"th",32),t(110,`
    `),S(),t(111,`

    `),b(112,33),t(113,`
      `),d(114,Ap,3,3,"th",24),t(115,`
    `),S(),t(116,`

    `),b(117,34),t(118,`
      `),d(119,wp,3,3,"th",32),t(120,`
    `),S(),t(121,`

    `),t(122,`
    `),b(123,35),t(124,`
      `),d(125,Lp,1,1,"th",24),t(126,`
    `),S(),t(127,`

    `),b(128,36),t(129,`
      `),d(130,Rp,3,4,"th",37),t(131,`
    `),S(),t(132,`

    `),b(133,38),t(134,`
      `),d(135,Fp,3,4,"th",37),t(136,`
    `),S(),t(137,`

    `),b(138,39),t(139,`
      `),d(140,Bp,3,4,"th",37),t(141,`
    `),S(),t(142,`

    `),b(143,40),t(144,`
      `),d(145,kp,3,4,"th",37),t(146,`
    `),S(),t(147,`

    `),b(148,41),t(149,`
      `),d(150,Np,3,4,"th",37),t(151,`
    `),S(),t(152,`

    `),b(153,42),t(154,`
      `),d(155,Vp,1,1,"th",24),t(156,`
    `),S(),t(157,`

    `),d(158,jp,1,0,"tr",43),t(159,`
    `),d(160,qp,1,0,"tr",43),t(161,`
    `),d(162,zp,1,0,"tr",44),t(163,`
  `),a(),t(164,`

  `),g(165,"mat-paginator",45),t(166,`
`),a(),t(167,`
`)),m&2&&(o(2),c("ngIf",l.checkStatus()),o(2),c("dataSource",l.dataSource),o(154),c("matHeaderRowDef",l.displayedHeader1Columns),o(2),c("matHeaderRowDef",l.displayedHeader2Columns),o(2),c("matRowDefColumns",l.displayedColumns),o(3),c("pageSize",100)("pageSizeOptions",N(7,$s)))},dependencies:[A,he,k,w,J,ke,H,j,Lt,ot,L,Ne,Me,Rt,Le,kt,Ft,Vt,Ie,Pe,An,wn,En,In,Ot,Bt,Nt,jt,zt,qt,Ht,we,Wt],styles:["body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.bg-black[_ngcontent-%COMP%]{background-color:#000}.bg-light-grey[_ngcontent-%COMP%]{background-color:#e5e5e5}.bg-medium-grey[_ngcontent-%COMP%]{background-color:#ccc}.bg-grey[_ngcontent-%COMP%]{background-color:#999}.bg-dark-grey[_ngcontent-%COMP%]{background-color:#222}.bg-white[_ngcontent-%COMP%], .bg-fff[_ngcontent-%COMP%]{background-color:#fff}.bg-none[_ngcontent-%COMP%], .no-bg[_ngcontent-%COMP%]{background:none;background-image:none;background-color:transparent}.bg-facebook[_ngcontent-%COMP%]{background-color:#47639e}.bg-twitter[_ngcontent-%COMP%]{background-color:#02a8f3}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}.no-border[_ngcontent-%COMP%]{border:none}.no-border-t[_ngcontent-%COMP%]{border-top:none}.no-border-r[_ngcontent-%COMP%]{border-right:none}.no-border-b[_ngcontent-%COMP%]{border-bottom:none}.no-border-l[_ngcontent-%COMP%]{border-left:none}.no-border-lr[_ngcontent-%COMP%], .no-border-rl[_ngcontent-%COMP%]{border-left:none;border-right:none}.no-border-tb[_ngcontent-%COMP%], .no-border-bt[_ngcontent-%COMP%]{border-top:none;border-bottom:none}.no-border-tl[_ngcontent-%COMP%], .no-border-lt[_ngcontent-%COMP%]{border-top:none;border-left:none}.no-border-tr[_ngcontent-%COMP%], .no-border-rt[_ngcontent-%COMP%]{border-top:none;border-right:none}.no-border-bl[_ngcontent-%COMP%], .no-border-lb[_ngcontent-%COMP%]{border-bottom:none;border-left:none}.no-border-br[_ngcontent-%COMP%], .no-border-rb[_ngcontent-%COMP%]{border-bottom:none;border-right:none}.border-dashed[_ngcontent-%COMP%], .border-dotted[_ngcontent-%COMP%]{border-style:dashed}.border-black[_ngcontent-%COMP%]{border-color:#000}.border-light-grey[_ngcontent-%COMP%]{border-color:#e5e5e5}.border-medium-grey[_ngcontent-%COMP%]{border-color:#ccc}.border-grey[_ngcontent-%COMP%]{border-color:#999}.border-dark-grey[_ngcontent-%COMP%]{border-color:#2222}.border-white[_ngcontent-%COMP%], .border-fff[_ngcontent-%COMP%]{border-color:#fff}.no-border-radius[_ngcontent-%COMP%]{border-radius:0}.radius3[_ngcontent-%COMP%]{border-radius:3px}.radius5[_ngcontent-%COMP%]{border-radius:5px}.radius10[_ngcontent-%COMP%]{border-radius:10px}.column-mandatory[_ngcontent-%COMP%]{color:#5cb85c;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.yes[_ngcontent-%COMP%]{color:#5cb85c!important;background-color:#5cb85c;height:4px;cursor:none}.no[_ngcontent-%COMP%]{color:red;background-color:red;height:4px;cursor:none}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.transfer[_ngcontent-%COMP%]{color:#16a085}.linked[_ngcontent-%COMP%]{color:#4461e2}.accrual[_ngcontent-%COMP%]{color:#999}.fa-question[_ngcontent-%COMP%]{color:#4461e2}.enabled[_ngcontent-%COMP%]{color:#32cd32}.disabled[_ngcontent-%COMP%]{color:#f44366}.v-mid[_ngcontent-%COMP%], .v-m[_ngcontent-%COMP%]{vertical-align:middle}.v-top[_ngcontent-%COMP%], .v-t[_ngcontent-%COMP%]{vertical-align:top}.v-bottom[_ngcontent-%COMP%], .v-b[_ngcontent-%COMP%]{vertical-align:bottom}.v-super[_ngcontent-%COMP%]{vertical-align:super}.r-amount[_ngcontent-%COMP%]{text-align:right!important;padding-right:5px!important}.left[_ngcontent-%COMP%]{text-align:left!important}.right[_ngcontent-%COMP%]{text-align:right!important}.center[_ngcontent-%COMP%]{text-align:center!important}.amount-plus[_ngcontent-%COMP%]{color:#000}.amount-minus[_ngcontent-%COMP%]{color:#4461e2}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.in-block[_ngcontent-%COMP%]{display:inline-block;zoom:1}.d-none[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}.t-0[_ngcontent-%COMP%]{top:0}.b-0[_ngcontent-%COMP%]{bottom:0}.l-0[_ngcontent-%COMP%]{left:0}.r-0[_ngcontent-%COMP%]{right:0}.tb-0[_ngcontent-%COMP%]{top:0;bottom:0}.lr-0[_ngcontent-%COMP%]{left:0;right:0}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.f-none[_ngcontent-%COMP%]{float:none}textarea[_ngcontent-%COMP%]{resize:both}textarea.vertical[_ngcontent-%COMP%], textarea.horizontal[_ngcontent-%COMP%]{resize:vertical}textarea.noresize[_ngcontent-%COMP%]{resize:none}.full-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{width:auto}.mat-tab-body-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-datepicker-input[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.loader-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw}.loader-wrapper[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;position:absolute;animation:_ngcontent-%COMP%_rotate .8s infinite .2s}.loader-wrapper[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{border-width:0 90px 90px;border-color:transparent transparent #1fb050;bottom:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{border-width:90px 90px 0;border-color:#b4d575 transparent transparent;top:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{border-width:90px 0 90px 90px;border-color:transparent transparent transparent #1074b9;top:calc(50% - 90px);left:calc(50% - 100px)}.loader-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{border-width:90px 90px 90px 0;border-color:transparent #1daeec transparent transparent;top:calc(50% - 90px);right:calc(50% - 100px)}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}body[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{margin:0 auto}.mb-05[_ngcontent-%COMP%]{margin-bottom:.5rem}.mr-05[_ngcontent-%COMP%]{margin-right:.5rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:1rem}.m-5[_ngcontent-%COMP%]{margin:5px}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.m-r-5[_ngcontent-%COMP%]{margin-right:5px}.m-b-5[_ngcontent-%COMP%]{margin-bottom:5px}.m-l-5[_ngcontent-%COMP%]{margin-left:5px}.m-v-5[_ngcontent-%COMP%]{margin:5px 0}.m-h-5[_ngcontent-%COMP%]{margin:0 5px}.m-10[_ngcontent-%COMP%]{margin:10px}.m-t-10[_ngcontent-%COMP%]{margin-top:10px}.m-r-10[_ngcontent-%COMP%]{margin-right:10px}.m-b-10[_ngcontent-%COMP%]{margin-bottom:10px}.m-l-10[_ngcontent-%COMP%]{margin-left:10px}.m-v-10[_ngcontent-%COMP%]{margin:10px 0}.m-h-10[_ngcontent-%COMP%]{margin:0 10px}.m-15[_ngcontent-%COMP%]{margin:15px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}.m-r-15[_ngcontent-%COMP%]{margin-right:15px}.m-b-15[_ngcontent-%COMP%]{margin-bottom:15px}.m-l-15[_ngcontent-%COMP%]{margin-left:15px}.m-v-15[_ngcontent-%COMP%]{margin:15px 0}.m-h-15[_ngcontent-%COMP%]{margin:0 15px}.m-20[_ngcontent-%COMP%]{margin:20px}.m-t-20[_ngcontent-%COMP%]{margin-top:20px}.m-r-20[_ngcontent-%COMP%]{margin-right:20px}.m-b-20[_ngcontent-%COMP%]{margin-bottom:20px}.m-l-20[_ngcontent-%COMP%]{margin-left:20px}.m-v-20[_ngcontent-%COMP%]{margin:20px 0}.m-h-20[_ngcontent-%COMP%]{margin:0 20px}.m-25[_ngcontent-%COMP%]{margin:25px}.m-t-25[_ngcontent-%COMP%]{margin-top:25px}.m-r-25[_ngcontent-%COMP%]{margin-right:25px}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}.m-l-25[_ngcontent-%COMP%]{margin-left:25px}.m-v-25[_ngcontent-%COMP%]{margin:25px 0}.m-h-25[_ngcontent-%COMP%]{margin:0 25px}.m-30[_ngcontent-%COMP%]{margin:30px}.m-t-30[_ngcontent-%COMP%]{margin-top:30px}.m-r-30[_ngcontent-%COMP%]{margin-right:30px}.m-b-30[_ngcontent-%COMP%]{margin-bottom:30px}.m-l-30[_ngcontent-%COMP%]{margin-left:30px}.m-v-30[_ngcontent-%COMP%]{margin:30px 0}.m-h-30[_ngcontent-%COMP%]{margin:0 30px}.m-35[_ngcontent-%COMP%]{margin:35px}.m-t-35[_ngcontent-%COMP%]{margin-top:35px}.m-r-35[_ngcontent-%COMP%]{margin-right:35px}.m-b-35[_ngcontent-%COMP%]{margin-bottom:35px}.m-l-35[_ngcontent-%COMP%]{margin-left:35px}.m-v-35[_ngcontent-%COMP%]{margin:35px 0}.m-h-35[_ngcontent-%COMP%]{margin:0 35px}.m-40[_ngcontent-%COMP%]{margin:40px}.m-t-40[_ngcontent-%COMP%]{margin-top:40px}.m-r-40[_ngcontent-%COMP%]{margin-right:40px}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.m-l-40[_ngcontent-%COMP%]{margin-left:40px}.m-v-40[_ngcontent-%COMP%]{margin:40px 0}.m-h-40[_ngcontent-%COMP%]{margin:0 40px}.m-45[_ngcontent-%COMP%]{margin:45px}.m-t-45[_ngcontent-%COMP%]{margin-top:45px}.m-r-45[_ngcontent-%COMP%]{margin-right:45px}.m-b-45[_ngcontent-%COMP%]{margin-bottom:45px}.m-l-45[_ngcontent-%COMP%]{margin-left:45px}.m-v-45[_ngcontent-%COMP%]{margin:45px 0}.m-h-45[_ngcontent-%COMP%]{margin:0 45px}.m-50[_ngcontent-%COMP%]{margin:50px}.m-t-50[_ngcontent-%COMP%]{margin-top:50px}.m-r-50[_ngcontent-%COMP%]{margin-right:50px}.m-b-50[_ngcontent-%COMP%]{margin-bottom:50px}.m-l-50[_ngcontent-%COMP%]{margin-left:50px}.m-v-50[_ngcontent-%COMP%]{margin:50px 0}.m-h-50[_ngcontent-%COMP%]{margin:0 50px}.m-55[_ngcontent-%COMP%]{margin:55px}.m-t-55[_ngcontent-%COMP%]{margin-top:55px}.m-r-55[_ngcontent-%COMP%]{margin-right:55px}.m-b-55[_ngcontent-%COMP%]{margin-bottom:55px}.m-l-55[_ngcontent-%COMP%]{margin-left:55px}.m-v-55[_ngcontent-%COMP%]{margin:55px 0}.m-h-55[_ngcontent-%COMP%]{margin:0 55px}.m-60[_ngcontent-%COMP%]{margin:60px}.m-t-60[_ngcontent-%COMP%]{margin-top:60px}.m-r-60[_ngcontent-%COMP%]{margin-right:60px}.m-b-60[_ngcontent-%COMP%]{margin-bottom:60px}.m-l-60[_ngcontent-%COMP%]{margin-left:60px}.m-v-60[_ngcontent-%COMP%]{margin:60px 0}.m-h-60[_ngcontent-%COMP%]{margin:0 60px}.m-65[_ngcontent-%COMP%]{margin:65px}.m-t-65[_ngcontent-%COMP%]{margin-top:65px}.m-r-65[_ngcontent-%COMP%]{margin-right:65px}.m-b-65[_ngcontent-%COMP%]{margin-bottom:65px}.m-l-65[_ngcontent-%COMP%]{margin-left:65px}.m-v-65[_ngcontent-%COMP%]{margin:65px 0}.m-h-65[_ngcontent-%COMP%]{margin:0 65px}.m-70[_ngcontent-%COMP%]{margin:70px}.m-t-70[_ngcontent-%COMP%]{margin-top:70px}.m-r-70[_ngcontent-%COMP%]{margin-right:70px}.m-b-70[_ngcontent-%COMP%]{margin-bottom:70px}.m-l-70[_ngcontent-%COMP%]{margin-left:70px}.m-v-70[_ngcontent-%COMP%]{margin:70px 0}.m-h-70[_ngcontent-%COMP%]{margin:0 70px}.m-75[_ngcontent-%COMP%]{margin:75px}.m-t-75[_ngcontent-%COMP%]{margin-top:75px}.m-r-75[_ngcontent-%COMP%]{margin-right:75px}.m-b-75[_ngcontent-%COMP%]{margin-bottom:75px}.m-l-75[_ngcontent-%COMP%]{margin-left:75px}.m-v-75[_ngcontent-%COMP%]{margin:75px 0}.m-h-75[_ngcontent-%COMP%]{margin:0 75px}.m-80[_ngcontent-%COMP%]{margin:80px}.m-t-80[_ngcontent-%COMP%]{margin-top:80px}.m-r-80[_ngcontent-%COMP%]{margin-right:80px}.m-b-80[_ngcontent-%COMP%]{margin-bottom:80px}.m-l-80[_ngcontent-%COMP%]{margin-left:80px}.m-v-80[_ngcontent-%COMP%]{margin:80px 0}.m-h-80[_ngcontent-%COMP%]{margin:0 80px}.no-m[_ngcontent-%COMP%]{margin:0}.no-m-t[_ngcontent-%COMP%]{margin-top:0}.no-m-r[_ngcontent-%COMP%]{margin-right:0}.no-m-b[_ngcontent-%COMP%]{margin-bottom:0}.no-m-l[_ngcontent-%COMP%]{margin-left:0}.no-m-v[_ngcontent-%COMP%], .no-m-h[_ngcontent-%COMP%], .no-margin[_ngcontent-%COMP%]{margin:0}.no-m-lr[_ngcontent-%COMP%], .no-m-rl[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.no-m-tb[_ngcontent-%COMP%], .no-m-bt[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.m-t-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-bottom:0}.m-b-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0}.m-l-only[_ngcontent-%COMP%]{margin-right:0;margin-top:0;margin-bottom:0}.m-r-only[_ngcontent-%COMP%]{margin-left:0;margin-top:0;margin-bottom:0}.m-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.ls-0[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}div[_ngcontent-%COMP%]{box-sizing:border-box}.color-inherit[_ngcontent-%COMP%]{color:inherit}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}.nolist[_ngcontent-%COMP%]{list-style:none}.actions-menu[_ngcontent-%COMP%]{color:#fff}.alert[_ngcontent-%COMP%]{background-color:#e8f4fd;padding:6px 16px;font-size:.875rem;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;line-height:1.43;border-radius:4px;letter-spacing:normal;margin:10px}.alert[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 0;font-size:18px}.alert[_ngcontent-%COMP%]   .alert-check[_ngcontent-%COMP%]{color:#359ff4;margin-right:2px;font-size:1.4rem}  .mat-tooltip{font-size:15px;color:#fff!important;background-color:#4461e2b3;border:1px solid rgb(25.7777777778,51.5555555556,166.2222222222);max-width:400px!important;white-space:pre-line!important}.loading[_ngcontent-%COMP%]{position:absolute;min-width:100%;width:100px;height:12px;background:linear-gradient(125deg,#fff,#4461e2,#fff);animation:grow 4s linear infinite,move 4s linear infinite}mat-card-title[_ngcontent-%COMP%]{font-weight:600;font-size:x-large;padding-left:20px;padding-top:20px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.overflow-x-scroll[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.overflow-no[_ngcontent-%COMP%]{overflow:hidden}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll}.table-container[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}body[_ngcontent-%COMP%], .no-p[_ngcontent-%COMP%]{padding:0}.no-p-t[_ngcontent-%COMP%]{padding-top:0}.no-p-r[_ngcontent-%COMP%]{padding-right:0}.no-p-b[_ngcontent-%COMP%]{padding-bottom:0}.no-p-l[_ngcontent-%COMP%]{padding-left:0}.no-p-v[_ngcontent-%COMP%], .no-p-h[_ngcontent-%COMP%]{padding:0}.p-5[_ngcontent-%COMP%]{padding:5px}.p-t-5[_ngcontent-%COMP%]{padding-top:5px}.p-r-5[_ngcontent-%COMP%]{padding-right:5px}.p-b-5[_ngcontent-%COMP%]{padding-bottom:5px}.p-l-5[_ngcontent-%COMP%]{padding-left:5px}.p-v-5[_ngcontent-%COMP%]{padding:5px 0}.p-h-5[_ngcontent-%COMP%]{padding:0 5px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-t-10[_ngcontent-%COMP%]{padding-top:10px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.p-v-10[_ngcontent-%COMP%]{padding:10px 0}.p-h-10[_ngcontent-%COMP%]{padding:0 10px}.p-15[_ngcontent-%COMP%]{padding:15px}.p-t-15[_ngcontent-%COMP%]{padding-top:15px}.p-r-15[_ngcontent-%COMP%]{padding-right:15px}.p-b-15[_ngcontent-%COMP%]{padding-bottom:15px}.p-l-15[_ngcontent-%COMP%]{padding-left:15px}.p-v-15[_ngcontent-%COMP%]{padding:15px 0}.p-h-15[_ngcontent-%COMP%]{padding:0 15px}.p-20[_ngcontent-%COMP%]{padding:20px}.p-t-20[_ngcontent-%COMP%]{padding-top:20px}.p-r-20[_ngcontent-%COMP%]{padding-right:20px}.p-b-20[_ngcontent-%COMP%]{padding-bottom:20px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-v-20[_ngcontent-%COMP%]{padding:20px 0}.p-h-20[_ngcontent-%COMP%]{padding:0 20px}.p-25[_ngcontent-%COMP%]{padding:25px}.p-t-25[_ngcontent-%COMP%]{padding-top:25px}.p-r-25[_ngcontent-%COMP%]{padding-right:25px}.p-b-25[_ngcontent-%COMP%]{padding-bottom:25px}.p-l-25[_ngcontent-%COMP%]{padding-left:25px}.p-v-25[_ngcontent-%COMP%]{padding:25px 0}.p-h-25[_ngcontent-%COMP%]{padding:0 25px}.p-30[_ngcontent-%COMP%]{padding:30px}.p-t-30[_ngcontent-%COMP%]{padding-top:30px}.p-r-30[_ngcontent-%COMP%]{padding-right:30px}.p-b-30[_ngcontent-%COMP%]{padding-bottom:30px}.p-l-30[_ngcontent-%COMP%]{padding-left:30px}.p-v-30[_ngcontent-%COMP%]{padding:30px 0}.p-h-30[_ngcontent-%COMP%]{padding:0 30px}.p-35[_ngcontent-%COMP%]{padding:35px}.p-t-35[_ngcontent-%COMP%]{padding-top:35px}.p-r-35[_ngcontent-%COMP%]{padding-right:35px}.p-b-35[_ngcontent-%COMP%]{padding-bottom:35px}.p-l-35[_ngcontent-%COMP%]{padding-left:35px}.p-v-35[_ngcontent-%COMP%]{padding:35px 0}.p-h-35[_ngcontent-%COMP%]{padding:0 35px}.p-40[_ngcontent-%COMP%]{padding:40px}.p-t-40[_ngcontent-%COMP%]{padding-top:40px}.p-r-40[_ngcontent-%COMP%]{padding-right:40px}.p-b-40[_ngcontent-%COMP%]{padding-bottom:40px}.p-l-40[_ngcontent-%COMP%]{padding-left:40px}.p-v-40[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px}.p-h-40[_ngcontent-%COMP%]{padding:0 40px}.p-45[_ngcontent-%COMP%]{padding:45px}.p-t-45[_ngcontent-%COMP%]{padding-top:45px}.p-r-45[_ngcontent-%COMP%]{padding-right:45px}.p-b-45[_ngcontent-%COMP%]{padding-bottom:45px}.p-l-45[_ngcontent-%COMP%]{padding-left:45px}.p-v-45[_ngcontent-%COMP%]{padding:45px 0}.p-h-45[_ngcontent-%COMP%]{padding:0 45px}.p-50[_ngcontent-%COMP%]{padding:50px}.p-t-50[_ngcontent-%COMP%]{padding-top:50px}.p-r-50[_ngcontent-%COMP%]{padding-right:50px}.p-b-50[_ngcontent-%COMP%]{padding-bottom:50px}.p-l-50[_ngcontent-%COMP%]{padding-left:50px}.p-v-50[_ngcontent-%COMP%]{padding:50px 0}.p-h-50[_ngcontent-%COMP%]{padding:0 50px}.p-55[_ngcontent-%COMP%]{padding:55px}.p-t-55[_ngcontent-%COMP%]{padding-top:55px}.p-r-55[_ngcontent-%COMP%]{padding-right:55px}.p-b-55[_ngcontent-%COMP%]{padding-bottom:55px}.p-l-55[_ngcontent-%COMP%]{padding-left:55px}.p-v-55[_ngcontent-%COMP%]{padding:55px 0}.p-h-55[_ngcontent-%COMP%]{padding:0 55px}.p-60[_ngcontent-%COMP%]{padding:60px}.p-t-60[_ngcontent-%COMP%]{padding-top:60px}.p-r-60[_ngcontent-%COMP%]{padding-right:60px}.p-b-60[_ngcontent-%COMP%]{padding-bottom:60px}.p-l-60[_ngcontent-%COMP%]{padding-left:60px}.p-v-60[_ngcontent-%COMP%]{padding:60px 0}.p-h-60[_ngcontent-%COMP%]{padding:0 60px}.p-65[_ngcontent-%COMP%]{padding:65px}.p-t-65[_ngcontent-%COMP%]{padding-top:65px}.p-r-65[_ngcontent-%COMP%]{padding-right:65px}.p-b-65[_ngcontent-%COMP%]{padding-bottom:65px}.p-l-65[_ngcontent-%COMP%]{padding-left:65px}.p-v-65[_ngcontent-%COMP%]{padding:65px 0}.p-h-65[_ngcontent-%COMP%]{padding:0 65px}.p-70[_ngcontent-%COMP%]{padding:70px}.p-t-70[_ngcontent-%COMP%]{padding-top:70px}.p-r-70[_ngcontent-%COMP%]{padding-right:70px}.p-b-70[_ngcontent-%COMP%]{padding-bottom:70px}.p-l-70[_ngcontent-%COMP%]{padding-left:70px}.p-v-70[_ngcontent-%COMP%]{padding:70px 0}.p-h-70[_ngcontent-%COMP%]{padding:0 70px}.p-75[_ngcontent-%COMP%]{padding:75px}.p-t-75[_ngcontent-%COMP%]{padding-top:75px}.p-r-75[_ngcontent-%COMP%]{padding-right:75px}.p-b-75[_ngcontent-%COMP%]{padding-bottom:75px}.p-l-75[_ngcontent-%COMP%]{padding-left:75px}.p-v-75[_ngcontent-%COMP%]{padding:75px 0}.p-h-75[_ngcontent-%COMP%]{padding:0 75px}.p-80[_ngcontent-%COMP%]{padding:80px}.p-t-80[_ngcontent-%COMP%]{padding-top:80px}.p-r-80[_ngcontent-%COMP%]{padding-right:80px}.p-b-80[_ngcontent-%COMP%]{padding-bottom:80px}.p-l-80[_ngcontent-%COMP%]{padding-left:80px}.p-v-80[_ngcontent-%COMP%]{padding:80px 0}.p-h-80[_ngcontent-%COMP%]{padding:0 80px}.no-padding[_ngcontent-%COMP%]{padding:0!important}.no-pad-lr[_ngcontent-%COMP%], .no-pad-rl[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.no-pad-tb[_ngcontent-%COMP%], .no-pad-bt[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.pad-t-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0}.pad-b-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0}.pad-l-only[_ngcontent-%COMP%]{padding-right:0;padding-top:0;padding-bottom:0}.pad-r-only[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-bottom:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], .relative[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%], .absolute[_ngcontent-%COMP%]{position:absolute}.fixed[_ngcontent-%COMP%]{position:fixed}.status-active[_ngcontent-%COMP%]{color:#5cb85c}.status-inactive[_ngcontent-%COMP%]{color:#666f73}.status-deleted[_ngcontent-%COMP%]{color:#000}.status-pending[_ngcontent-%COMP%]{color:orange}.status-approved[_ngcontent-%COMP%]{color:#4461e2}.status-overpaid[_ngcontent-%COMP%]{color:purple}.status-chargeoff[_ngcontent-%COMP%]{color:#f39c12}.status-active-overdue[_ngcontent-%COMP%], .status-block[_ngcontent-%COMP%]{color:red}.status-matured[_ngcontent-%COMP%]{color:#ff4000}.subStatus-contract-termination[_ngcontent-%COMP%]{color:#b3b3b3}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]{background-color:#2af72a}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-progress[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-hold[_ngcontent-%COMP%]{color:#df0101}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}html[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:14px;color:#000000de;line-height:1.5;letter-spacing:normal}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.lh-1[_ngcontent-%COMP%]{line-height:1}.lh-13[_ngcontent-%COMP%]{line-height:1.3}.lh-15[_ngcontent-%COMP%]{line-height:1.5}.bold[_ngcontent-%COMP%], .strong[_ngcontent-%COMP%]{font-weight:700}.no-bold[_ngcontent-%COMP%]{font-weight:400}.italic[_ngcontent-%COMP%], .em[_ngcontent-%COMP%]{font-style:italic}.strike[_ngcontent-%COMP%]{text-decoration:line-through}.normal[_ngcontent-%COMP%]{font-weight:400;font-style:normal}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.w100[_ngcontent-%COMP%]{font-weight:100}.w200[_ngcontent-%COMP%]{font-weight:200}.w300[_ngcontent-%COMP%]{font-weight:300}.w400[_ngcontent-%COMP%]{font-weight:400}.w500[_ngcontent-%COMP%]{font-weight:500}.w600[_ngcontent-%COMP%]{font-weight:600}.w700[_ngcontent-%COMP%]{font-weight:700}.w800[_ngcontent-%COMP%]{font-weight:800}.w900[_ngcontent-%COMP%]{font-weight:900}.f9[_ngcontent-%COMP%]{font-size:9px}.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f15[_ngcontent-%COMP%]{font-size:15px}.f16[_ngcontent-%COMP%]{font-size:16px}.f17[_ngcontent-%COMP%]{font-size:17px}.f18[_ngcontent-%COMP%]{font-size:18px;line-height:30px}.f19[_ngcontent-%COMP%]{font-size:19px}.f20[_ngcontent-%COMP%]{font-size:20px}.f30[_ngcontent-%COMP%]{font-size:30px}.f40[_ngcontent-%COMP%]{font-size:40px}.f50[_ngcontent-%COMP%]{font-size:50px}.f60[_ngcontent-%COMP%]{font-size:60px}.size-small[_ngcontent-%COMP%]{font-size:75%}.size-normal[_ngcontent-%COMP%]{font-size:100%}.size-medium[_ngcontent-%COMP%]{font-size:125%}.size-big[_ngcontent-%COMP%], .size-large[_ngcontent-%COMP%]{font-size:150%}.size-huge[_ngcontent-%COMP%]{font-size:200%}.inherit[_ngcontent-%COMP%]{font:inherit}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.text-rgb-2[_ngcontent-%COMP%]{color:#0003}.text-rgb-3[_ngcontent-%COMP%]{color:#0000004d}.text-rgb-4[_ngcontent-%COMP%]{color:#0006}.text-rgb-5[_ngcontent-%COMP%]{color:#00000080}.no-ul[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]:hover, .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.auto-cell-size[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.ls-0[_ngcontent-%COMP%]{letter-spacing:-3px;white-space:nowrap}.label-field[_ngcontent-%COMP%]{margin-top:32px}.fit[_ngcontent-%COMP%]{max-width:100%}.half-width[_ngcontent-%COMP%]{width:50%}.full-width[_ngcontent-%COMP%]{width:100%}.full-height[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100%}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{max-width:74rem;width:90%}.mw300[_ngcontent-%COMP%]{max-width:300px}.mw400[_ngcontent-%COMP%]{max-width:400px}.mw500[_ngcontent-%COMP%]{max-width:500px}.mw600[_ngcontent-%COMP%]{max-width:600px}.fullwidth[_ngcontent-%COMP%]{width:100%}.zindex-1[_ngcontent-%COMP%]{z-index:1}.zindex-2[_ngcontent-%COMP%]{z-index:2}.zindex-3[_ngcontent-%COMP%]{z-index:3}.zindex-4[_ngcontent-%COMP%]{z-index:4}.container[_ngcontent-%COMP%]{padding-bottom:2%;max-width:100%}.container[_ngcontent-%COMP%]   .transaction-buttons[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:1rem}.container[_ngcontent-%COMP%]   .transaction-buttons[_ngcontent-%COMP%]   .accruals[_ngcontent-%COMP%]{padding-top:1%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 0 3px;margin:0 2%;line-height:25px}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .linked[_ngcontent-%COMP%]{color:#4461e2}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .accrual[_ngcontent-%COMP%]{color:#999}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .down-payment[_ngcontent-%COMP%]{color:#16a085}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .chargeoff[_ngcontent-%COMP%]{color:#f39c12}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .reage[_ngcontent-%COMP%]{color:#e08e0b}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .reamortize[_ngcontent-%COMP%]{color:#4461e2}.select-row[_ngcontent-%COMP%]:hover{cursor:pointer;font-weight:800}.td-min-space[_ngcontent-%COMP%]{min-width:60px}.filter-box[_ngcontent-%COMP%]{min-width:280px}.transaction-button[_ngcontent-%COMP%]{min-width:180px}.action-button[_ngcontent-%COMP%]{width:100%;height:100%}"]})}}return e})();var Hp=()=>["header","header-amount","header-total-cost","header-installment-totals"];function Gp(e,r){e&1&&(i(0,"th",24),t(1,"#"),a())}function Up(e,r){if(e&1&&(i(0,"td",25),t(1),a()),e&2){let n=r.index;o(),x(n+1)}}function $p(e,r){e&1&&(i(0,"td",26),t(1,"\xA0"),a())}function Wp(e,r){e&1&&(i(0,"th",24),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Date")))}function Qp(e,r){if(e&1&&(i(0,"td",25),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.dueDate))}}function Yp(e,r){e&1&&(i(0,"td",26),t(1,`
        `),i(2,"b"),t(3),s(4,"translate"),a(),t(5,`
      `),a()),e&2&&(o(3),f(" ",p(4,1,"labels.inputs.Total"),""))}function Kp(e,r){e&1&&(i(0,"th",27),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Balance Of Loan")))}function Jp(e,r){if(e&1&&(i(0,"td",28),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.principalLoanBalanceOutstanding))}}function Zp(e,r){e&1&&(i(0,"td",26),t(1,"\xA0"),a())}function Xp(e,r){e&1&&(i(0,"th",27),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Principal Due")))}function tc(e,r){if(e&1&&(i(0,"td",28),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.principalDue))}}function ec(e,r){if(e&1&&(i(0,"td",29),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C();o(3),f(`
          `,vt(4,1,n.originalScheduleDetails.totalPrincipalExpected,n.currency.code,"symbol-narrow","1.2-2"),`
        `)}}function nc(e,r){e&1&&(i(0,"th",27),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Interest")))}function ic(e,r){if(e&1&&(i(0,"td",28),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.interestOriginalDue))}}function ac(e,r){if(e&1&&(i(0,"td",29),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C();o(3),f(`
          `,vt(4,1,n.originalScheduleDetails.totalInterestCharged,n.currency.code,"symbol-narrow","1.2-2"),`
        `)}}function oc(e,r){e&1&&(i(0,"th",27),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Fees")))}function rc(e,r){if(e&1&&(i(0,"td",28),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.feeChargesDue))}}function lc(e,r){if(e&1&&(i(0,"td",29),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C();o(3),f(`
          `,vt(4,1,n.originalScheduleDetails.totalFeeChargesCharged,n.currency.code,"symbol-narrow","1.2-2"),`
        `)}}function mc(e,r){e&1&&(i(0,"th",27),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Penalties")))}function sc(e,r){if(e&1&&(i(0,"td",28),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.penaltyChargesDue))}}function pc(e,r){if(e&1&&(i(0,"td",29),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C();o(3),f(`
          `,vt(4,1,n.originalScheduleDetails.totalPenaltyChargesCharged,n.currency.code,"symbol-narrow","1.2-2"),`
        `)}}function cc(e,r){e&1&&(i(0,"th",27),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Outstanding")))}function dc(e,r){if(e&1&&(i(0,"td",28),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.totalOutstandingForPeriod))}}function uc(e,r){if(e&1&&(i(0,"td",29),t(1,`
        `),i(2,"b"),t(3),s(4,"currency"),a(),t(5,`
      `),a()),e&2){let n=C();o(3),f(`
          `,vt(4,1,n.originalScheduleDetails.totalRepaymentExpected,n.currency.code,"symbol-narrow","1.2-2"),`
        `)}}function xc(e,r){e&1&&g(0,"th",30),e&2&&ue("colspan",2)}function fc(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",2),o(),f(`
        `,p(2,2,"labels.inputs.Loan Amount and Balance"),`
      `))}function gc(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",3),o(),f(`
        `,p(2,2,"labels.inputs.Total Cost of Loan"),`
      `))}function _c(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(ue("colspan",1),o(),f(`
        `,p(2,2,"labels.inputs.Installment Totals"),`
      `))}function Cc(e,r){e&1&&g(0,"tr",31)}function hc(e,r){e&1&&g(0,"tr",31)}function vc(e,r){e&1&&g(0,"tr",32)}function bc(e,r){e&1&&g(0,"tr",33)}var ti=(()=>{class e{constructor(n){this.route=n,this.displayedColumns=["number","date","balanceOfLoan","principalDue","interest","fees","penalties","outstanding"],this.currency=null,this.route.parent.data.subscribe(m=>{this.currency=m.loanDetailsData.currency,this.originalScheduleDetails=m.loanDetailsData.originalSchedule})}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-original-schedule-tab"]],decls:108,vars:6,consts:[[1,"container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","number"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","date"],["matColumnDef","balanceOfLoan"],["mat-header-cell","","class","r-amount",4,"matHeaderCellDef"],["mat-cell","","class","r-amount",4,"matCellDef"],["matColumnDef","principalDue"],["mat-footer-cell","","class","r-amount",4,"matFooterCellDef"],["matColumnDef","interest"],["matColumnDef","fees"],["matColumnDef","penalties"],["matColumnDef","outstanding"],["matColumnDef","header"],["mat-header-cell","","class","center",4,"matHeaderCellDef"],["matColumnDef","header-amount"],["matColumnDef","header-total-cost"],["matColumnDef","header-installment-totals"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell",""],["mat-cell",""],["mat-footer-cell",""],["mat-header-cell","",1,"r-amount"],["mat-cell","",1,"r-amount"],["mat-footer-cell","",1,"r-amount"],["mat-header-cell","",1,"center"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"table",1),t(3,`
    `),b(4,2),t(5,`
      `),d(6,Gp,2,0,"th",3),t(7,`
      `),d(8,Up,2,1,"td",4),t(9,`
      `),d(10,$p,2,0,"td",5),t(11,`
    `),S(),t(12,`

    `),b(13,6),t(14,`
      `),d(15,Wp,3,3,"th",3),t(16,`
      `),d(17,Qp,3,3,"td",4),t(18,`
      `),d(19,Yp,6,3,"td",5),t(20,`
    `),S(),t(21,`

    `),b(22,7),t(23,`
      `),d(24,Kp,3,3,"th",8),t(25,`
      `),d(26,Jp,3,3,"td",9),t(27,`
      `),d(28,Zp,2,0,"td",5),t(29,`
    `),S(),t(30,`

    `),b(31,10),t(32,`
      `),d(33,Xp,3,3,"th",8),t(34,`
      `),d(35,tc,3,3,"td",9),t(36,`
      `),d(37,ec,6,6,"td",11),t(38,`
    `),S(),t(39,`

    `),b(40,12),t(41,`
      `),d(42,nc,3,3,"th",8),t(43,`
      `),d(44,ic,3,3,"td",9),t(45,`
      `),d(46,ac,6,6,"td",11),t(47,`
    `),S(),t(48,`

    `),b(49,13),t(50,`
      `),d(51,oc,3,3,"th",8),t(52,`
      `),d(53,rc,3,3,"td",9),t(54,`
      `),d(55,lc,6,6,"td",11),t(56,`
    `),S(),t(57,`

    `),b(58,14),t(59,`
      `),d(60,mc,3,3,"th",8),t(61,`
      `),d(62,sc,3,3,"td",9),t(63,`
      `),d(64,pc,6,6,"td",11),t(65,`
    `),S(),t(66,`

    `),b(67,15),t(68,`
      `),d(69,cc,3,3,"th",8),t(70,`
      `),d(71,dc,3,3,"td",9),t(72,`
      `),d(73,uc,6,6,"td",11),t(74,`
    `),S(),t(75,`

    `),t(76,`
    `),b(77,16),t(78,`
      `),d(79,xc,1,1,"th",17),t(80,`
    `),S(),t(81,`

    `),t(82,`
    `),b(83,18),t(84,`
      `),d(85,fc,3,4,"th",17),t(86,`
    `),S(),t(87,`

    `),b(88,19),t(89,`
      `),d(90,gc,3,4,"th",17),t(91,`
    `),S(),t(92,`

    `),b(93,20),t(94,`
      `),d(95,_c,3,4,"th",17),t(96,`
    `),S(),t(97,`

    `),d(98,Cc,1,0,"tr",21),t(99,`
    `),d(100,hc,1,0,"tr",21),t(101,`
    `),d(102,vc,1,0,"tr",22),t(103,`
    `),d(104,bc,1,0,"tr",23),t(105,`
  `),a(),t(106,`
`),a(),t(107,`
`)),m&2&&(o(2),c("dataSource",l.originalScheduleDetails.periods),o(96),c("matHeaderRowDef",N(5,Hp)),o(2),c("matHeaderRowDef",l.displayedColumns),o(2),c("matRowDefColumns",l.displayedColumns),o(2),c("matFooterRowDef",l.displayedColumns))},dependencies:[A,ye,w,Lt,L,Rt,Le,kt,Bt,Nt,Ft,Vt,Rn,Fn,jt,zt,qt,Ht,Bn,kn,Wt],styles:["table[_ngcontent-%COMP%]{width:100%;margin:3% 0%}.container[_ngcontent-%COMP%]{padding-bottom:2%}"]})}}return e})();var Sc=()=>[10,25,50,100];function yc(e,r){e&1&&(i(0,"th",11),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Name")))}function Dc(e,r){if(e&1&&(i(0,"td",12),t(1),a()),e&2){let n=r.$implicit;o(),V("",n.name,",",n.currency.displaySymbol,"")}}function Tc(e,r){e&1&&(i(0,"th",11),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Type")))}function Pc(e,r){if(e&1&&(i(0,"td",12),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeCalculationType.value)}}function Mc(e,r){e&1&&(i(0,"th",11),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function Oc(e,r){if(e&1&&(i(0,"td",12),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.amount))}}function Ic(e,r){e&1&&(i(0,"th",11),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Collected On")))}function Ec(e,r){if(e&1&&(i(0,"td",12),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeTimeType.value)}}function Ac(e,r){e&1&&g(0,"tr",13)}function wc(e,r){e&1&&g(0,"tr",14)}var ei=(()=>{class e{constructor(n){this.route=n,this.displayedColumns=["name","type","amount","collectedon"],this.route.parent.data.subscribe(m=>{this.loanDetails=m.loanDetailsData})}ngOnInit(){this.overdueCharges=this.loanDetails.overdueCharges,this.dataSource=new se(this.overdueCharges),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-overdue-charges-tab"]],viewQuery:function(m,l){if(m&1&&(ee(we,7),ee(Le,7)),m&2){let u;ne(u=ie())&&(l.paginator=u.first),ne(u=ie())&&(l.sort=u.first)}},decls:40,vars:5,consts:[[1,"container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","amount"],["matColumnDef","collectedon"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"table",1),t(3,`
    `),b(4,2),t(5,`
      `),d(6,yc,3,3,"th",3),t(7,`
      `),d(8,Dc,2,2,"td",4),t(9,`
    `),S(),t(10,`

    `),b(11,5),t(12,`
      `),d(13,Tc,3,3,"th",3),t(14,`
      `),d(15,Pc,2,1,"td",4),t(16,`
    `),S(),t(17,`

    `),b(18,6),t(19,`
      `),d(20,Mc,3,3,"th",3),t(21,`
      `),d(22,Oc,3,3,"td",4),t(23,`
    `),S(),t(24,`

    `),b(25,7),t(26,`
      `),d(27,Ic,3,3,"th",3),t(28,`
      `),d(29,Ec,2,1,"td",4),t(30,`
    `),S(),t(31,`

    `),d(32,Ac,1,0,"tr",8),t(33,`
    `),d(34,wc,1,0,"tr",9),t(35,`
  `),a(),t(36,`

  `),g(37,"mat-paginator",10),t(38,`
`),a(),t(39,`
`)),m&2&&(o(2),c("dataSource",l.dataSource),o(30),c("matHeaderRowDef",l.displayedColumns),o(2),c("matRowDefColumns",l.displayedColumns),o(3),c("pageSizeOptions",N(4,Sc)))},dependencies:[A,w,L,Rt,Le,kt,Bt,Nt,Ln,Ft,Vt,jt,zt,qt,Ht,we,Wt],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:3%}"]})}}return e})();var Rc=()=>[50,100,200],Fc=e=>[e];function Bc(e,r){e&1&&(i(0,"th",22),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function kc(e,r){if(e&1&&(i(0,"td",23),t(1),a()),e&2){let n=r.$implicit;o(),x(n.name)}}function Nc(e,r){e&1&&(i(0,"th",22),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Fee/Penalty")))}function Vc(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Penalty")))}function jc(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Fee")))}function qc(e,r){if(e&1&&(i(0,"td",23),t(1,`
        `),d(2,Vc,3,3,"span",24),t(3,`
        `),d(4,jc,3,3,"span",24),t(5,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.penalty),o(2),c("ngIf",!n.penalty)}}function zc(e,r){e&1&&(i(0,"th",22),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Payment due at")))}function Hc(e,r){if(e&1&&(i(0,"td",23),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeTimeType.value)}}function Gc(e,r){e&1&&(i(0,"th",22),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Submitted On")))}function Uc(e,r){if(e&1&&(i(0,"td",23),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.submittedOnDate))}}function $c(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Due As Of")," "))}function Wc(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Submitted On")," "))}function Qc(e,r){if(e&1&&(i(0,"th",25),t(1,`
        `),d(2,$c,3,3,"span",24),t(3,`
        `),d(4,Wc,3,3,"span",24),t(5,`
      `),a()),e&2){let n=C();c("hide",n.useDueDate),o(2),c("ngIf",n.useDueDate),o(2),c("ngIf",!n.useDueDate)}}function Yc(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),x(p(2,1,n.dueDate))}}function Kc(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),x(p(2,1,n.submittedOnDate))}}function Jc(e,r){if(e&1&&(i(0,"td",23),t(1,`
        `),d(2,Yc,3,3,"span",24),t(3,`
        `),d(4,Kc,3,3,"span",24),t(5,`
      `),a()),e&2){let n=C();o(2),c("ngIf",n.useDueDate),o(2),c("ngIf",!n.useDueDate)}}function Zc(e,r){e&1&&(i(0,"th",22),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Calculation Type")))}function Xc(e,r){if(e&1&&(i(0,"td",23),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeCalculationType.value)}}function td(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Due")))}function ed(e,r){if(e&1&&(i(0,"td",27),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit;o(),f(`
        `,vt(2,1,n.amount,n.currency.code,"symbol-narrow","1.2-2"),`
      `)}}function nd(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Paid")))}function id(e,r){if(e&1&&(i(0,"td",27),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit;o(),f(`
        `,vt(2,1,n.amountPaid,n.currency.code,"symbol-narrow","1.2-2"),`
      `)}}function ad(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Waived"),`
      `))}function od(e,r){if(e&1&&(i(0,"td",27),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit;o(),f(`
        `,vt(2,1,n.amountWaived,n.currency.code,"symbol-narrow","1.2-2"),`
      `)}}function rd(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Outstanding"),`
      `))}function ld(e,r){if(e&1&&(i(0,"td",27),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit;o(),f(`
        `,vt(2,1,n.amountOutstanding,n.currency.code,"symbol-narrow","1.2-2"),`
      `)}}function md(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
        `,p(2,1,"labels.inputs.Actions"),`
      `))}function sd(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
          `),i(2,"button",31),s(3,"translate"),T("click",function(l){P(n);let u=C().$implicit,_=C();return _.routeEdit(l),M(_.editCharge(u))}),t(4,`
            `),g(5,"i",32),t(6,`
          `),a(),t(7,`
          `),i(8,"button",33),s(9,"translate"),T("click",function(l){P(n);let u=C().$implicit,_=C();return _.routeEdit(l),M(_.deleteCharge(u.id))}),t(10,`
            `),g(11,"i",34),t(12,`
          `),a(),t(13,`
        `),a()}e&2&&(o(2),Q("matTooltip",p(3,2,"tooltips.Edit Charge")),o(6),Q("matTooltip",p(9,4,"tooltips.Delete Charge")))}function pd(e,r){if(e&1){let n=O();i(0,"button",35),s(1,"translate"),T("click",function(l){P(n);let u=C().$implicit,_=C();return _.routeEdit(l),M(_.adjustCharge(u.id))}),t(2,`
          `),g(3,"i",32),t(4,`
        `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Adjust Charge"))}function cd(e,r){if(e&1){let n=O();i(0,"button",31),s(1,"translate"),T("click",function(l){P(n);let u=C().$implicit,_=C();return _.routeEdit(l),M(_.payCharge(u.id))}),t(2,`
          `),g(3,"i",36),t(4,`
        `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Pay Charge"))}function dd(e,r){if(e&1){let n=O();i(0,"button",31),s(1,"translate"),T("click",function(l){P(n);let u=C().$implicit,_=C();return _.routeEdit(l),M(_.waiveCharge(u.id))}),t(2,`
          `),g(3,"i",37),t(4,`
        `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Waive Charge"))}function ud(e,r){if(e&1&&(i(0,"td",28),t(1,`
        `),d(2,sd,14,6,"span",24),t(3,`
        `),d(4,pd,5,3,"button",29),t(5,`
        `),d(6,cd,5,3,"button",30),t(7,`
        `),d(8,dd,5,3,"button",30),t(9,`
      `),a()),e&2){let n=r.$implicit,m=C();o(2),c("ngIf",m.status==="Submitted and pending approval"),o(2),c("ngIf",!n.paid&&m.status==="Active"),o(2),c("ngIf",n.chargePayable&&!n.paid&&m.status==="Active"),o(2),c("ngIf",!n.actionFlag)}}function xd(e,r){e&1&&g(0,"tr",38)}function fd(e,r){if(e&1&&g(0,"tr",39),e&2){let n=r.$implicit;c("routerLink",Te(1,Fc,n.id))}}var ni=(()=>{class e{constructor(n,m,l,u,_,h,y,D){this.loansService=n,this.route=m,this.dateUtils=l,this.router=u,this.translateService=_,this.dialog=h,this.settingsService=y,this.systemService=D,this.displayedColumns=["name","feepenalty","paymentdueat","dueDate","calculationtype","due","paid","waived","outstanding","actions"],this.useDueDate=!0,this.route.parent.data.subscribe(I=>{this.loanDetails=I.loanDetailsData})}ngOnInit(){this.systemService.getConfigurationByName("charge-accrual-date").subscribe(m=>{this.useDueDate=m.stringValue==="due-date"}),this.chargesData=this.loanDetails.charges,this.status=this.loanDetails.status.value;let n;this.chargesData.forEach(m=>{m.dueDate=this.dateUtils.parseDate(m.dueDate),m.paid||m.waived||m.chargeTimeType.value==="Disbursement"||this.loanDetails.status.value!=="Active"?n=!0:n=!1,m.actionFlag=n}),this.chargesData=this.chargesData.sort(function(m,l){return l.dueDate-m.dueDate}),this.dataSource=new se(this.chargesData),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}adjustCharge(n){this.router.navigate([`${n}/adjustment`],{relativeTo:this.route})}payCharge(n){let m=[new fe({controlName:"transactionDate",label:"Payment Date",value:"",type:"date",required:!0})],l={title:`Pay Charge ${n}`,layout:{addButtonText:"Confirm"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h=this.settingsService.language.code,y=this.settingsService.dateFormat,D=_.data.value.transactionDate,I={transactionDate:this.dateUtils.formatDate(D,y),dateFormat:y,locale:h};this.loansService.executeLoansAccountChargesCommand(this.loanDetails.id,"pay",I,n).subscribe(()=>{this.reload()})}})}waiveCharge(n){this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Waive Charge"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want to waive charge with id")+`${n} ?`,type:"Basic"}}).afterClosed().subscribe(l=>{l.confirm&&this.loansService.executeLoansAccountChargesCommand(this.loanDetails.id,"waive",{},n).subscribe(()=>{this.reload()})})}editCharge(n){let m=[new pe({controlName:"amount",label:"Amount",value:n.amount||n.amountOrPercentage,type:"number",required:!0})],l={title:`Edit Charge ${n.id}`,layout:{addButtonText:"Confirm"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h=this.settingsService.language.code,y=this.settingsService.dateFormat,D=ft(W({},_.data.value),{dateFormat:y,locale:h});this.loansService.editLoansAccountCharge(this.loanDetails.id,D,n.id).subscribe(()=>{this.reload()})}})}deleteCharge(n){this.dialog.open(xe,{data:{deleteContext:`charge id:${n}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteLoansAccountCharge(this.loanDetails.id,n).subscribe(()=>{this.reload()})})}routeEdit(n){n.stopPropagation()}reload(){let n=this.loanDetails.clientId,m=this.router.url;this.router.navigateByUrl(`/clients/${n}/loans-accounts`,{skipLocationChange:!0}).then(()=>this.router.navigate([m]))}static{this.\u0275fac=function(m){return new(m||e)(v(R),v(B),v(Y),v($),v(ve),v(Zt),v(G),v(On))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-charges-tab"]],viewQuery:function(m,l){if(m&1&&(ee(we,7),ee(Le,7)),m&2){let u;ne(u=ie())&&(l.paginator=u.first),ne(u=ie())&&(l.sort=u.first)}},decls:89,vars:5,consts:[[1,"tab-container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","feepenalty"],["matColumnDef","paymentdueat"],["matColumnDef","submittedDate"],["matColumnDef","dueDate"],["mat-header-cell","","mat-sort-header","",3,"hide",4,"matHeaderCellDef"],["matColumnDef","calculationtype"],["matColumnDef","due"],["mat-header-cell","","class","r-amount","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","","class","r-amount",4,"matCellDef"],["matColumnDef","paid"],["matColumnDef","waived"],["matColumnDef","outstanding"],["matColumnDef","actions"],["mat-cell","","class","center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","select-row",3,"routerLink",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[4,"ngIf"],["mat-header-cell","","mat-sort-header","",3,"hide"],["mat-header-cell","","mat-sort-header","",1,"r-amount"],["mat-cell","",1,"r-amount"],["mat-cell","",1,"center"],["class","account-action-button","mat-raised-button","","color","accent",3,"matTooltip","click",4,"ngIf"],["class","account-action-button","mat-raised-button","","color","primary",3,"matTooltip","click",4,"ngIf"],["mat-raised-button","","color","primary",1,"account-action-button",3,"click","matTooltip"],[1,"fa","fa-pencil"],["mat-raised-button","","color","warn",1,"account-action-button",3,"click","matTooltip"],[1,"fa","fa-trash"],["mat-raised-button","","color","accent",1,"account-action-button",3,"click","matTooltip"],[1,"fa","fa-dollar"],[1,"fa","fa-flag"],["mat-header-row",""],["mat-row","",1,"select-row",3,"routerLink"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"table",1),t(3,`
    `),b(4,2),t(5,`
      `),d(6,Bc,3,3,"th",3),t(7,`
      `),d(8,kc,2,1,"td",4),t(9,`
    `),S(),t(10,`

    `),b(11,5),t(12,`
      `),d(13,Nc,3,3,"th",3),t(14,`
      `),d(15,qc,6,2,"td",4),t(16,`
    `),S(),t(17,`

    `),b(18,6),t(19,`
      `),d(20,zc,3,3,"th",3),t(21,`
      `),d(22,Hc,2,1,"td",4),t(23,`
    `),S(),t(24,`

    `),b(25,7),t(26,`
      `),d(27,Gc,3,3,"th",3),t(28,`
      `),d(29,Uc,3,3,"td",4),t(30,`
    `),S(),t(31,`

    `),b(32,8),t(33,`
      `),d(34,Qc,6,3,"th",9),t(35,`
      `),d(36,Jc,6,2,"td",4),t(37,`
    `),S(),t(38,`

    `),b(39,10),t(40,`
      `),d(41,Zc,3,3,"th",3),t(42,`
      `),d(43,Xc,2,1,"td",4),t(44,`
    `),S(),t(45,`

    `),b(46,11),t(47,`
      `),d(48,td,3,3,"th",12),t(49,`
      `),d(50,ed,3,6,"td",13),t(51,`
    `),S(),t(52,`

    `),b(53,14),t(54,`
      `),d(55,nd,3,3,"th",12),t(56,`
      `),d(57,id,3,6,"td",13),t(58,`
    `),S(),t(59,`

    `),b(60,15),t(61,`
      `),d(62,ad,3,3,"th",12),t(63,`
      `),d(64,od,3,6,"td",13),t(65,`
    `),S(),t(66,`

    `),b(67,16),t(68,`
      `),d(69,rd,3,3,"th",12),t(70,`
      `),d(71,ld,3,6,"td",13),t(72,`
    `),S(),t(73,`

    `),b(74,17),t(75,`
      `),d(76,md,3,3,"th",12),t(77,`
      `),d(78,ud,10,4,"td",18),t(79,`
    `),S(),t(80,`

    `),d(81,xd,1,0,"tr",19),t(82,`
    `),d(83,fd,1,3,"tr",20),t(84,`
  `),a(),t(85,`

  `),g(86,"mat-paginator",21),t(87,`
`),a(),t(88,`
`)),m&2&&(o(2),c("dataSource",l.dataSource),o(79),c("matHeaderRowDef",l.displayedColumns),o(2),c("matRowDefColumns",l.displayedColumns),o(3),c("pageSizeOptions",N(4,Rc)))},dependencies:[A,k,ye,w,H,j,Lt,L,Rt,Le,kt,Bt,Nt,Ln,Ft,Vt,me,jt,zt,qt,Ht,we],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:3%}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .select-row[_ngcontent-%COMP%]:hover{cursor:pointer}"]})}}return e})();var ii=(()=>{class e{constructor(n){this.route=n,this.entityDatatable=null,this.entityId=this.route.parent.parent.snapshot.paramMap.get("loanId"),this.entityDatatable=null,this.route.data.subscribe(m=>{this.entityDatatable=m.loanDatatable,this.multiRowDatatableFlag=this.entityDatatable.columnHeaders[0].columnName==="id"})}ngOnInit(){this.route.parent.parent.params.subscribe(n=>{this.entityId=n.loanId})}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-datatable-tab"]],decls:6,vars:3,consts:[[1,"tab-container","mat-typography"],["entityType","Loan Account",3,"entityId","multiRowDatatableFlag","entityDatatable"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mifosx-entity-datatable-tab",1),t(3,`
  `),a(),t(4,`
`),a(),t(5,`
`)),m&2&&(o(2),c("entityId",l.entityId)("multiRowDatatableFlag",l.multiRowDatatableFlag)("entityDatatable",l.entityDatatable))},dependencies:[A,w,uo],encapsulation:2})}}return e})();var gd=()=>["../../general"];function _d(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Closed Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Cd(e,r){if(e&1&&(i(0,"button",12),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.closeLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var ai=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createCloseForm()}createCloseForm(){this.closeLoanForm=this.formBuilder.group({transactionDate:[new Date(this.dataObject.date)||new Date,q.required],note:[]})}submit(){let n=this.closeLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.closeLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.submitLoanActionButton(this.loanId,_,"close").subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-close"]],inputs:{dataObject:"dataObject"},decls:49,vars:18,consts:[["closedDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,_d,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"textarea",8),t(33,`
          `),a(),t(34,`
        `),a(),t(35,`

        `),i(36,"mat-card-actions",9),t(37,`
          `),i(38,"button",10),t(39),s(40,"translate"),a(),t(41,`
          `),d(42,Cd,3,4,"button",11),t(43,`
        `),a(),t(44,`
      `),a(),t(45,`
    `),a(),t(46,`
  `),a(),t(47,`
`),a(),t(48,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.closeLoanForm),o(9),x(p(14,11,"labels.inputs.Closed On")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.closeLoanForm.controls.transactionDate.hasError("required")),o(6),x(p(30,13,"labels.inputs.Note")),o(9),c("routerLink",N(17,gd)),o(),f(`
            `,p(40,15,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","CLOSE_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var hd=()=>["../../general"];function vd(e,r){if(e&1){let n=O();i(0,"button",7),T("click",function(){P(n);let l=C();return M(l.submit())}),t(1),s(2,"translate"),a()}e&2&&(o(),f(`
            `,p(2,1,"labels.buttons.Submit"),`
          `))}var oi=(()=>{class e{constructor(n,m,l,u){this.loanService=n,this.formBuilder=m,this.route=l,this.router=u}ngOnInit(){this.note=this.formBuilder.control("")}submit(){let n=this.route.snapshot.params.loanId;this.loanService.loanActionButtons(n,"undoapproval",{note:this.note.value}).subscribe(m=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(R),v(it),v(B),v($))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-undo-approval"]],decls:30,vars:10,consts:[[1,"container","mat-elevation-z8"],[1,"layout-column"],[1,"flex-fill"],["matInput","",3,"formControl"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"mat-card-content"),t(5,`
      `),i(6,"div",1),t(7,`
        `),i(8,"mat-form-field",2),t(9,`
          `),i(10,"mat-label"),t(11),s(12,"translate"),a(),t(13,`
          `),g(14,"textarea",3),t(15,`
        `),a(),t(16,`

        `),i(17,"mat-card-actions",4),t(18,`
          `),i(19,"button",5),t(20),s(21,"translate"),a(),t(22,`
          `),d(23,vd,3,3,"button",6),t(24,`
        `),a(),t(25,`
      `),a(),t(26,`
    `),a(),t(27,`
  `),a(),t(28,`
`),a(),t(29,`
`)),m&2&&(o(11),x(p(12,5,"labels.inputs.Note")),o(3),c("formControl",l.note),o(5),c("routerLink",N(9,hd)),o(),f(`
            `,p(21,7,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","APPROVALUNDO_LOAN"))},dependencies:[A,w,nt,J,ke,H,et,mt,ht,X,Z,at,j,ot,L],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var bd=()=>["../../general"];function Sd(e,r){if(e&1&&(i(0,"mat-option",13),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.displayName,`
              `)}}function yd(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Loan Officer")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Dd(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Assignment Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Td(e,r){if(e&1&&(i(0,"button",14),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.assignOfficerForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var ri=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createassignOfficerForm(),this.loanOfficers=this.dataObject.loanOfficerOptions}createassignOfficerForm(){this.assignOfficerForm=this.formBuilder.group({toLoanOfficerId:["",q.required],assignmentDate:[new Date,q.required]})}submit(){let n=this.assignOfficerForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.assignOfficerForm.value.assignmentDate;n.assignmentDate instanceof Date&&(n.assignmentDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.fromLoanOfficerId=this.dataObject.loanOfficerId||"",this.loanService.loanActionButtons(this.loanId,"assignLoanOfficer",_).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-assign-loan-officer"]],inputs:{dataObject:"dataObject"},decls:54,vars:20,consts:[["assignOnDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["required","","formControlName","toLoanOfficerId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"click"],["matInput","","required","","formControlName","assignmentDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field"),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),i(16,"mat-select",4),t(17,`
              `),d(18,Sd,2,2,"mat-option",5),t(19,`
            `),a(),t(20,`
            `),d(21,yd,8,9,"mat-error",6),t(22,`
          `),a(),t(23,`

          `),i(24,"mat-form-field",7),T("click",function(){P(u);let h=F(35);return M(h.open())}),t(25,`
            `),i(26,"mat-label"),t(27),s(28,"translate"),a(),t(29,`
            `),g(30,"input",8),t(31,`
            `),g(32,"mat-datepicker-toggle",9),t(33,`
            `),g(34,"mat-datepicker",null,0),t(36,`
            `),d(37,Dd,8,9,"mat-error",6),t(38,`
          `),a(),t(39,`
        `),a(),t(40,`

        `),i(41,"mat-card-actions",10),t(42,`
          `),i(43,"button",11),t(44),s(45,"translate"),a(),t(46,`
          `),d(47,Td,3,4,"button",12),t(48,`
        `),a(),t(49,`
      `),a(),t(50,`
    `),a(),t(51,`
  `),a(),t(52,`
`),a(),t(53,`
`)}if(m&2){let u=F(35);o(4),c("formGroup",l.assignOfficerForm),o(9),f(" ",p(14,13,"labels.inputs.To Loan Officer"),""),o(5),c("ngForOf",l.loanOfficers),o(3),c("ngIf",l.assignOfficerForm.controls.toLoanOfficerId.hasError("required")),o(6),x(p(28,15,"labels.inputs.Assignment Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.assignOfficerForm.controls.assignmentDate.hasError("required")),o(6),c("routerLink",N(19,bd)),o(),f(`
            `,p(45,17,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","BULKREASSIGN_LOAN")}},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var Pd=()=>["../../general"];function Md(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Od(e,r){if(e&1&&(i(0,"button",17),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.foreclosureForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Foreclosure"),`
          `)}}var li=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createforeclosureForm(),this.onChanges()}createforeclosureForm(){this.foreclosureForm=this.formBuilder.group({transactionDate:[this.dataObject.date&&new Date(this.dataObject.date),q.required],outstandingPrincipalPortion:[{value:this.dataObject.principalPortion||0,disabled:!0}],outstandingInterestPortion:[{value:this.dataObject.interestPortion||0,disabled:!0}],outstandingFeeChargesPortion:[{value:this.dataObject.feeChargesPortion||0,disabled:!0}],outstandingPenaltyChargesPortion:[{value:this.dataObject.penaltyChargesPortion||0,disabled:!0}],transactionAmount:[{value:this.dataObject.amount,disabled:!0}],note:["",q.required]})}onChanges(){this.foreclosureForm.get("transactionDate").valueChanges.subscribe(n=>{this.retrieveLoanForeclosureTemplate(n)})}retrieveLoanForeclosureTemplate(n){let m=this.settingsService.dateFormat,l=this.dateUtils.formatDate(n,m),u={command:"foreclosure",dateFormat:this.settingsService.dateFormat,locale:this.settingsService.language.code,transactionDate:l};this.loanService.getForeclosureData(this.loanId,u).subscribe(_=>{this.foreclosuredata=_,this.foreclosureForm.patchValue({outstandingPrincipalPortion:this.foreclosuredata.principalPortion,outstandingInterestPortion:this.foreclosuredata.interestPortion,outstandingFeeChargesPortion:this.foreclosuredata.feeChargesPortion,outstandingPenaltyChargesPortion:this.foreclosuredata.penaltyChargesPortion})})}submit(){let n=this.foreclosureForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.foreclosureForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.loanForclosureData(this.loanId,_).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-foreclosure"]],inputs:{dataObject:"dataObject"},decls:94,vars:33,consts:[["transactionsDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","outstandingPrincipalPortion"],["matInput","","formControlName","outstandingInterestPortion"],["matInput","","formControlName","outstandingFeeChargesPortion"],["matInput","","required","","formControlName","outstandingPenaltyChargesPortion"],["matInput","","required","","formControlName","transactionAmount"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,Md,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"input",8),t(33,`
          `),a(),t(34,`

          `),i(35,"mat-form-field"),t(36,`
            `),i(37,"mat-label"),t(38),s(39,"translate"),a(),t(40,`
            `),g(41,"input",9),t(42,`
          `),a(),t(43,`

          `),i(44,"mat-form-field"),t(45,`
            `),i(46,"mat-label"),t(47),s(48,"translate"),a(),t(49,`
            `),g(50,"input",10),t(51,`
          `),a(),t(52,`

          `),i(53,"mat-form-field"),t(54,`
            `),i(55,"mat-label"),t(56),s(57,"translate"),a(),t(58,`
            `),g(59,"input",11),t(60,`
          `),a(),t(61,`

          `),i(62,"mat-form-field"),t(63,`
            `),i(64,"mat-label"),t(65),s(66,"translate"),a(),t(67,`
            `),g(68,"input",12),t(69,`
          `),a(),t(70,`

          `),i(71,"mat-form-field"),t(72,`
            `),i(73,"mat-label"),t(74),s(75,"translate"),a(),t(76,`
            `),g(77,"textarea",13),t(78,`
          `),a(),t(79,`
        `),a(),t(80,`

        `),i(81,"mat-card-actions",14),t(82,`
          `),i(83,"button",15),t(84),s(85,"translate"),a(),t(86,`
          `),d(87,Od,3,4,"button",16),t(88,`
        `),a(),t(89,`
      `),a(),t(90,`
    `),a(),t(91,`
  `),a(),t(92,`
`),a(),t(93,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.foreclosureForm),o(9),x(p(14,16,"labels.inputs.Transaction Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.foreclosureForm.controls.transactionDate.hasError("required")),o(6),x(p(30,18,"labels.inputs.Principal")),o(9),x(p(39,20,"labels.inputs.Interest")),o(9),x(p(48,22,"labels.inputs.Fee Amount")),o(9),x(p(57,24,"labels.inputs.Penalty Amount")),o(9),x(p(66,26,"labels.inputs.Transaction Amount")),o(9),x(p(75,28,"labels.inputs.Note")),o(9),c("routerLink",N(32,Pd)),o(),f(`
            `,p(85,30,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","FORECLOSURE_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var Id=()=>["../../general"];function Ed(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Ad(e,r){if(e&1){let n=O();i(0,"mat-form-field",16),T("click",function(){P(n);let l=F(11);return M(l.open())}),t(1,`
            `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
            `),g(6,"input",17),t(7,`
            `),g(8,"mat-datepicker-toggle",18),t(9,`
            `),g(10,"mat-datepicker",null,0),t(12,`
            `),d(13,Ed,8,9,"mat-error",10),t(14,`
          `),a()}if(e&2){let n=F(11),m=C();o(3),x(p(4,6,"labels.inputs.Transaction Date")),o(3),c("min",m.minDate)("max",m.maxDate)("matDatepicker",n),o(2),c("for",n),o(5),c("ngIf",m.prepayLoanForm.controls.transactionDate.hasError("required"))}}function wd(e,r){if(e&1&&(i(0,"mifosx-input-amount",19),t(1,`
          `),a()),e&2){let n=C();c("currency",n.currency)("isRequired",!0)("inputFormControl",n.prepayLoanForm.controls.transactionAmount)("inputLabel","Transaction Amount")}}function Ld(e,r){if(e&1&&(i(0,"mat-option",22),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function Rd(e,r){if(e&1&&(i(0,"mat-form-field"),t(1,`
            `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
            `),i(6,"mat-select",20),t(7,`
              `),d(8,Ld,2,2,"mat-option",21),t(9,`
            `),a(),t(10,`
          `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Payment Type")),o(5),c("ngForOf",n.paymentTypes)}}function Fd(e,r){if(e&1){let n=O();i(0,"div",23),t(1,`
            `),i(2,"span",24),T("click",function(){P(n);let l=C();return M(l.addPaymentDetails())}),t(3,`
              `),i(4,"mat-slide-toggle"),t(5,`
                `),i(6,"div",25),t(7,`
                  `),i(8,"span",26),t(9),s(10,"translate"),a(),t(11,`
                `),a(),t(12,`
              `),a(),t(13,`
            `),a(),t(14,`
          `),a()}if(e&2){let n=C();o(6),c("className",n.showPaymentDetails?"enabled":"disabled"),o(3),x(p(10,2,"labels.inputs.Show Payment Details"))}}function Bd(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",27),t(9,`
            `),a(),t(10,`

            `),i(11,"mat-form-field"),t(12,`
              `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
              `),g(17,"input",28),t(18,`
            `),a(),t(19,`

            `),i(20,"mat-form-field"),t(21,`
              `),i(22,"mat-label"),t(23),s(24,"translate"),a(),t(25,`
              `),g(26,"input",29),t(27,`
            `),a(),t(28,`

            `),i(29,"mat-form-field"),t(30,`
              `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
              `),g(35,"input",30),t(36,`
            `),a(),t(37,`

            `),i(38,"mat-form-field"),t(39,`
              `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
              `),g(44,"input",31),t(45,`
            `),a(),t(46,`
          `),S()),e&2&&(o(5),f(" ",p(6,5,"labels.inputs.Account")," #"),o(9),f("",p(15,7,"labels.inputs.Cheque")," #"),o(9),x(p(24,9,"labels.inputs.Routing Code")),o(9),f("",p(33,11,"labels.inputs.Reciept")," #"),o(9),f("",p(42,13,"labels.inputs.Bank")," #"))}function kd(e,r){if(e&1&&(i(0,"button",32),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.prepayLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var mi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.currency=null,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.prepayData=this.dataObject,this.contractTermination=this.dataObject.actionName=="Contract Termination",this.maxDate=this.settingsService.businessDate,this.createprepayLoanForm(),this.contractTermination||this.setPrepayLoanDetails(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}createprepayLoanForm(){this.contractTermination?this.prepayLoanForm=this.formBuilder.group({externalId:[""],note:[""]}):this.prepayLoanForm=this.formBuilder.group({transactionDate:[new Date,q.required],transactionAmount:["",q.required],externalId:[""],paymentTypeId:[""],note:[""]})}setPrepayLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.prepayLoanForm.patchValue({transactionAmount:this.dataObject.amount}),this.prepayLoanForm.get("transactionDate").valueChanges.subscribe(n=>{let m=this.dateUtils.formatDate(n,this.settingsService.dateFormat);this.loanService.getLoanPrepayLoanActionTemplate(this.loanId,m).subscribe(l=>{this.prepayData=l,this.prepayLoanForm.patchValue({transactionAmount:this.prepayData.amount})})})}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.prepayLoanForm.addControl("accountNumber",new K("")),this.prepayLoanForm.addControl("checkNumber",new K("")),this.prepayLoanForm.addControl("routingCode",new K("")),this.prepayLoanForm.addControl("receiptNumber",new K("")),this.prepayLoanForm.addControl("bankNumber",new K(""))):(this.prepayLoanForm.removeControl("accountNumber"),this.prepayLoanForm.removeControl("checkNumber"),this.prepayLoanForm.removeControl("routingCode"),this.prepayLoanForm.removeControl("receiptNumber"),this.prepayLoanForm.removeControl("bankNumber"))}submitRepayment(){let n=this.prepayLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.prepayLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.transactionAmount=_.transactionAmount*1,this.loanService.submitLoanActionButton(this.loanId,_,"repayment").subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}submitContractTermination(){let n=W({},this.prepayLoanForm.value);this.loanService.loanActionButtons(this.loanId,"contractTermination",n).subscribe(m=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}submit(){this.contractTermination?this.submitContractTermination():this.submitRepayment()}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-prepay-loan"]],inputs:{dataObject:"dataObject"},decls:87,vars:42,consts:[["transactionDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click",4,"ngIf"],[1,"layout-row-wrap"],[1,"flex-50","mat-body-strong"],[1,"flex-50","r-amount","right-label"],[3,"currency","isRequired","inputFormControl","inputLabel",4,"ngIf"],["matInput","","formControlName","externalId"],[4,"ngIf"],["class","flex-fill",4,"ngIf"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[3,"currency","isRequired","inputFormControl","inputLabel"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex-fill"],[1,"expandcollapsebutton","m-l-10","m-t-40","flex-75",3,"click"],[3,"className"],[1,"m-l-10"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){m&1&&(i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return l.submit()}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),d(10,Ad,15,8,"mat-form-field",4),t(11,`

          `),i(12,"div",5),t(13,`
            `),i(14,"div",6),t(15),s(16,"translate"),a(),t(17,`

            `),i(18,"div",7),t(19),s(20,"formatNumber"),a(),t(21,`

            `),i(22,"div",6),t(23),s(24,"translate"),a(),t(25,`

            `),i(26,"div",7),t(27),s(28,"formatNumber"),a(),t(29,`

            `),i(30,"div",6),t(31),s(32,"translate"),a(),t(33,`

            `),i(34,"div",7),t(35),s(36,"formatNumber"),a(),t(37,`

            `),i(38,"div",6),t(39),s(40,"translate"),a(),t(41,`

            `),i(42,"div",7),t(43),s(44,"formatNumber"),a(),t(45,`
          `),a(),t(46,`

          `),d(47,wd,2,4,"mifosx-input-amount",8),t(48,`

          `),i(49,"mat-form-field"),t(50,`
            `),i(51,"mat-label"),t(52),s(53,"translate"),a(),t(54,`
            `),g(55,"input",9),t(56,`
          `),a(),t(57,`

          `),d(58,Rd,11,4,"mat-form-field",10),t(59,`

          `),d(60,Fd,15,4,"div",11),t(61,`

          `),d(62,Bd,47,15,"ng-container",10),t(63,`

          `),i(64,"mat-form-field"),t(65,`
            `),i(66,"mat-label"),t(67),s(68,"translate"),a(),t(69,`
            `),g(70,"textarea",12),t(71,`
          `),a(),t(72,`
        `),a(),t(73,`

        `),i(74,"mat-card-actions",13),t(75,`
          `),i(76,"button",14),t(77),s(78,"translate"),a(),t(79,`
          `),d(80,kd,3,4,"button",15),t(81,`
        `),a(),t(82,`
      `),a(),t(83,`
    `),a(),t(84,`
  `),a(),t(85,`
`),a(),t(86,`
`)),m&2&&(o(4),c("formGroup",l.prepayLoanForm),o(6),c("ngIf",!l.contractTermination),o(5),f(`
              `,p(16,19,"labels.inputs.Principal"),`
            `),o(4),f(`
              `,p(20,21,l.prepayData.principalPortion),`
            `),o(4),f(`
              `,p(24,23,"labels.inputs.Interest"),`
            `),o(4),f(`
              `,p(28,25,l.prepayData.interestPortion),`
            `),o(4),f(`
              `,p(32,27,"labels.inputs.Fees"),`
            `),o(4),f(`
              `,p(36,29,l.prepayData.feeChargesPortion),`
            `),o(4),f(`
              `,p(40,31,"labels.inputs.Penalties"),`
            `),o(4),f(`
              `,p(44,33,l.prepayData.penaltyChargesPortion),`
            `),o(4),c("ngIf",!l.contractTermination),o(5),x(p(53,35,"labels.inputs.External Id")),o(6),c("ngIf",!l.contractTermination),o(2),c("ngIf",!l.contractTermination),o(2),c("ngIf",l.showPaymentDetails),o(5),x(p(68,37,"labels.inputs.Note")),o(9),c("routerLink",N(41,Id)),o(),f(`
            `,p(78,39,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REPAYMENT_LOAN"))},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,ce,Ee,Yt,Wt],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}.right-input[_ngcontent-%COMP%]{text-align:right}.right-label[_ngcontent-%COMP%]{padding-right:25px!important}"]})}}return e})();var Nd=()=>["../../general"];function Vd(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function jd(e,r){if(e&1&&(i(0,"div",21),t(1,`
            `),i(2,"div",22),t(3),s(4,"translate"),a(),t(5,`

            `),i(6,"div",23),t(7),s(8,"formatNumber"),a(),t(9,`

            `),i(10,"div",22),t(11),s(12,"translate"),a(),t(13,`

            `),i(14,"div",23),t(15),s(16,"formatNumber"),a(),t(17,`

            `),i(18,"div",22),t(19),s(20,"translate"),a(),t(21,`

            `),i(22,"div",23),t(23),s(24,"formatNumber"),a(),t(25,`

            `),i(26,"div",22),t(27),s(28,"translate"),a(),t(29,`

            `),i(30,"div",23),t(31),s(32,"formatNumber"),a(),t(33,`
          `),a()),e&2){let n=C();o(3),f(`
              `,p(4,8,"labels.inputs.Principal"),`
            `),o(4),f(`
              `,p(8,10,n.dataObject.principalPortion),`
            `),o(4),f(`
              `,p(12,12,"labels.inputs.Interest"),`
            `),o(4),f(`
              `,p(16,14,n.dataObject.interestPortion),`
            `),o(4),f(`
              `,p(20,16,"labels.inputs.Fees"),`
            `),o(4),f(`
              `,p(24,18,n.dataObject.feeChargesPortion),`
            `),o(4),f(`
              `,p(28,20,"labels.inputs.Penalties"),`
            `),o(4),f(`
              `,p(32,22,n.dataObject.penaltyChargesPortion),`
            `)}}function qd(e,r){if(e&1&&(i(0,"mat-option",24),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function zd(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",25),t(9,`
            `),a(),t(10,`

            `),i(11,"mat-form-field"),t(12,`
              `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
              `),g(17,"input",26),t(18,`
            `),a(),t(19,`

            `),i(20,"mat-form-field"),t(21,`
              `),i(22,"mat-label"),t(23),s(24,"translate"),a(),t(25,`
              `),g(26,"input",27),t(27,`
            `),a(),t(28,`

            `),i(29,"mat-form-field"),t(30,`
              `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
              `),g(35,"input",28),t(36,`
            `),a(),t(37,`

            `),i(38,"mat-form-field"),t(39,`
              `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
              `),g(44,"input",29),t(45,`
            `),a(),t(46,`
          `),S()),e&2&&(o(5),f(" ",p(6,5,"labels.inputs.Account")," #"),o(9),f(" ",p(15,7,"labels.inputs.Cheque")," #"),o(9),f(" ",p(24,9,"labels.inputs.Routing Code"),""),o(9),f(" ",p(33,11,"labels.inputs.Reciept")," #"),o(9),f(" ",p(42,13,"labels.inputs.Bank")," #"))}function Hd(e,r){if(e&1&&(i(0,"button",30),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.repaymentLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var si=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.currency=null,this.command=null,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.command=this.dataObject.type.code.split(".")[1],console.log(this.command),console.log(this.dataObject.type),this.maxDate=this.settingsService.businessDate,this.createRepaymentLoanForm(),this.setRepaymentLoanDetails(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}createRepaymentLoanForm(){this.repaymentLoanForm=this.formBuilder.group({transactionDate:[this.settingsService.businessDate,q.required],externalId:"",paymentTypeId:"",note:""}),this.isCapitalizedIncome()?this.repaymentLoanForm.addControl("transactionAmount",new K("",[q.required,q.min(.001),q.max(this.dataObject.amount)])):this.repaymentLoanForm.addControl("transactionAmount",new K("",[q.required,q.min(.001)]))}setRepaymentLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.repaymentLoanForm.patchValue({transactionAmount:this.dataObject.amount})}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.repaymentLoanForm.addControl("accountNumber",new K("")),this.repaymentLoanForm.addControl("checkNumber",new K("")),this.repaymentLoanForm.addControl("routingCode",new K("")),this.repaymentLoanForm.addControl("receiptNumber",new K("")),this.repaymentLoanForm.addControl("bankNumber",new K(""))):(this.repaymentLoanForm.removeControl("accountNumber"),this.repaymentLoanForm.removeControl("checkNumber"),this.repaymentLoanForm.removeControl("routingCode"),this.repaymentLoanForm.removeControl("receiptNumber"),this.repaymentLoanForm.removeControl("bankNumber"))}showDetails(){return!this.isCapitalizedIncome()&&!this.isBuyDownFee()}isCapitalizedIncome(){return["capitalizedIncome","capitalizedIncomeAdjustment"].includes(this.command)}isBuyDownFee(){return["buyDownFee"].includes(this.command)}submit(){let n=this.repaymentLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.repaymentLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.transactionAmount=_.transactionAmount*1,this.loanService.submitLoanActionButton(this.loanId,_,this.command).subscribe(h=>{this.router.navigate(["../../transactions"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-make-repayment"]],inputs:{dataObject:"dataObject"},decls:93,vars:35,consts:[["transactionDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["class","layout-row-wrap",4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","externalId"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-fill"],[1,"expandcollapsebutton","m-l-10","m-t-40","flex-75",3,"click"],[3,"className"],[1,"m-l-10"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[1,"layout-row-wrap"],[1,"flex-50","mat-body-strong"],[1,"flex-50","r-amount","right-label"],[3,"value"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,Vd,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),d(26,jd,34,24,"div",8),t(27,`

          `),i(28,"mifosx-input-amount",9),t(29,`
          `),a(),t(30,`

          `),i(31,"mat-form-field"),t(32,`
            `),i(33,"mat-label"),t(34),s(35,"translate"),a(),t(36,`
            `),g(37,"input",10),t(38,`
          `),a(),t(39,`

          `),i(40,"mat-form-field"),t(41,`
            `),i(42,"mat-label"),t(43),s(44,"translate"),a(),t(45,`
            `),i(46,"mat-select",11),t(47,`
              `),d(48,qd,2,2,"mat-option",12),t(49,`
            `),a(),t(50,`
          `),a(),t(51,`

          `),i(52,"div",13),t(53,`
            `),i(54,"span",14),T("click",function(){return P(u),M(l.addPaymentDetails())}),t(55,`
              `),i(56,"mat-slide-toggle"),t(57,`
                `),i(58,"div",15),t(59,`
                  `),i(60,"span",16),t(61),s(62,"translate"),a(),t(63,`
                `),a(),t(64,`
              `),a(),t(65,`
            `),a(),t(66,`
          `),a(),t(67,`

          `),d(68,zd,47,15,"ng-container",7),t(69,`

          `),i(70,"mat-form-field"),t(71,`
            `),i(72,"mat-label"),t(73),s(74,"translate"),a(),t(75,`
            `),g(76,"textarea",17),t(77,`
          `),a(),t(78,`
        `),a(),t(79,`

        `),i(80,"mat-card-actions",18),t(81,`
          `),i(82,"button",19),t(83),s(84,"translate"),a(),t(85,`
          `),d(86,Hd,3,4,"button",20),t(87,`
        `),a(),t(88,`
      `),a(),t(89,`
    `),a(),t(90,`
  `),a(),t(91,`
`),a(),t(92,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.repaymentLoanForm),o(9),x(p(14,22,"labels.inputs.Transaction Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.repaymentLoanForm.controls.transactionDate.hasError("required")),o(3),c("ngIf",l.showDetails()),o(2),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.repaymentLoanForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(6),x(p(35,24,"labels.inputs.External Id")),o(9),x(p(44,26,"labels.inputs.Payment Type")),o(5),c("ngForOf",l.paymentTypes),o(10),c("className",l.showPaymentDetails?"enabled":"disabled"),o(3),x(p(62,28,"labels.inputs.Show Payment Details")),o(7),c("ngIf",l.showPaymentDetails),o(5),f(" ",p(74,30,"labels.inputs.Note"),""),o(9),c("routerLink",N(34,Nd)),o(),f(`
            `,p(84,32,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REPAYMENT_LOAN")}},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,ce,Ee,Yt,Wt],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}.right-input[_ngcontent-%COMP%]{text-align:right}.right-label[_ngcontent-%COMP%]{padding-right:25px!important}"]})}}return e})();var Gd=()=>["../../general"];function Ud(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function $d(e,r){if(e&1&&(i(0,"button",14),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.creditBalanceLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var pi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createCreditBalanceLoanForm(),this.setCreditBalanceLoanDetails(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}createCreditBalanceLoanForm(){this.creditBalanceLoanForm=this.formBuilder.group({transactionDate:[new Date,q.required],transactionAmount:["",q.required],externalId:"",note:""})}setCreditBalanceLoanDetails(){this.creditBalanceLoanForm.patchValue({transactionAmount:this.dataObject.amount})}submit(){let n=this.creditBalanceLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.creditBalanceLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m}),h=this.dataObject.type.code.split(".")[1];_.transactionAmount=_.transactionAmount*1,this.loanService.submitLoanActionButton(this.loanId,_,h).subscribe(y=>{this.router.navigate(["../../transactions"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-credit-balance-refund"]],inputs:{dataObject:"dataObject"},decls:61,vars:25,consts:[["transactionDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","externalId"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,Ud,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mifosx-input-amount",8),t(27,`
          `),a(),t(28,`

          `),i(29,"mat-form-field"),t(30,`
            `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
            `),g(35,"input",9),t(36,`
          `),a(),t(37,`

          `),i(38,"mat-form-field"),t(39,`
            `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
            `),g(44,"textarea",10),t(45,`
          `),a(),t(46,`
        `),a(),t(47,`

        `),i(48,"mat-card-actions",11),t(49,`
          `),i(50,"button",12),t(51),s(52,"translate"),a(),t(53,`
          `),d(54,$d,3,4,"button",13),t(55,`
        `),a(),t(56,`
      `),a(),t(57,`
    `),a(),t(58,`
  `),a(),t(59,`
`),a(),t(60,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.creditBalanceLoanForm),o(9),x(p(14,16,"labels.inputs.Transaction Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.creditBalanceLoanForm.controls.transactionDate.hasError("required")),o(3),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.creditBalanceLoanForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(6),x(p(33,18,"labels.inputs.External Id")),o(9),x(p(42,20,"labels.inputs.Note")),o(9),c("routerLink",N(24,Gd)),o(),f(`
            `,p(52,22,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REPAYMENT_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,ce,Yt],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var Wd=()=>["../../general"];function Qd(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Interest Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Yd(e,r){if(e&1&&(i(0,"button",13),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.loanInterestForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var ci=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.router=m,this.settingsService=l,this.dateUtils=u,this.loanService=_,this.route=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.setLoanInterestForm(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}setLoanInterestForm(){this.loanInterestForm=this.formBuilder.group({transactionAmount:[this.dataObject.amount,q.required],transactionDate:[this.dataObject.date&&new Date(this.dataObject.date),q.required],note:[""]})}submit(){let n=this.loanInterestForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.loanInterestForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.transactionAmount=_.transactionAmount*1;let h=this.route.snapshot.params.loanId;this.loanService.submitLoanActionButton(h,_,"waiveinterest").subscribe(y=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v($),v(G),v(Y),v(R),v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-waive-interest"]],inputs:{dataObject:"dataObject"},decls:52,vars:22,consts:[["interestDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,Qd,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mifosx-input-amount",8),t(27,`
          `),a(),t(28,`

          `),i(29,"mat-form-field"),t(30,`
            `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
            `),g(35,"textarea",9),t(36,`
          `),a(),t(37,`
        `),a(),t(38,`

        `),i(39,"mat-card-actions",10),t(40,`
          `),i(41,"button",11),t(42),s(43,"translate"),a(),t(44,`
          `),d(45,Yd,3,4,"button",12),t(46,`
        `),a(),t(47,`
      `),a(),t(48,`
    `),a(),t(49,`
  `),a(),t(50,`
`),a(),t(51,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.loanInterestForm),o(9),x(p(14,15,"labels.inputs.Interest waived on")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.loanInterestForm.controls.transactionDate.hasError("required")),o(3),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.loanInterestForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(6),x(p(33,17,"labels.inputs.Note")),o(9),c("routerLink",N(21,Wd)),o(),f(`
            `,p(43,19,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","WAIVEINTERESTPORTION_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,ce,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var Kd=()=>["../../general"];function Jd(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Write Off Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Zd(e,r){if(e&1){let n=O();i(0,"button",13),T("click",function(){P(n);let l=C();return M(l.submit())}),t(1),s(2,"translate"),a()}e&2&&(o(),f(`
          `,p(2,1,"labels.buttons.Submit"),`
        `))}var di=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.route=m,this.loanService=l,this.dateUtils=u,this.router=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.setWriteOffForm()}setWriteOffForm(){this.writeOffForm=this.formBuilder.group({transactionDate:[this.dataObject.date&&new Date(this.dataObject.date),q.required],amount:[{value:this.dataObject.amount,disabled:!0}],note:[""]})}submit(){let n=this.writeOffForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.writeOffForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m}),h=this.route.snapshot.params.loanId;delete _.amount,this.loanService.submitLoanActionButton(h,_,"writeoff").subscribe(y=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v(R),v(Y),v($),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-write-off-page"]],inputs:{dataObject:"dataObject"},decls:58,vars:21,consts:[["writeOffDatePicker",""],[1,"container","mat-elevation-z8"],[3,"formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","amount"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"mat-card-content"),t(5,`
      `),i(6,"form",2),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,Jd,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"input",8),t(33,`
          `),a(),t(34,`

          `),i(35,"mat-form-field"),t(36,`
            `),i(37,"mat-label"),t(38),s(39,"translate"),a(),t(40,`
            `),g(41,"textarea",9),t(42,`
          `),a(),t(43,`
        `),a(),t(44,`
      `),a(),t(45,`

      `),i(46,"mat-card-actions",10),t(47,`
        `),i(48,"button",11),t(49),s(50,"translate"),a(),t(51,`
        `),d(52,Zd,3,3,"button",12),t(53,`
      `),a(),t(54,`
    `),a(),t(55,`
  `),a(),t(56,`
`),a(),t(57,`
`)}if(m&2){let u=F(21);o(6),c("formGroup",l.writeOffForm),o(7),x(p(14,12,"labels.inputs.Write off on")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.writeOffForm.controls.transactionDate.hasError("required")),o(6),x(p(30,14,"labels.inputs.Amount")),o(9),x(p(39,16,"labels.inputs.Note")),o(10),c("routerLink",N(20,Kd)),o(),f(`
          `,p(50,18,"labels.buttons.Cancel"),`
        `),o(3),c("mifosxHasPermission","WRITEOFF_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var Xd=()=>["../../general"];function tu(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Closed Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function eu(e,r){if(e&1&&(i(0,"button",12),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.closeLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var ui=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createCloseForm()}createCloseForm(){this.closeLoanForm=this.formBuilder.group({transactionDate:[new Date(this.dataObject.date)||new Date,q.required],note:[]})}submit(){let n=this.closeLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.closeLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.submitLoanActionButton(this.loanId,_,"close-rescheduled").subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-close-as-rescheduled"]],inputs:{dataObject:"dataObject"},decls:49,vars:18,consts:[["closedDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,tu,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"textarea",8),t(33,`
          `),a(),t(34,`
        `),a(),t(35,`

        `),i(36,"mat-card-actions",9),t(37,`
          `),i(38,"button",10),t(39),s(40,"translate"),a(),t(41,`
          `),d(42,eu,3,4,"button",11),t(43,`
        `),a(),t(44,`
      `),a(),t(45,`
    `),a(),t(46,`
  `),a(),t(47,`
`),a(),t(48,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.closeLoanForm),o(9),x(p(14,11,"labels.inputs.Closed On")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.closeLoanForm.controls.transactionDate.hasError("required")),o(6),x(p(30,13,"labels.inputs.Note")),o(9),c("routerLink",N(17,Xd)),o(),f(`
            `,p(40,15,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","CLOSEASRESCHEDULED_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var nu=()=>["../../general"];function iu(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Reschedule Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function au(e,r){if(e&1&&(i(0,"mat-option",18),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function ou(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Reason for Rescheduling")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function ru(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Submitted On Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function lu(e,r){if(e&1){let n=O();b(0),t(1,`
            `),i(2,"mat-form-field",6),T("click",function(){P(n);let l=F(13);return M(l.open())}),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",19),t(9,`
              `),g(10,"mat-datepicker-toggle",8),t(11,`
              `),g(12,"mat-datepicker",null,2),t(14,`
            `),a(),t(15,`
          `),S()}if(e&2){let n=F(13),m=C();o(5),x(p(6,4,"labels.inputs.Installment Rescheduled to")),o(3),c("min",m.minDate)("matDatepicker",n),o(2),c("for",n)}}function mu(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",20),t(9,`
            `),a(),t(10,`

            `),i(11,"mat-form-field"),t(12,`
              `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
              `),g(17,"input",21),t(18,`
            `),a(),t(19,`
          `),S()),e&2&&(o(5),f("",p(6,2,"labels.inputs.Principal Grace Periods")," "),o(9),f("",p(15,4,"labels.inputs.Interest Grace Periods")," "))}function su(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",22),t(9,`
            `),a(),t(10,`
          `),S()),e&2&&(o(5),x(p(6,1,"labels.inputs.Number Of new Repayments")))}function pu(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",23),t(9,`
            `),a(),t(10,`
          `),S()),e&2&&(o(5),x(p(6,1,"labels.inputs.New Interest Rate")))}function cu(e,r){if(e&1&&(i(0,"button",24),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.rescheduleLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var xi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.changeRepaymentDate=new K(!1),this.introduceGracePeriods=new K(!1),this.extendRepaymentPeriod=new K(!1),this.adjustinterestrates=new K(!1),this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.codes=this.dataObject.rescheduleReasons,this.setRescheduleLoanForm()}setRescheduleLoanForm(){this.rescheduleLoanForm=this.formBuilder.group({rescheduleFromDate:[new Date,q.required],rescheduleReasonId:["",q.required],submittedOnDate:[new Date,q.required],rescheduleReasonComment:[""],adjustedDueDate:[""],graceOnPrincipal:[""],graceOnInterest:[""],extraTerms:[""],newInterestRate:[""]})}submit(){let n=this.rescheduleLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.rescheduleLoanForm.value.rescheduleFromDate,_=this.rescheduleLoanForm.value.adjustedDueDate,h=this.rescheduleLoanForm.value.submittedOnDate;u instanceof Date&&(n.rescheduleFromDate=this.dateUtils.formatDate(u,l)),_ instanceof Date&&(n.adjustedDueDate=this.dateUtils.formatDate(_,l)),h instanceof Date&&(n.submittedOnDate=this.dateUtils.formatDate(h,l));let y=ft(W({},n),{dateFormat:l,locale:m});y.loanId=this.loanId,this.loanService.submitRescheduleData(y).subscribe(D=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-reschedule"]],inputs:{dataObject:"dataObject"},decls:103,vars:49,consts:[["rescheduleDatePicker",""],["submittedDatePicker",""],["installmentrescheduledDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","rescheduleFromDate",3,"min","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["formControlName","rescheduleReasonId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","required","","formControlName","submittedOnDate",3,"min","matDatepicker"],["matInput","","formControlName","rescheduleReasonComment"],[3,"formControl"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["matInput","","formControlName","adjustedDueDate",3,"min","matDatepicker"],["matInput","","formControlName","graceOnPrincipal"],["matInput","","formControlName","graceOnInterest"],["matInput","","formControlName","extraTerms"],["matInput","","formControlName","newInterestRate"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",3),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",4),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",5),t(9,`
          `),i(10,"mat-form-field",6),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",7),t(17,`
            `),g(18,"mat-datepicker-toggle",8),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,iu,8,9,"mat-error",9),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),i(32,"mat-select",10),t(33,`
              `),d(34,au,2,2,"mat-option",11),t(35,`
            `),a(),t(36,`
            `),d(37,ou,8,9,"mat-error",9),t(38,`
          `),a(),t(39,`

          `),i(40,"mat-form-field",6),T("click",function(){P(u);let h=F(51);return M(h.open())}),t(41,`
            `),i(42,"mat-label"),t(43),s(44,"translate"),a(),t(45,`
            `),g(46,"input",12),t(47,`
            `),g(48,"mat-datepicker-toggle",8),t(49,`
            `),g(50,"mat-datepicker",null,1),t(52,`
            `),d(53,ru,8,9,"mat-error",9),t(54,`
          `),a(),t(55,`

          `),i(56,"mat-form-field"),t(57,`
            `),i(58,"mat-label"),t(59),s(60,"translate"),a(),t(61,`
            `),g(62,"textarea",13),t(63,`
          `),a(),t(64,`

          `),i(65,"mat-checkbox",14),t(66),s(67,"translate"),a(),t(68,`

          `),d(69,lu,16,6,"ng-container",9),t(70,`

          `),i(71,"mat-checkbox",14),t(72),s(73,"translate"),a(),t(74,`

          `),d(75,mu,20,6,"ng-container",9),t(76,`

          `),i(77,"mat-checkbox",14),t(78),s(79,"translate"),a(),t(80,`

          `),d(81,su,11,3,"ng-container",9),t(82,`

          `),i(83,"mat-checkbox",14),t(84),s(85,"translate"),a(),t(86,`
          `),d(87,pu,11,3,"ng-container",9),t(88,`
        `),a(),t(89,`

        `),i(90,"mat-card-actions",15),t(91,`
          `),i(92,"button",16),t(93),s(94,"translate"),a(),t(95,`
          `),d(96,cu,3,4,"button",17),t(97,`
        `),a(),t(98,`
      `),a(),t(99,`
    `),a(),t(100,`
  `),a(),t(101,`
`),a(),t(102,`
`)}if(m&2){let u=F(21),_=F(51);o(4),c("formGroup",l.rescheduleLoanForm),o(9),x(p(14,30,"labels.inputs.Reschedule from Installment On")),o(3),c("min",l.minDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.rescheduleLoanForm.controls.rescheduleFromDate.hasError("required")),o(6),x(p(30,32,"labels.inputs.Reason for Rescheduling")),o(5),c("ngForOf",l.codes),o(3),c("ngIf",l.rescheduleLoanForm.controls.rescheduleReasonId.hasError("required")),o(6),x(p(44,34,"labels.inputs.Submitted On")),o(3),c("min",l.minDate)("matDatepicker",_),o(2),c("for",_),o(5),c("ngIf",l.rescheduleLoanForm.controls.submittedOnDate.hasError("required")),o(6),x(p(60,36,"labels.inputs.Comments")),o(6),c("formControl",l.changeRepaymentDate),o(),f(`
            `,p(67,38,"labels.inputs.Change Repayment Date"),`
          `),o(3),c("ngIf",l.changeRepaymentDate.value),o(2),c("formControl",l.introduceGracePeriods),o(),f(`
            `,p(73,40,"labels.inputs.Introduce Mid-term grace periods"),`
          `),o(3),c("ngIf",l.introduceGracePeriods.value),o(2),c("formControl",l.extendRepaymentPeriod),o(),f(`
            `,p(79,42,"labels.inputs.Extend Repayment Period"),`
          `),o(3),c("ngIf",l.extendRepaymentPeriod.value),o(2),c("formControl",l.adjustinterestrates),o(),f(`
            `,p(85,44,"labels.inputs.Adjust interest rates for remainder of loan"),`
          `),o(3),c("ngIf",l.adjustinterestrates.value),o(5),c("routerLink",N(48,nu)),o(),f(`
            `,p(94,46,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","APPROVE_RESCHEDULELOAN")}},dependencies:[A,It,k,w,gt,nt,J,st,_t,ke,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,Me],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var du=()=>["../../general"];function uu(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function xu(e,r){if(e&1&&(i(0,"mat-option",20),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function fu(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",21),t(9,`
            `),a(),t(10,`

            `),i(11,"mat-form-field"),t(12,`
              `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
              `),g(17,"input",22),t(18,`
            `),a(),t(19,`

            `),i(20,"mat-form-field"),t(21,`
              `),i(22,"mat-label"),t(23),s(24,"translate"),a(),t(25,`
              `),g(26,"input",23),t(27,`
            `),a(),t(28,`

            `),i(29,"mat-form-field"),t(30,`
              `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
              `),g(35,"input",24),t(36,`
            `),a(),t(37,`

            `),i(38,"mat-form-field"),t(39,`
              `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
              `),g(44,"input",25),t(45,`
            `),a(),t(46,`
          `),S()),e&2&&(o(5),f(" ",p(6,5,"labels.inputs.Account")," #"),o(9),f("",p(15,7,"labels.inputs.Cheque")," #"),o(9),x(p(24,9,"labels.inputs.Routing Code")),o(9),f("",p(33,11,"labels.inputs.Reciept")," #"),o(9),f("",p(42,13,"labels.inputs.Bank")," #"))}function gu(e,r){if(e&1&&(i(0,"button",26),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.recoveryRepaymentLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var fi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.currency=null,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createRecoveryRepaymentLoanForm(),this.setRecoveryRepaymentLoanDetails(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}createRecoveryRepaymentLoanForm(){this.recoveryRepaymentLoanForm=this.formBuilder.group({transactionDate:[new Date,q.required],transactionAmount:["",q.required],externalId:[""],paymentTypeId:[""],note:[""]})}setRecoveryRepaymentLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.recoveryRepaymentLoanForm.patchValue({transactionAmount:this.dataObject.amount,transactionDate:new Date(this.dataObject.date)})}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.recoveryRepaymentLoanForm.addControl("accountNumber",new K("")),this.recoveryRepaymentLoanForm.addControl("checkNumber",new K("")),this.recoveryRepaymentLoanForm.addControl("routingCode",new K("")),this.recoveryRepaymentLoanForm.addControl("receiptNumber",new K("")),this.recoveryRepaymentLoanForm.addControl("bankNumber",new K(""))):(this.recoveryRepaymentLoanForm.removeControl("accountNumber"),this.recoveryRepaymentLoanForm.removeControl("checkNumber"),this.recoveryRepaymentLoanForm.removeControl("routingCode"),this.recoveryRepaymentLoanForm.removeControl("receiptNumber"),this.recoveryRepaymentLoanForm.removeControl("bankNumber"))}submit(){let n=this.recoveryRepaymentLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.recoveryRepaymentLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.transactionAmount=_.transactionAmount*1,this.loanService.submitLoanActionButton(this.loanId,_,"recoverypayment").subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-recovery-repayment"]],inputs:{dataObject:"dataObject"},decls:91,vars:34,consts:[["transactionDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","externalId"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-fill"],[1,"expandcollapsebutton","m-l-10","m-t-40","flex-75",3,"click"],[3,"className"],[1,"m-l-10"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,uu,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mifosx-input-amount",8),t(27,`
          `),a(),t(28,`

          `),i(29,"mat-form-field"),t(30,`
            `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
            `),g(35,"input",9),t(36,`
          `),a(),t(37,`

          `),i(38,"mat-form-field"),t(39,`
            `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
            `),i(44,"mat-select",10),t(45,`
              `),d(46,xu,2,2,"mat-option",11),t(47,`
            `),a(),t(48,`
          `),a(),t(49,`

          `),i(50,"div",12),t(51,`
            `),i(52,"span",13),T("click",function(){return P(u),M(l.addPaymentDetails())}),t(53,`
              `),i(54,"mat-slide-toggle"),t(55,`
                `),i(56,"div",14),t(57,`
                  `),i(58,"span",15),t(59),s(60,"translate"),a(),t(61,`
                `),a(),t(62,`
              `),a(),t(63,`
            `),a(),t(64,`
          `),a(),t(65,`

          `),d(66,fu,47,15,"ng-container",7),t(67,`

          `),i(68,"mat-form-field"),t(69,`
            `),i(70,"mat-label"),t(71),s(72,"translate"),a(),t(73,`
            `),g(74,"textarea",16),t(75,`
          `),a(),t(76,`
        `),a(),t(77,`

        `),i(78,"mat-card-actions",17),t(79,`
          `),i(80,"button",18),t(81),s(82,"translate"),a(),t(83,`
          `),d(84,gu,3,4,"button",19),t(85,`
        `),a(),t(86,`
      `),a(),t(87,`
    `),a(),t(88,`
  `),a(),t(89,`
`),a(),t(90,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.recoveryRepaymentLoanForm),o(9),x(p(14,21,"labels.inputs.Transaction Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.recoveryRepaymentLoanForm.controls.transactionDate.hasError("required")),o(3),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.recoveryRepaymentLoanForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(6),x(p(33,23,"labels.inputs.External Id")),o(9),x(p(42,25,"labels.inputs.Payment Type")),o(5),c("ngForOf",l.paymentTypes),o(10),c("className",l.showPaymentDetails?"enabled":"disabled"),o(3),x(p(60,27,"labels.inputs.Show Payment Details")),o(7),c("ngIf",l.showPaymentDetails),o(5),x(p(72,29,"labels.inputs.Note")),o(9),c("routerLink",N(33,du)),o(),f(`
            `,p(82,31,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REPAYMENT_LOAN")}},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,ce,Ee,Yt],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();function _u(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
          `,p(2,1,"labels.inputs.Active"),`
        `))}function Cu(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
          `,p(2,1,"labels.inputs.Deleted"),`
        `))}var gi=(()=>{class e{constructor(n,m){this.dialogRef=n,this.data=m}ngOnInit(){this.dialogRef.updateSize("400px")}static{this.\u0275fac=function(m){return new(m||e)(v(Xe),v(tn))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-view-guarantor-details-dialog"]],decls:70,vars:27,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"layout-column"],[1,"layout-row-wrap","responsive-column"],[1,"flex-fill"],[1,"flex-50"],[4,"ngIf"],[1,"layout-row","layout-xs-column","layout-align-center","gap-2percent"],["mat-raised-button","","mat-dialog-close",""]],template:function(m,l){m&1&&(i(0,"h1",0),t(1),s(2,"translate"),a(),t(3,`

`),i(4,"div",1),t(5,`
  `),i(6,"div",2),t(7,`
    `),i(8,"div",3),t(9,`
      `),i(10,"span",4),t(11),s(12,"translate"),a(),t(13,`
      `),i(14,"span",4),t(15),a(),t(16,`
    `),a(),t(17,`

    `),i(18,"div",3),t(19,`
      `),i(20,"span",4),t(21),s(22,"translate"),a(),t(23,`
      `),i(24,"span",4),t(25),a(),t(26,`
    `),a(),t(27,`

    `),i(28,"div",3),t(29,`
      `),i(30,"span",4),t(31),s(32,"translate"),a(),t(33,`
      `),i(34,"span",4),t(35),a(),t(36,`
    `),a(),t(37,`

    `),i(38,"div",3),t(39,`
      `),i(40,"span",4),t(41),s(42,"translate"),a(),t(43,`
      `),i(44,"span",4),t(45),a(),t(46,`
    `),a(),t(47,`

    `),i(48,"div",3),t(49,`
      `),i(50,"span",4),t(51),s(52,"translate"),a(),t(53,`
      `),i(54,"span",4),t(55,`
        `),d(56,_u,3,3,"span",5),t(57,`
        `),d(58,Cu,3,3,"span",5),a(),t(59,`
    `),a(),t(60,`
  `),a(),t(61,`
`),a(),t(62,`

`),i(63,"mat-dialog-actions",6),t(64,`
  `),i(65,"button",7),t(66),s(67,"translate"),a(),t(68,`
`),a(),t(69,`
`)),m&2&&(o(),x(p(2,13,"labels.heading.Guarantor Detail")),o(10),f("",p(12,15,"labels.inputs.First Name"),":"),o(4),x(l.data.guarantorData.firstname),o(6),f("",p(22,17,"labels.inputs.Last Name"),":"),o(4),x(l.data.guarantorData.lastname),o(6),f("",p(32,19,"labels.inputs.Relationship"),":"),o(4),x(l.data.guarantorData.clientRelationshipType.name),o(6),f("",p(42,21,"labels.inputs.Guarantor Type"),":"),o(4),x(l.data.guarantorData.guarantorType.value),o(6),f("",p(52,23,"labels.inputs.Status"),":"),o(5),c("ngIf",l.data.guarantorData.status),o(2),c("ngIf",!l.data.guarantorData.status),o(8),x(p(67,25,"labels.buttons.Cancel")))},dependencies:[A,k,w,j,L,nn,an,on,en],encapsulation:2})}}return e})();function hu(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Not Available")))}function vu(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Unassigned")))}function bu(e,r){e&1&&(i(0,"span"),t(1,`
                  `),g(2,"fa-icon",6),t(3,`
                `),a())}function Su(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(" ",p(2,1,"labels.inputs.Not Provided")," "))}function yu(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Not Provided")))}function Du(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function Tu(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C().$implicit;o(),V(`
              `,n.firstname," \xA0 ",n.lastname,`
            `)}}function Pu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,Tu,2,2,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function Mu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Relationship")))}function Ou(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C().$implicit;o(),f(`
              `,n.clientRelationshipType==null?null:n.clientRelationshipType.name,`
            `)}}function Iu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,Ou,2,1,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function Eu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Guarantor Type")))}function Au(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C().$implicit;o(),f(`
              `,n.guarantorType.value,`
            `)}}function wu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,Au,2,1,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function Lu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Deposit Account")))}function Ru(e,r){e&1&&(i(0,"span"),t(1," "),a())}function Fu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,Ru,2,0,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function Bu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function ku(e,r){e&1&&(i(0,"span"),t(1," "),a())}function Nu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,ku,2,0,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function Vu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Remaining Amount")))}function ju(e,r){e&1&&(i(0,"span"),t(1," "),a())}function qu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,ju,2,0,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function zu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Status")))}function Hu(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
                `,p(2,1,"labels.inputs.Active"),`
              `))}function Gu(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
                `,p(2,1,"labels.inputs.Deleted"),`
              `))}function Uu(e,r){if(e&1&&(i(0,"span"),t(1,`
              `),d(2,Hu,3,3,"span",3),t(3,`
              `),d(4,Gu,3,3,"span",3),t(5,`
            `),a()),e&2){let n=C().$implicit;o(2),c("ngIf",n.status),o(2),c("ngIf",!n.status)}}function $u(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,Uu,6,2,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function Wu(e,r){e&1&&(i(0,"th",26),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Action")))}function Qu(e,r){if(e&1){let n=O();i(0,"button",30),T("click",function(){P(n);let l=C(2).$implicit,u=C(2);return M(u.viewGuarantorDetails(l))}),t(1,`
                `),g(2,"fa-icon",31),t(3,`
              `),a()}}function Yu(e,r){e&1&&(i(0,"button",32),t(1,`
                `),g(2,"fa-icon",33),t(3,`
              `),a())}function Ku(e,r){if(e&1){let n=O();i(0,"button",35),T("click",function(){P(n);let l=C(3).$implicit,u=C(2);return M(u.deleteGuarantor(l.id))}),t(1,`
                  `),g(2,"fa-icon",36),t(3,`
                `),a()}}function Ju(e,r){e&1&&(i(0,"span"),t(1,`
                `),d(2,Ku,4,0,"button",34),t(3,`
              `),a()),e&2&&(o(2),c("mifosxHasPermission","DELETE_GUARANTOR"))}function Zu(e,r){if(e&1&&(i(0,"span"),t(1,`
              `),d(2,Qu,4,0,"button",28),t(3,`
              `),d(4,Yu,4,0,"button",29),t(5,`
              `),d(6,Ju,4,1,"span",3),t(7,`
            `),a()),e&2){let n=C().$implicit;o(2),c("mifosxHasPermission","READ_SAVINGSACCOUNT"),o(2),c("ngIf",n.status&&n.guarantorType.id===3&&n.id),o(2),c("ngIf",n.status)}}function Xu(e,r){if(e&1&&(i(0,"td",27),t(1,`
            `),d(2,Zu,8,3,"span",3),t(3,`
          `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",!n.guarantorFundingDetails)}}function t1(e,r){e&1&&g(0,"tr",37)}function e1(e,r){e&1&&g(0,"tr",38)}function n1(e,r){if(e&1){let n=O();i(0,"div",7),t(1,`
      `),t(2,`
      `),i(3,"div",8),t(4,`
        `),i(5,"div",9),t(6,`
          `),i(7,"div",10),t(8,`
            `),i(9,"h3"),t(10),s(11,"translate"),a(),t(12,`
          `),a(),t(13,`
        `),a(),t(14,`
        `),i(15,"div",9),t(16,`
          `),i(17,"div",11),t(18,`
            `),i(19,"button",12),T("click",function(){P(n);let l=C();return M(l.toggleGuarantorsDetailsOverview())}),t(20),a(),t(21,`
          `),a(),t(22,`
        `),a(),t(23,`
      `),a(),t(24,`

      `),i(25,"table",13),s(26,"accountsFilter"),t(27,`
        `),b(28,14),t(29,`
          `),d(30,Du,3,3,"th",15),t(31,`
          `),d(32,Pu,4,1,"td",16),t(33,`
        `),S(),t(34,`

        `),b(35,17),t(36,`
          `),d(37,Mu,3,3,"th",15),t(38,`
          `),d(39,Iu,4,1,"td",16),t(40,`
        `),S(),t(41,`

        `),b(42,18),t(43,`
          `),d(44,Eu,3,3,"th",15),t(45,`
          `),d(46,wu,4,1,"td",16),t(47,`
        `),S(),t(48,`

        `),b(49,19),t(50,`
          `),d(51,Lu,3,3,"th",15),t(52,`
          `),d(53,Fu,4,1,"td",16),t(54,`
        `),S(),t(55,`

        `),b(56,20),t(57,`
          `),d(58,Bu,3,3,"th",15),t(59,`
          `),d(60,Nu,4,1,"td",16),t(61,`
        `),S(),t(62,`

        `),b(63,21),t(64,`
          `),d(65,Vu,3,3,"th",15),t(66,`
          `),d(67,qu,4,1,"td",16),t(68,`
        `),S(),t(69,`

        `),b(70,22),t(71,`
          `),d(72,zu,3,3,"th",15),t(73,`
          `),d(74,$u,4,1,"td",16),t(75,`
        `),S(),t(76,`

        `),b(77,23),t(78,`
          `),d(79,Wu,3,3,"th",15),t(80,`
          `),d(81,Xu,4,1,"td",16),t(82,`
        `),S(),t(83,`

        `),d(84,t1,1,0,"tr",24),t(85,`
        `),d(86,e1,1,0,"tr",25),t(87,`
      `),a(),t(88,`
    `),a()}if(e&2){let n=C();o(10),x(p(11,5,"labels.heading.Guarantors Details")),o(10),f(`
              `,n.showDeletedGuarantorsAccounts?"Hide Deleted Guarantors":"Show Deleted Guarantors",`
            `),o(5),c("dataSource",ka(26,7,n.guarantorDetails,"guarantor",n.showDeletedGuarantorsAccounts)),o(59),c("matHeaderRowDef",n.guarantorsDisplayedColumns),o(2),c("matRowDefColumns",n.guarantorsDisplayedColumns)}}var _i=(()=>{class e{constructor(n,m,l,u){this.dialog=n,this.loansService=m,this.route=l,this.router=u,this.showDeletedGuarantorsAccounts=!1,this.guarantorsDisplayedColumns=["fullname","relationship","guarantortype","depositAccount","amount","remainingAmount","status","action"],this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.guarantorDetails=this.dataObject.guarantors}toggleGuarantorsDetailsOverview(){this.showDeletedGuarantorsAccounts=!this.showDeletedGuarantorsAccounts}deleteGuarantor(n){this.dialog.open(xe,{data:{deleteContext:`the guarantor id: ${n}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteGuarantor(this.loanId,n).subscribe(()=>{this.reload()})})}viewGuarantorDetails(n){this.dialog.open(gi,{data:{guarantorData:n}}).afterClosed().subscribe(()=>{})}reload(){let n=this.dataObject.clientId,m=this.router.url;this.router.navigateByUrl(`/clients/${n}/loans-accounts`,{skipLocationChange:!0}).then(()=>this.router.navigate([m]))}static{this.\u0275fac=function(m){return new(m||e)(v(Zt),v(R),v(B),v($))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-view-guarantors"]],inputs:{dataObject:"dataObject"},decls:130,vars:44,consts:[[1,"container","mat-elevation-z8"],[1,"view-guarantors-account-tables","layout-row","gap-2percent"],[1,"flex-49"],[4,"ngIf"],[3,"externalId"],["class","layout-row-wrap responsive-column flex-fill",4,"ngIf"],["icon","times"],[1,"layout-row-wrap","responsive-column","flex-fill"],[1,"heading-content"],[1,"layout-column","flex-50"],[1,"heading-name"],[1,"layout-row","align-flex-end"],["mat-raised-button","","color","primary",1,"f-right",3,"click"],["mat-table","",1,"flex-fill",3,"dataSource"],["matColumnDef","fullname"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","relationship"],["matColumnDef","guarantortype"],["matColumnDef","depositAccount"],["matColumnDef","amount"],["matColumnDef","remainingAmount"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","class","account-action-button","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","class","account-action-button","color","primary",4,"ngIf"],["mat-raised-button","","color","primary",1,"account-action-button",3,"click"],["icon","eye",1,"m-r-10"],["mat-raised-button","","color","primary",1,"account-action-button"],["icon","edit",1,"m-r-10"],["mat-raised-button","","class","account-action-button","color","warn",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","warn",1,"account-action-button",3,"click"],["icon","trash",1,"m-r-10"],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"div",1),t(5,`
      `),i(6,"div",2),t(7,`
        `),i(8,"table"),t(9,`
          `),i(10,"tbody"),t(11,`
            `),i(12,"tr"),t(13,`
              `),i(14,"td"),t(15),s(16,"translate"),a(),t(17,`
              `),i(18,"td"),t(19),d(20,hu,3,3,"span",3),t(21,`
              `),a(),t(22,`
            `),a(),t(23,`
            `),i(24,"tr"),t(25,`
              `),i(26,"td"),t(27),s(28,"translate"),a(),t(29,`
              `),i(30,"td"),t(31),a(),t(32,`
            `),a(),t(33,`
            `),i(34,"tr"),t(35,`
              `),i(36,"td"),t(37),s(38,"translate"),a(),t(39,`
              `),i(40,"td"),t(41),d(42,vu,3,3,"span",3),t(43,`
                `),d(44,bu,4,0,"span",3),t(45,`
              `),a(),t(46,`
            `),a(),t(47,`
            `),i(48,"tr"),t(49,`
              `),i(50,"td"),t(51),s(52,"translate"),a(),t(53,`
              `),i(54,"td"),t(55,`
                `),g(56,"mifosx-external-identifier",4),t(57,`
              `),a(),t(58,`
            `),a(),t(59,`
          `),a(),t(60,`
        `),a(),t(61,`
      `),a(),t(62,`

      `),i(63,"div",2),t(64,`
        `),i(65,"table"),t(66,`
          `),i(67,"tbody"),t(68,`
            `),i(69,"tr"),t(70,`
              `),i(71,"td"),t(72),s(73,"translate"),a(),t(74,`
              `),i(75,"td"),t(76),d(77,Su,3,3,"span",3),t(78,`
              `),a(),t(79,`
            `),a(),t(80,`
            `),i(81,"tr"),t(82,`
              `),i(83,"td"),t(84),s(85,"translate"),a(),t(86,`
              `),i(87,"td"),t(88,`
                `),i(89,"span"),t(90),s(91,"formatNumber"),a(),t(92,`
              `),a(),t(93,`
            `),a(),t(94,`
            `),i(95,"tr"),t(96,`
              `),i(97,"td"),t(98),s(99,"translate"),a(),t(100,`
              `),i(101,"td"),t(102,`
                `),i(103,"span"),t(104),s(105,"formatNumber"),a(),t(106,`
              `),a(),t(107,`
            `),a(),t(108,`
            `),i(109,"tr"),t(110,`
              `),i(111,"td"),t(112),s(113,"translate"),a(),t(114,`
              `),i(115,"td"),t(116),s(117,"formatNumber"),d(118,yu,3,3,"span",3),t(119,`
              `),a(),t(120,`
            `),a(),t(121,`
          `),a(),t(122,`
        `),a(),t(123,`
      `),a(),t(124,`
    `),a(),t(125,`

    `),d(126,n1,89,11,"div",5),t(127,`
  `),a(),t(128,`
`),a(),t(129,`
`)),m&2&&(o(15),x(p(16,22,"labels.inputs.Disbursement Date")),o(4),f(`
                `,l.dataObject.timeline.actualDisbursementDate,""),o(),c("ngIf",!l.dataObject.timeline.actualDisbursementDate),o(7),x(p(28,24,"labels.inputs.Currency")),o(4),x(l.dataObject.currency.name),o(6),x(p(38,26,"labels.inputs.Loan Officer")),o(4),f(`
                `,l.dataObject.loanOfficerName,`
                `),o(),c("ngIf",!l.dataObject.loanOfficerName),o(2),c("ngIf",l.dataObject.loanOfficerName),o(7),x(p(52,28,"labels.inputs.External Id")),o(5),Q("externalId",l.dataObject.externalId),o(16),x(p(73,30,"labels.inputs.Loan Purpose")),o(4),f(`
                `,l.dataObject.loanPurposeName,`
                `),o(),c("ngIf",!l.dataObject.loanPurposeName),o(7),x(p(85,32,"labels.inputs.Approved Amount")),o(6),x(p(91,34,l.dataObject.approvedPrincipal)),o(8),x(p(99,36,"labels.inputs.Disburse Amount")),o(6),x(p(105,38,l.dataObject.principal)),o(8),x(p(113,40,"labels.inputs.Arrears By")),o(4),f(`
                `,p(117,42,l.dataObject.summary==null?null:l.dataObject.summary.totalOverdue),`
                `),o(2),c("ngIf",(l.dataObject.summary==null?null:l.dataObject.summary.totalOverdue)<0),o(8),c("ngIf",l.guarantorDetails))},dependencies:[A,k,w,et,j,ot,L,Ot,Ie,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht,ro,Wt],styles:[".view-guarantors-account-tables[_ngcontent-%COMP%]{padding:1%;margin:1%}.view-guarantors-account-tables[_ngcontent-%COMP%]   .table-headers[_ngcontent-%COMP%]{margin:0;padding:6px}.view-guarantors-account-tables[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.heading-content[_ngcontent-%COMP%]{margin-bottom:1%;margin-top:1%;width:100%}.heading-name[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:73rem}"]})}}return e})();var i1=()=>["../../general"];function a1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
              `),a()),e&2&&(o(),V(`
                `,p(2,3,"labels.inputs.name")," ",p(3,5,"labels.commons.is"),`
                `),o(4),x(p(6,7,"labels.commons.required")))}function o1(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n),o(),f(`
                `,n.displayName,`
              `)}}function r1(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                  `,n.name,`
                `)}}function l1(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),V(`
                    `,n.productName," - ",n.accountNo,`
                  `)}}function m1(e,r){if(e&1&&(b(0),t(1,`
              `),i(2,"mat-form-field"),t(3,`
                `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
                `),i(8,"mat-select",16),t(9,`
                  `),d(10,l1,2,3,"mat-option",13),t(11,`
                `),a(),t(12,`
              `),a(),t(13,`

              `),i(14,"mat-form-field"),t(15,`
                `),i(16,"mat-label"),t(17),s(18,"translate"),a(),t(19,`
                `),g(20,"input",17),t(21,`
              `),a(),t(22,`
            `),S()),e&2){let n=C(2);o(5),x(p(6,3,"labels.inputs.Account")),o(5),c("ngForOf",n.accountOptions),o(7),x(p(18,5,"labels.inputs.Amount"))}}function s1(e,r){if(e&1){let n=O();b(0),t(1,`
            `),i(2,"mat-form-field",10),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",11),t(9,`
              `),d(10,a1,8,9,"mat-error",6),t(11,`
            `),a(),t(12,`

            `),i(13,"mat-autocomplete",12,0),T("optionSelected",function(l){P(n);let u=C();return M(u.clientSelected(l.option.value))}),t(15,`
              `),d(16,o1,2,2,"mat-option",13),t(17,`
            `),a(),t(18,`

            `),i(19,"mat-form-field"),t(20,`
              `),i(21,"mat-label"),t(22),s(23,"translate"),a(),t(24,`
              `),i(25,"mat-select",14),t(26,`
                `),d(27,r1,2,2,"mat-option",13),t(28,`
              `),a(),t(29,`
            `),a(),t(30,`

            `),d(31,m1,23,7,"ng-container",6),t(32,`
          `),S()}if(e&2){let n=F(14),m=C();o(5),x(p(6,8,"labels.inputs.name")),o(3),c("matAutocomplete",n),o(2),c("ngIf",m.newGuarantorForm.controls.name.hasError("required")),o(3),c("displayWith",m.displayClient),o(3),c("ngForOf",m.clientsData),o(6),x(p(23,10,"labels.inputs.Relationship")),o(5),c("ngForOf",m.relationTypes),o(4),c("ngIf",(m.accountOptions==null?null:m.accountOptions.length)>0)}}function p1(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                  `,n.name,`
                `)}}function c1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),s(4,"translate"),i(5,"strong"),t(6),s(7,"translate"),a(),t(8,`
              `),a()),e&2&&(o(),fn(`
                `,p(2,4,"labels.inputs.First Name")," ",p(3,6,"labels.commons.is"),`
                `,p(4,8,"labels.commons.is")," "),o(5),x(p(7,10,"labels.commons.required")))}function d1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),s(4,"translate"),i(5,"strong"),t(6),s(7,"translate"),a(),t(8,`
              `),a()),e&2&&(o(),fn(`
                `,p(2,4,"labels.inputs.Last Name")," ",p(3,6,"labels.commons.is"),`
                `,p(4,8,"labels.commons.is")," "),o(5),x(p(7,10,"labels.commons.required")))}function u1(e,r){if(e&1){let n=O();b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),i(8,"mat-select",14),t(9,`
                `),d(10,p1,2,2,"mat-option",13),t(11,`
              `),a(),t(12,`
            `),a(),t(13,`

            `),i(14,"mat-form-field"),t(15,`
              `),i(16,"mat-label"),t(17),s(18,"translate"),a(),t(19,`
              `),g(20,"input",18),t(21,`
              `),d(22,c1,9,12,"mat-error",6),t(23,`
            `),a(),t(24,`

            `),i(25,"mat-form-field"),t(26,`
              `),i(27,"mat-label"),t(28),s(29,"translate"),a(),t(30,`
              `),g(31,"input",19),t(32,`
              `),d(33,d1,9,12,"mat-error",6),t(34,`
            `),a(),t(35,`

            `),i(36,"mat-form-field",20),T("click",function(){P(n);let l=F(47);return M(l.open())}),t(37,`
              `),i(38,"mat-label"),t(39),s(40,"translate"),a(),t(41,`
              `),g(42,"input",21),t(43,`
              `),g(44,"mat-datepicker-toggle",22),t(45,`
              `),g(46,"mat-datepicker",null,1),t(48,`
            `),a(),t(49,`

            `),i(50,"mat-form-field"),t(51,`
              `),i(52,"mat-label"),t(53),s(54,"translate"),a(),t(55,`
              `),g(56,"input",23),t(57,`
            `),a(),t(58,`

            `),i(59,"mat-form-field"),t(60,`
              `),i(61,"mat-label"),t(62),s(63,"translate"),a(),t(64,`
              `),g(65,"input",24),t(66,`
            `),a(),t(67,`

            `),i(68,"mat-form-field"),t(69,`
              `),i(70,"mat-label"),t(71),s(72,"translate"),a(),t(73,`
              `),g(74,"input",25),t(75,`
            `),a(),t(76,`

            `),i(77,"mat-form-field"),t(78,`
              `),i(79,"mat-label"),t(80),s(81,"translate"),a(),t(82,`
              `),g(83,"input",26),t(84,`
            `),a(),t(85,`

            `),i(86,"mat-form-field"),t(87,`
              `),i(88,"mat-label"),t(89),s(90,"translate"),a(),t(91,`
              `),g(92,"input",27),t(93,`
            `),a(),t(94,`

            `),i(95,"mat-form-field"),t(96,`
              `),i(97,"mat-label"),t(98),s(99,"translate"),a(),t(100,`
              `),g(101,"input",28),t(102,`
            `),a(),t(103,`
          `),S()}if(e&2){let n=F(47),m=C();o(5),x(p(6,17,"labels.inputs.Relationship")),o(5),c("ngForOf",m.relationTypes),o(7),x(p(18,19,"labels.inputs.First Name")),o(5),c("ngIf",m.newGuarantorForm.controls.firstname.hasError("required")),o(6),x(p(29,21,"labels.inputs.Last Name")),o(5),c("ngIf",m.newGuarantorForm.controls.lastname.hasError("required")),o(6),x(p(40,23,"labels.inputs.Date Of Birth")),o(3),c("min",m.minDate)("max",m.maxDate)("matDatepicker",n),o(2),c("for",n),o(9),f("",p(54,25,"labels.inputs.Address Line")," 1"),o(9),f("",p(63,27,"labels.inputs.Address Line")," 2"),o(9),x(p(72,29,"labels.inputs.City")),o(9),x(p(81,31,"labels.inputs.Zip")),o(9),x(p(90,33,"labels.inputs.Mobile")),o(9),f("",p(99,35,"labels.inputs.Residence Phone")," #")}}function x1(e,r){if(e&1&&(i(0,"button",29),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.newGuarantorForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}function f1(e,r){if(e&1&&(b(0),t(1,`
      `),i(2,"div",30),t(3,`
        `),i(4,"div",31),t(5,`
          `),i(6,"div",32),t(7),s(8,"translate"),a(),t(9,`
        `),a(),t(10,`
        `),i(11,"div",33),t(12,`
          `),i(13,"div",34),t(14),s(15,"translate"),a(),t(16,`
          `),i(17,"div",34),t(18),a(),t(19,`
        `),a(),t(20,`
        `),i(21,"div",33),t(22,`
          `),i(23,"div",34),t(24),s(25,"translate"),a(),t(26,`
          `),i(27,"div",34),t(28),a(),t(29,`
        `),a(),t(30,`
        `),i(31,"div",33),t(32,`
          `),i(33,"div",34),t(34),s(35,"translate"),a(),t(36,`
          `),i(37,"div",34),t(38),a(),t(39,`
        `),a(),t(40,`
      `),a(),t(41,`
    `),S()),e&2){let n=C();o(7),x(p(8,7,"labels.inputs.Client Details")),o(7),x(p(15,9,"labels.inputs.name")),o(4),x(n.newGuarantorForm.controls.name.value.displayName),o(6),x(p(25,11,"labels.inputs.Id")),o(4),x(n.newGuarantorForm.controls.name.value.id),o(6),x(p(35,13,"labels.inputs.Office")),o(4),x(n.newGuarantorForm.controls.name.value.officeName)}}var Ci=(()=>{class e{constructor(n,m,l,u,_,h,y){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.clientsService=h,this.settingsService=y,this.showClientDetailsForm=!1,this.minDate=new Date(1900,0,1),this.maxDate=new Date,this.clientsData=[],this.accountOptions=[],this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createNewGuarantorForm(),this.setNewGuarantorDetailsForm(),this.buildDependencies()}createNewGuarantorForm(){this.newGuarantorForm=this.formBuilder.group({existingClient:[""],name:["",q.required],clientRelationshipTypeId:[""],savingsId:[""],amount:[""]})}setNewGuarantorDetailsForm(){this.relationTypes=this.dataObject.allowedClientRelationshipTypes,this.newGuarantorForm.patchValue({existingClient:!0})}buildDependencies(){this.newGuarantorForm.get("existingClient").valueChanges.subscribe(()=>{this.showClientDetailsForm=!this.showClientDetailsForm,this.showClientDetailsForm?(this.newGuarantorForm.addControl("firstname",new K("")),this.newGuarantorForm.addControl("lastname",new K("")),this.newGuarantorForm.addControl("dob",new K("")),this.newGuarantorForm.addControl("addressLine1",new K("")),this.newGuarantorForm.addControl("addressLine2",new K("")),this.newGuarantorForm.addControl("city",new K("")),this.newGuarantorForm.addControl("zip",new K("")),this.newGuarantorForm.addControl("mobileNumber",new K("")),this.newGuarantorForm.addControl("housePhoneNumber",new K("")),this.newGuarantorForm.removeControl("name"),this.newGuarantorForm.removeControl("savingsId"),this.newGuarantorForm.removeControl("amount")):(this.newGuarantorForm.addControl("name",new K("")),this.newGuarantorForm.addControl("savingsId",new K("")),this.newGuarantorForm.addControl("amount",new K("")),this.newGuarantorForm.removeControl("firstname"),this.newGuarantorForm.removeControl("lastname"),this.newGuarantorForm.removeControl("dob"),this.newGuarantorForm.removeControl("addressLine1"),this.newGuarantorForm.removeControl("addressLine2"),this.newGuarantorForm.removeControl("city"),this.newGuarantorForm.removeControl("zip"),this.newGuarantorForm.removeControl("mobileNumber"),this.newGuarantorForm.removeControl("housePhoneNumber"))})}ngAfterViewInit(){this.newGuarantorForm.value.existingClient&&this.newGuarantorForm.get("name").valueChanges.subscribe(n=>{n.length>=2&&this.clientsService.getFilteredClients("displayName","ASC",!0,n).subscribe(m=>{this.clientsData=m.pageItems})})}clientSelected(n){this.accountOptions=[],this.loanService.guarantorAccountResource(this.loanId,n.id).subscribe(m=>{this.accountOptions=m.accountLinkingOptions})}displayClient(n){return n?n.displayName:void 0}submit(){let n=this.newGuarantorForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.newGuarantorForm.value.dob,_=this.newGuarantorForm.value.existingClient?this.dataObject.guarantorTypeOptions[0].id:this.dataObject.guarantorTypeOptions[2].id,h=ft(W({},n),{locale:m,dateFormat:l,guarantorTypeId:_});this.newGuarantorForm.value.existingClient?h.entityId=this.newGuarantorForm.controls.name.value.id:n.dob instanceof Date&&(h.dob=this.dateUtils.formatDate(u,l)),delete h.existingClient,delete h.name,this.loanService.createNewGuarantor(this.loanId,h).subscribe(y=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(cn),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-create-guarantor"]],inputs:{dataObject:"dataObject"},decls:34,vars:13,consts:[["clientsAutocomplete","matAutocomplete"],["dobDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["labelPosition","before","formControlName","existingClient"],[4,"ngIf"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[1,"flex-30"],["matInput","","formControlName","name",3,"matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected","displayWith"],[3,"value",4,"ngFor","ngForOf"],["formControlName","clientRelationshipTypeId"],[3,"value"],["formControlName","savingsId"],["type","number","matInput","","required","","formControlName","amount"],["matInput","","required","","formControlName","firstname"],["matInput","","required","","formControlName","lastname"],[3,"click"],["matInput","","formControlName","dob",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","addressLine1"],["matInput","","formControlName","addressLine2"],["matInput","","formControlName","city"],["matInput","","formControlName","zip"],["type","number","matInput","","formControlName","mobileNumber"],["type","number","matInput","","formControlName","housePhoneNumber"],["mat-raised-button","","color","primary",3,"disabled"],[1,"mat-table"],[1,"mat-header-row"],[1,"mat-header-cell"],[1,"mat-row"],[1,"mat-cell"]],template:function(m,l){m&1&&(i(0,"div",2),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",3),T("ngSubmit",function(){return l.submit()}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",4),t(9,`
          `),i(10,"mat-checkbox",5),t(11),s(12,"translate"),a(),t(13,`

          `),d(14,s1,33,12,"ng-container",6),t(15,`

          `),d(16,u1,104,37,"ng-container",6),t(17,`
        `),a(),t(18,`

        `),i(19,"mat-card-actions",7),t(20,`
          `),i(21,"button",8),t(22),s(23,"translate"),a(),t(24,`
          `),d(25,x1,3,4,"button",9),t(26,`
        `),a(),t(27,`
      `),a(),t(28,`
    `),a(),t(29,`

    `),d(30,f1,42,15,"ng-container",6),t(31,`
  `),a(),t(32,`
`),a(),t(33,`
`)),m&2&&(o(4),c("formGroup",l.newGuarantorForm),o(7),f(`
            `,p(12,8,"labels.inputs.Existing Client"),`
          `),o(3),c("ngIf",!l.showClientDetailsForm),o(2),c("ngIf",l.showClientDetailsForm),o(5),c("routerLink",N(12,i1)),o(),f(`
            `,p(23,10,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","CREATE_GUARANTOR"),o(5),c("ngIf",l.newGuarantorForm==null||l.newGuarantorForm.controls==null||l.newGuarantorForm.controls.name==null?null:l.newGuarantorForm.controls.name.value))},dependencies:[A,It,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,Me,to,Xa],styles:[".container[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{display:block;font-family:Tahoma,Verdana,sans-serif;width:100%}.container[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:flex;border-bottom-width:1px;border-bottom-style:solid;align-items:center;min-height:48px;padding:0 24px}.container[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{flex:1;overflow:hidden;word-wrap:break-word}.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-left:0;margin-bottom:0}"]})}}return e})();var g1=()=>["../../general"];function _1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Disbursement Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function C1(e,r){e&1&&(i(0,"mat-form-field"),t(1,`
            `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
            `),g(6,"input",13),t(7,`
          `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Fixed EMI amount")))}function h1(e,r){if(e&1&&(i(0,"button",14),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.disbursementForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var hi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.route=m,this.router=l,this.dateUtils=u,this.loanService=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.setDisbursementToSavingsForm(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}setDisbursementToSavingsForm(){this.disbursementForm=this.formBuilder.group({actualDisbursementDate:[new Date,q.required],transactionAmount:[this.dataObject.amount,q.required],note:[""]}),this.dataObject.fixedEmiAmount&&this.disbursementForm.addControl("fixedEmiAmount",new K(this.dataObject.fixedEmiAmount,[q.required]))}submit(){let n=this.disbursementForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.disbursementForm.value.actualDisbursementDate;n.actualDisbursementDate instanceof Date&&(n.actualDisbursementDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m}),h=this.route.snapshot.params.loanId;_.transactionAmount=_.transactionAmount*1,this.loanService.loanActionButtons(h,"disbursetosavings",_).subscribe(y=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v($),v(Y),v(R),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-disburse-to-savings-account"]],inputs:{dataObject:"dataObject"},decls:54,vars:23,consts:[["disbursementDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","actualDisbursementDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["matInput","","type","number","formControlName","fixedEmiAmount"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,_1,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mifosx-input-amount",8),t(27,`
          `),a(),t(28,`

          `),d(29,C1,8,3,"mat-form-field",7),t(30,`

          `),i(31,"mat-form-field"),t(32,`
            `),i(33,"mat-label"),t(34),s(35,"translate"),a(),t(36,`
            `),g(37,"textarea",9),t(38,`
          `),a(),t(39,`
        `),a(),t(40,`

        `),i(41,"mat-card-actions",10),t(42,`
          `),i(43,"button",11),t(44),s(45,"translate"),a(),t(46,`
          `),d(47,h1,3,4,"button",12),t(48,`
        `),a(),t(49,`
      `),a(),t(50,`
    `),a(),t(51,`
  `),a(),t(52,`
`),a(),t(53,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.disbursementForm),o(9),x(p(14,16,"labels.inputs.Disbursement On")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.disbursementForm.controls.actualDisbursementDate.hasError("required")),o(3),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.disbursementForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(3),c("ngIf",l.dataObject.fixedEmiAmount),o(5),x(p(35,18,"labels.inputs.Note")),o(9),c("routerLink",N(22,g1)),o(),f(`
            `,p(45,20,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","DISBURSETOSAVINGS_LOAN")}},dependencies:[A,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,ce,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var v1=()=>["../../general"];function b1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Rejected Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function S1(e,r){if(e&1&&(i(0,"button",12),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.rejectLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var vi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.router=m,this.route=l,this.loanService=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.setRejectLoanForm()}setRejectLoanForm(){this.rejectLoanForm=this.formBuilder.group({rejectedOnDate:[new Date,q.required],note:[""]})}submit(){let n=this.rejectLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.rejectLoanForm.value.rejectedOnDate;n.rejectedOnDate instanceof Date&&(n.rejectedOnDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.loanActionButtons(this.loanId,"reject",_).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v($),v(B),v(R),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-reject-loan"]],decls:49,vars:18,consts:[["rejectedDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","rejectedOnDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,b1,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"textarea",8),t(33,`
          `),a(),t(34,`
        `),a(),t(35,`

        `),i(36,"mat-card-actions",9),t(37,`
          `),i(38,"button",10),t(39),s(40,"translate"),a(),t(41,`
          `),d(42,S1,3,4,"button",11),t(43,`
        `),a(),t(44,`
      `),a(),t(45,`
    `),a(),t(46,`
  `),a(),t(47,`
`),a(),t(48,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.rejectLoanForm),o(9),x(p(14,11,"labels.inputs.Rejected On")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.rejectLoanForm.controls.rejectedOnDate.hasError("required")),o(6),x(p(30,13,"labels.inputs.Note")),o(9),c("routerLink",N(17,v1)),o(),f(`
            `,p(40,15,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REJECT_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var y1=()=>["../../general"];function D1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),i(3,"strong"),t(4),s(5,"translate"),a(),t(6,`
            `),a()),e&2&&(o(),f(`
              `,p(2,2,"labels.inputs.Disbursed On Date"),""),o(3),x(p(5,4,"labels.commons.required")))}function T1(e,r){if(e&1&&(i(0,"mat-option",20),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function P1(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",21),t(9,`
            `),a(),t(10,`

            `),i(11,"mat-form-field"),t(12,`
              `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
              `),g(17,"input",22),t(18,`
            `),a(),t(19,`

            `),i(20,"mat-form-field"),t(21,`
              `),i(22,"mat-label"),t(23),s(24,"translate"),a(),t(25,`
              `),g(26,"input",23),t(27,`
            `),a(),t(28,`

            `),i(29,"mat-form-field"),t(30,`
              `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
              `),g(35,"input",24),t(36,`
            `),a(),t(37,`

            `),i(38,"mat-form-field"),t(39,`
              `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
              `),g(44,"input",25),t(45,`
            `),a(),t(46,`
          `),S()),e&2&&(o(5),f("",p(6,5,"labels.inputs.Account")," #"),o(9),f("",p(15,7,"labels.inputs.Cheque")," #"),o(9),x(p(24,9,"labels.inputs.Routing Code")),o(9),f("",p(33,11,"labels.inputs.Reciept")," #"),o(9),f("",p(42,13,"labels.inputs.Bank")," #"))}function M1(e,r){if(e&1&&(i(0,"button",26),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.disbursementLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var bi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.maxFutureDate,this.createDisbursementLoanForm(),this.setDisbursementLoanDetails(),this.dataObject.currency&&(this.currency=this.dataObject.currency)}createDisbursementLoanForm(){this.disbursementLoanForm=this.formBuilder.group({actualDisbursementDate:[this.settingsService.businessDate,q.required],transactionAmount:["",q.required],externalId:"",paymentTypeId:"",note:""})}setDisbursementLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.disbursementLoanForm.patchValue({transactionAmount:this.dataObject.amount})}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.disbursementLoanForm.addControl("accountNumber",new K("")),this.disbursementLoanForm.addControl("checkNumber",new K("")),this.disbursementLoanForm.addControl("routingCode",new K("")),this.disbursementLoanForm.addControl("receiptNumber",new K("")),this.disbursementLoanForm.addControl("bankNumber",new K(""))):(this.disbursementLoanForm.removeControl("accountNumber"),this.disbursementLoanForm.removeControl("checkNumber"),this.disbursementLoanForm.removeControl("routingCode"),this.disbursementLoanForm.removeControl("receiptNumber"),this.disbursementLoanForm.removeControl("bankNumber"))}submit(){let n=this.disbursementLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.disbursementLoanForm.value.actualDisbursementDate;n.actualDisbursementDate instanceof Date&&(n.actualDisbursementDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.transactionAmount=_.transactionAmount*1,this.loanService.loanActionButtons(this.loanId,"disburse",_).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-disburse"]],inputs:{dataObject:"dataObject"},decls:91,vars:34,consts:[["actualDisbursementDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","actualDisbursementDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","externalId"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-fill"],[1,"expandcollapsebutton","m-l-10","m-t-40","flex-75",3,"click"],[3,"className"],[1,"m-l-10"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,D1,7,6,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mifosx-input-amount",8),t(27,`
          `),a(),t(28,`

          `),i(29,"mat-form-field"),t(30,`
            `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
            `),g(35,"input",9),t(36,`
          `),a(),t(37,`

          `),i(38,"mat-form-field"),t(39,`
            `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
            `),i(44,"mat-select",10),t(45,`
              `),d(46,T1,2,2,"mat-option",11),t(47,`
            `),a(),t(48,`
          `),a(),t(49,`

          `),i(50,"div",12),t(51,`
            `),i(52,"span",13),T("click",function(){return P(u),M(l.addPaymentDetails())}),t(53,`
              `),i(54,"mat-slide-toggle"),t(55,`
                `),i(56,"div",14),t(57,`
                  `),i(58,"span",15),t(59),s(60,"translate"),a(),t(61,`
                `),a(),t(62,`
              `),a(),t(63,`
            `),a(),t(64,`
          `),a(),t(65,`

          `),d(66,P1,47,15,"ng-container",7),t(67,`

          `),i(68,"mat-form-field"),t(69,`
            `),i(70,"mat-label"),t(71),s(72,"translate"),a(),t(73,`
            `),g(74,"textarea",16),t(75,`
          `),a(),t(76,`
        `),a(),t(77,`

        `),i(78,"mat-card-actions",17),t(79,`
          `),i(80,"button",18),t(81),s(82,"translate"),a(),t(83,`
          `),d(84,M1,3,4,"button",19),t(85,`
        `),a(),t(86,`
      `),a(),t(87,`
    `),a(),t(88,`
  `),a(),t(89,`
`),a(),t(90,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.disbursementLoanForm),o(9),x(p(14,21,"labels.inputs.Disbursed On")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.disbursementLoanForm.controls.actualDisbursementDate.hasError("required")),o(3),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.disbursementLoanForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(6),x(p(33,23,"labels.inputs.External Id")),o(9),x(p(42,25,"labels.inputs.Payment Type")),o(5),c("ngForOf",l.paymentTypes),o(10),c("className",l.showPaymentDetails?"enabled":"disabled"),o(3),x(p(60,27,"labels.inputs.Show Payment Details")),o(7),c("ngIf",l.showPaymentDetails),o(5),x(p(72,29,"labels.inputs.Note")),o(9),c("routerLink",N(33,y1)),o(),f(`
            `,p(82,31,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","DISBURSE_LOAN")}},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,ce,Ee,Yt],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var O1=()=>["../../../general"];function I1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Withdrawn On Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function E1(e,r){if(e&1&&(i(0,"button",12),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.withdrawnByClientLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Si=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createWithdrawnByClientLoanForm()}createWithdrawnByClientLoanForm(){this.withdrawnByClientLoanForm=this.formBuilder.group({withdrawnOnDate:[new Date,q.required],note:""})}submit(){let n=this.withdrawnByClientLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.withdrawnByClientLoanForm.value.withdrawnOnDate;n.withdrawnOnDate instanceof Date&&(n.withdrawnOnDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.loanActionButtons(this.loanId,"withdrawnByApplicant",_).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-withdrawn-by-client"]],inputs:{dataObject:"dataObject"},decls:49,vars:18,consts:[["withdrawnOnDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","withdrawnOnDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,I1,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"textarea",8),t(33,`
          `),a(),t(34,`
        `),a(),t(35,`

        `),i(36,"mat-card-actions",9),t(37,`
          `),i(38,"button",10),t(39),s(40,"translate"),a(),t(41,`
          `),d(42,E1,3,4,"button",11),t(43,`
        `),a(),t(44,`
      `),a(),t(45,`
    `),a(),t(46,`
  `),a(),t(47,`
`),a(),t(48,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.withdrawnByClientLoanForm),o(9),x(p(14,11,"labels.inputs.Withdrawn On")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.withdrawnByClientLoanForm.controls.withdrawnOnDate.hasError("required")),o(6),x(p(30,13,"labels.inputs.Note")),o(9),c("routerLink",N(17,O1)),o(),f(`
            `,p(40,15,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","WITHDRAW_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var A1=()=>["../../loan-collateral"];function w1(e,r){if(e&1&&(i(0,"mat-option",11),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,"")}}function L1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Collateral Type")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function R1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Value")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function F1(e,r){if(e&1&&(i(0,"button",12),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.collateralForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var yi=(()=>{class e{constructor(n,m,l,u){this.formBuilder=n,this.router=m,this.route=l,this.loanService=u}ngOnInit(){this.createAddCollateralForm()}createAddCollateralForm(){this.collateralForm=this.formBuilder.group({collateralTypeId:["",q.required],value:["",q.required],description:[""]})}submit(){let n=this.collateralForm.value.collateralTypeId;this.collateralForm.patchValue({collateralTypeId:n});let m=this.route.snapshot.params.loanId,l=this.collateralForm.value;l.locale="en",this.loanService.createLoanCollateral(m,l).subscribe(u=>{this.router.navigate(["../../loan-collateral"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v($),v(B),v(R))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-add-collateral"]],inputs:{dataObject:"dataObject"},decls:58,vars:19,consts:[[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["required","","formControlName","collateralTypeId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","required","","formControlName","value"],["matInput","","formControlName","description","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",1),T("ngSubmit",function(){return l.submit()}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",2),t(9,`
          `),i(10,"mat-form-field"),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),i(16,"mat-select",3),t(17,`
              `),d(18,w1,2,2,"mat-option",4),t(19,`
            `),a(),t(20,`
            `),d(21,L1,8,9,"mat-error",5),t(22,`
          `),a(),t(23,`

          `),i(24,"mat-form-field"),t(25,`
            `),i(26,"mat-label"),t(27),s(28,"translate"),a(),t(29,`
            `),g(30,"input",6),t(31,`
            `),d(32,R1,8,9,"mat-error",5),t(33,`
          `),a(),t(34,`

          `),i(35,"mat-form-field"),t(36,`
            `),i(37,"mat-label"),t(38),s(39,"translate"),a(),t(40,`
            `),g(41,"textarea",7),t(42,`
          `),a(),t(43,`
        `),a(),t(44,`

        `),i(45,"mat-card-actions",8),t(46,`
          `),i(47,"button",9),t(48),s(49,"translate"),a(),t(50,`
          `),d(51,F1,3,4,"button",10),t(52,`
        `),a(),t(53,`
      `),a(),t(54,`
    `),a(),t(55,`
  `),a(),t(56,`
`),a(),t(57,`
`)),m&2&&(o(4),c("formGroup",l.collateralForm),o(9),x(p(14,10,"labels.inputs.Collateral Type")),o(5),c("ngForOf",l.dataObject.allowedCollateralTypes),o(3),c("ngIf",l.collateralForm.controls.collateralTypeId.hasError("required")),o(6),x(p(28,12,"labels.inputs.Value")),o(5),c("ngIf",l.collateralForm.controls.value.hasError("required")),o(6),x(p(39,14,"labels.inputs.Description")),o(9),c("routerLink",N(18,A1)),o(),f(`
            `,p(49,16,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","CREATE_COLLATERAL"))},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,at,Ut,Gt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var B1=()=>["../../general"];function k1(e,r){if(e&1){let n=O();i(0,"button",7),T("click",function(){P(n);let l=C();return M(l.submit())}),t(1),s(2,"translate"),a()}e&2&&(o(),f(`
          `,p(2,1,"labels.buttons.Submit"),`
        `))}var Di=(()=>{class e{constructor(n,m,l,u){this.formBuilder=n,this.loansService=m,this.router=l,this.route=u,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.note=this.formBuilder.control("",q.required)}submit(){let n="undodisbursal";this.actionName==="Undo Last Disbursal"&&(n="undolastdisbursal"),this.loansService.loanActionButtons(this.loanId,n,{note:this.note.value}).subscribe(m=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v($),v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-undo-disbursal"]],inputs:{actionName:"actionName"},decls:30,vars:10,consts:[[1,"container","mat-elevation-z8"],[1,"layout-column"],[1,"flex-fill"],["matInput","","required","","cdkTextareaAutosize","","cdkAutosizeMinRows","2",3,"formControl"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"mat-card-content"),t(5,`
      `),i(6,"div",1),t(7,`
        `),i(8,"mat-form-field",2),t(9,`
          `),i(10,"mat-label"),t(11),s(12,"translate"),a(),t(13,`
          `),g(14,"textarea",3),t(15,`
        `),a(),t(16,`
      `),a(),t(17,`

      `),i(18,"mat-card-actions",4),t(19,`
        `),i(20,"button",5),t(21),s(22,"translate"),a(),t(23,`
        `),d(24,k1,3,3,"button",6),t(25,`
      `),a(),t(26,`
    `),a(),t(27,`
  `),a(),t(28,`
`),a(),t(29,`
`)),m&2&&(o(11),x(p(12,5,"labels.inputs.Note")),o(3),c("formControl",l.note),o(6),c("routerLink",N(9,B1)),o(),f(`
          `,p(22,7,"labels.buttons.Cancel"),`
        `),o(3),c("mifosxHasPermission","DISBURSALUNDO_LOAN"))},dependencies:[A,w,nt,J,_t,ke,H,et,mt,ht,X,Z,at,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var N1=["screenReport"],V1=()=>["../../general"];function j1(e,r){if(e&1&&(i(0,"mat-option",18),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function q1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Screen Report")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}var Ti=(()=>{class e{constructor(n,m,l,u,_){this.formBuilder=n,this.loansService=m,this.route=l,this.sanitizer=u,this.renderer=_,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.templatesData=this.dataObject,this.createLoanScreenReportForm()}createLoanScreenReportForm(){this.loanScreenReportForm=this.formBuilder.group({templateId:[""]})}print(){let n=window.open("","Screen Report","height=400,width=600");n.document.write("<html><head>"),n.document.write("</head><body>"),n.document.write(this.template),n.document.write("</body></html>"),n.print(),n.close()}generate(){let n=this.loanScreenReportForm.get("templateId").value;this.loansService.getTemplateData(n,this.loanId).subscribe(m=>{this.template=this.sanitizer.sanitize(Ra.HTML,m),this.renderer.setProperty(this.screenReportRef.nativeElement,"innerHTML",this.template)})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v(Ze),v(Fa))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-screen-reports"]],viewQuery:function(m,l){if(m&1&&ee(N1,7),m&2){let u;ne(u=ie())&&(l.screenReportRef=u.first)}},inputs:{dataObject:"dataObject"},decls:66,vars:22,consts:[["output",""],["screenReport",""],[1,"container","m-b-20"],[3,"ngSubmit","formGroup"],[1,"flex-fill"],["formControlName","templateId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"],["icon","cogs","size","sm",1,"m-r-10"],[1,"container"],[1,"layout-column","gap-3percent"],[1,"layout-align-end"],["mat-stroked-button","","color","primary",3,"click","disabled"],["icon","file",1,"m-r-10"],[1,"screen-report"],[3,"value"]],template:function(m,l){if(m&1){let u=O();i(0,"div",2),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",3),T("ngSubmit",function(){return P(u),M(l.generate())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div"),t(9,`
          `),i(10,"mat-form-field",4),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),i(16,"mat-select",5),t(17,`
              `),d(18,j1,2,2,"mat-option",6),t(19,`
            `),a(),t(20,`
            `),d(21,q1,8,9,"mat-error",7),t(22,`
          `),a(),t(23,`
        `),a(),t(24,`

        `),i(25,"mat-card-actions",8),t(26,`
          `),i(27,"button",9),t(28),s(29,"translate"),a(),t(30,`
          `),i(31,"button",10),t(32,`
            `),g(33,"fa-icon",11),t(34),s(35,"translate"),a(),t(36,`
        `),a(),t(37,`
      `),a(),t(38,`
    `),a(),t(39,`
  `),a(),t(40,`
`),a(),t(41,`

`),i(42,"div",12,0),t(44,`
  `),i(45,"mat-card",13),t(46,`
    `),i(47,"div",14),t(48,`
      `),i(49,"button",15),T("click",function(){return P(u),M(l.print())}),t(50,`
        `),g(51,"fa-icon",16),t(52),s(53,"translate"),a(),t(54,`
    `),a(),t(55,`

    `),i(56,"div",17,1),t(58,`
      `),i(59,"p"),t(60),s(61,"translate"),a(),t(62,`
    `),a(),t(63,`
  `),a(),t(64,`
`),a(),t(65,`
`)}m&2&&(o(4),c("formGroup",l.loanScreenReportForm),o(9),x(p(14,11,"labels.inputs.Loan Screen Reports")),o(5),c("ngForOf",l.templatesData),o(3),c("ngIf",l.loanScreenReportForm.controls.templateId.hasError("required")),o(6),c("routerLink",N(21,V1)),o(),f(`
            `,p(29,13,"labels.buttons.Cancel"),`
          `),o(3),c("disabled",!l.loanScreenReportForm.valid),o(3),f("",p(35,15,"labels.buttons.Generate Report"),`
          `),o(15),c("disabled",!l.template),o(3),f(`
        `,p(53,17,"labels.buttons.Print"),`
      `),o(8),x(p(61,19,"labels.text.Please select a screen report.")))},dependencies:[A,It,k,w,gt,J,st,pt,ct,H,et,mt,ht,X,Z,Ct,Ut,Gt,j,L,Ot],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .print[_ngcontent-%COMP%]{align-self:flex-end}.container[_ngcontent-%COMP%]   .screen-report[_ngcontent-%COMP%]{text-align:center}"]})}}return e})();var z1=()=>["../../general"];function H1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Approved Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function G1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Amount")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function U1(e,r){if(e&1&&(i(0,"button",16),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.approveLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Pi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.route=m,this.dateUtils=l,this.loanService=u,this.router=_,this.settingsService=h,this.loanData=new Object,this.minDate=new Date(2e3,0,1),this.route.data.subscribe(y=>{this.loanData=y.actionButtonData,this.currency=y.actionButtonData.currency}),this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.setApproveLoanForm(),this.loanService.getApproveAssociationsDetails(this.loanId).subscribe(n=>{this.associationData=n,this.approveLoanForm.patchValue({expectedDisbursementDate:new Date(n.timeline.expectedDisbursementDate)})})}setApproveLoanForm(){this.approveLoanForm=this.formBuilder.group({approvedOnDate:[this.settingsService.businessDate,q.required],expectedDisbursementDate:[""],approvedLoanAmount:[this.loanData.approvalAmount,q.required],note:[""]})}submit(){let n=this.approveLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.approveLoanForm.value.approvedOnDate,_=this.approveLoanForm.value.expectedDisbursementDate;n.approvedOnDate instanceof Date&&(n.approvedOnDate=this.dateUtils.formatDate(u,l)),n.expectedDisbursementDate instanceof Date&&(n.expectedDisbursementDate=this.dateUtils.formatDate(_,l));let h=ft(W({},n),{dateFormat:l,locale:m});this.loanService.loanActionButtons(this.loanId,"approve",h).subscribe(y=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v(Y),v(R),v($),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-approve-loan"]],decls:77,vars:31,consts:[["approvedDatePicker",""],["disbursementDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","approvedOnDate",3,"min","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","expectedDisbursementDate",3,"min","matDatepicker"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","type","number","required","","formControlName","approvedLoanAmount"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",2),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",3),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",4),t(9,`
          `),i(10,"mat-form-field",5),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",6),t(17,`
            `),g(18,"mat-datepicker-toggle",7),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,H1,8,9,"mat-error",8),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field",5),T("click",function(){P(u);let h=F(37);return M(h.open())}),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"input",9),t(33,`
            `),g(34,"mat-datepicker-toggle",7),t(35,`
            `),g(36,"mat-datepicker",null,1),t(38,`
          `),a(),t(39,`

          `),i(40,"mifosx-input-amount",10),t(41,`
          `),a(),t(42,`

          `),i(43,"mat-form-field"),t(44,`
            `),i(45,"mat-label"),t(46),s(47,"translate"),a(),t(48,`
            `),g(49,"input",11),t(50,`
            `),d(51,G1,8,9,"mat-error",8),t(52,`
          `),a(),t(53,`

          `),i(54,"mat-form-field"),t(55,`
            `),i(56,"mat-label"),t(57),s(58,"translate"),a(),t(59,`
            `),g(60,"textarea",12),t(61,`
          `),a(),t(62,`
        `),a(),t(63,`

        `),i(64,"mat-card-actions",13),t(65,`
          `),i(66,"button",14),t(67),s(68,"translate"),a(),t(69,`
          `),d(70,U1,3,4,"button",15),t(71,`
        `),a(),t(72,`
      `),a(),t(73,`
    `),a(),t(74,`
  `),a(),t(75,`
`),a(),t(76,`
`)}if(m&2){let u=F(21),_=F(37);o(4),c("formGroup",l.approveLoanForm),o(9),x(p(14,20,"labels.inputs.Approved On")),o(3),c("min",l.minDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.approveLoanForm.controls.approvedOnDate.hasError("required")),o(6),x(p(30,22,"labels.inputs.Expected disbursement on")),o(3),c("min",l.minDate)("matDatepicker",_),o(2),c("for",_),o(6),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.approveLoanForm.controls.approvedLoanAmount)("inputLabel","Approved Amount"),o(6),x(p(47,24,"labels.inputs.Transaction Amount")),o(5),c("ngIf",l.approveLoanForm.controls.approvedLoanAmount.hasError("required")),o(6),x(p(58,26,"labels.inputs.Note")),o(9),c("routerLink",N(30,z1)),o(),f(`
            `,p(68,28,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","APPROVE_LOAN")}},dependencies:[A,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L,ce,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var $1=()=>["../../general"];function W1(e,r){if(e&1&&(i(0,"mat-option",14),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name+" ("+(n==null?null:n.currency.name)+")",`
              `)}}function Q1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Charge")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function Y1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Amount")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function K1(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Due Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function J1(e,r){if(e&1){let n=O();i(0,"mat-form-field",15),T("click",function(){P(n);let l=F(11);return M(l.open())}),t(1,`
            `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
            `),g(6,"input",16),t(7,`
            `),g(8,"mat-datepicker-toggle",17),t(9,`
            `),g(10,"mat-datepicker",null,0),t(12,`
            `),d(13,K1,8,9,"mat-error",6),t(14,`
          `),a()}if(e&2){let n=F(11),m=C();o(3),x(p(4,6,"labels.inputs.Due On")),o(3),c("min",m.minDate)("max",m.maxDate)("matDatepicker",n),o(2),c("for",n),o(5),c("ngIf",m.loanChargeForm.controls.dueDate.hasError("required"))}}function Z1(e,r){if(e&1&&(i(0,"button",18),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.loanChargeForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Mi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.route=m,this.router=l,this.dateUtils=u,this.loansService=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.route.data.subscribe(y=>{this.loanChargeOptions=y.actionButtonData.chargeOptions}),this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.maxFutureDate,this.createLoanChargeForm(),this.loanChargeForm.controls.chargeId.valueChanges.subscribe(n=>{let m=this.loanChargeOptions.find(l=>l.id===n);m.chargeTimeType.id===2?this.loanChargeForm.addControl("dueDate",new K("",q.required)):this.loanChargeForm.removeControl("dueDate"),this.loanChargeForm.patchValue({amount:m.amount,chargeCalculation:m.chargeCalculationType.value,chargeTime:m.chargeTimeType.value})})}createLoanChargeForm(){this.loanChargeForm=this.formBuilder.group({chargeId:["",q.required],amount:["",q.required],chargeCalculation:[{value:"",disabled:!0}],chargeTime:[{value:"",disabled:!0}]})}submit(){let n=this.loanChargeForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.loanChargeForm.value.dueDate;n.dueDate instanceof Date&&(n.dueDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loansService.createLoanCharge(this.loanId,"charges",_).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v($),v(Y),v(R),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-add-loan-charge"]],decls:69,vars:23,consts:[["dueDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["required","","formControlName","chargeId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["type","number","required","","matInput","","formControlName","amount"],["matInput","","formControlName","chargeCalculation"],["matInput","","formControlName","chargeTime"],[3,"click",4,"ngIf"],[1,"layout-row","layout-xs-column","layout-align-center","gap-5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],[3,"click"],["matInput","","required","","formControlName","dueDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){m&1&&(i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return l.submit()}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field"),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),i(16,"mat-select",4),t(17,`
              `),d(18,W1,2,2,"mat-option",5),t(19,`
            `),a(),t(20,`
            `),d(21,Q1,8,9,"mat-error",6),t(22,`
          `),a(),t(23,`

          `),i(24,"mat-form-field"),t(25,`
            `),i(26,"mat-label"),t(27),s(28,"translate"),a(),t(29,`
            `),g(30,"input",7),t(31,`
            `),d(32,Y1,8,9,"mat-error",6),t(33,`
          `),a(),t(34,`

          `),i(35,"mat-form-field"),t(36,`
            `),i(37,"mat-label"),t(38),s(39,"translate"),a(),t(40,`
            `),g(41,"input",8),t(42,`
          `),a(),t(43,`

          `),i(44,"mat-form-field"),t(45,`
            `),i(46,"mat-label"),t(47),s(48,"translate"),a(),t(49,`
            `),g(50,"input",9),t(51,`
          `),a(),t(52,`

          `),d(53,J1,15,8,"mat-form-field",10),t(54,`
        `),a(),t(55,`

        `),i(56,"mat-card-actions",11),t(57,`
          `),i(58,"button",12),t(59),s(60,"translate"),a(),t(61,`
          `),d(62,Z1,3,4,"button",13),t(63,`
        `),a(),t(64,`
      `),a(),t(65,`
    `),a(),t(66,`
  `),a(),t(67,`
`),a(),t(68,`
`)),m&2&&(o(4),c("formGroup",l.loanChargeForm),o(9),x(p(14,12,"labels.inputs.Charge")),o(5),c("ngForOf",l.loanChargeOptions),o(3),c("ngIf",l.loanChargeForm.controls.chargeId.hasError("required")),o(6),x(p(28,14,"labels.inputs.Amount")),o(5),c("ngIf",l.loanChargeForm.controls.amount.hasError("required")),o(6),x(p(39,16,"labels.inputs.Charge Calculation")),o(9),x(p(48,18,"labels.inputs.Charge Time")),o(6),c("ngIf",l.loanChargeForm.controls.dueDate),o(5),c("routerLink",N(22,$1)),o(),f(`
            `,p(60,20,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","CREATE_LOANCHARGE"))},dependencies:[A,It,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var X1=()=>["../../general"];function tx(e,r){if(e&1&&(i(0,"mifosx-repayment-schedule-tab",8),t(1,`
        `),a()),e&2){let n=C();c("repaymentScheduleDetails",n.repaymentScheduleDetails)("forEditing",!0)}}var Oi=(()=>{class e{constructor(n,m,l,u,_,h,y){this.loansService=n,this.router=m,this.route=l,this.dialog=u,this.dateUtils=_,this.translateService=h,this.settingsService=y,this.wasChanged=!1,this.wasValidated=!1,this.repaymentScheduleDetails=null,this.repaymentScheduleChanges={},this.loanId=this.route.snapshot.params.loanId,this.getRepaymentSchedule()}ngOnInit(){this.repaymentScheduleChanges={}}getRepaymentSchedule(){this.loansService.getLoanAccountResource(this.loanId,"repaymentSchedule").subscribe(n=>{this.repaymentScheduleDetails=n.repaymentSchedule})}applyPattern(){let n=[];this.repaymentScheduleDetails.periods.forEach(_=>{_.period&&n.push({idx:_.period,dueDate:this.dateUtils.formatDate(_.dueDate,this.settingsService.dateFormat)})});let l={title:"Pattern Update",formfields:[new vn({controlName:"fromPeriod",label:"From Date",value:"",options:{label:"dueDate",value:"idx",data:n},required:!0}),new vn({controlName:"toPeriod",label:"To Date",value:"",options:{label:"dueDate",value:"idx",data:n},required:!0}),new pe({controlName:"amount",label:"Installment Amount",value:"",type:"number",required:!0})]};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h=_.data.value.fromPeriod,y=_.data.value.toPeriod,D=_.data.value.amount,I=[];this.repaymentScheduleDetails.periods.forEach(U=>{let tt=this.dateUtils.formatDate(U.dueDate,this.settingsService.dateFormat);U.period&&h<=U.period&&y>=U.period&&U.totalDueForPeriod!==D&&(U.totalDueForPeriod=D,this.repaymentScheduleChanges[tt]={dueDate:tt,installmentAmount:D},this.wasChanged=!0,U.changed=!0),I.push(U)}),this.repaymentScheduleDetails.periods=I}})}reset(){this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Recover Original Schedule"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want recover the Original Schedule")}}).afterClosed().subscribe(m=>{m.confirm&&this.loansService.applyCommandLoanScheduleVariations(this.loanId,"deleteVariations",{}).subscribe(l=>{this.getRepaymentSchedule(),this.wasChanged=!1,this.wasValidated=!1})})}validate(){this.loansService.applyCommandLoanScheduleVariations(this.loanId,"calculateLoanSchedule",this.getPayload()).subscribe(n=>{this.repaymentScheduleDetails.periods=[],n.periods.forEach(m=>{m.changed=!0,this.repaymentScheduleDetails.periods.push(m),this.wasValidated=!0})})}submit(){this.loansService.applyCommandLoanScheduleVariations(this.loanId,"addVariations",this.getPayload()).subscribe(n=>{this.router.navigate(["../../repayment-schedule"],{relativeTo:this.route})})}getPayload(){let n=[];Object.keys(this.repaymentScheduleChanges).forEach(u=>{n.push(this.repaymentScheduleChanges[u])});let m=this.settingsService.dateFormat,l=this.settingsService.language.code;return{exceptions:{modifiedinstallments:n},dateFormat:m,locale:l}}static{this.\u0275fac=function(m){return new(m||e)(v(R),v($),v(B),v(Zt),v(Y),v(ve),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-edit-repayment-schedule"]],decls:37,vars:20,consts:[[1,"container","mat-elevation-z8"],[1,"m-b-10","layout-column"],["class","flex-100",3,"repaymentScheduleDetails","forEditing",4,"ngIf"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["type","button","mat-raised-button","",3,"click"],["type","button","color","primary","mat-raised-button","",3,"click"],["type","button","color","primary","mat-raised-button","",3,"click","disabled"],[1,"flex-100",3,"repaymentScheduleDetails","forEditing"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"mat-card-content"),t(5,`
      `),i(6,"div",1),t(7,`
        `),d(8,tx,2,2,"mifosx-repayment-schedule-tab",2),t(9,`
      `),a(),t(10,`

      `),i(11,"mat-card-actions",3),t(12,`
        `),i(13,"button",4),t(14),s(15,"translate"),a(),t(16,`
        `),i(17,"button",5),T("click",function(){return l.reset()}),t(18),s(19,"translate"),a(),t(20,`
        `),i(21,"button",6),T("click",function(){return l.applyPattern()}),t(22),s(23,"translate"),a(),t(24,`
        `),i(25,"button",7),T("click",function(){return l.validate()}),t(26),s(27,"translate"),a(),t(28,`
        `),i(29,"button",7),T("click",function(){return l.submit()}),t(30),s(31,"translate"),a(),t(32,`
      `),a(),t(33,`
    `),a(),t(34,`
  `),a(),t(35,`
`),a(),t(36,`
`)),m&2&&(o(8),c("ngIf",l.repaymentScheduleDetails),o(5),c("routerLink",N(19,X1)),o(),f(`
          `,p(15,9,"labels.buttons.Cancel"),`
        `),o(4),x(p(19,11,"labels.buttons.Reset")),o(4),f(`
          `,p(23,13,"labels.buttons.Pattern"),`
        `),o(3),c("disabled",!l.wasChanged),o(),f(`
          `,p(27,15,"labels.buttons.Validate"),`
        `),o(3),c("disabled",!l.wasValidated),o(),f(`
          `,p(31,17,"labels.buttons.Submit"),`
        `))},dependencies:[A,k,w,H,et,mt,ht,j,L,$e],encapsulation:2})}}return e})();var ex=()=>["../../general"];function nx(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function ix(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function ax(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Reason for Charge-Off")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function ox(e,r){if(e&1&&(i(0,"button",16),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.chargeoffLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Ii=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.chargeOffReasonOptions=[],this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.chargeOffReasonOptions=this.dataObject.chargeOffReasonOptions,this.createChargeoffLoanForm()}createChargeoffLoanForm(){this.chargeoffLoanForm=this.formBuilder.group({transactionDate:[this.settingsService.businessDate,q.required],externalId:"",chargeOffReasonId:"",note:""})}submit(){let n=this.chargeoffLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.chargeoffLoanForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.submitLoanActionButton(this.loanId,_,"charge-off").subscribe(y=>{this.router.navigate(["../../transactions"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-charge-off"]],inputs:{dataObject:"dataObject"},decls:72,vars:26,consts:[["transactionDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["formControlName","chargeOffReasonId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","externalId"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,nx,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),i(32,"mat-select",8),t(33,`
              `),d(34,ix,2,2,"mat-option",9),t(35,`
            `),a(),t(36,`
            `),d(37,ax,8,9,"mat-error",7),t(38,`
          `),a(),t(39,`

          `),i(40,"mat-form-field"),t(41,`
            `),i(42,"mat-label"),t(43),s(44,"translate"),a(),t(45,`
            `),g(46,"input",10),t(47,`
          `),a(),t(48,`

          `),i(49,"mat-form-field"),t(50,`
            `),i(51,"mat-label"),t(52),s(53,"translate"),a(),t(54,`
            `),g(55,"textarea",11),t(56,`
          `),a(),t(57,`
        `),a(),t(58,`

        `),i(59,"mat-card-actions",12),t(60,`
          `),i(61,"button",13),t(62),s(63,"translate"),a(),t(64,`
          `),d(65,ox,3,4,"button",14),t(66,`
        `),a(),t(67,`
      `),a(),t(68,`
    `),a(),t(69,`
  `),a(),t(70,`
`),a(),t(71,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.chargeoffLoanForm),o(9),x(p(14,15,"labels.inputs.Transaction Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.chargeoffLoanForm.controls.transactionDate.hasError("required")),o(6),x(p(30,17,"labels.inputs.Reason for Charge-Off")),o(5),c("ngForOf",l.chargeOffReasonOptions),o(3),c("ngIf",l.chargeoffLoanForm.controls.chargeOffReasonId.hasError("required")),o(6),x(p(44,19,"labels.inputs.External Id")),o(9),x(p(53,21,"labels.inputs.Note")),o(9),c("routerLink",N(25,ex)),o(),f(`
            `,p(63,23,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","CHARGEOFF_LOAN")}},dependencies:[A,It,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L,Yt],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var rx=()=>["../../general"];function lx(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Settlement Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function mx(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Purchase Price Ratio")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function sx(e,r){if(e&1&&(i(0,"mat-form-field"),t(1,`
            `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
            `),g(6,"input",12),t(7,`
            `),d(8,mx,8,9,"mat-error",7),t(9,`
          `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Purchase Price Ratio")),o(5),c("ngIf",n.saleLoanForm.controls.purchasePriceRatio.hasError("required"))}}function px(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Owner External Id")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function cx(e,r){if(e&1&&(i(0,"mat-form-field"),t(1,`
            `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
            `),g(6,"input",13),t(7,`
            `),d(8,px,8,9,"mat-error",7),t(9,`
          `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Owner External Id")),o(5),c("ngIf",n.saleLoanForm.controls.ownerExternalId.hasError("required"))}}function dx(e,r){if(e&1&&(i(0,"button",14),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.saleLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Ei=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.externalAssetOwnerService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.BUYBACK_COMMAND="buyback",this.SALE_COMMAND="sale",this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId;let y=this.route.snapshot.params.action;this.command=y==="Sell Loan"?this.SALE_COMMAND:this.BUYBACK_COMMAND}ngOnInit(){this.minDate=this.settingsService.businessDate,this.maxDate=this.settingsService.maxAllowedDate,this.createSaleLoanForm()}isBuyBack(){return this.command===this.BUYBACK_COMMAND}createSaleLoanForm(){this.saleLoanForm=this.formBuilder.group({settlementDate:[this.settingsService.businessDate,q.required],purchasePriceRatio:["",q.required],transferExternalId:"",ownerExternalId:["",q.required]}),this.isBuyBack()&&(this.saleLoanForm.removeControl("purchasePriceRatio"),this.saleLoanForm.removeControl("ownerExternalId"))}submit(){let n=this.saleLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.saleLoanForm.value.settlementDate;n.settlementDate instanceof Date&&(n.settlementDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.externalAssetOwnerService.executeExternalAssetOwnerLoanCommand(this.loanId,_,this.command).subscribe(h=>{this.router.navigate(["../../external-asset-owner"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(Ue),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-asset-transfer-loan"]],decls:53,vars:20,consts:[["settlementDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","settlementDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","transferExternalId"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["type","number","matInput","","required","","formControlName","purchasePriceRatio"],["matInput","","formControlName","ownerExternalId"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field",4),T("click",function(){P(u);let h=F(21);return M(h.open())}),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",5),t(17,`
            `),g(18,"mat-datepicker-toggle",6),t(19,`
            `),g(20,"mat-datepicker",null,0),t(22,`
            `),d(23,lx,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),d(26,sx,10,4,"mat-form-field",7),t(27,`

          `),d(28,cx,10,4,"mat-form-field",7),t(29,`

          `),i(30,"mat-form-field"),t(31,`
            `),i(32,"mat-label"),t(33),s(34,"translate"),a(),t(35,`
            `),g(36,"input",8),t(37,`
          `),a(),t(38,`
        `),a(),t(39,`

        `),i(40,"mat-card-actions",9),t(41,`
          `),i(42,"button",10),t(43),s(44,"translate"),a(),t(45,`
          `),d(46,dx,3,4,"button",11),t(47,`
        `),a(),t(48,`
      `),a(),t(49,`
    `),a(),t(50,`
  `),a(),t(51,`
`),a(),t(52,`
`)}if(m&2){let u=F(21);o(4),c("formGroup",l.saleLoanForm),o(9),x(p(14,13,"labels.inputs.Settlement Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.saleLoanForm.controls.settlementDate.hasError("required")),o(3),c("ngIf",!l.isBuyBack()),o(2),c("ngIf",!l.isBuyBack()),o(5),x(p(34,15,"labels.inputs.Transfer External Id")),o(9),c("routerLink",N(19,rx)),o(),f(`
            `,p(44,17,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","SALE_LOAN")}},dependencies:[A,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,ot,L],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var $o=(()=>{class e{retrievePeriodFrequencyTypeOptions(n){return n?[{id:0,code:"DAYS",value:"Days"},{id:1,code:"WEEKS",value:"Weeks"},{id:2,code:"MONTHS",value:"Months"},{id:3,code:"YEARS",value:"Years"},{id:4,code:"WHOLE_TERM",value:"Whole Term"},{id:5,code:"INVALID",value:"Invalid"}]:[{id:0,code:"DAYS",value:"Days"},{id:1,code:"WEEKS",value:"Weeks"},{id:2,code:"MONTHS",value:"Months"},{id:3,code:"YEARS",value:"Years"}]}static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var xx=()=>["../../general"];function fx(e,r){if(e&1&&(i(0,"mat-option",17),t(1),a()),e&2){let n=r.$implicit;c("value",n.code),o(),f(`
                `,n.value,`
              `)}}function gx(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Start Date")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function _x(e,r){if(e&1&&(i(0,"button",18),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.reagingLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Ai=(()=>{class e{constructor(n,m,l,u,_,h,y){this.formBuilder=n,this.route=m,this.router=l,this.settingsService=u,this.dropdownOptions=_,this.loanService=h,this.dateUtils=y,this.frequencyOptions=[],this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId,this.frequencyOptions=this.dropdownOptions.retrievePeriodFrequencyTypeOptions(!1)}ngOnInit(){this.maxDate=this.settingsService.maxFutureDate,this.createReagingLoanForm()}createReagingLoanForm(){this.reagingLoanForm=this.formBuilder.group({numberOfInstallments:[1,q.required],startDate:[this.settingsService.businessDate,q.required],frequencyNumber:[1,q.required],frequencyType:[,q.required],note:"",externalId:""})}submit(){let n=this.reagingLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.reagingLoanForm.value.startDate;n.startDate instanceof Date&&(n.startDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});this.loanService.submitLoanActionButton(this.loanId,_,"reAge").subscribe(h=>{this.router.navigate(["../../transactions"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v($),v(G),v($o),v(R),v(Y))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-reaging"]],inputs:{dataObject:"dataObject"},decls:88,vars:31,consts:[["startDatePicker",""],[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["type","number","matInput","","required","","formControlName","numberOfInstallments"],["type","number","matInput","","required","","formControlName","frequencyNumber"],["formControlName","frequencyType"],[3,"value",4,"ngFor","ngForOf"],[3,"click"],["matInput","","required","","formControlName","startDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["matInput","","formControlName","externalId"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",3),t(9,`
          `),i(10,"mat-form-field"),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",4),t(17,`
          `),a(),t(18,`

          `),i(19,"mat-form-field"),t(20,`
            `),i(21,"mat-label"),t(22),s(23,"translate"),a(),t(24,`
            `),g(25,"input",5),t(26,`
          `),a(),t(27,`

          `),i(28,"mat-form-field"),t(29,`
            `),i(30,"mat-label"),t(31),s(32,"translate"),a(),t(33,`
            `),i(34,"mat-select",6),t(35,`
              `),d(36,fx,2,2,"mat-option",7),t(37,`
            `),a(),t(38,`
          `),a(),t(39,`

          `),i(40,"mat-form-field",8),T("click",function(){P(u);let h=F(51);return M(h.open())}),t(41,`
            `),i(42,"mat-label"),t(43),s(44,"translate"),a(),t(45,`
            `),g(46,"input",9),t(47,`
            `),g(48,"mat-datepicker-toggle",10),t(49,`
            `),g(50,"mat-datepicker",null,0),t(52,`
            `),d(53,gx,8,9,"mat-error",11),t(54,`
          `),a(),t(55,`

          `),i(56,"mat-form-field"),t(57,`
            `),i(58,"mat-label"),t(59),s(60,"translate"),a(),t(61,`
            `),g(62,"input",12),t(63,`
          `),a(),t(64,`

          `),i(65,"mat-form-field"),t(66,`
            `),i(67,"mat-label"),t(68),s(69,"translate"),a(),t(70,`
            `),g(71,"input",13),t(72,`
          `),a(),t(73,`
        `),a(),t(74,`

        `),i(75,"mat-card-actions",14),t(76,`
          `),i(77,"button",15),t(78),s(79,"translate"),a(),t(80,`
          `),d(81,_x,3,4,"button",16),t(82,`
        `),a(),t(83,`
      `),a(),t(84,`
    `),a(),t(85,`
  `),a(),t(86,`
`),a(),t(87,`
`)}if(m&2){let u=F(51);o(4),c("formGroup",l.reagingLoanForm),o(9),x(p(14,16,"labels.inputs.Number of Installments")),o(9),x(p(23,18,"labels.inputs.Frequency Number")),o(9),x(p(32,20,"labels.inputs.Frequency Type")),o(5),c("ngForOf",l.frequencyOptions),o(7),x(p(44,22,"labels.inputs.Start Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.reagingLoanForm.controls.startDate.hasError("required")),o(6),x(p(60,24,"labels.inputs.Reason")),o(9),x(p(69,26,"labels.inputs.External Id")),o(9),c("routerLink",N(30,xx)),o(),f(`
            `,p(79,28,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REAGING_LOAN")}},dependencies:[A,It,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,ot,L],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var Cx=()=>["../../general"];function hx(e,r){if(e&1&&(i(0,"button",8),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.reamortizeLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var wi=(()=>{class e{constructor(n,m,l,u){this.formBuilder=n,this.route=m,this.router=l,this.loanService=u,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.createReAmortizeLoanForm()}createReAmortizeLoanForm(){this.reamortizeLoanForm=this.formBuilder.group({note:"",externalId:""})}submit(){let n=this.reamortizeLoanForm.value;this.loanService.submitLoanActionButton(this.loanId,n,"reAmortize").subscribe(m=>{this.router.navigate(["../../transactions"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v($),v(R))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-reamortize"]],inputs:{dataObject:"dataObject"},decls:45,vars:13,consts:[[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["matInput","","formControlName","note"],["matInput","","formControlName","externalId"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",1),T("ngSubmit",function(){return l.submit()}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",2),t(9,`
          `),i(10,"mat-form-field"),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),g(16,"input",3),t(17,`
          `),a(),t(18,`
        `),a(),t(19,`

        `),i(20,"div",2),t(21,`
          `),i(22,"mat-form-field"),t(23,`
            `),i(24,"mat-label"),t(25),s(26,"translate"),a(),t(27,`
            `),g(28,"input",4),t(29,`
          `),a(),t(30,`
        `),a(),t(31,`

        `),i(32,"mat-card-actions",5),t(33,`
          `),i(34,"button",6),t(35),s(36,"translate"),a(),t(37,`
          `),d(38,hx,3,4,"button",7),t(39,`
        `),a(),t(40,`
      `),a(),t(41,`
    `),a(),t(42,`
  `),a(),t(43,`
`),a(),t(44,`
`)),m&2&&(o(4),c("formGroup",l.reamortizeLoanForm),o(9),x(p(14,6,"labels.inputs.Reason")),o(12),x(p(26,8,"labels.inputs.External Id")),o(9),c("routerLink",N(12,Cx)),o(),f(`
            `,p(36,10,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","REAMORTIZE_LOAN"))},dependencies:[A,w,gt,nt,J,st,pt,ct,H,et,mt,ht,X,Z,at,j,ot,L],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();var vx=()=>["../../general"];function bx(e,r){if(e&1&&(i(0,"div",14),t(1,`
      `),i(2,"span",15),t(3),s(4,"translateKey"),s(5,"dateFormat"),a(),t(6,`
    `),a()),e&2){let n=C();o(3),V("",Et(4,2,"Maturity Date","inputs")," : ",p(5,5,n.maturityDate),"")}}function Sx(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),i(3,"strong"),t(4),s(5,"translate"),a(),t(6,`
            `),a()),e&2&&(o(),f(`
              `,p(2,2,"labels.inputs.Start Date"),""),o(3),x(p(5,4,"labels.commons.required")))}function yx(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),i(3,"strong"),t(4),s(5,"translate"),a(),t(6,`
            `),a()),e&2&&(o(),f(`
              `,p(2,2,"labels.inputs.End Date"),""),o(3),x(p(5,4,"labels.commons.required")))}function Dx(e,r){if(e&1&&(i(0,"button",16),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.interestPauseLoanForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var Li=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.dateUtils=_,this.settingsService=h,this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.startDate=new Date,this.maturityDate=null,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.maturityDate=new Date(this.dataObject.timeline.expectedMaturityDate),this.maxDate=new Date(this.dataObject.timeline.expectedMaturityDate),this.startDate=new Date(this.settingsService.businessDate),this.startDate>this.maxDate&&(this.startDate=this.maxDate),this.createInterestPauseLoanForm()}createInterestPauseLoanForm(){this.interestPauseLoanForm=this.formBuilder.group({startDate:[this.startDate,q.required],endDate:[this.startDate,q.required]})}submit(){let n=this.interestPauseLoanForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.interestPauseLoanForm.value.startDate;n.startDate instanceof Date&&(n.startDate=this.dateUtils.formatDate(u,l));let _=this.interestPauseLoanForm.value.endDate;n.endDate instanceof Date&&(n.endDate=this.dateUtils.formatDate(_,l));let h=ft(W({},n),{dateFormat:l,locale:m});this.loanService.addInterestPauseToLoan(this.loanId,h).subscribe(y=>{this.router.navigate(["../../term-variations"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(Y),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-add-interest-pause"]],inputs:{dataObject:"dataObject"},decls:58,vars:24,consts:[["startDatePicker",""],["endDatePicker",""],[1,"container","mat-elevation-z8"],["class","m-b-20 layout-column",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","required","","formControlName","startDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","endDate",3,"min","max","matDatepicker"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[1,"m-b-20","layout-column"],[1,"m-r-10"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"div",2),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),d(4,bx,7,7,"div",3),t(5,`
    `),i(6,"form",4),T("ngSubmit",function(){return P(u),M(l.submit())}),t(7,`
      `),i(8,"mat-card-content"),t(9,`
        `),i(10,"div",5),t(11,`
          `),i(12,"mat-form-field",6),T("click",function(){P(u);let h=F(23);return M(h.open())}),t(13,`
            `),i(14,"mat-label"),t(15),s(16,"translate"),a(),t(17,`
            `),g(18,"input",7),t(19,`
            `),g(20,"mat-datepicker-toggle",8),t(21,`
            `),g(22,"mat-datepicker",null,0),t(24,`
            `),d(25,Sx,7,6,"mat-error",9),t(26,`
          `),a(),t(27,`

          `),i(28,"mat-form-field",6),T("click",function(){P(u);let h=F(39);return M(h.open())}),t(29,`
            `),i(30,"mat-label"),t(31),s(32,"translate"),a(),t(33,`
            `),g(34,"input",10),t(35,`
            `),g(36,"mat-datepicker-toggle",8),t(37,`
            `),g(38,"mat-datepicker",null,1),t(40,`
            `),d(41,yx,7,6,"mat-error",9),t(42,`
          `),a(),t(43,`
        `),a(),t(44,`

        `),i(45,"mat-card-actions",11),t(46,`
          `),i(47,"button",12),t(48),s(49,"translate"),a(),t(50,`
          `),d(51,Dx,3,4,"button",13),t(52,`
        `),a(),t(53,`
      `),a(),t(54,`
    `),a(),t(55,`
  `),a(),t(56,`
`),a(),t(57,`
`)}if(m&2){let u=F(23),_=F(39);o(4),c("ngIf",l.maturityDate),o(2),c("formGroup",l.interestPauseLoanForm),o(9),x(p(16,17,"labels.inputs.Start Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.interestPauseLoanForm.controls.startDate.hasError("required")),o(6),x(p(32,19,"labels.inputs.End Date")),o(3),c("min",l.interestPauseLoanForm.value.startDate)("max",l.maxDate)("matDatepicker",_),o(2),c("for",_),o(5),c("ngIf",l.interestPauseLoanForm.controls.endDate.hasError("required")),o(6),c("routerLink",N(23,vx)),o(),f(`
            `,p(49,21,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","DISBURSE_LOAN")}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Dt,Tt,yt,j,Lt,ot,L,Ne],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"]})}}return e})();function Tx(e,r){if(e&1&&g(0,"mifosx-loans-account-close",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Px(e,r){e&1&&g(0,"mifosx-undo-approval")}function Mx(e,r){if(e&1&&g(0,"mifosx-assign-loan-officer",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Ox(e,r){if(e&1&&g(0,"mifosx-foreclosure",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Ix(e,r){if(e&1&&g(0,"mifosx-prepay-loan",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Ex(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Ax(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function wx(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Lx(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Rx(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Fx(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Bx(e,r){if(e&1&&g(0,"mifosx-make-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function kx(e,r){if(e&1&&g(0,"mifosx-loan-credit-balance-refund",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Nx(e,r){if(e&1&&g(0,"mifosx-waive-interest",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Vx(e,r){if(e&1&&g(0,"mifosx-write-off-page",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function jx(e,r){if(e&1&&g(0,"mifosx-close-as-rescheduled",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function qx(e,r){if(e&1&&g(0,"mifosx-loan-reschedule",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function zx(e,r){if(e&1&&g(0,"mifosx-recovery-repayment",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Hx(e,r){if(e&1&&g(0,"mifosx-view-guarantors",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Gx(e,r){if(e&1&&g(0,"mifosx-create-guarantor",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Ux(e,r){if(e&1&&g(0,"mifosx-disburse-to-savings-account",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function $x(e,r){e&1&&g(0,"mifosx-reject-loan")}function Wx(e,r){if(e&1&&g(0,"mifosx-disburse",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Qx(e,r){e&1&&g(0,"mifosx-withdrawn-by-client")}function Yx(e,r){if(e&1&&g(0,"mifosx-add-collateral",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Kx(e,r){if(e&1&&g(0,"mifosx-undo-disbursal",4),e&2){let n=C();c("actionName",n.actionName)}}function Jx(e,r){if(e&1&&g(0,"mifosx-loan-screen-reports",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function Zx(e,r){e&1&&g(0,"mifosx-approve-loan")}function Xx(e,r){e&1&&g(0,"mifosx-add-loan-charge")}function tf(e,r){e&1&&g(0,"mifosx-edit-repayment-schedule")}function ef(e,r){if(e&1&&g(0,"mifosx-charge-off",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function nf(e,r){e&1&&g(0,"mifosx-asset-transfer-loan")}function af(e,r){if(e&1&&g(0,"mifosx-loan-reaging",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function of(e,r){if(e&1&&g(0,"mifosx-loan-reamortize",3),e&2){let n=C();c("dataObject",n.actionButtonData)}}function rf(e,r){if(e&1&&g(0,"mifosx-add-interest-pause",3),e&2){let n=C();c("dataObject",n.navigationData)}}var Ri=(()=>{class e{constructor(n,m){this.route=n,this.router=m,this.actions={Close:!1,"Undo Approval":!1,"Write Off":!1,"Add Collateral":!1,"Assign Loan Officer":!1,Foreclosure:!1,"Prepay Loan":!1,Reject:!1,"Disburse to Savings":!1,"Make Repayment":!1,"Waive Interest":!1,"Close (as Rescheduled)":!1,Reschedule:!1,"Recovery Payment":!1,"View Guarantors":!1,"Create Guarantor":!1,Disburse:!1,"Withdrawn by Client":!1,"Undo Disbursal":!1,"Undo Last Disbursal":!1,"Loan Screen Reports":!1,Approve:!1,"Add Loan Charge":!1,"Goodwill Credit":!1,"Merchant Issued Refund":!1,"Payout Refund":!1,"Credit Balance Refund":!1,"Edit Repayment Schedule":!1,"Charge-Off":!1,"Sell Loan":!1,"Buy Back Loan":!1,"Re-Age":!1,"Re-Amortize":!1,"Interest Payment Waiver":!1,"Add Interest Pause":!1,"Capitalized Income":!1,"Contract Termination":!1,"Buy Down Fee":!1};let l=this.router.getCurrentNavigation();this.navigationData=l?.extras?.state?.data,this.route.data.subscribe(u=>{this.actionButtonData=u.actionButtonData?u.actionButtonData:{}}),this.route.params.subscribe(u=>{this.actionName=u.action,this.actionName==="Change Loan Officer"&&(this.actionName="Assign Loan Officer");for(let _ of Object.keys(this.actions))this.actions[_]=!1;this.actions[this.actionName]=!0}),this.actionButtonData.actionName=this.actionName}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-account-actions"]],decls:70,vars:35,consts:[[3,"dataObject",4,"ngIf"],[4,"ngIf"],[3,"actionName",4,"ngIf"],[3,"dataObject"],[3,"actionName"]],template:function(m,l){m&1&&(d(0,Tx,1,1,"mifosx-loans-account-close",0),t(1,`
`),d(2,Px,1,0,"mifosx-undo-approval",1),t(3,`
`),d(4,Mx,1,1,"mifosx-assign-loan-officer",0),t(5,`
`),d(6,Ox,1,1,"mifosx-foreclosure",0),t(7,`
`),d(8,Ix,1,1,"mifosx-prepay-loan",0),t(9,`
`),d(10,Ex,1,1,"mifosx-make-repayment",0),t(11,`
`),d(12,Ax,1,1,"mifosx-make-repayment",0),t(13,`
`),d(14,wx,1,1,"mifosx-make-repayment",0),t(15,`
`),d(16,Lx,1,1,"mifosx-make-repayment",0),t(17,`
`),d(18,Rx,1,1,"mifosx-make-repayment",0),t(19,`
`),d(20,Fx,1,1,"mifosx-make-repayment",0),t(21,`
`),d(22,Bx,1,1,"mifosx-make-repayment",0),t(23,`
`),d(24,kx,1,1,"mifosx-loan-credit-balance-refund",0),t(25,`
`),d(26,Nx,1,1,"mifosx-waive-interest",0),t(27,`
`),d(28,Vx,1,1,"mifosx-write-off-page",0),t(29,`
`),d(30,jx,1,1,"mifosx-close-as-rescheduled",0),t(31,`
`),d(32,qx,1,1,"mifosx-loan-reschedule",0),t(33,`
`),d(34,zx,1,1,"mifosx-recovery-repayment",0),t(35,`
`),d(36,Hx,1,1,"mifosx-view-guarantors",0),t(37,`
`),d(38,Gx,1,1,"mifosx-create-guarantor",0),t(39,`
`),d(40,Ux,1,1,"mifosx-disburse-to-savings-account",0),t(41,`
`),d(42,$x,1,0,"mifosx-reject-loan",1),t(43,`
`),d(44,Wx,1,1,"mifosx-disburse",0),t(45,`
`),d(46,Qx,1,0,"mifosx-withdrawn-by-client",1),t(47,`
`),d(48,Yx,1,1,"mifosx-add-collateral",0),t(49,`
`),d(50,Kx,1,1,"mifosx-undo-disbursal",2),t(51,`
`),d(52,Jx,1,1,"mifosx-loan-screen-reports",0),t(53,`
`),d(54,Zx,1,0,"mifosx-approve-loan",1),t(55,`
`),d(56,Xx,1,0,"mifosx-add-loan-charge",1),t(57,`
`),d(58,tf,1,0,"mifosx-edit-repayment-schedule",1),t(59,`
`),d(60,ef,1,1,"mifosx-charge-off",0),t(61,`
`),d(62,nf,1,0,"mifosx-asset-transfer-loan",1),t(63,`
`),d(64,af,1,1,"mifosx-loan-reaging",0),t(65,`
`),d(66,of,1,1,"mifosx-loan-reamortize",0),t(67,`
`),d(68,rf,1,1,"mifosx-add-interest-pause",0),t(69,`
`)),m&2&&(c("ngIf",l.actions.Close),o(2),c("ngIf",l.actions["Undo Approval"]),o(2),c("ngIf",l.actions["Assign Loan Officer"]),o(2),c("ngIf",l.actions.Foreclosure),o(2),c("ngIf",l.actions["Prepay Loan"]||l.actions["Contract Termination"]),o(2),c("ngIf",l.actions["Make Repayment"]),o(2),c("ngIf",l.actions["Capitalized Income"]),o(2),c("ngIf",l.actions["Goodwill Credit"]),o(2),c("ngIf",l.actions["Buy Down Fee"]),o(2),c("ngIf",l.actions["Interest Payment Waiver"]),o(2),c("ngIf",l.actions["Payout Refund"]),o(2),c("ngIf",l.actions["Merchant Issued Refund"]),o(2),c("ngIf",l.actions["Credit Balance Refund"]),o(2),c("ngIf",l.actions["Waive Interest"]),o(2),c("ngIf",l.actions["Write Off"]),o(2),c("ngIf",l.actions["Close (as Rescheduled)"]),o(2),c("ngIf",l.actions.Reschedule),o(2),c("ngIf",l.actions["Recovery Payment"]),o(2),c("ngIf",l.actions["View Guarantors"]),o(2),c("ngIf",l.actions["Create Guarantor"]),o(2),c("ngIf",l.actions["Disburse to Savings"]),o(2),c("ngIf",l.actions.Reject),o(2),c("ngIf",l.actions.Disburse),o(2),c("ngIf",l.actions["Withdrawn by Client"]),o(2),c("ngIf",l.actions["Add Collateral"]),o(2),c("ngIf",l.actions["Undo Disbursal"]||l.actions["Undo Last Disbursal"]),o(2),c("ngIf",l.actions["Loan Screen Reports"]),o(2),c("ngIf",l.actions.Approve),o(2),c("ngIf",l.actions["Add Loan Charge"]),o(2),c("ngIf",l.actions["Edit Repayment Schedule"]),o(2),c("ngIf",l.actions["Charge-Off"]),o(2),c("ngIf",l.actions["Sell Loan"]||l.actions["Buy Back Loan"]),o(2),c("ngIf",l.actions["Re-Age"]),o(2),c("ngIf",l.actions["Re-Amortize"]),o(2),c("ngIf",l.actions["Add Interest Pause"]))},dependencies:[A,k,w,ai,oi,ri,li,mi,si,pi,ci,di,ui,xi,fi,_i,Ci,hi,vi,bi,Si,yi,Di,Ti,Pi,Mi,Oi,Ii,Ei,Ai,wi,Li],encapsulation:2})}}return e})();function lf(e,r){e&1&&(i(0,"th",8),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.From Date")))}function mf(e,r){if(e&1&&(i(0,"td",9),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.fromDate))}}function sf(e,r){e&1&&(i(0,"th",8),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Interest Rate")))}function pf(e,r){if(e&1&&(i(0,"td",9),t(1),a()),e&2){let n=r.$implicit;o(),x(n.effectiveInterestRate)}}function cf(e,r){e&1&&g(0,"tr",10)}function df(e,r){e&1&&g(0,"tr",11)}var Fi=(()=>{class e{constructor(n){this.route=n,this.displayedColumns=["fromDate","interestRate"],this.route.parent.data.subscribe(m=>{this.loanDetails=m.loanDetailsData})}ngOnInit(){this.interestRateData=this.loanDetails.interestRatesPeriods}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-floating-interest-rates"]],decls:24,vars:3,consts:[[1,"container"],["mat-table","",3,"dataSource"],["matColumnDef","fromDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","interestRate"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"table",1),t(3,`
    `),b(4,2),t(5,`
      `),d(6,lf,3,3,"th",3),t(7,`
      `),d(8,mf,3,3,"td",4),t(9,`
    `),S(),t(10,`

    `),b(11,5),t(12,`
      `),d(13,sf,3,3,"th",3),t(14,`
      `),d(15,pf,2,1,"td",4),t(16,`
    `),S(),t(17,`

    `),d(18,cf,1,0,"tr",6),t(19,`
    `),d(20,df,1,0,"tr",7),t(21,`
  `),a(),t(22,`
`),a(),t(23,`
`)),m&2&&(o(2),c("dataSource",l.interestRateData),o(16),c("matHeaderRowDef",l.displayedColumns),o(2),c("matRowDefColumns",l.displayedColumns))},dependencies:[A,w,Lt,L,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht],styles:["table[_ngcontent-%COMP%]{width:100%;margin:3% 0%}.container[_ngcontent-%COMP%]{padding-bottom:2%}"]})}}return e})();function uf(e,r){if(e&1){let n=O();i(0,"button",8),T("click",function(){P(n);let l=C();return M(l.addDisbursementDataEntry())}),t(1,`
      `),g(2,"fa-icon",9),t(3),s(4,"translate"),a()}e&2&&(o(3),f("",p(4,1,"labels.buttons.Add"),`
    `))}function xf(e,r){if(e&1){let n=O();i(0,"button",8),T("click",function(){P(n);let l=C();return M(l.editDisbursementData())}),t(1),s(2,"translate"),a()}e&2&&(o(),f(`
      `,p(2,1,"labels.buttons.Apply Changes"),`
    `))}function ff(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Expected Disbursement On")))}function gf(e,r){if(e&1&&(i(0,"td",20),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.expectedDisbursementDate))}}function _f(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Disbursed On")))}function Cf(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
          `,p(2,1,n.actualDisbursementDate),`
        `)}}function hf(e,r){if(e&1&&(i(0,"td",20),t(1,`
        `),d(2,Cf,3,3,"span",7),t(3,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.actualDisbursementDate)}}function vf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Principal")))}function bf(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.principal)}}function Sf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function yf(e,r){e&1&&(i(0,"span"),t(1,`
          `),g(2,"i",23),t(3,`
        `),a())}function Df(e,r){if(e&1){let n=O();i(0,"button",24),s(1,"translate"),T("click",function(){P(n);let l=C().index,u=C(2);return M(u.editDisbursementDataEntry(l))}),t(2,`
          `),g(3,"fa-icon",25),t(4,`
        `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Edit"))}function Tf(e,r){if(e&1){let n=O();i(0,"button",26),s(1,"translate"),T("click",function(){P(n);let l=C().index,u=C(2);return M(u.removeDisbursementDataEntry(l))}),t(2,`
          `),g(3,"fa-icon",27),t(4,`
        `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Delete"))}function Pf(e,r){if(e&1&&(i(0,"td",20),t(1,`
        `),d(2,yf,4,0,"span",7),t(3,`
        `),d(4,Df,5,3,"button",21),t(5,`
        `),d(6,Tf,5,3,"button",22),t(7,`
      `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("ngIf",n.actualDisbursementDate),o(2),c("ngIf",!n.actualDisbursementDate&&m.showActionsTrancheButtons()),o(2),c("ngIf",!n.actualDisbursementDate&&m.showActionsTrancheButtons())}}function Mf(e,r){e&1&&g(0,"tr",28)}function Of(e,r){e&1&&g(0,"tr",29)}function If(e,r){if(e&1&&(i(0,"table",10),t(1,`
    `),b(2,11),t(3,`
      `),d(4,ff,3,3,"th",12),t(5,`
      `),d(6,gf,3,3,"td",13),t(7,`
    `),S(),t(8,`

    `),b(9,14),t(10,`
      `),d(11,_f,3,3,"th",12),t(12,`
      `),d(13,hf,4,1,"td",13),t(14,`
    `),S(),t(15,`

    `),b(16,15),t(17,`
      `),d(18,vf,3,3,"th",12),t(19,`
      `),d(20,bf,2,1,"td",13),t(21,`
    `),S(),t(22,`

    `),b(23,16),t(24,`
      `),d(25,Sf,3,3,"th",12),t(26,`
      `),d(27,Pf,8,3,"td",13),t(28,`
    `),S(),t(29,`

    `),d(30,Mf,1,0,"tr",17),t(31,`
    `),d(32,Of,1,0,"tr",18),t(33,`
  `),a()),e&2){let n=C();c("dataSource",n.disbursementDataSource),o(30),c("matHeaderRowDef",n.expectedDisbursementColumns),o(2),c("matRowDefColumns",n.expectedDisbursementColumns)}}function Ef(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Applicable From Date")))}function Af(e,r){if(e&1&&(i(0,"td",20),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.termVariationApplicableFrom))}}function wf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Installment Amount")))}function Lf(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.termValue)}}function Rf(e,r){e&1&&g(0,"tr",28)}function Ff(e,r){e&1&&g(0,"tr",29)}function Bf(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`

    `),i(6,"table",10),t(7,`
      `),b(8,30),t(9,`
        `),d(10,Ef,3,3,"th",12),t(11,`
        `),d(12,Af,3,3,"td",13),t(13,`
      `),S(),t(14,`

      `),b(15,31),t(16,`
        `),d(17,wf,3,3,"th",12),t(18,`
        `),d(19,Lf,2,1,"td",13),t(20,`
      `),S(),t(21,`

      `),d(22,Rf,1,0,"tr",17),t(23,`
      `),d(24,Ff,1,0,"tr",18),t(25,`
    `),a(),t(26,`
  `),a()),e&2){let n=C();o(3),f("",p(4,4,"labels.heading.Installment Amount Variations"),":"),o(3),c("dataSource",n.loanDetails.emiAmountVariations),o(16),c("matHeaderRowDef",n.emivariationColumns),o(2),c("matRowDefColumns",n.emivariationColumns)}}var Bi=(()=>{class e{constructor(n,m,l,u,_,h){this.route=n,this.router=m,this.dialog=l,this.loanServices=u,this.settingsService=_,this.dateUtils=h,this.expectedDisbursementColumns=["expected disbursement on","disbursed on","principal","action"],this.emivariationColumns=["emi amount variation from","fixed emi amount"],this.minDate=new Date(2e3,0,1),this.maxDate=new Date(2100,0,1),this.disbursementDataSource=[],this.totalMultiDisbursed=null,this.disallowExpectedDisbursements=!1,this.pristine=!0,this.route.parent.data.subscribe(y=>{this.loanId=y.loanDetailsData.id,this.loanDetails=y.loanDetailsData,this.disallowExpectedDisbursements=this.loanDetails.disallowExpectedDisbursements||!1,this.currentPrincipalAmount=this.loanDetails.approvedPrincipal})}ngOnInit(){this.maxDate=this.settingsService.maxFutureDate,this.status=this.loanDetails.status.value,this.disbursementDataSource=this.loanServices.getLoanDisbursementDetailsData(),this.disbursementDataSource.forEach(n=>{n.id||(this.pristine=!1)})}showAddTrancheButtons(){return this.return=!0,(this.status==="Closed (obligations met)"||this.status==="Overpaid"||this.status==="Closed (rescheduled)"||this.status==="Closed (written off)"||this.status==="Submitted and pending approval"||this.disallowExpectedDisbursements)&&(this.return=!1),this.calculateTotalDisbursedAmount(),!(this.totalMultiDisbursed===this.currentPrincipalAmount||this.return===!1)}showActionsTrancheButtons(){return!(this.status==="Closed (obligations met)"||this.status==="Overpaid"||this.status==="Closed (rescheduled)"||this.status==="Closed (written off)"||this.status==="Submitted and pending approval"||this.disallowExpectedDisbursements)}calculateTotalDisbursedAmount(){this.totalMultiDisbursed=0,this.count=0,this.disbursementDataSource.forEach(n=>{this.totalMultiDisbursed+=n.principal*1,this.count+=1})}buildForm(n,m){return[new fe({controlName:"expectedDisbursementDate",label:"Expected Disbursement Date",value:n||"",type:"datetime-local",minDate:this.minDate,maxDate:this.maxDate,required:!0,order:1}),new pe({controlName:"principal",label:"Principal",value:m,type:"number",required:!0,order:2})]}addDisbursementDataEntry(){this.calculateTotalDisbursedAmount();let n={title:"Add Disbursement Details",layout:{addButtonText:"Add"},formfields:this.buildForm(new Date,this.currentPrincipalAmount-this.totalMultiDisbursed)};this.dialog.open(ae,{data:n}).afterClosed().subscribe(l=>{if(l.data){let u=l.data.value.principal*1;this.totalMultiDisbursed+u<=this.currentPrincipalAmount&&(this.disbursementDataSource=this.disbursementDataSource.concat(l.data.value),this.loanServices.saveLoanDisbursementDetailsData(this.disbursementDataSource),this.pristine=!1)}})}editDisbursementDataEntry(n){let m=this.disbursementDataSource[n].principal*1,l=this.dateUtils.parseDate(this.disbursementDataSource[n].expectedDisbursementDate),u={title:"Edit Disbursement Details",layout:{addButtonText:"Save"},formfields:this.buildForm(l,m)};this.dialog.open(ae,{data:u}).afterClosed().subscribe(h=>{if(h.data){let y=h.data.value.principal*1;this.totalMultiDisbursed-m+y<=this.currentPrincipalAmount&&(this.disbursementDataSource[n].principal=y,this.disbursementDataSource[n].expectedDisbursementDate=h.data.value.expectedDisbursementDate,this.pristine=!1)}})}removeDisbursementDataEntry(n){this.dialog.open(xe,{data:{deleteContext:"this"}}).afterClosed().subscribe(l=>{if(l.delete){let u=this.disbursementDataSource[n].principal*1;this.disbursementDataSource.splice(n,1),this.disbursementDataSource=this.disbursementDataSource.concat([]),this.totalMultiDisbursed-=u,this.pristine=!1}})}editDisbursementData(){let n=[];this.disbursementDataSource.forEach(l=>{n.push({expectedDisbursementDate:this.dateUtils.formatDate(l.expectedDisbursementDate,this.settingsService.dateFormat),principal:l.principal,id:l.id})});let m={disbursementData:n,dateFormat:this.settingsService.dateFormat,locale:this.settingsService.language.code};this.loanServices.editDisbursements(this.loanId,m).toPromise().then(l=>{this.reload(),this.pristine=!0})}reload(){let n=this.router.url;this.router.navigateByUrl("/clients",{skipLocationChange:!0}).then(()=>this.router.navigate([n]))}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(Zt),v(R),v(G),v(Y))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-tranche-details"]],decls:29,vars:13,consts:[[1,"container"],[1,"flex-fill"],[1,"flex-40"],[1,"flex-60"],[1,"layout-row","margin-t","layout-xs-column","layout-align-end","gap-2percent"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["icon","plus",1,"m-r-10"],["mat-table","",3,"dataSource"],["matColumnDef","expected disbursement on"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","disbursed on"],["matColumnDef","principal"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["type","button","mat-icon-button","","color","primary","matTooltipPosition","left",3,"matTooltip","click",4,"ngIf"],["type","button","mat-icon-button","","color","warn","matTooltipPosition","left",3,"matTooltip","click",4,"ngIf"],[1,"fa","fa-check"],["type","button","mat-icon-button","","color","primary","matTooltipPosition","left",3,"click","matTooltip"],["icon","edit"],["type","button","mat-icon-button","","color","warn","matTooltipPosition","left",3,"click","matTooltip"],["icon","trash"],["mat-header-row",""],["mat-row",""],["matColumnDef","emi amount variation from"],["matColumnDef","fixed emi amount"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"div",1),t(3,`
    `),i(4,"span",2),t(5),s(6,"translate"),a(),t(7,`
    `),i(8,"span",3),t(9),s(10,"formatNumber"),a(),t(11,`
  `),a(),t(12,`

  `),i(13,"h3"),t(14),s(15,"translate"),a(),t(16,`

  `),i(17,"div",4),t(18,`
    `),d(19,uf,5,3,"button",5),t(20,`
    `),d(21,xf,3,3,"button",5),t(22,`
  `),a(),t(23,`

  `),d(24,If,34,3,"table",6),t(25,`

  `),d(26,Bf,27,6,"div",7),t(27,`
`),a(),t(28,`
`)),m&2&&(o(5),f("",p(6,7,"labels.inputs.Maximum allowed outstanding balance"),":"),o(4),x(p(10,9,l.loanDetails.maxOutstandingLoanBalance)),o(5),x(p(15,11,"labels.heading.Loan Tranche Details")),o(5),c("ngIf",l.showAddTrancheButtons()),o(2),c("ngIf",!l.pristine),o(3),c("ngIf",l.disbursementDataSource.length>0),o(2),c("ngIf",l.loanDetails.emiAmountVariations.length>0))},dependencies:[A,k,w,j,Lt,L,Ot,Rt,kt,Bt,Nt,Ft,Vt,Pe,me,jt,zt,qt,Ht,Wt],styles:["table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{padding-top:1%;padding-bottom:2%}.container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{margin-left:1%}"]})}}return e})();var kf=()=>["../actions/Add Collateral"];function Nf(e,r){if(e&1&&(i(0,"div",7),t(1,`
    `),i(2,"table"),t(3,`
      `),i(4,"tbody"),t(5,`
        `),i(6,"tr"),t(7,`
          `),i(8,"td",8),t(9,`
            `),i(10,"b"),t(11),s(12,"translate"),a(),t(13,`
          `),a(),t(14,`
          `),i(15,"td",9),t(16),s(17,"formatNumber"),a(),t(18,`
          `),i(19,"td",8),t(20,`
            `),i(21,"b"),t(22),s(23,"translate"),a(),t(24,`
          `),a(),t(25,`
          `),i(26,"td",9),t(27),s(28,"formatNumber"),a(),t(29,`
        `),a(),t(30,`
      `),a(),t(31,`
    `),a(),t(32,`
  `),a()),e&2){let n=C();o(11),f("",p(12,4,"labels.inputs.Number of Collaterals")," :"),o(5),f(`
            `,p(17,6,n.loanCollaterals==null?null:n.loanCollaterals.length),`
          `),o(6),f("",p(23,8,"labels.inputs.Total Amount")," :"),o(5),f(`
            `,p(28,10,n.totalAmount),`
          `)}}function Vf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.ID")))}function jf(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.id)}}function qf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Currency")))}function zf(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.currency.code)}}function Hf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Description")))}function Gf(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.description)}}function Uf(e,r){e&1&&(i(0,"th",19),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Value")))}function $f(e,r){if(e&1&&(i(0,"td",20),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.value))}}function Wf(e,r){e&1&&g(0,"tr",21)}function Qf(e,r){e&1&&g(0,"tr",22)}function Yf(e,r){if(e&1&&(i(0,"table",10),t(1,`
    `),b(2,11),t(3,`
      `),d(4,Vf,3,3,"th",12),t(5,`
      `),d(6,jf,2,1,"td",13),t(7,`
    `),S(),t(8,`

    `),b(9,14),t(10,`
      `),d(11,qf,3,3,"th",12),t(12,`
      `),d(13,zf,2,1,"td",13),t(14,`
    `),S(),t(15,`

    `),b(16,15),t(17,`
      `),d(18,Hf,3,3,"th",12),t(19,`
      `),d(20,Gf,2,1,"td",13),t(21,`
    `),S(),t(22,`

    `),b(23,16),t(24,`
      `),d(25,Uf,3,3,"th",12),t(26,`
      `),d(27,$f,3,3,"td",13),t(28,`
    `),S(),t(29,`

    `),d(30,Wf,1,0,"tr",17),t(31,`
    `),d(32,Qf,1,0,"tr",18),t(33,`
  `),a()),e&2){let n=C();c("dataSource",n.loanCollaterals),o(30),c("matHeaderRowDef",n.displayedColumns),o(2),c("matRowDefColumns",n.displayedColumns)}}var ki=(()=>{class e{constructor(n){this.route=n,this.loanCollaterals=[],this.displayedColumns=["id","currency","description","value"],this.route.data.subscribe(m=>{this.loanCollaterals=m.loanCollaterals})}ngOnInit(){this.totalAmount=0,this.loanCollaterals.forEach(n=>{this.totalAmount=this.totalAmount+n.value})}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-collateral-tab"]],decls:21,vars:10,consts:[[1,"tab-container","mat-typography"],[1,"layout-row","align-start-center"],[1,"flex-90"],[1,"layout-row","gap-20px","align-end","align-items-center","action-buttons"],["mat-raised-button","","color","primary",3,"routerLink"],["class","layout-row gap-32px performance-history-container",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],[1,"layout-row","gap-32px","performance-history-container"],[1,"flex-25"],[1,"flex-25","left"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","currency"],["matColumnDef","description"],["matColumnDef","value"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"div",1),t(3,`
    `),i(4,"h3",2),t(5),s(6,"translate"),a(),t(7,`
    `),i(8,"div",3),t(9,`
      `),i(10,"button",4),t(11),s(12,"translate"),a(),t(13,`
    `),a(),t(14,`
  `),a(),t(15,`

  `),d(16,Nf,33,12,"div",5),t(17,`

  `),d(18,Yf,34,3,"table",6),t(19,`
`),a(),t(20,`
`)),m&2&&(o(5),x(p(6,5,"labels.inputs.Loan Collateral Details")),o(5),c("routerLink",N(9,kf)),o(),f(`
        `,p(12,7,"labels.buttons.Add Collateral"),`
      `),o(5),c("ngIf",(l.loanCollaterals==null?null:l.loanCollaterals.length)>0),o(2),c("ngIf",(l.loanCollaterals==null?null:l.loanCollaterals.length)>0))},dependencies:[A,k,w,H,j,L,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht,Wt],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:3%}table[_ngcontent-%COMP%]   .document-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}"]})}}return e})();var Wo=(()=>{class e{constructor(){}dynamicSort(n){let m=1;return n[0]==="-"&&(m=-1,n=n.substr(1)),(l,u)=>(l[n]<u[n]?-1:l[n]>u[n]?1:0)*m}static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Jf=()=>["../","general"];function Zf(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,n.name,`
        `)}}function Xf(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,n.displayName,`
        `)}}function tg(e,r){if(e&1&&(i(0,"mat-form-field",17),t(1,`
      `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"mat-select",31),s(7,"translate"),t(8,`
        `),d(9,Xf,2,2,"mat-option",7),t(10,`
      `),a(),t(11,`
    `),a()),e&2){let n=C(2);o(3),x(p(4,3,"labels.inputs.Loan officer")),o(3),Q("matTooltip",p(7,5,"tooltips.Financial institution representative")),o(3),c("ngForOf",n.loanOfficerOptions)}}function eg(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,n.name,`
        `)}}function ng(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,n.name,`
        `)}}function ig(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Submitted on")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function ag(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Disbursement on")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function og(e,r){if(e&1&&(i(0,"mat-option",15),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),V(`
          (`,n.accountNo,") ",n.productName,`
        `)}}function rg(e,r){if(e&1){let n=O();i(0,"div",16),t(1,`
    `),i(2,"mat-form-field",17),t(3,`
      `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
      `),g(8,"input",18),s(9,"translate"),t(10,`
    `),a(),t(11,`

    `),d(12,tg,12,7,"mat-form-field",19),t(13,`

    `),i(14,"mat-form-field",17),t(15,`
      `),i(16,"mat-label"),t(17),s(18,"translate"),a(),t(19,`
      `),i(20,"mat-select",20),s(21,"translate"),t(22,`
        `),d(23,eg,2,2,"mat-option",7),t(24,`
      `),a(),t(25,`
    `),a(),t(26,`

    `),i(27,"mat-form-field",17),t(28,`
      `),i(29,"mat-label"),t(30),s(31,"translate"),a(),t(32,`
      `),i(33,"mat-select",21),t(34,`
        `),d(35,ng,2,2,"mat-option",7),t(36,`
      `),a(),t(37,`
    `),a(),t(38,`

    `),i(39,"mat-form-field",22),T("click",function(){P(n);let l=F(51);return M(l.open())}),t(40,`
      `),i(41,"mat-label"),t(42),s(43,"translate"),a(),t(44,`
      `),g(45,"input",23),s(46,"translate"),t(47,`
      `),g(48,"mat-datepicker-toggle",24),t(49,`
      `),g(50,"mat-datepicker",null,0),t(52,`
      `),d(53,ig,8,9,"mat-error",25),t(54,`
    `),a(),t(55,`

    `),i(56,"mat-form-field",22),T("click",function(){P(n);let l=F(68);return M(l.open())}),t(57,`
      `),i(58,"mat-label"),t(59),s(60,"translate"),a(),t(61,`
      `),g(62,"input",26),s(63,"translate"),t(64,`
      `),g(65,"mat-datepicker-toggle",24),t(66,`
      `),g(67,"mat-datepicker",null,1),t(69,`
      `),d(70,ag,8,9,"mat-error",25),t(71,`
    `),a(),t(72,`

    `),g(73,"mat-divider",27),t(74,`

    `),i(75,"h3",28),t(76),s(77,"translate"),a(),t(78,`

    `),i(79,"mat-form-field",17),t(80,`
      `),i(81,"mat-label"),t(82),s(83,"translate"),a(),t(84,`
      `),i(85,"mat-select",29),t(86,`
        `),d(87,og,2,3,"mat-option",7),t(88,`
      `),a(),t(89,`
    `),a(),t(90,`

    `),i(91,"mat-checkbox",30),t(92,`
      `),i(93,"p"),t(94),s(95,"translate"),a(),t(96,`
    `),a(),t(97,`
  `),a()}if(e&2){let n=F(51),m=F(68),l=C();o(5),x(p(6,26,"labels.inputs.External id")),o(3),Q("matTooltip",p(9,28,"tooltips.Provides an external id")),o(4),c("ngIf",l.loanProductSelected),o(5),x(p(18,30,"labels.inputs.Loan Purpose")),o(3),Q("matTooltip",p(21,32,"tooltips.Provides an indication")),o(3),c("ngForOf",l.loanPurposeOptions),o(7),x(p(31,34,"labels.inputs.Fund")),o(5),c("ngForOf",l.fundOptions),o(7),x(p(43,36,"labels.inputs.Submitted on")),o(3),Q("matTooltip",p(46,38,"tooltips.Date the loan account application")),c("min",l.minDate)("max",l.maxDate)("matDatepicker",n),o(3),c("for",n),o(5),c("ngIf",l.loansAccountDetailsForm.controls.submittedOnDate==null?null:l.loansAccountDetailsForm.controls.submittedOnDate.hasError("required")),o(6),x(p(60,40,"labels.inputs.Disbursement on")),o(3),Q("matTooltip",p(63,42,"tooltips.Date that the loan account disbursed")),c("min",l.loansAccountDetailsForm.value.submittedOnDate)("max",l.maxDate)("matDatepicker",m),o(3),c("for",m),o(5),c("ngIf",l.loansAccountDetailsForm.controls.submittedOnDate==null?null:l.loansAccountDetailsForm.controls.submittedOnDate.hasError("required")),o(6),x(p(77,44,"labels.heading.Savings Linkage")),o(6),x(p(83,46,"labels.inputs.Link savings")),o(5),c("ngForOf",l.accountLinkingOptions),o(7),x(p(95,48,"labels.inputs.Create standing instructions at disbursement"))}}function lg(e,r){e&1&&(i(0,"button",32),t(1),s(2,"translate"),a()),e&2&&(c("routerLink",N(4,Jf)),o(),f(`
      `,p(2,2,"labels.buttons.Cancel"),`
    `))}var Re=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loansService=m,this.route=l,this.translateService=u,this.settingsService=_,this.commons=h,this.placeHolderLabel="",this.noEntriesFoundLabel="",this.minDate=new Date(2e3,0,1),this.maxDate=new Date(2100,0,1),this.isFieldOfficerPatched=!1,this.loanId=null,this.loanProductSelected=!1,this.productData=new wa(1),this.filterFormCtrl=new K(""),this._onDestroy=new Aa,this.loansAccountProductTemplate=new Je,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.placeHolderLabel=this.translateService.instant("labels.text.Search"),this.noEntriesFoundLabel=this.translateService.instant("labels.text.No data found"),this.createLoansAccountDetailsForm(),this.maxDate=this.settingsService.maxFutureDate,this.buildDependencies(),this.loansAccountTemplate&&(this.productList=this.loansAccountTemplate.productOptions.sort(this.commons.dynamicSort("name")),this.loansAccountTemplate.loanProductId&&this.loansAccountDetailsForm.patchValue({productId:this.loansAccountTemplate.loanProductId,submittedOnDate:this.loansAccountTemplate.timeline.submittedOnDate&&new Date(this.loansAccountTemplate.timeline.submittedOnDate),loanOfficerId:this.loansAccountTemplate.loanOfficerId,loanPurposeId:this.loansAccountTemplate.loanPurposeId,fundId:this.loansAccountTemplate.fundId,expectedDisbursementDate:this.loansAccountTemplate.timeline.expectedDisbursementDate&&new Date(this.loansAccountTemplate.timeline.expectedDisbursementDate),externalId:this.loansAccountTemplate.externalId})),this.filterFormCtrl.valueChanges.pipe(La(this._onDestroy)).subscribe(()=>{this.searchItem()}),this.productData.next(this.productList.slice())}ngOnDestroy(){this._onDestroy.next(),this._onDestroy.complete()}searchItem(){if(this.productList){let n=this.filterFormCtrl.value.toLowerCase();n?this.productData.next(this.productList.filter(m=>m.name.toLowerCase().indexOf(n)>=0)):this.productData.next(this.productList.slice())}}createLoansAccountDetailsForm(){this.loansAccountDetailsForm=this.formBuilder.group({productId:["",q.required],loanOfficerId:[""],loanPurposeId:[""],fundId:[""],submittedOnDate:[this.settingsService.businessDate,q.required],expectedDisbursementDate:["",q.required],externalId:[""],linkAccountId:[""],createStandingInstructionAtDisbursement:[""]})}buildDependencies(){let n=this.loansAccountTemplate.clientId?this.loansAccountTemplate.clientId:this.loansAccountTemplate.group.id,m=!this.loansAccountTemplate.clientId;this.loansAccountDetailsForm.get("productId").valueChanges.subscribe(l=>{this.loansService.getLoansAccountTemplateResource(n,m,l).subscribe(u=>{this.loansAccountProductTemplate.emit(u),this.loanOfficerOptions=u.loanOfficerOptions,this.loanPurposeOptions=u.loanPurposeOptions,this.fundOptions=u.fundOptions,this.accountLinkingOptions=u.accountLinkingOptions,this.loanProductSelected=!0,u.createStandingInstructionAtDisbursement&&this.loansAccountDetailsForm.get("createStandingInstructionAtDisbursement").patchValue(u.createStandingInstructionAtDisbursement)})})}get loansAccountDetails(){return this.loansAccountDetailsForm.getRawValue()}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v(ve),v(G),v(Wo))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-details-step"]],inputs:{loansAccountTemplate:"loansAccountTemplate"},outputs:{loansAccountProductTemplate:"loansAccountProductTemplate"},decls:53,vars:31,consts:[["submitPicker",""],["disbursementPicker",""],[3,"formGroup"],[1,"layout-row-wrap","gap-2px","responsive-column"],[1,"flex-fill"],["required","","formControlName","productId",3,"matTooltip"],[3,"placeholderLabel","noEntriesFoundLabel","formControl"],[3,"value",4,"ngFor","ngForOf"],["class","layout-row-wrap layout-lt-md-column gap-2percent",4,"ngIf"],[1,"layout-row","align-center","gap-2percent","margin-t","responsive-column"],["mat-raised-button","","matStepperPrevious","","disabled",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","","matStepperNext","",3,"disabled"],["icon","arrow-right",1,"m-l-10"],["mat-raised-button","",3,"routerLink",4,"ngIf"],[3,"value"],[1,"layout-row-wrap","layout-lt-md-column","gap-2percent"],[1,"flex-48"],["matInput","","formControlName","externalId",3,"matTooltip"],["class","flex-48",4,"ngIf"],["formControlName","loanPurposeId",3,"matTooltip"],["formControlName","fundId"],[1,"flex-48",3,"click"],["matInput","","required","","formControlName","submittedOnDate",3,"min","max","matDatepicker","matTooltip"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","expectedDisbursementDate",3,"min","max","matDatepicker","matTooltip"],[1,"flex-98"],[1,"mat-h3","flex-fill"],["formControlName","linkAccountId"],["formControlName","createStandingInstructionAtDisbursement",1,"flex-48"],["formControlName","loanOfficerId",3,"matTooltip"],["mat-raised-button","",3,"routerLink"]],template:function(m,l){if(m&1&&(i(0,"form",2),t(1,`
  `),i(2,"div",3),t(3,`
    `),i(4,"mat-form-field",4),t(5,`
      `),i(6,"mat-label"),t(7),s(8,"translate"),a(),t(9,`
      `),i(10,"mat-select",5),s(11,"translate"),t(12,`
        `),i(13,"mat-option"),t(14,`
          `),g(15,"ngx-mat-select-search",6),t(16,`
        `),a(),t(17,`
        `),d(18,Zf,2,2,"mat-option",7),s(19,"async"),t(20,`
      `),a(),t(21,`
      `),i(22,"mat-error"),t(23),s(24,"translate"),s(25,"translate"),i(26,"strong"),t(27),s(28,"translate"),a(),t(29,`
      `),a(),t(30,`
    `),a(),t(31,`
  `),a(),t(32,`

  `),d(33,rg,98,50,"div",8),t(34,`

  `),i(35,"div",9),t(36,`
    `),i(37,"button",10),t(38,`
      `),g(39,"fa-icon",11),t(40),s(41,"translate"),a(),t(42,`
    `),i(43,"button",12),t(44),s(45,"translate"),g(46,"fa-icon",13),t(47,`
    `),a(),t(48,`
    `),d(49,lg,3,5,"button",14),t(50,`
  `),a(),t(51,`
`),a(),t(52,`
`)),m&2){let u;c("formGroup",l.loansAccountDetailsForm),o(7),x(p(8,15,"labels.inputs.Product Name")),o(3),Q("matTooltip",p(11,17,"tooltips.Name of the loan product")),o(5),Q("placeholderLabel",l.placeHolderLabel),Q("noEntriesFoundLabel",l.noEntriesFoundLabel),c("formControl",l.filterFormCtrl),o(3),c("ngForOf",p(19,19,l.productData)),o(5),V(`
        `,p(24,21,"labels.inputs.Product Name")," ",p(25,23,"labels.commons.is"),`
        `),o(4),x(p(28,25,"labels.commons.required")),o(6),c("ngIf",l.loanProductSelected),o(7),f(`
      `,p(41,27,"labels.buttons.Previous"),`
    `),o(3),c("disabled",!((u=l.loansAccountDetailsForm.get("productId"))!=null&&u.value)||!((u=l.loansAccountDetailsForm.get("expectedDisbursementDate"))!=null&&u.value)||!((u=l.loansAccountDetailsForm.get("submittedOnDate"))!=null&&u.value)),o(),f(`
      `,p(45,29,"labels.buttons.Next"),`
      `),o(5),c("ngIf",l.loanId)}},dependencies:[A,It,k,Na,w,gt,nt,J,st,_t,ke,pt,ct,H,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,L,me,oo,ao,Ve,Me,Oe,Ot,Ae],styles:["h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0 2em}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"]})}}return e})();var mg=e=>({data:e});function sg(e,r){if(e&1&&(i(0,"mat-option",11),t(1),a()),e&2){let n=r.$implicit;c("value",n),o(),f(`
        `,n.name,`
      `)}}function pg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
    `),a()),e&2&&(o(),V(`
      `,p(2,3,"labels.inputs.Quantity")," ",p(3,5,"labels.commons.is"),`
      `),o(4),x(p(6,7,"labels.commons.required")))}function cg(e,r){if(e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),i(3,"strong"),t(4),a(),t(5,`
    `),a()),e&2){let n=C();o(),f(`
      `,p(2,2,"labels.inputs.Quantity can not be more than")," "),o(3),x(n.maxQuantity)}}var Ni=(()=>{class e{constructor(n,m,l){this.dialogRef=n,this.data=m,this.formBuilder=l,this.layout={addButtonText:"Add"},this.maxQuantity=0,this.createAddCollateralForm()}ngOnInit(){this.dialogRef.updateSize("400px"),this.collateralTypeData=this.data.collateralOptions,this.buildDependencies()}createAddCollateralForm(){this.addCollateralForm=this.formBuilder.group({collateral:["",q.required],quantity:["",q.required],totalValue:[{value:"",disabled:!0}],totalCollateralValue:[{value:"",disabled:!0}]})}buildDependencies(){this.addCollateralForm.controls.collateral.valueChanges.subscribe(n=>{this.collateralData=n,this.maxQuantity=n.quantity}),this.addCollateralForm.controls.quantity.valueChanges.subscribe(n=>{this.addCollateralForm.patchValue({totalValue:this.collateralData.basePrice*n,totalCollateralValue:this.collateralData.basePrice*this.collateralData.pctToBase*n/100})})}static{this.\u0275fac=function(m){return new(m||e)(v(Xe),v(tn),v(it))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-add-collateral-dialog"]],decls:69,vars:40,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"layout-column",3,"formGroup"],["formControlName","collateral","required",""],[3,"value",4,"ngFor","ngForOf"],["type","number","matInput","","formControlName","quantity","required","",3,"max","min"],[4,"ngIf"],["type","text","matInput","","formControlName","totalValue",3,"disabled"],["type","text","matInput","","formControlName","totalCollateralValue",3,"disabled"],[1,"layout-row","layout-xs-column","layout-align-center","gap-2percent"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled"],[3,"value"]],template:function(m,l){m&1&&(i(0,"h1",0),t(1),s(2,"translate"),a(),t(3,`

`),i(4,"div",1),t(5,`
  `),i(6,"mat-form-field"),t(7,`
    `),i(8,"mat-label"),t(9),s(10,"translate"),a(),t(11,`
    `),i(12,"mat-select",2),t(13,`
      `),d(14,sg,2,2,"mat-option",3),t(15,`
    `),a(),t(16,`
    `),i(17,"mat-error"),t(18),s(19,"translate"),s(20,"translate"),i(21,"strong"),t(22),s(23,"translate"),a(),t(24,`
    `),a(),t(25,`
  `),a(),t(26,`

  `),i(27,"mat-form-field"),t(28,`
    `),i(29,"mat-label"),t(30),s(31,"translate"),a(),t(32,`
    `),g(33,"input",4),t(34,`
    `),d(35,pg,8,9,"mat-error",5),t(36,`
    `),d(37,cg,6,4,"mat-error",5),t(38,`
  `),a(),t(39,`

  `),i(40,"mat-form-field"),t(41,`
    `),i(42,"mat-label"),t(43),s(44,"translate"),a(),t(45,`
    `),g(46,"input",6),t(47,`
  `),a(),t(48,`

  `),i(49,"mat-form-field"),t(50,`
    `),i(51,"mat-label"),t(52),s(53,"translate"),a(),t(54,`
    `),g(55,"input",7),t(56,`
  `),a(),t(57,`
`),a(),t(58,`

`),i(59,"mat-dialog-actions",8),t(60,`
  `),i(61,"button",9),t(62),s(63,"translate"),a(),t(64,`
  `),i(65,"button",10),t(66),a(),t(67,`
`),a(),t(68,`
`)),m&2&&(o(),x(p(2,20,"labels.heading.Add Loan Collateral")),o(3),c("formGroup",l.addCollateralForm),o(5),x(p(10,22,"labels.inputs.Collateral")),o(5),c("ngForOf",l.collateralTypeData),o(4),V(`
      `,p(19,24,"labels.inputs.Collateral")," ",p(20,26,"labels.commons.is"),`
      `),o(4),x(p(23,28,"labels.commons.required")),o(8),x(p(31,30,"labels.inputs.Quantity")),o(3),c("max",l.maxQuantity)("min",0),o(2),c("ngIf",l.addCollateralForm.controls.quantity.hasError("required")),o(2),c("ngIf",l.addCollateralForm.controls.quantity.hasError("max")),o(6),x(p(44,32,"labels.inputs.Total Value")),o(3),c("disabled",!0),o(6),x(p(53,34,"labels.inputs.Total Collateral Value")),o(3),c("disabled",!0),o(7),x(p(63,36,"labels.buttons.Cancel")),o(3),c("mat-dialog-close",Te(38,mg,l.addCollateralForm))("disabled",!l.addCollateralForm.valid||l.addCollateralForm.pristine),o(),f(`
    `,l.layout.addButtonText,`
  `))},dependencies:[A,It,k,w,nt,le,J,st,_t,Wa,$a,pt,ct,X,Z,Ct,at,Ut,Gt,j,L,nn,an,on,en],encapsulation:2})}}return e})();var dg=()=>["../","general"];function ug(e,r){if(e&1&&(i(0,"mifosx-input-amount",62),t(1,`
    `),a()),e&2){let n=C();c("currency",n.currency)("isRequired",!0)("inputFormControl",n.loansAccountTermsForm.controls.principalAmount)("inputLabel","Principal")}}function xg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Loan Term")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function fg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,Et(2,2,n.value,"catalogs"),`
        `)}}function gg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Frequency")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function _g(e,r){e&1&&(i(0,"mat-form-field",64),t(1,`
      `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
      `),g(6,"input",65),t(7,`
    `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Fixed Length")))}function Cg(e,r){if(e&1&&(i(0,"span",66),t(1),s(2,"find"),a()),e&2){let n=C();o(),x(vt(2,1,n.loansAccountTermsForm.value.loanTermFrequencyType,n.termFrequencyTypeData,"id","value"))}}function hg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Number of repayments")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function vg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Repaid every")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function bg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,Et(2,2,n.value,"catalogs"),`
        `)}}function Sg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,Et(2,2,n.value,"catalogs"),`
        `)}}function yg(e,r){if(e&1&&(i(0,"mat-form-field",67),t(1,`
      `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"mat-select",68),t(7,`
        `),d(8,Sg,3,5,"mat-option",11),t(9,`
      `),a(),t(10,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Select On")),o(5),c("ngForOf",n.repaymentFrequencyNthDayTypeData)}}function Dg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,Et(2,2,n.value,"catalogs"),`
        `)}}function Tg(e,r){if(e&1&&(i(0,"mat-form-field",67),t(1,`
      `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"mat-select",69),t(7,`
        `),d(8,Dg,3,5,"mat-option",11),t(9,`
      `),a(),t(10,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Select Day")),o(5),c("ngForOf",n.repaymentFrequencyDaysOfWeekTypeData)}}function Pg(e,r){e&1&&(i(0,"mat-checkbox",70),s(1,"translate"),t(2),s(3,"translate"),a()),e&2&&(Q("matTooltip",p(1,2,"tooltips.Leave this checkbox checked if the loan has Down Payment")),o(2),f(`
      `,p(3,4,"labels.inputs.Enable Down Payment"),`
    `))}function Mg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
            `,Et(2,2,n.value,"catalogs"),`
          `)}}function Og(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
            `,Et(2,2,n.value,"catalogs"),`
          `)}}function Ig(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
            `,Et(2,2,n.value,"catalogs"),`
          `)}}function Eg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
        `),a()),e&2&&(o(),V(`
          `,p(2,3,"labels.inputs.Amortization Type")," ",p(3,5,"labels.commons.is"),`
          `),o(4),x(p(6,7,"labels.commons.required")))}function Ag(e,r){e&1&&(i(0,"mat-form-field",7),t(1,`
        `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
        `),g(6,"input",77),t(7,`
      `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Principal Percentage Per Installment")))}function wg(e,r){if(e&1&&(b(0),t(1,`
      `),i(2,"mat-form-field",7),t(3,`
        `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
        `),g(8,"input",71),t(9,`
      `),a(),t(10,`

      `),i(11,"mat-form-field",7),t(12,`
        `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
        `),i(17,"mat-select",72),t(18,`
          `),d(19,Mg,3,5,"mat-option",11),t(20,`
        `),a(),t(21,`
        `),i(22,"mat-error"),t(23),s(24,"translate"),s(25,"translate"),i(26,"strong"),t(27),s(28,"translate"),a(),t(29,`
        `),a(),t(30,`
      `),a(),t(31,`

      `),i(32,"mat-form-field",7),t(33,`
        `),i(34,"mat-label"),t(35),s(36,"translate"),a(),t(37,`
        `),i(38,"mat-select",73),s(39,"translate"),t(40,`
          `),d(41,Og,3,5,"mat-option",11),t(42,`
        `),a(),t(43,`
      `),a(),t(44,`

      `),i(45,"mat-form-field",7),t(46,`
        `),i(47,"mat-label"),t(48),s(49,"translate"),a(),t(50,`
        `),i(51,"mat-select",74),s(52,"translate"),t(53,`
          `),d(54,Ig,3,5,"mat-option",11),t(55,`
        `),a(),t(56,`
        `),d(57,Eg,8,9,"mat-error",9),t(58,`
      `),a(),t(59,`

      `),d(60,Ag,8,3,"mat-form-field",75),t(61,`

      `),i(62,"mat-checkbox",76),t(63,`
        `),i(64,"p"),t(65),s(66,"translate"),a(),t(67,`
      `),a(),t(68,`
    `),S()),e&2){let n=C();o(5),f("",p(6,16,"labels.inputs.Nominal interest rate")," %"),o(9),x(p(15,18,"labels.inputs.Frequency")),o(5),c("ngForOf",n.interestRateFrequencyTypeData),o(4),V(`
          `,p(24,20,"labels.inputs.Nominal interest rate frequency")," ",p(25,22,"labels.commons.is"),`
          `),o(4),x(p(28,24,"labels.commons.required")),o(8),x(p(36,26,"labels.inputs.Interest method")),o(3),Q("matTooltip",p(39,28,"tooltips.The Interest method value")),o(3),c("ngForOf",n.interestTypeData),o(7),x(p(49,30,"labels.inputs.Amortization")),o(3),Q("matTooltip",p(52,32,"tooltips.The Amortization value")),o(3),c("ngForOf",n.amortizationTypeData),o(3),c("ngIf",n.loansAccountTermsForm.controls.amortizationType.hasError("required")),o(3),c("ngIf",n.isEqualPrincipalPayments()),o(2),c("checked",n.loansAccountTermsData==null?null:n.loansAccountTermsData.isEqualAmortization),o(3),x(p(66,34,"labels.inputs.Is Equal Amortization"))}}function Lg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
              `,Et(2,2,n.value,"catalogs"),`
            `)}}function Rg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
              `,Et(2,2,n.value,"catalogs"),`
            `)}}function Fg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
          `),a()),e&2&&(o(),V(`
            `,p(2,3,"labels.inputs.Amortization Type")," ",p(3,5,"labels.commons.is"),`
            `),o(4),x(p(6,7,"labels.commons.required")))}function Bg(e,r){if(e&1&&(b(0),t(1,`
      `),i(2,"div",78),t(3,`
        `),i(4,"mat-form-field",14),t(5,`
          `),i(6,"mat-label"),t(7),s(8,"translate"),a(),t(9,`
          `),i(10,"mat-select",79),t(11,`
            `),d(12,Lg,3,5,"mat-option",11),t(13,`
          `),a(),t(14,`
        `),a(),t(15,`

        `),i(16,"mat-form-field",14),t(17,`
          `),i(18,"mat-label"),t(19),s(20,"translate"),a(),t(21,`
          `),i(22,"mat-select",74),s(23,"translate"),t(24,`
            `),d(25,Rg,3,5,"mat-option",11),t(26,`
          `),a(),t(27,`
          `),d(28,Fg,8,9,"mat-error",9),t(29,`
        `),a(),t(30,`

        `),i(31,"mat-checkbox",80),t(32,`
          `),i(33,"p"),t(34),s(35,"translate"),a(),t(36,`
        `),a(),t(37,`
      `),a(),t(38,`
    `),S()),e&2){let n=C();o(7),x(p(8,7,"labels.inputs.Interest Method")),o(5),c("ngForOf",n.interestTypeData),o(7),x(p(20,9,"labels.inputs.Amortization")),o(3),Q("matTooltip",p(23,11,"tooltips.The Amortization value")),o(3),c("ngForOf",n.amortizationTypeData),o(3),c("ngIf",n.loansAccountTermsForm.controls.amortizationType.hasError("required")),o(6),f("",p(35,13,"labels.inputs.Is Floating Rate"),"?")}}function kg(e,r){if(e&1&&(i(0,"div",14),t(1,`
      `),i(2,"span",26)(3,"p"),t(4),s(5,"translate"),a()(),t(6,`
      `),i(7,"span",37)(8,"p"),t(9),s(10,"translateKey"),a()(),t(11,`
    `),a()),e&2){let n=C();o(4),x(p(5,2,"labels.inputs.Loan Schedule Type")),o(5),x(Et(10,4,n.loanScheduleType.value,"catalogs"))}}function Ng(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.code),o(),f(`
          `,Et(2,2,n.name,"catalogs"),`
        `)}}function Vg(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
      `),a()),e&2&&(o(),V(`
        `,p(2,3,"labels.inputs.Repayment Strategy")," ",p(3,5,"labels.commons.is"),`
        `),o(4),x(p(6,7,"labels.commons.required")))}function jg(e,r){e&1&&(i(0,"mat-form-field",14),t(1,`
      `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
      `),g(6,"input",81),t(7,`
    `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Installment Amount")))}function qg(e,r){if(e&1&&(i(0,"mat-option",63),t(1),s(2,"translateKey"),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
          `,Et(2,2,n.value,"catalogs"),`
        `)}}function zg(e,r){e&1&&(b(0),t(1,`
      `),i(2,"mat-checkbox",82),t(3,`
        `),i(4,"p"),t(5),s(6,"translate"),a(),t(7,`
      `),a(),t(8,`
    `),S()),e&2&&(o(5),x(p(6,1,"labels.inputs.Is interest recognition on disbursement date?")))}function Hg(e,r){if(e&1&&(i(0,"div",83),t(1,`
      `),i(2,"p"),t(3,`
        `),i(4,"span",84)(5,"b"),t(6),s(7,"translate"),a()(),t(8,`
        `),i(9,"span",14),t(10),a(),t(11,`
      `),a(),t(12,`
    `),a()),e&2){let n=C();o(6),x(p(7,2,"labels.inputs.Delinquency Bucket")),o(4),x(n.loanProduct==null?null:n.loanProduct.delinquencyBucket.name)}}function Gg(e,r){e&1&&(i(0,"div",14),t(1,`
      `),i(2,"mat-checkbox",85),t(3,`
        `),i(4,"p"),t(5),s(6,"translate"),a(),t(7,`
      `),a(),t(8,`
    `),a()),e&2&&(o(5),x(p(6,1,"labels.inputs.Enable installment level Delinquency")))}function Ug(e,r){if(e&1&&(i(0,"mat-option",63),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
            `,n.accountNo,`
          `)}}function $g(e,r){if(e&1&&(i(0,"mat-form-field",88),t(1,`
        `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
        `),i(6,"mat-select",89),t(7,`
          `),d(8,Ug,2,2,"mat-option",11),t(9,`
        `),a(),t(10,`
      `),a()),e&2){let n=C(2);o(3),x(p(4,2,"labels.inputs.Loan closed with Topup")),o(5),c("ngForOf",n.clientActiveLoanData)}}function Wg(e,r){if(e&1&&(b(0,14),t(1,`
      `),i(2,"mat-checkbox",86),t(3,`
        `),i(4,"p"),t(5),s(6,"translate"),a(),t(7,`
      `),a(),t(8,`

      `),d(9,$g,11,4,"mat-form-field",87),t(10,`
    `),S()),e&2){let n=C();o(5),f("",p(6,2,"labels.inputs.Is Topup Loan"),"?"),o(4),c("ngIf",n.loansAccountTermsForm.controls.isTopup.value)}}function Qg(e,r){if(e&1&&(i(0,"div",36),t(1,`
      `),i(2,"span",26),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",37),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Days in year")),o(4),x(Et(8,4,n.loansAccountTermsData.daysInYearType.value,"catalogs"))}}function Yg(e,r){if(e&1&&(i(0,"div",36),t(1,`
      `),i(2,"span",26),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",37),t(7),s(8,"translateKey"),a(),t(9,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Days in month")),o(4),x(Et(8,4,n.loansAccountTermsData.daysInMonthType.value,"catalogs"))}}function Kg(e,r){if(e&1&&(i(0,"div",36),t(1,`
      `),i(2,"span",26),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",37),t(7),a(),t(8,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Advance payments adjustment type")),o(4),x(n.loansAccountTermsData.interestRecalculationData.rescheduleStrategyType.value)}}function Jg(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(2);o(),f(`
            on `,n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyWeekday.value,"")}}function Zg(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(2);o(),f("on day ",n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyOnDay,"")}}function Xg(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(2);o(),V(`on
            `,n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyNthDay.value,`
            `,n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyWeekday.value,"")}}function t_(e,r){if(e&1&&(b(0),t(1,`
      `),i(2,"div",36),t(3,`
        `),i(4,"span",26),t(5),s(6,"translate"),a(),t(7,`
        `),i(8,"span",37),t(9),s(10,"translateKey"),a(),t(11,`
      `),a(),t(12,`

      `),i(13,"div",36),t(14,`
        `),i(15,"span",26),t(16),s(17,"translate"),a(),t(18,`
        `),i(19,"span",37),t(20,`
          `),i(21,"span"),t(22),a(),t(23,`
          `),d(24,Jg,2,1,"span",9),t(25,`
          `),d(26,Zg,2,1,"span",9),t(27,`
          `),d(28,Xg,2,2,"span",9),t(29,`
        `),a(),t(30,`
      `),a(),t(31,`
    `),S()),e&2){let n=C();o(5),x(p(6,7,"labels.inputs.Interest recalculation compounding on")),o(4),x(Et(10,9,n.loansAccountTermsData.interestRecalculationData.interestRecalculationCompoundingType.value,"catalogs")),o(7),x(p(17,12,"labels.inputs.Frequency Interval for recalculation")),o(6),x(n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyType.value),o(2),c("ngIf",n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyType.id===3&&n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyWeekday),o(2),c("ngIf",n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyType.id===4&&n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyOnDay),o(2),c("ngIf",n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyType.id===4&&!n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyOnDay&&n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyNthDay)}}function e_(e,r){if(e&1&&(i(0,"div",36),t(1,`
      `),i(2,"span",26),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",37),t(7),a(),t(8,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Frequency Interval for recalculation")),o(4),x(n.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyInterval)}}function n_(e,r){e&1&&(i(0,"div",36),t(1,`
        `),i(2,"h4",5),t(3),s(4,"translate"),a(),t(5,`
      `),a()),e&2&&(o(3),x(p(4,1,"labels.heading.Loan Tranche Details")))}function i_(e,r){e&1&&(i(0,"div",36),t(1,`
        `),i(2,"h4",5),t(3),s(4,"translate"),a(),t(5,`
      `),a()),e&2&&(o(3),f(`
          `,p(4,1,"labels.heading.Loan Tranche Details are not allowed for this Loan Product"),`
        `))}function a_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Expected Disbursement Date")))}function o_(e,r){if(e&1&&(i(0,"td",98),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),f(`
            `,p(2,1,n.expectedDisbursementDate),`
          `)}}function r_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Principal")))}function l_(e,r){if(e&1&&(i(0,"td",98),t(1),a()),e&2){let n=r.$implicit;o(),f(`
            `,n.principal,`
          `)}}function m_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function s_(e,r){if(e&1){let n=O();i(0,"td",98),t(1,`
            `),i(2,"button",99),s(3,"translate"),T("click",function(){let l=P(n).index,u=C(2);return M(u.removeDisbursementDataEntry(l))}),t(4,`
              `),g(5,"fa-icon",100),t(6,`
            `),a(),t(7,`
          `),a()}e&2&&(o(2),Q("matTooltip",p(3,1,"tooltips.Delete")))}function p_(e,r){e&1&&g(0,"tr",101)}function c_(e,r){e&1&&g(0,"tr",102)}function d_(e,r){if(e&1){let n=O();b(0),t(1,`
      `),g(2,"mat-divider",35),t(3,`
      `),d(4,n_,6,3,"div",38),t(5,`
      `),i(6,"div",36),t(7,`
        `),i(8,"mat-form-field",14),t(9,`
          `),i(10,"mat-label"),t(11),s(12,"translate"),a(),t(13,`
          `),g(14,"input",90),t(15,`
        `),a(),t(16,`
        `),i(17,"span",14),t(18,`
          `),i(19,"button",91),T("click",function(){P(n);let l=C();return M(l.addDisbursementDataEntry(l.disbursementData))}),t(20,`
            `),g(21,"fa-icon",92),t(22,`
          `),a(),t(23,`
        `),a(),t(24,`
      `),a(),t(25,`
      `),d(26,i_,6,3,"div",38),t(27,`

      `),i(28,"table",93),t(29,`
        `),b(30,94),t(31,`
          `),d(32,a_,3,3,"th",48),t(33,`
          `),d(34,o_,3,3,"td",49),t(35,`
        `),S(),t(36,`

        `),b(37,95),t(38,`
          `),d(39,r_,3,3,"th",48),t(40,`
          `),d(41,l_,2,1,"td",49),t(42,`
        `),S(),t(43,`

        `),b(44,96),t(45,`
          `),d(46,m_,3,3,"th",48),t(47,`
          `),d(48,s_,8,3,"td",49),t(49,`
        `),S(),t(50,`

        `),d(51,p_,1,0,"tr",54),t(52,`
        `),d(53,c_,1,0,"tr",55),t(54,`
      `),a(),t(55,`
    `),S()}if(e&2){let n=C();o(4),c("ngIf",n.allowAddDisbursementDetails()),o(7),x(p(12,8,"labels.inputs.Maximum allowed outstanding balance")),o(8),c("disabled",n.isMultiDisbursedCompleted),o(7),c("ngIf",!n.allowAddDisbursementDetails()),o(2),c("dataSource",n.disbursementDataSource)("hidden",n.disbursementDataSource.length===0),o(23),c("matHeaderRowDef",n.disbursementDisplayedColumns),o(2),c("matRowDefColumns",n.disbursementDisplayedColumns)}}function u_(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(2);o(),f(`
            on `,n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyWeekday.value,`
          `)}}function x_(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(2);o(),f(`on day
            `,n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyOnDay,`
          `)}}function f_(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C(2);o(),V(`on
            `,n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyNthDay.value,`
            `,n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyWeekday.value,`
          `)}}function g_(e,r){if(e&1&&(b(0),t(1,`
      `),i(2,"div",103),t(3,`
        `),i(4,"span",26),t(5),s(6,"translate"),a(),t(7,`
        `),i(8,"span",37),t(9),d(10,u_,2,1,"span",9),t(11,`
          `),d(12,x_,2,1,"span",9),t(13,`
          `),d(14,f_,2,2,"span",9),t(15,`
        `),a(),t(16,`
      `),a(),t(17,`
    `),S()),e&2){let n=C();o(5),x(p(6,5,"labels.inputs.Frequency for compounding")),o(4),f("",n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyType.value,`
          `),o(),c("ngIf",n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyType.id===3&&n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyWeekday),o(2),c("ngIf",n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyType.id===4&&n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyOnDay),o(2),c("ngIf",n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyType.id===4&&!n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyOnDay&&n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyNthDay)}}function __(e,r){if(e&1&&(i(0,"div",103),t(1,`
      `),i(2,"span",26),t(3),s(4,"translate"),a(),t(5,`
      `),i(6,"span",37),t(7),a(),t(8,`
    `),a()),e&2){let n=C();o(3),x(p(4,2,"labels.inputs.Frequency Interval for compounding")),o(4),x(n.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyInterval)}}function C_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function h_(e,r){if(e&1&&(i(0,"td",98),t(1),a()),e&2){let n=r.$implicit;o(),x(n.type.name)}}function v_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Quantity")))}function b_(e,r){if(e&1&&(i(0,"td",98),t(1),a()),e&2){let n=r.$implicit;o(),x(n.value)}}function S_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Total Value")))}function y_(e,r){if(e&1&&(i(0,"td",98),t(1),a()),e&2){let n=r.$implicit;o(),x(n.type.basePrice*n.value)}}function D_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Total Collateral Value")))}function T_(e,r){if(e&1&&(i(0,"td",98),t(1),a()),e&2){let n=r.$implicit;o(),x(n.type.pctToBase*n.type.basePrice*n.value/100)}}function P_(e,r){e&1&&(i(0,"th",97),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function M_(e,r){if(e&1){let n=O();i(0,"td",98),t(1,`
          `),i(2,"button",104),T("click",function(){let l=P(n).index,u=C();return M(u.deleteCollateral(l))}),t(3,`
            `),g(4,"fa-icon",100),t(5,`
          `),a(),t(6,`
        `),a()}}function O_(e,r){e&1&&g(0,"tr",101)}function I_(e,r){e&1&&g(0,"tr",102)}function E_(e,r){e&1&&(i(0,"button",105),t(1),s(2,"translate"),a()),e&2&&(c("routerLink",N(4,dg)),o(),f(`
      `,p(2,2,"labels.buttons.Cancel"),`
    `))}var Fe=(()=>{class e{constructor(n,m,l,u){this.formBuilder=n,this.settingsService=m,this.route=l,this.dialog=u,this.minDate=new Date(2e3,0,1),this.maxDate=new Date(2100,0,1),this.disbursementDataSource=[],this.transactionProcessingStrategyOptions=[],this.repaymentStrategyDisabled=!1,this.isCollateralSufficient=!1,this.totalCollateralValue=0,this.collateralDataSource=[],this.loanCollateralDisplayedColumns=["type","value","totalValue","totalCollateralValue","action"],this.disbursementDisplayedColumns=["expectedDisbursementDate","principal","actions"],this.totalMultiDisbursed=0,this.isMultiDisbursedCompleted=!1,this.pristine=!0,this.loanId=null,this.loanScheduleType=null,this.loanProduct=null,this.interestRateFrequencyTypeData=[],this.productEnableDownPayment=!1,this.enableIncomeCapitalization=!1,this.isProgressive=!1,this.loanId=this.route.snapshot.params.loanId,this.createloansAccountTermsForm()}ngOnChanges(){if(this.loansAccountProductTemplate){if(this.currency=this.loansAccountProductTemplate.currency,this.loansAccountTermsData=this.loansAccountProductTemplate,this.loanId!=null&&this.loansAccountTemplate.accountNo&&(this.loansAccountTermsData=this.loansAccountTemplate),this.productEnableDownPayment=this.loansAccountTermsData.product.enableDownPayment,this.enableIncomeCapitalization=this.loansAccountTermsData.product.enableIncomeCapitalization,this.isProgressive=this.loansAccountTermsData.loanScheduleType.code==dn.LOAN_SCHEDULE_TYPE_PROGRESSIVE,this.loansAccountTermsData.product&&(this.loanProduct=this.loansAccountTermsData.product),this.interestRateFrequencyTypeData=this.loansAccountTermsData.interestRateFrequencyTypeOptions,this.loansAccountTermsForm.patchValue({principalAmount:this.loansAccountTermsData.principal,loanTermFrequency:this.loansAccountTermsData.termFrequency,loanTermFrequencyType:this.loansAccountTermsData.termPeriodFrequencyType.id,numberOfRepayments:this.loansAccountTermsData.numberOfRepayments,repaymentEvery:this.loansAccountTermsData.repaymentEvery,repaymentFrequencyType:this.loansAccountTermsData.repaymentFrequencyType.id,amortizationType:this.loansAccountTermsData.amortizationType.id,isEqualAmortization:this.loansAccountTermsData.isEqualAmortization,interestType:this.loansAccountTermsData.interestType.id,isFloatingInterestRate:this.loansAccountTermsData.isLoanProductLinkedToFloatingRate?!1:"",interestCalculationPeriodType:this.loansAccountTermsData.interestCalculationPeriodType.id,allowPartialPeriodInterestCalculation:this.loansAccountTermsData.allowPartialPeriodInterestCalculation,inArrearsTolerance:this.loansAccountTermsData.inArrearsTolerance,graceOnPrincipalPayment:this.loansAccountTermsData.graceOnPrincipalPayment,graceOnInterestPayment:this.loansAccountTermsData.graceOnInterestPayment,graceOnArrearsAgeing:this.loansAccountTermsData.graceOnArrearsAgeing,graceOnInterestCharged:this.loansAccountTermsData.graceOnInterestCharged,fixedEmiAmount:this.loansAccountTermsData.fixedEmiAmount,maxOutstandingLoanBalance:this.loansAccountTermsData.maxOutstandingLoanBalance,transactionProcessingStrategyCode:this.loansAccountTermsData.transactionProcessingStrategyCode,interestRateDifferential:this.loansAccountTermsData.interestRateDifferential,multiDisburseLoan:this.loansAccountTermsData.multiDisburseLoan,interestRateFrequencyType:this.loansAccountTermsData.interestRateFrequencyType.id,balloonRepaymentAmount:this.loansAccountTermsData.balloonRepaymentAmount,interestRecognitionOnDisbursementDate:this.loansAccountTermsData.interestRecognitionOnDisbursementDate||!1}),this.setAdvancedPaymentStrategyControls(),this.loansAccountTermsData.loanScheduleType.code==dn.LOAN_SCHEDULE_TYPE_CUMULATIVE&&this.loansAccountTermsForm.removeControl("interestRecognitionOnDisbursementDate"),this.loansAccountTermsData.isLoanProductLinkedToFloatingRate&&this.loansAccountTermsForm.removeControl("interestRatePerPeriod"),this.multiDisburseLoan=this.loansAccountTermsData.multiDisburseLoan,this.loansAccountTermsData.disbursementDetails&&(this.disbursementDataSource=this.loansAccountTermsData.disbursementDetails,this.totalMultiDisbursed=0,this.disbursementDataSource.forEach(m=>{this.totalMultiDisbursed+=m.principal})),this.isDelinquencyEnabled()&&this.loansAccountTermsForm.addControl("enableInstallmentLevelDelinquency",new K(this.loansAccountTermsData.enableInstallmentLevelDelinquency||this.loanProduct.enableInstallmentLevelDelinquency)),this.collateralDataSource=this.loansAccountTermsData.collateral||[],this.productEnableDownPayment){let m=this.loansAccountTermsData.enableDownPayment!==!1;this.loansAccountTermsForm.addControl("enableDownPayment",new K(m))}let n=this.loansAccountTermsData.product.allowAttributeOverrides;n.repaymentEvery||(this.loansAccountTermsForm.controls.repaymentEvery.disable(),this.loansAccountTermsForm.controls.repaymentFrequencyType.disable()),n.interestType||this.loansAccountTermsForm.controls.interestType.disable(),n.amortizationType||this.loansAccountTermsForm.controls.amortizationType.disable(),n.interestCalculationPeriodType||(this.loansAccountTermsForm.controls.interestCalculationPeriodType.disable(),this.loansAccountTermsForm.controls.allowPartialPeriodInterestCalculation.disable()),n.inArrearsTolerance||this.loansAccountTermsForm.controls.inArrearsTolerance.disable(),n.transactionProcessingStrategyCode||this.loansAccountTermsForm.controls.transactionProcessingStrategyCode.disable(),n.graceOnPrincipalAndInterestPayment||this.loansAccountTermsForm.controls.graceOnPrincipalPayment.disable(),n.graceOnPrincipalAndInterestPayment||this.loansAccountTermsForm.controls.graceOnInterestPayment.disable(),n.graceOnArrearsAgeing||this.loansAccountTermsForm.controls.graceOnArrearsAgeing.disable(),this.setOptions()}}ngOnInit(){if(this.maxDate=this.settingsService.maxFutureDate,this.loansAccountTermsData=this.loansAccountProductTemplate,this.loanId!=null&&this.loansAccountTemplate.accountNo&&(this.loansAccountTermsData=this.loansAccountTemplate),this.loansAccountTermsData){if(this.loansAccountTermsData.loanProductId){let n=null;if(this.loansAccountTermsData.expectedFirstRepaymentOnDate){let m=new Date(this.loansAccountTermsData.expectedFirstRepaymentOnDate);n=this.formatDateToDDMMYYYY(m)}this.loansAccountTermsForm.patchValue({repaymentsStartingFromDate:this.loansAccountTermsData.expectedFirstRepaymentOnDate&&n})}this.loansAccountTermsForm.patchValue({principalAmount:this.loansAccountTermsData.principal,loanTermFrequency:this.loansAccountTermsData.termFrequency,loanTermFrequencyType:this.loansAccountTermsData.termPeriodFrequencyType.id,numberOfRepayments:this.loansAccountTermsData.numberOfRepayments,repaymentEvery:this.loansAccountTermsData.repaymentEvery,repaymentFrequencyType:this.loansAccountTermsData.repaymentFrequencyType.id,amortizationType:this.loansAccountTermsData.amortizationType.id,isEqualAmortization:this.loansAccountTermsData.isEqualAmortization,interestType:this.loansAccountTermsData.interestType.id,isFloatingInterestRate:this.loansAccountTermsData.isLoanProductLinkedToFloatingRate?!1:"",interestCalculationPeriodType:this.loansAccountTermsData.interestCalculationPeriodType.id,allowPartialPeriodInterestCalculation:this.loansAccountTermsData.allowPartialPeriodInterestCalculation,inArrearsTolerance:this.loansAccountTermsData.inArrearsTolerance,graceOnPrincipalPayment:this.loansAccountTermsData.graceOnPrincipalPayment,graceOnInterestPayment:this.loansAccountTermsData.graceOnInterestPayment,graceOnArrearsAgeing:this.loansAccountTermsData.graceOnArrearsAgeing,graceOnInterestCharged:this.loansAccountTermsData.graceOnInterestCharged,fixedEmiAmount:this.loansAccountTermsData.fixedEmiAmount,maxOutstandingLoanBalance:this.loansAccountTermsData.maxOutstandingLoanBalance,transactionProcessingStrategyCode:this.loansAccountTermsData.transactionProcessingStrategyCode,interestRateDifferential:this.loansAccountTermsData.interestRateDifferential,multiDisburseLoan:this.loansAccountTermsData.multiDisburseLoan,interestRateFrequencyType:this.loansAccountTermsData.interestRateFrequencyType.id,balloonRepaymentAmount:this.loansAccountTermsData.balloonRepaymentAmount,interestRecognitionOnDisbursementDate:this.loansAccountTermsData.interestRecognitionOnDisbursementDate||!1})}this.createloansAccountTermsForm(),this.setAdvancedPaymentStrategyControls(),this.setLoanTermListener()}allowAddDisbursementDetails(){return this.multiDisburseLoan&&!this.loansAccountTermsData.disallowExpectedDisbursements}formatDateToDDMMYYYY(n){let m=n.getDate().toString().padStart(2,"0"),l=(n.getMonth()+1).toString().padStart(2,"0"),u=n.getFullYear();return`${m}-${l}-${u}`}setCustomValidators(){let n=this.loansAccountTermsForm.get("repaymentFrequencyNthDayType"),m=this.loansAccountTermsForm.get("repaymentFrequencyDayOfWeekType");this.loansAccountTermsForm.get("repaymentFrequencyType").valueChanges.subscribe(l=>{l===2?(n.setValidators([q.required]),m.setValidators([q.required])):(n.setValidators(null),m.setValidators(null)),n.updateValueAndValidity(),m.updateValueAndValidity()})}setLoanTermListener(){this.loansAccountTermsForm.get("numberOfRepayments").valueChanges.subscribe(n=>{let m=this.loansAccountTermsForm.value.repaymentEvery;this.calculateLoanTerm(n,m)}),this.loansAccountTermsForm.get("repaymentEvery").valueChanges.subscribe(n=>{let m=this.loansAccountTermsForm.value.numberOfRepayments;this.calculateLoanTerm(m,n)}),this.loansAccountTermsForm.get("loanTermFrequencyType").valueChanges.subscribe(n=>{this.loansAccountTermsForm.patchValue({repaymentFrequencyType:n})}),this.loansAccountTermsForm.get("amortizationType").valueChanges.subscribe(n=>{n===0?this.loansAccountTermsForm.addControl("fixedPrincipalPercentagePerInstallment",new K("")):this.loansAccountTermsForm.removeControl("fixedPrincipalPercentagePerInstallment")})}setAdvancedPaymentStrategyControls(){this.loansAccountTermsData&&(this.loansAccountTermsForm.removeControl("interestRatePerPeriod"),this.loansAccountTermsForm.removeControl("fixedLength"),this.loansAccountTermsData.product.fixedLength?(this.loansAccountTermsForm.addControl("interestRatePerPeriod",new K({value:0,disabled:!0},q.required)),this.loansAccountTermsForm.addControl("fixedLength",new K(this.loansAccountTermsData.product.fixedLength))):this.loansAccountTermsForm.addControl("interestRatePerPeriod",new K(this.loansAccountTermsData.interestRatePerPeriod,q.required)))}hasFixedLength(){return this.loansAccountTermsData?!!this.loansAccountTermsData.product?.fixedLength:!1}isEqualPrincipalPayments(){return this.loansAccountTermsForm.value.amortizationType===0}createloansAccountTermsForm(){this.loansAccountTermsForm=this.formBuilder.group({principalAmount:["",q.required],loanTermFrequency:[{value:"",disabled:!0},q.required],loanTermFrequencyType:["",q.required],numberOfRepayments:["",q.required],repaymentEvery:["",q.required],repaymentFrequencyType:[{value:"",disabled:!0},q.required],repaymentFrequencyNthDayType:[""],repaymentFrequencyDayOfWeekType:[""],repaymentsStartingFromDate:[""],interestChargedFromDate:[""],interestRatePerPeriod:[""],interestType:[""],isFloatingInterestRate:[""],isEqualAmortization:[""],amortizationType:["",q.required],interestCalculationPeriodType:[""],allowPartialPeriodInterestCalculation:[""],inArrearsTolerance:[""],graceOnInterestCharged:[""],graceOnPrincipalPayment:[""],graceOnInterestPayment:[""],graceOnArrearsAgeing:[""],loanIdToClose:[""],fixedEmiAmount:[""],isTopup:[""],maxOutstandingLoanBalance:[""],interestRateDifferential:[""],transactionProcessingStrategyCode:["",q.required],multiDisburseLoan:[!1],interestRateFrequencyType:[""],balloonRepaymentAmount:[""],interestRecognitionOnDisbursementDate:[!1]})}calculateLoanTerm(n,m){let l=n*m;this.loansAccountTermsForm.patchValue({loanTermFrequency:l})}get disbursementData(){return{disbursementData:this.disbursementDataSource}}addDisbursementDataEntry(){let n=this.loansAccountTermsForm.get("principalAmount").value,m=[new fe({controlName:"expectedDisbursementDate",label:"Expected Disbursement Date",value:new Date||"",type:"datetime-local",minDate:this.minDate,maxDate:this.maxDate,required:!0,order:1}),new pe({controlName:"principal",label:`Principal(It should be less than equal to the ${n})`,value:"",type:"number",required:!0,order:2})],l={title:"Add Disbursement Details",layout:{addButtonText:"Add"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h=_.data.value.principal*1;this.totalMultiDisbursed+h<=n&&(this.disbursementDataSource=this.disbursementDataSource.concat(_.data.value),this.totalMultiDisbursed+=h,this.isMultiDisbursedCompleted=this.totalMultiDisbursed===n,this.pristine=!1)}})}removeDisbursementDataEntry(n){let m=this.loansAccountTermsForm.get("principalAmount").value;this.dialog.open(xe,{data:{deleteContext:"this"}}).afterClosed().subscribe(u=>{if(u.delete){let _=this.disbursementDataSource[n].principal*1;this.disbursementDataSource.splice(n,1),this.disbursementDataSource=this.disbursementDataSource.concat([]),this.totalMultiDisbursed-=_,this.isMultiDisbursedCompleted=this.totalMultiDisbursed===m}})}addCollateral(){this.dialog.open(Ni,{data:{collateralOptions:this.collateralOptions}}).afterClosed().subscribe(m=>{if(m.data){let l={type:m.data.value.collateral,value:m.data.value.quantity};this.totalCollateralValue+=l.type.pctToBase*l.type.basePrice*l.value/100,this.collateralDataSource=this.collateralDataSource.concat(l),this.collateralOptions=this.collateralOptions.filter(u=>u.collateralId!==m.data.value.collateral.collateralId),this.loanPrincipal<this.totalCollateralValue?this.isCollateralSufficient=!0:this.isCollateralSufficient=!1}})}deleteCollateral(n){this.dialog.open(xe,{data:{deleteContext:"collateral"}}).afterClosed().subscribe(l=>{if(l.delete){let u=this.collateralDataSource.splice(n,1);this.collateralOptions=this.collateralOptions.concat(u[0].type),this.totalCollateralValue-=u[0].type.pctToBase*u[0].type.basePrice*u[0].value/100,this.collateralDataSource=this.collateralDataSource.concat([]),this.pristine=!1,this.loanPrincipal<this.totalCollateralValue?this.isCollateralSufficient=!0:this.isCollateralSufficient=!1}})}setOptions(){this.termFrequencyTypeData=this.loansAccountProductTemplate.termFrequencyTypeOptions,this.repaymentFrequencyNthDayTypeData=this.loansAccountProductTemplate.repaymentFrequencyNthDayTypeOptions,this.repaymentFrequencyDaysOfWeekTypeData=this.loansAccountProductTemplate.repaymentFrequencyDaysOfWeekTypeOptions,this.interestTypeData=this.loansAccountProductTemplate.interestTypeOptions,this.amortizationTypeData=this.loansAccountProductTemplate.amortizationTypeOptions,this.interestCalculationPeriodTypeData=this.loansAccountProductTemplate.interestCalculationPeriodTypeOptions,this.clientActiveLoanData=this.loansAccountProductTemplate.clientActiveLoanOptions,this.loanScheduleType=this.loansAccountProductTemplate.loanScheduleType,this.transactionProcessingStrategyOptions=[],this.loanScheduleType.code===dn.LOAN_SCHEDULE_TYPE_CUMULATIVE?(this.transactionProcessingStrategyOptions=this.loansAccountProductTemplate.transactionProcessingStrategyOptions.filter(n=>!dn.isAdvancedPaymentAllocationStrategy(n.code)),this.repaymentStrategyDisabled=!1):(this.loansAccountProductTemplate.transactionProcessingStrategyOptions.some(n=>{dn.isAdvancedPaymentAllocationStrategy(n.code)&&this.transactionProcessingStrategyOptions.push(n)}),this.repaymentStrategyDisabled=!0)}isDelinquencyEnabled(){return!!this.loanProduct?.delinquencyBucket?.name}get loansAccountTerms(){return this.loansAccountTermsForm.getRawValue()}get loanCollateral(){return{collateral:this.collateralDataSource}}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(G),v(B),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-terms-step"]],inputs:{loansProductOptions:"loansProductOptions",loansAccountProductTemplate:"loansAccountProductTemplate",loansAccountTemplate:"loansAccountTemplate",loansAccountFormValid:"loansAccountFormValid",collateralOptions:"collateralOptions",loanPrincipal:"loanPrincipal"},features:[Ge],decls:369,vars:168,consts:[["repaymentsPicker",""],["interestPicker",""],[3,"formGroup"],[1,"layout-row-wrap","gap-2px","responsive-column"],["class","flex-48",3,"currency","isRequired","inputFormControl","inputLabel",4,"ngIf"],[1,"mat-h4","flex-98"],[1,"fas","fa-question",3,"matTooltip"],[1,"flex-fill","flex-23"],["type","number","matInput","","required","","disabled","","formControlName","loanTermFrequency"],[4,"ngIf"],["required","","formControlName","loanTermFrequencyType"],[3,"value",4,"ngFor","ngForOf"],["class","flex-fill flex-20",4,"ngIf"],["class","flex-20 label-field",4,"ngIf"],[1,"flex-48"],["type","number","matInput","","formControlName","numberOfRepayments",3,"matTooltip"],[1,"flex-fill","flex-23",3,"click"],["matInput","","formControlName","repaymentsStartingFromDate",3,"min","max","matTooltip","matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","interestChargedFromDate",3,"min","max","matDatepicker","matTooltip"],["type","number","matInput","","required","","formControlName","repaymentEvery",3,"matTooltip"],["formControlName","repaymentFrequencyType","disabled","","required",""],["class","flex-fill flex-14",4,"ngIf"],["labelPosition","before","formControlName","enableDownPayment","class","margin-b flex-73",3,"matTooltip",4,"ngIf"],["class","flex-48",4,"ngIf"],["formControlName","transactionProcessingStrategyCode",3,"matTooltip","disabled"],[1,"flex-40"],["formControlName","interestCalculationPeriodType",3,"matTooltip"],["formControlName","allowPartialPeriodInterestCalculation",1,"flex-48",3,"matTooltip"],["matInput","","type","number","formControlName","inArrearsTolerance",3,"matTooltip"],["matInput","","formControlName","graceOnInterestCharged",3,"matTooltip"],["type","number","matInput","","formControlName","graceOnPrincipalPayment"],["type","number","matInput","","formControlName","graceOnInterestPayment"],["type","number","matInput","","formControlName","graceOnArrearsAgeing"],["class","flex-48 flex-fill",4,"ngIf"],[1,"flex-98"],[1,"flex-100","layout-row"],[1,"flex-60"],["class","flex-100 layout-row",4,"ngIf"],["class","flex-fill",4,"ngIf"],[1,"flex-50"],[1,"layout-column","table-name","flex-50"],[1,"layout-column","flex-50"],[1,"layout-row","align-flex-end"],["mat-raised-button","","color","primary",3,"click"],["icon","plus",1,"m-r-10"],["mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["matColumnDef","totalValue"],["matColumnDef","totalCollateralValue"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"layout-row","align-center","gap-2percent","margin-t","responsive-column"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right",1,"m-l-10"],["mat-raised-button","",3,"routerLink",4,"ngIf"],[1,"flex-48",3,"currency","isRequired","inputFormControl","inputLabel"],[3,"value"],[1,"flex-fill","flex-20"],["type","number","matInput","","formControlName","fixedLength"],[1,"flex-20","label-field"],[1,"flex-fill","flex-14"],["formControlName","repaymentFrequencyNthDayType"],["formControlName","repaymentFrequencyDayOfWeekType"],["labelPosition","before","formControlName","enableDownPayment",1,"margin-b","flex-73",3,"matTooltip"],["type","number","matInput","","formControlName","interestRatePerPeriod"],["formControlName","interestRateFrequencyType"],["formControlName","interestType",3,"matTooltip"],["required","","formControlName","amortizationType",3,"matTooltip"],["class","flex-fill flex-23",4,"ngIf"],["formControlName","isEqualAmortization",1,"flex-23",3,"checked"],["type","number","matInput","","formControlName","fixedPrincipalPercentagePerInstallment"],[1,"flex-48","layout-row-wrap","gap-2percent","layout-xs-column"],["formControlName","interestType"],["formControlName","isFloatingInterestRate",1,"flex-48"],["type","number","matInput","","formControlName","fixedEmiAmount"],["formControlName","interestRecognitionOnDisbursementDate",1,"flex-48"],[1,"flex-48","flex-fill"],[1,"flex-53"],["formControlName","enableInstallmentLevelDelinquency"],["formControlName","isTopup",1,"flex-20"],["class","flex-fill flex-24",4,"ngIf"],[1,"flex-fill","flex-24"],["formControlName","loanIdToClose"],["matInput","","required","","formControlName","maxOutstandingLoanBalance"],["type","button","mat-icon-button","","color","primary","required","",3,"click","disabled"],["icon","plus-circle","size","lg"],["mat-table","",3,"dataSource","hidden"],["matColumnDef","expectedDisbursementDate"],["matColumnDef","principal"],["matColumnDef","actions"],["mat-header-cell",""],["mat-cell",""],["type","button","mat-icon-button","","color","warn","matTooltipPosition","left",3,"click","matTooltip"],["icon","trash"],["mat-header-row",""],["mat-row",""],[1,"flex-fill"],["mat-icon-button","","color","warn",3,"click"],["mat-raised-button","",3,"routerLink"]],template:function(m,l){if(m&1){let u=O();i(0,"form",2),t(1,`
  `),i(2,"div",3),t(3,`
    `),d(4,ug,2,4,"mifosx-input-amount",4),t(5,`

    `),i(6,"h4",5),t(7),s(8,"translate"),g(9,"i",6),s(10,"translate"),t(11,`
    `),a(),t(12,`

    `),i(13,"mat-form-field",7),t(14,`
      `),i(15,"mat-label"),t(16),s(17,"translate"),a(),t(18,`
      `),g(19,"input",8),t(20,`
      `),d(21,xg,8,9,"mat-error",9),t(22,`
    `),a(),t(23,`

    `),i(24,"mat-form-field",7),t(25,`
      `),i(26,"mat-label"),t(27),s(28,"translate"),a(),t(29,`
      `),i(30,"mat-select",10),t(31,`
        `),d(32,fg,3,5,"mat-option",11),t(33,`
      `),a(),t(34,`
      `),d(35,gg,8,9,"mat-error",9),t(36,`
    `),a(),t(37,`

    `),d(38,_g,8,3,"mat-form-field",12),t(39,`
    `),d(40,Cg,3,6,"span",13),t(41,`

    `),i(42,"h4",5),t(43,"Repayments"),a(),t(44,`

    `),i(45,"mat-form-field",14),t(46,`
      `),i(47,"mat-label"),t(48),s(49,"translate"),a(),t(50,`
      `),g(51,"input",15),s(52,"translate"),t(53,`
      `),d(54,hg,8,9,"mat-error",9),t(55,`
    `),a(),t(56,`

    `),i(57,"mat-form-field",16),T("click",function(){P(u);let h=F(69);return M(h.open())}),t(58,`
      `),i(59,"mat-label"),t(60),s(61,"translate"),a(),t(62,`
      `),g(63,"input",17),s(64,"translate"),t(65,`
      `),g(66,"mat-datepicker-toggle",18),t(67,`
      `),g(68,"mat-datepicker",null,0),t(70,`
    `),a(),t(71,`

    `),i(72,"mat-form-field",16),T("click",function(){P(u);let h=F(84);return M(h.open())}),t(73,`
      `),i(74,"mat-label"),t(75),s(76,"translate"),a(),t(77,`
      `),g(78,"input",19),s(79,"translate"),t(80,`
      `),g(81,"mat-datepicker-toggle",18),t(82,`
      `),g(83,"mat-datepicker",null,1),t(85,`
    `),a(),t(86,`

    `),i(87,"h4",5),t(88),s(89,"translate"),g(90,"i",6),s(91,"translate"),t(92,`
    `),a(),t(93,`

    `),i(94,"mat-form-field",7),t(95,`
      `),i(96,"mat-label"),t(97),s(98,"translate"),a(),t(99,`
      `),g(100,"input",20),s(101,"translate"),t(102,`
      `),d(103,vg,8,9,"mat-error",9),t(104,`
    `),a(),t(105,`

    `),i(106,"mat-form-field",7),t(107,`
      `),i(108,"mat-label"),t(109),s(110,"translate"),a(),t(111,`
      `),i(112,"mat-select",21),t(113,`
        `),d(114,bg,3,5,"mat-option",11),t(115,`
      `),a(),t(116,`
    `),a(),t(117,`

    `),d(118,yg,11,4,"mat-form-field",22),t(119,`

    `),d(120,Tg,11,4,"mat-form-field",22),t(121,`

    `),d(122,Pg,4,6,"mat-checkbox",23),t(123,`

    `),i(124,"h4",5),t(125),s(126,"translate"),a(),t(127,`

    `),d(128,wg,69,36,"ng-container",9),t(129,`

    `),d(130,Bg,39,15,"ng-container",9),t(131,`

    `),i(132,"h4",5),t(133),s(134,"translate"),a(),t(135,`

    `),d(136,kg,12,7,"div",24),t(137,`

    `),i(138,"mat-form-field",14),t(139,`
      `),i(140,"mat-label"),t(141),s(142,"translate"),a(),t(143,`
      `),i(144,"mat-select",25),s(145,"translate"),t(146,`
        `),d(147,Ng,3,5,"mat-option",11),t(148,`
      `),a(),t(149,`
      `),d(150,Vg,8,9,"mat-error",9),t(151,`
    `),a(),t(152,`

    `),d(153,jg,8,3,"mat-form-field",24),t(154,`

    `),i(155,"h4",5),t(156),s(157,"translate"),a(),t(158,`

    `),i(159,"mat-form-field",26),t(160,`
      `),i(161,"mat-label"),t(162),s(163,"translate"),a(),t(164,`
      `),i(165,"mat-select",27),s(166,"translate"),t(167,`
        `),d(168,qg,3,5,"mat-option",11),t(169,`
      `),a(),t(170,`
    `),a(),t(171,`

    `),i(172,"mat-checkbox",28),s(173,"translate"),t(174,`
      `),i(175,"p"),t(176),s(177,"translate"),a(),t(178,`
    `),a(),t(179,`

    `),d(180,zg,9,3,"ng-container",9),t(181,`

    `),i(182,"mat-form-field",14),t(183,`
      `),i(184,"mat-label"),t(185),s(186,"translate"),a(),t(187,`
      `),g(188,"input",29),s(189,"translate"),t(190,`
    `),a(),t(191,`

    `),i(192,"mat-form-field",14),t(193,`
      `),i(194,"mat-label"),t(195),s(196,"translate"),a(),t(197,`
      `),g(198,"input",30),s(199,"translate"),t(200,`
    `),a(),t(201,`

    `),i(202,"h4",5),t(203),s(204,"translate"),g(205,"i",6),s(206,"translate"),t(207,`
    `),a(),t(208,`

    `),i(209,"mat-form-field",7),t(210,`
      `),i(211,"mat-label"),t(212),s(213,"translate"),a(),t(214,`
      `),g(215,"input",31),t(216,`
    `),a(),t(217,`

    `),i(218,"mat-form-field",7),t(219,`
      `),i(220,"mat-label"),t(221),s(222,"translate"),a(),t(223,`
      `),g(224,"input",32),t(225,`
    `),a(),t(226,`

    `),i(227,"mat-form-field",14),t(228,`
      `),i(229,"mat-label"),t(230),s(231,"translate"),a(),t(232,`
      `),g(233,"input",33),t(234,`
    `),a(),t(235,`

    `),d(236,Hg,13,4,"div",34),t(237,`

    `),d(238,Gg,9,3,"div",24),t(239,`

    `),d(240,Wg,11,4,"ng-container",24),t(241,`

    `),g(242,"mat-divider",35),t(243,`

    `),i(244,"div",36),t(245,`
      `),i(246,"span",26)(247,"b"),t(248),s(249,"translate"),a()(),t(250,`
      `),i(251,"span",37),t(252),s(253,"yesNo"),a(),t(254,`
    `),a(),t(255,`

    `),d(256,Qg,10,7,"div",38),t(257,`
    `),d(258,Yg,10,7,"div",38),t(259,`
    `),d(260,Kg,9,4,"div",38),t(261,`

    `),d(262,t_,32,14,"ng-container",9),t(263,`

    `),d(264,e_,9,4,"div",38),t(265,`

    `),i(266,"div",36),t(267,`
      `),i(268,"span",26)(269,"b"),t(270),s(271,"translate"),a()(),t(272,`
      `),i(273,"span",26),t(274),s(275,"yesNo"),a(),t(276,`
    `),a(),t(277,`

    `),d(278,d_,56,10,"ng-container",9),t(279,`

    `),d(280,g_,18,7,"ng-container",9),t(281,`

    `),d(282,__,9,4,"div",39),t(283,`

    `),g(284,"mat-divider",35),t(285,`

    `),i(286,"div",40),t(287,`
      `),i(288,"div",41),t(289,`
        `),i(290,"h4",5),t(291),s(292,"translate"),a(),t(293,`
      `),a(),t(294,`

      `),i(295,"div",42),t(296,`
        `),i(297,"div",43),t(298,`
          `),i(299,"button",44),T("click",function(){return P(u),M(l.addCollateral())}),t(300,`
            `),g(301,"fa-icon",45),t(302),s(303,"translate"),a(),t(304,`
        `),a(),t(305,`
      `),a(),t(306,`
    `),a(),t(307,`
    `),i(308,"table",46),t(309,`
      `),b(310,47),t(311,`
        `),d(312,C_,3,3,"th",48),t(313,`
        `),d(314,h_,2,1,"td",49),t(315,`
      `),S(),t(316,`

      `),b(317,50),t(318,`
        `),d(319,v_,3,3,"th",48),t(320,`
        `),d(321,b_,2,1,"td",49),t(322,`
      `),S(),t(323,`

      `),b(324,51),t(325,`
        `),d(326,S_,3,3,"th",48),t(327,`
        `),d(328,y_,2,1,"td",49),t(329,`
      `),S(),t(330,`

      `),b(331,52),t(332,`
        `),d(333,D_,3,3,"th",48),t(334,`
        `),d(335,T_,2,1,"td",49),t(336,`
      `),S(),t(337,`

      `),b(338,53),t(339,`
        `),d(340,P_,3,3,"th",48),t(341,`
        `),d(342,M_,7,0,"td",49),t(343,`
      `),S(),t(344,`

      `),d(345,O_,1,0,"tr",54),t(346,`
      `),d(347,I_,1,0,"tr",55),t(348,`
    `),a(),t(349,`
  `),a(),t(350,`

  `),i(351,"div",56),t(352,`
    `),i(353,"button",57),t(354,`
      `),g(355,"fa-icon",58),t(356),s(357,"translate"),a(),t(358,`
    `),i(359,"button",59),t(360),s(361,"translate"),g(362,"fa-icon",60),t(363,`
    `),a(),t(364,`
    `),d(365,E_,3,5,"button",61),t(366,`
  `),a(),t(367,`
`),a(),t(368,`
`)}if(m&2){let u=F(69),_=F(84);c("formGroup",l.loansAccountTermsForm),o(4),c("ngIf",l.currency),o(3),f(`
      `,p(8,86,"labels.heading.Term Options"),`
      `),o(2),Q("matTooltip",p(10,88,"tooltips.The loan term parameter in loan accounts")),o(7),x(p(17,90,"labels.inputs.Loan Term")),o(5),c("ngIf",l.loansAccountTermsForm.controls.loanTermFrequency.hasError("required")),o(6),x(p(28,92,"labels.inputs.Frequency")),o(5),c("ngForOf",l.termFrequencyTypeData),o(3),c("ngIf",l.loansAccountTermsForm.controls.loanTermFrequencyType.hasError("required")),o(3),c("ngIf",l.hasFixedLength()),o(2),c("ngIf",l.hasFixedLength()),o(8),x(p(49,94,"labels.inputs.Number of repayments")),o(3),Q("matTooltip",p(52,96,"tooltips.Enter the total count of repayments")),o(3),c("ngIf",l.loansAccountTermsForm.controls.numberOfRepayments.hasError("required")),o(6),x(p(61,98,"labels.inputs.First repayment on")),o(3),Q("matTooltip",p(64,100,"tooltips.May be entered to override")),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(3),c("for",u),o(9),x(p(76,102,"labels.inputs.Interest charged from")),o(3),Q("matTooltip",p(79,104,"tooltips.May be entered to override the date")),c("min",l.minDate)("max",l.maxDate)("matDatepicker",_),o(3),c("for",_),o(7),f(`
      `,p(89,106,"labels.heading.Repaid Every"),`
      `),o(2),Q("matTooltip",p(91,108,"tooltips.Fields are input to calculating the repayment schedule")),o(7),x(p(98,110,"labels.inputs.Repaid every")),o(3),Q("matTooltip",p(101,112,"tooltips.Fields are input to calculating the repayment schedule")),o(3),c("ngIf",l.loansAccountTermsForm.controls.repaymentEvery.hasError("required")),o(6),x(p(110,114,"labels.inputs.Frequency")),o(5),c("ngForOf",l.termFrequencyTypeData),o(4),c("ngIf",l.loansAccountTermsForm.controls.repaymentFrequencyType.value===2),o(2),c("ngIf",l.loansAccountTermsForm.controls.repaymentFrequencyType.value===2),o(2),c("ngIf",l.productEnableDownPayment),o(3),x(p(126,116,"labels.inputs.Nominal interest rate")),o(3),c("ngIf",!(l.loansAccountTermsData!=null&&l.loansAccountTermsData.isLoanProductLinkedToFloatingRate)),o(2),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.isLoanProductLinkedToFloatingRate),o(3),x(p(134,118,"labels.inputs.Loan Schedule")),o(3),c("ngIf",l.loanScheduleType),o(5),x(p(142,120,"labels.inputs.Repayment Strategy")),o(3),Q("matTooltip",p(145,122,"tooltips.The repayment strategy")),c("disabled",l.repaymentStrategyDisabled),o(3),c("ngForOf",l.transactionProcessingStrategyOptions),o(3),c("ngIf",l.loansAccountTermsForm.controls.transactionProcessingStrategyCode.hasError("required")),o(3),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.canDefineInstallmentAmount),o(3),x(p(157,124,"labels.heading.Interest Calculations")),o(6),x(p(163,126,"labels.inputs.Interest calculation period")),o(3),Q("matTooltip",p(166,128,"tooltips.Daily - Will Calculate the interest")),o(3),c("ngForOf",l.interestCalculationPeriodTypeData),o(4),Q("matTooltip",p(173,130,"tooltips.To be used with SAME AS REPAYMENT PERIOD")),o(4),x(p(177,132,"labels.inputs.Calculate interest for exact days in partial period")),o(4),c("ngIf",l.isProgressive),o(5),f("",p(186,134,"labels.inputs.Arrears tolerance")," "),o(3),Q("matTooltip",p(189,136,"tooltips.With Arrears tolerance")),o(7),x(p(196,138,"labels.inputs.Interest free period")),o(3),Q("matTooltip",p(199,140,"tooltips.If the Interest Free Period")),o(5),f(`
      `,p(204,142,"labels.heading.Moratorium"),`
      `),o(2),Q("matTooltip",p(206,144,"tooltips.The moratorium information")),o(7),x(p(213,146,"labels.inputs.Grace on principal payment")),o(9),x(p(222,148,"labels.inputs.Grace on interest payment")),o(9),x(p(231,150,"labels.inputs.On arrears ageing")),o(6),c("ngIf",l.isDelinquencyEnabled()),o(2),c("ngIf",l.isDelinquencyEnabled()),o(2),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.isTopup),o(8),x(p(249,152,"labels.inputs.Recalculate Interest")),o(4),x(p(253,154,l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled)),o(4),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled),o(2),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled),o(2),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled),o(2),c("ngIf",l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled),o(2),c("ngIf",(l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled)&&l.loansAccountTermsData.interestRecalculationData.recalculationRestFrequencyType.id!==1),o(6),x(p(271,156,"labels.inputs.Enable income capitalization")),o(4),x(p(275,158,l.enableIncomeCapitalization)),o(4),c("ngIf",l.multiDisburseLoan),o(2),c("ngIf",(l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled)&&l.loansAccountTermsData.interestRecalculationData.interestRecalculationCompoundingType.id!==0),o(2),c("ngIf",(l.loansAccountTermsData==null?null:l.loansAccountTermsData.isInterestRecalculationEnabled)&&l.loansAccountTermsData.interestRecalculationData.interestRecalculationCompoundingType.id!==0&&l.loansAccountTermsData.interestRecalculationData.recalculationCompoundingFrequencyType.id!==1),o(9),x(p(292,160,"labels.heading.Collaterals Data")),o(11),f("",p(303,162,"labels.buttons.Add"),`
          `),o(6),c("dataSource",l.collateralDataSource),o(37),c("matHeaderRowDef",l.loanCollateralDisplayedColumns),o(2),c("matRowDefColumns",l.loanCollateralDisplayedColumns),o(9),f(`
      `,p(357,164,"labels.buttons.Previous"),`
    `),o(4),f(`
      `,p(361,166,"labels.buttons.Next"),`
      `),o(5),c("ngIf",l.loanId)}},dependencies:[A,It,k,w,gt,nt,le,J,st,_t,pt,ct,H,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,Lt,L,Ne,ce,me,Me,Ve,Pe,Ot,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht,Oe,Ae,Nn,pn],styles:["h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0 2em}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"]})}}return e})();var A_=()=>["../","general"];function w_(e,r){if(e&1&&(i(0,"mat-option",29),t(1),a()),e&2){let n=r.$implicit;c("value",n),o(),f(`
        `,n.name,`
      `)}}function L_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function R_(e,r){if(e&1&&(i(0,"td",31),t(1),a()),e&2){let n=r.$implicit;o(),f(`
        `,n.name+", "+n.currency.displaySymbol,`
      `)}}function F_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Type")))}function B_(e,r){if(e&1&&(i(0,"td",31),t(1),a()),e&2){let n=r.$implicit;o(),f(`
        `,n.chargeCalculationType.value,`
      `)}}function k_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function N_(e,r){if(e&1){let n=O();i(0,"td",31),t(1),i(2,"button",32),T("click",function(){let l=P(n).$implicit,u=C();return M(u.editChargeAmount(l))}),t(3,`
          `),g(4,"fa-icon",33),t(5,`
        `),a(),t(6,`
      `),a()}if(e&2){let n=r.$implicit;o(),f(`
        `,n.amount,`
        `)}}function V_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Collected On")))}function j_(e,r){if(e&1&&(i(0,"td",31),t(1),a()),e&2){let n=r.$implicit;o(),f(`
        `,n.chargeTimeType.value,`
      `)}}function q_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Date")))}function z_(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
          `,p(2,1,n.dueDate)||"Unassigned",`
        `)}}function H_(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
          `,p(2,1,n.feeOnMonthDay)||"Unassigned",`
        `)}}function G_(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
          `,p(2,1,"labels.inputs.N/A"),`
        `))}function U_(e,r){if(e&1){let n=O();i(0,"button",32),T("click",function(){P(n);let l=C().$implicit,u=C();return M(u.editChargeDate(l))}),t(1,`
          `),g(2,"fa-icon",33),t(3,`
        `),a()}}function $_(e,r){if(e&1&&(i(0,"td",31),t(1,`
        `),d(2,z_,3,3,"span",34),t(3,`
        `),d(4,H_,3,3,"span",34),t(5,`
        `),d(6,G_,3,3,"span",34),t(7,`
        `),d(8,U_,4,0,"button",35),t(9,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.chargeTimeType.value==="Specified due date"||n.chargeTimeType.value==="Weekly Fee"),o(2),c("ngIf",n.chargeTimeType.value==="Monthly Fee"||n.chargeTimeType.value==="Annual Fee"),o(2),c("ngIf",!(n.chargeTimeType.value==="Monthly Fee"||n.chargeTimeType.value==="Annual Fee"||n.chargeTimeType.value==="Specified due date"||n.chargeTimeType.value==="Weekly Fee")),o(2),c("ngIf",n.chargeTimeType.value==="Weekly Fee"||n.chargeTimeType.value==="Annual Fee"||n.chargeTimeType.value==="Specified due date")}}function W_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function Q_(e,r){if(e&1){let n=O();i(0,"td",31),t(1,`
        `),i(2,"button",36),T("click",function(){let l=P(n).$implicit,u=C();return M(u.deleteCharge(l))}),t(3,`
          `),g(4,"fa-icon",37),t(5,`
        `),a(),t(6,`
      `),a()}}function Y_(e,r){e&1&&g(0,"tr",38)}function K_(e,r){e&1&&g(0,"tr",39)}function J_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function Z_(e,r){if(e&1&&(i(0,"td",31),t(1),a()),e&2){let n=r.$implicit;o(),V("",n.name,",",n.currency.displaySymbol,"")}}function X_(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Type")))}function t2(e,r){if(e&1&&(i(0,"td",31),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeCalculationType.value)}}function e2(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function n2(e,r){if(e&1&&(i(0,"td",31),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.amount))}}function i2(e,r){e&1&&(i(0,"th",30),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Collected On")))}function a2(e,r){if(e&1&&(i(0,"td",31),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeTimeType.value)}}function o2(e,r){e&1&&g(0,"tr",38)}function r2(e,r){e&1&&g(0,"tr",39)}function l2(e,r){e&1&&(i(0,"button",40),t(1),s(2,"translate"),a()),e&2&&(c("routerLink",N(4,A_)),o(),f(`
    `,p(2,2,"labels.buttons.Cancel"),`
  `))}var Be=(()=>{class e{constructor(n,m,l,u){this.dialog=n,this.dateUtils=m,this.route=l,this.settingsService=u,this.chargesDataSource=[],this.overDueChargesDataSource=[],this.collateralDataSource=[],this.chargesDisplayedColumns=["name","chargeCalculationType","amount","chargeTimeType","date","action"],this.overdueChargesDisplayedColumns=["name","type","amount","collectedon"],this.selectAllItems=!1,this.loanPurposeOptions=[],this.displayedColumn=["check","id","name","purpose","amount"],this.pristine=!0,this.isCollateralSufficient=!1,this.totalCollateralValue=0,this.loanId=null,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.loansAccountTemplate&&this.loansAccountTemplate.charges&&(this.chargesDataSource=this.loansAccountTemplate.charges.map(n=>ft(W({},n),{id:n.chargeId}))||[]),this.dataSource=new se(this.activeClientMembers)}ngOnChanges(){this.loansAccountProductTemplate&&(this.loanPurposeOptions=this.loansAccountProductTemplate.loanPurposeOptions,this.chargeData=this.loansAccountProductTemplate.chargeOptions,this.loansSavingsAccountLinked||(this.chargeData=this.chargeData.filter(n=>n.chargePaymentMode?.value!="Account transfer")),this.loansAccountProductTemplate.overdueCharges&&(this.overDueChargesDataSource=this.loansAccountProductTemplate.overdueCharges),this.loansAccountProductTemplate.charges&&this.loansAccountProductTemplate.charges.length>0&&this.chargesDataSource.length===0&&(this.chargesDataSource=this.loansAccountProductTemplate.charges.map(n=>ft(W({},n),{id:n.chargeId}))||[]))}addCharge(n){this.chargesDataSource=this.chargesDataSource.concat([n.value]),n.value="",this.pristine=!1}editChargeAmount(n){let m=[new pe({controlName:"amount",label:"Amount",value:n.amount,type:"number",required:!1})],l={title:"Edit Charge Amount",layout:{addButtonText:"Confirm"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h=ft(W({},n),{amount:_.data.value.amount});this.chargesDataSource.splice(this.chargesDataSource.indexOf(n),1,h),this.chargesDataSource=this.chargesDataSource.concat([])}}),this.pristine=!1}editChargeDate(n){let m=[new fe({controlName:"date",label:"Date",value:n.dueDate||n.feeOnMonthDay||"",type:"datetime-local",required:!1})],l={title:"Edit Charge Date",layout:{addButtonText:"Confirm"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h,y=this.settingsService.dateFormat,D=this.dateUtils.formatDate(_.data.value.date,y);switch(n.chargeTimeType.value){case"Specified due date":case"Weekly Fee":h=ft(W({},n),{dueDate:D});break;case"Annual Fee":h=ft(W({},n),{feeOnMonthDay:D});break}this.chargesDataSource.splice(this.chargesDataSource.indexOf(n),1,h),this.chargesDataSource=this.chargesDataSource.concat([])}}),this.pristine=!1}editChargeFeeInterval(n){let m=[new pe({controlName:"feeInterval",label:"Fee Interval",value:n.feeInterval,type:"text",required:!1})],l={title:"Edit Charge Fee Interval",layout:{addButtonText:"Confirm"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data){let h=ft(W({},n),{feeInterval:_.data.value.feeInterval});this.chargesDataSource.splice(this.chargesDataSource.indexOf(n),1,h),this.chargesDataSource=this.chargesDataSource.concat([])}}),this.pristine=!1}deleteCharge(n){this.dialog.open(xe,{data:{deleteContext:`charge ${n.name}`}}).afterClosed().subscribe(l=>{l.delete&&(this.chargesDataSource.splice(this.chargesDataSource.indexOf(n),1),this.chargesDataSource=this.chargesDataSource.concat([]),this.pristine=!1)})}get isValid(){return!0}get loansAccountCharges(){return{charges:this.chargesDataSource}}get selectedClientMembers(){return{selectedMembers:this.activeClientMembers.filter(n=>n.selected)}}toggleSelects(){for(let n of this.activeClientMembers)n.selected=this.selectAllItems}toggleSelect(){let n=this.activeClientMembers.length;this.selectAllItems=n===0?!1:this.activeClientMembers.filter(m=>m.selected).length===n}static{this.\u0275fac=function(m){return new(m||e)(v(Zt),v(Y),v(B),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-charges-step"]],inputs:{loansAccountProductTemplate:"loansAccountProductTemplate",loansAccountTemplate:"loansAccountTemplate",loansAccountFormValid:"loansAccountFormValid",activeClientMembers:"activeClientMembers",loansSavingsAccountLinked:"loansSavingsAccountLinked"},features:[Ge],decls:132,vars:25,consts:[["charge",""],[1,"layout-row-wrap","gap-2px","responsive-column"],[1,"flex-48"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-48","align-center"],["type","button","mat-raised-button","","color","primary",3,"click","disabled"],["icon","plus",1,"m-r-10"],["mat-table","",1,"flex-98","mat-elevation-z1",3,"dataSource","hidden"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","chargeCalculationType"],["matColumnDef","amount"],["matColumnDef","chargeTimeType"],["matColumnDef","date"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"flex-98"],[1,"mat-h4","flex-98"],["mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","type"],["matColumnDef","collectedon"],[1,"layout-row","responsive-column","align-center","gap-2px","margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right",1,"m-l-10"],["mat-raised-button","",3,"routerLink",4,"ngIf"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["icon","pen"],[4,"ngIf"],["mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["icon","trash"],["mat-header-row",""],["mat-row",""],["mat-raised-button","",3,"routerLink"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-form-field",2),t(3,`
    `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
    `),i(8,"mat-select",null,0),t(10,`
      `),d(11,w_,2,2,"mat-option",3),t(12,`
    `),a(),t(13,`
  `),a(),t(14,`

  `),i(15,"div",4),t(16,`
    `),i(17,"button",5),T("click",function(){P(u);let h=F(9);return M(l.addCharge(h))}),t(18,`
      `),g(19,"fa-icon",6),t(20),s(21,"translate"),a(),t(22,`
  `),a(),t(23,`

  `),i(24,"table",7),t(25,`
    `),b(26,8),t(27,`
      `),d(28,L_,3,3,"th",9),t(29,`
      `),d(30,R_,2,1,"td",10),t(31,`
    `),S(),t(32,`

    `),b(33,11),t(34,`
      `),d(35,F_,3,3,"th",9),t(36,`
      `),d(37,B_,2,1,"td",10),t(38,`
    `),S(),t(39,`

    `),b(40,12),t(41,`
      `),d(42,k_,3,3,"th",9),t(43,`
      `),d(44,N_,7,1,"td",10),t(45,`
    `),S(),t(46,`

    `),b(47,13),t(48,`
      `),d(49,V_,3,3,"th",9),t(50,`
      `),d(51,j_,2,1,"td",10),t(52,`
    `),S(),t(53,`

    `),b(54,14),t(55,`
      `),d(56,q_,3,3,"th",9),t(57,`
      `),d(58,$_,10,4,"td",10),t(59,`
    `),S(),t(60,`

    `),b(61,15),t(62,`
      `),d(63,W_,3,3,"th",9),t(64,`
      `),d(65,Q_,7,0,"td",10),t(66,`
    `),S(),t(67,`

    `),d(68,Y_,1,0,"tr",16),t(69,`
    `),d(70,K_,1,0,"tr",17),t(71,`
  `),a(),t(72,`

  `),g(73,"mat-divider",18),t(74,`

  `),i(75,"h4",19),t(76),s(77,"translate"),a(),t(78,`

  `),i(79,"table",20),t(80,`
    `),b(81,8),t(82,`
      `),d(83,J_,3,3,"th",9),t(84,`
      `),d(85,Z_,2,2,"td",10),t(86,`
    `),S(),t(87,`

    `),b(88,21),t(89,`
      `),d(90,X_,3,3,"th",9),t(91,`
      `),d(92,t2,2,1,"td",10),t(93,`
    `),S(),t(94,`

    `),b(95,12),t(96,`
      `),d(97,e2,3,3,"th",9),t(98,`
      `),d(99,n2,3,3,"td",10),t(100,`
    `),S(),t(101,`

    `),b(102,22),t(103,`
      `),d(104,i2,3,3,"th",9),t(105,`
      `),d(106,a2,2,1,"td",10),t(107,`
    `),S(),t(108,`

    `),d(109,o2,1,0,"tr",16),t(110,`
    `),d(111,r2,1,0,"tr",17),t(112,`
  `),a(),t(113,`
`),a(),t(114,`

`),i(115,"div",23),t(116,`
  `),i(117,"button",24),t(118,`
    `),g(119,"fa-icon",25),t(120),s(121,"translate"),a(),t(122,`
  `),i(123,"button",26),t(124),s(125,"translate"),g(126,"fa-icon",27),t(127,`
  `),a(),t(128,`
  `),d(129,l2,3,5,"button",28),t(130,`
`),a(),t(131,`
`)}if(m&2){let u=F(9);o(5),x(p(6,15,"labels.inputs.Charge")),o(6),c("ngForOf",l.chargeData),o(6),c("disabled",!u.value),o(3),f(`
      `,p(21,17,"labels.buttons.Add"),`
    `),o(4),c("dataSource",l.chargesDataSource)("hidden",l.chargesDataSource.length===0),o(44),c("matHeaderRowDef",l.chargesDisplayedColumns),o(2),c("matRowDefColumns",l.chargesDisplayedColumns),o(6),x(p(77,19,"labels.heading.Overdue Charges")),o(3),c("dataSource",l.overDueChargesDataSource),o(30),c("matHeaderRowDef",l.overdueChargesDisplayedColumns),o(2),c("matRowDefColumns",l.overdueChargesDisplayedColumns),o(9),f(`
    `,p(121,21,"labels.buttons.Previous"),`
  `),o(4),f(`
    `,p(125,23,"labels.buttons.Next"),`
    `),o(5),c("ngIf",l.loanId)}},dependencies:[A,It,k,w,H,X,Z,Ut,Gt,j,Lt,L,Ot,Rt,kt,Bt,Nt,Ft,Vt,Pe,jt,zt,qt,Ht,Ve,Oe,Ae,Wt],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.tableName[_ngcontent-%COMP%]{padding-left:2%}"]})}}return e})();function m2(e,r){if(e&1&&(i(0,"mat-option",19),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
            `,n.value,`
          `)}}function s2(e,r){if(e&1&&(i(0,"mat-select",17),t(1,`
          `),d(2,m2,2,2,"mat-option",18),t(3,`
        `),a()),e&2){let n=C(2).$implicit;Q("formControlName",n.controlName),o(2),c("ngForOf",n.columnValues)}}function p2(e,r){if(e&1&&g(0,"input",20),e&2){let n=C(2).$implicit;Q("formControlName",n.controlName)}}function c2(e,r){if(e&1&&g(0,"input",21),e&2){let n=C(2).$implicit;Q("formControlName",n.controlName)}}function d2(e,r){if(e&1&&g(0,"textarea",21),e&2){let n=C(2).$implicit;Q("formControlName",n.controlName)}}function u2(e,r){if(e&1){let n=O();i(0,"span",22),T("click",function(){P(n);let l=F(7);return M(l.open())}),t(1,`
          `),g(2,"input",23),t(3,`
          `),g(4,"mat-datepicker-toggle",24),t(5,`
          `),g(6,"mat-datepicker",null,0),t(8,`
        `),a()}if(e&2){let n=F(7),m=C(2).$implicit;o(2),Q("formControlName",m.controlName),c("matDatepicker",n),o(2),c("for",n)}}function x2(e,r){if(e&1&&(i(0,"mat-form-field",12),t(1,`
        `),i(2,"mat-label"),t(3),a(),t(4,`

        `),d(5,s2,4,2,"mat-select",13),t(6,`

        `),d(7,p2,1,1,"input",14),t(8,`

        `),d(9,c2,1,1,"input",15),t(10,`

        `),d(11,d2,1,1,"textarea",15),t(12,`

        `),d(13,u2,9,3,"span",16),t(14,`
      `),a()),e&2){let n=C().$implicit,m=C();o(3),x(m.getInputName(n)),o(2),c("ngIf",m.isDropdown(n.columnDisplayType)),o(2),c("ngIf",m.isNumeric(n.columnDisplayType)),o(2),c("ngIf",m.isString(n.columnDisplayType)),o(2),c("ngIf",m.isText(n.columnDisplayType)),o(2),c("ngIf",m.isDate(n.columnDisplayType))}}function f2(e,r){if(e&1&&(i(0,"mat-checkbox",25),t(1),a()),e&2){let n=C().$implicit,m=C();Q("formControlName",n.controlName),o(),f(`
        `,m.getInputName(n),`
      `)}}function g2(e,r){if(e&1&&(i(0,"div",9),t(1,`
      `),d(2,x2,15,6,"mat-form-field",10),t(3,`

      `),d(4,f2,2,2,"mat-checkbox",11),t(5,`
    `),a()),e&2){let n=r.$implicit,m=C();o(2),c("ngIf",!m.isBoolean(n.columnDisplayType)),o(2),c("ngIf",m.isBoolean(n.columnDisplayType))}}var xn=(()=>{class e{constructor(n,m,l){this.formBuilder=n,this.settingsService=m,this.dateUtils=l,this.datatableInputs=[]}ngOnInit(){this.datatableInputs=this.datatableData.columnHeaderData.filter(m=>m.columnName!=="id"&&m.columnName!=="loan_id"&&m.columnName!=="created_at"&&m.columnName!=="updated_at");let n={};this.datatableInputs.forEach(m=>{m.controlName=this.getInputName(m),m.isColumnNullable?n[m.controlName]=new K(""):this.isNumeric(m.columnDisplayType)?n[m.controlName]=new K(0,[q.required]):n[m.controlName]=new K("",[q.required])}),this.datatableForm=this.formBuilder.group(n)}getInputName(n){return n.columnName&&n.columnName.includes("_cd_")?n.columnName.split("_cd_")[0]:n.columnName}isNumeric(n){return this.isColumnType(n,"INTEGER")||this.isColumnType(n,"DECIMAL")}isDate(n){return this.isColumnType(n,"DATE")||this.isColumnType(n,"DATETIME")}isBoolean(n){return this.isColumnType(n,"BOOLEAN")}isDropdown(n){return this.isColumnType(n,"CODELOOKUP")}isString(n){return this.isColumnType(n,"STRING")}isText(n){return this.isColumnType(n,"TEXT")}isColumnType(n,m){return n===m}get payload(){let n=this.settingsService.dateFormat,m=this.datatableForm.value,l={locale:this.settingsService.language.code},u=!1;return this.datatableInputs.forEach(h=>{let y=this.getInputName(h);this.isNumeric(h.columnDisplayType)?l[h.columnName]=m[y]*1:this.isDate(h.columnDisplayType)?(l[h.columnName]=this.dateUtils.formatDate(m[y],n),u=!0):l[h.columnName]=m[y]}),u&&(l.dateFormat=n),{registeredTableName:this.datatableData.registeredTableName,data:l}}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(G),v(Y))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-datatable-step"]],inputs:{datatableData:"datatableData"},decls:23,vars:8,consts:[["datePicker",""],[3,"formGroup"],[1,"layout-row-wrap","gap-2px","responsive-column"],["class","flex-48",4,"ngFor","ngForOf"],[1,"layout-row","align-center","gap-2percent","margin-t","responsive-column"],["mat-raised-button","","matStepperPrevious","","disabled",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right",1,"m-l-10"],[1,"flex-48"],["class","flex-100",4,"ngIf"],["labelPosition","before","class","margin-v",3,"formControlName",4,"ngIf"],[1,"flex-100"],[3,"formControlName",4,"ngIf"],["matInput","","type","number",3,"formControlName",4,"ngIf"],["matInput","",3,"formControlName",4,"ngIf"],[3,"click",4,"ngIf"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","type","number",3,"formControlName"],["matInput","",3,"formControlName"],[3,"click"],["matInput","",1,"date-picker",3,"matDatepicker","formControlName"],["matSuffix","",3,"for"],["labelPosition","before",1,"margin-v",3,"formControlName"]],template:function(m,l){m&1&&(i(0,"form",1),t(1,`
  `),i(2,"div",2),t(3,`
    `),d(4,g2,6,2,"div",3),t(5,`
  `),a(),t(6,`

  `),i(7,"div",4),t(8,`
    `),i(9,"button",5),t(10,`
      `),g(11,"fa-icon",6),t(12),s(13,"translate"),a(),t(14,`
    `),i(15,"button",7),t(16),s(17,"translate"),g(18,"fa-icon",8),t(19,`
    `),a(),t(20,`
  `),a(),t(21,`
`),a(),t(22,`
`)),m&2&&(c("formGroup",l.datatableForm),o(4),c("ngForOf",l.datatableInputs),o(8),f(`
      `,p(13,4,"labels.buttons.Previous"),`
    `),o(4),f(`
      `,p(17,6,"labels.buttons.Next"),`
      `))},dependencies:[A,It,k,w,gt,nt,le,J,st,pt,ct,X,Z,bt,at,Ut,Gt,Dt,Tt,yt,j,L,Me,Oe,Ot,Ae],styles:[".date-picker[_ngcontent-%COMP%]{width:92%}mat-checkbox[_ngcontent-%COMP%]{margin-top:30px}"]})}}return e})();var _2=()=>["../","general"];function C2(e,r){e&1&&(i(0,"button",10),t(1),s(2,"translate"),a()),e&2&&(c("routerLink",N(4,_2)),o(),f(`
    `,p(2,2,"labels.buttons.Cancel"),`
  `))}var We=(()=>{class e{constructor(n,m,l){this.loansService=n,this.settingsService=m,this.route=l,this.repaymentScheduleDetails={periods:[]},this.loanId=null,this.loanId=this.route.snapshot.params.loanId}showRepaymentInfo(){this.repaymentScheduleDetails={periods:[]};let n=this.settingsService.language.code,m=this.settingsService.dateFormat,l=this.loansService.buildLoanRequestPayload(this.loansAccount,this.loansAccountTemplate,this.loansAccountProductTemplate.calendarOptions,n,m);delete l.enableInstallmentLevelDelinquency,delete l.externalId,this.loansService.calculateLoanSchedule(l).subscribe(u=>{this.repaymentScheduleDetails=u})}static{this.\u0275fac=function(m){return new(m||e)(v(R),v(G),v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-schedule-step"]],inputs:{currencyCode:"currencyCode",loansAccountTemplate:"loansAccountTemplate",loansAccountProductTemplate:"loansAccountProductTemplate",loansAccount:"loansAccount"},decls:29,vars:12,consts:[[1,"layout-row-wrap","responsive-column"],["mat-flat-button","","color","primary",3,"click"],["icon","calendar",1,"m-r-10"],[1,"flex-100",3,"repaymentScheduleDetails","currencyCode"],[1,"layout-row","responsive-column","align-center","gap-2px","margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right",1,"m-l-10"],["mat-raised-button","",3,"routerLink",4,"ngIf"],["mat-raised-button","",3,"routerLink"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"button",1),T("click",function(){return l.showRepaymentInfo()}),t(3,`
    `),g(4,"fa-icon",2),t(5),s(6,"translate"),a(),t(7,`

  `),i(8,"mifosx-repayment-schedule-tab",3),t(9,`
  `),a(),t(10,`
`),a(),t(11,`

`),i(12,"div",4),t(13,`
  `),i(14,"button",5),t(15,`
    `),g(16,"fa-icon",6),t(17),s(18,"translate"),a(),t(19,`
  `),i(20,"button",7),t(21),s(22,"translate"),g(23,"fa-icon",8),t(24,`
  `),a(),t(25,`
  `),d(26,C2,3,5,"button",9),t(27,`
`),a(),t(28,`
`)),m&2&&(o(5),f("",p(6,6,"labels.inputs.Generate Repayment Schedule"),`
  `),o(3),c("repaymentScheduleDetails",l.repaymentScheduleDetails)("currencyCode",l.currencyCode),o(9),f(`
    `,p(18,8,"labels.buttons.Previous"),`
  `),o(4),f(`
    `,p(22,10,"labels.buttons.Next"),`
    `),o(5),c("ngIf",l.loanId))},dependencies:[A,k,w,H,j,L,Ot,$e,Oe,Ae],encapsulation:2})}}return e})();var h2=()=>["../.."];function v2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),s(8,"find"),a(),t(9,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Loan officer"),":"),o(4),x(vt(8,4,n.loansAccount.loanOfficerId,n.loansAccountProductTemplate.loanOfficerOptions,"id","displayName"))}}function b2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),s(8,"find"),a(),t(9,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Loan purpose"),":"),o(4),x(vt(8,4,n.loansAccount.loanPurposeId,n.loansAccountProductTemplate.loanPurposeOptions,"id","name"))}}function S2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),s(8,"find"),a(),t(9,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Fund"),":"),o(4),x(vt(8,4,n.loansAccount.fundId,n.loansAccountProductTemplate.fundOptions,"id","name"))}}function y2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7,`
      `),g(8,"mifosx-external-identifier",18),t(9,`
    `),a(),t(10,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.External id"),":"),o(5),Q("externalId",n.loansAccount.externalId)}}function D2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client ID")))}function T2(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),x(n.id)}}function P2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client Name")))}function M2(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),x(n.displayName)}}function O2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Loan Purpose")))}function I2(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),x(n.purpose)}}function E2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Original Loan")))}function A2(e,r){if(e&1&&(i(0,"td",29),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
            `,vt(2,1,n.principal,m.loansAccountProductTemplate.currency.code,"symbol-narrow","1.2-2"),`
          `)}}function w2(e,r){e&1&&g(0,"tr",30)}function L2(e,r){e&1&&g(0,"tr",31)}function R2(e,r){if(e&1&&(b(0),t(1,`
    `),i(2,"h3",9),t(3),s(4,"translate"),a(),t(5,`
    `),g(6,"mat-divider",3),t(7,`
    `),i(8,"div",5),t(9,`
      `),i(10,"table",19,0),t(12,`
        `),t(13,`
        `),b(14,20),t(15,`
          `),d(16,D2,3,3,"th",21),t(17,`
          `),d(18,T2,2,1,"td",22),t(19,`
        `),S(),t(20,`

        `),t(21,`
        `),b(22,23),t(23,`
          `),d(24,P2,3,3,"th",21),t(25,`
          `),d(26,M2,2,1,"td",22),t(27,`
        `),S(),t(28,`

        `),t(29,`
        `),b(30,24),t(31,`
          `),d(32,O2,3,3,"th",21),t(33,`
          `),d(34,I2,2,1,"td",22),t(35,`
        `),S(),t(36,`

        `),t(37,`
        `),b(38,25),t(39,`
          `),d(40,E2,3,3,"th",21),t(41,`
          `),d(42,A2,3,6,"td",22),t(43,`
        `),S(),t(44,`

        `),d(45,w2,1,0,"tr",26),t(46,`
        `),d(47,L2,1,0,"tr",27),t(48,`
      `),a(),t(49,`
    `),a(),t(50,`
  `),S()),e&2){let n=C();o(3),x(p(4,4,"labels.heading.Client Members")),o(7),c("dataSource",n.dataSource),o(35),c("matHeaderRowDef",n.membersDisplayedColumns),o(2),c("matRowDefColumns",n.membersDisplayedColumns)}}function F2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),s(8,"yesNo"),a(),t(9,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Enable Down Payments"),":"),o(4),x(p(8,4,n.loansAccount.enableDownPayment))}}function B2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),s(8,"dateFormat"),a(),t(9,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.First repayment on"),":"),o(4),x(p(8,4,n.loansAccount.repaymentsStartingFromDate))}}function k2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),s(8,"dateFormat"),a(),t(9,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Interest charged from"),":"),o(4),x(p(8,4,n.loansAccount.interestChargedFromDate))}}function N2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,3,"labels.inputs.Nominal interest rate"),":"),o(4),V("",n.loansAccount.interestRatePerPeriod,"\xA0\xA0",n.loansAccountProductTemplate.interestRateFrequencyType.value,"")}}function V2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Interest method"),": "),o(4),x(n.loansAccount.interestType)}}function j2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Is Equal Amortization"),":"),o(4),x(n.loansAccount.isEqualAmortization)}}function q2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Calculate interest for exact days in partial period"),":"),o(4),x(n.loansAccount.allowPartialPeriodInterestCalculation)}}function z2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Arrears tolerance"),": "),o(4),x(n.loansAccount.inArrearsTolerance)}}function H2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Interest free period"),": "),o(4),x(n.loansAccount.graceOnInterestCharged)}}function G2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.On principal payment"),": "),o(4),x(n.loansAccount.graceOnPrincipalPayment)}}function U2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.On interest payment"),": "),o(4),x(n.loansAccount.graceOnInterestPayment)}}function $2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.On Arrears Aging"),": "),o(4),x(n.loansAccount.graceOnArrearsAgeing)}}function W2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Is Topup Loan"),"? "),o(4),x(n.loansAccount.isTopup)}}function Q2(e,r){if(e&1&&(i(0,"div",3),t(1,`
    `),i(2,"span",4),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"span",5),t(7),a(),t(8,`
  `),a()),e&2){let n=C();o(3),f("",p(4,2,"labels.inputs.Days in month"),": "),o(4),x(n.loansAccountProductTemplate==null?null:n.loansAccountProductTemplate.daysInMonthType.value)}}function Y2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function K2(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),f(`
          `,n.name+", "+n.currency.displaySymbol,`
        `)}}function J2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Type")))}function Z2(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),f(`
          `,n.chargeCalculationType.value,`
        `)}}function X2(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function tC(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),f(`
          `,n.amount,`
        `)}}function eC(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Collected On")))}function nC(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),f(`
          `,n.chargeTimeType.value,`
        `)}}function iC(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Date")))}function aC(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
            `,p(2,1,n.dueDate)||"Unassigned",`
          `)}}function oC(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
            `,p(2,1,n.feeOnMonthDay)||"Unassigned",`
          `)}}function rC(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
            `,p(2,1,"labels.inputs.N/A"),`
          `))}function lC(e,r){if(e&1&&(i(0,"td",29),t(1,`
          `),d(2,aC,3,3,"span",8),t(3,`
          `),d(4,oC,3,3,"span",8),t(5,`
          `),d(6,rC,3,3,"span",8),t(7,`
        `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.chargeTimeType.value==="Specified due date"||n.chargeTimeType.value==="Weekly Fee"),o(2),c("ngIf",n.chargeTimeType.value==="Monthly Fee"||n.chargeTimeType.value==="Annual Fee"),o(2),c("ngIf",!(n.chargeTimeType.value==="Monthly Fee"||n.chargeTimeType.value==="Annual Fee"||n.chargeTimeType.value==="Specified due date"||n.chargeTimeType.value==="Weekly Fee"))}}function mC(e,r){e&1&&g(0,"tr",30)}function sC(e,r){e&1&&g(0,"tr",31)}function pC(e,r){if(e&1&&(i(0,"div",32),t(1,`
    `),i(2,"h3",2),t(3),s(4,"translate"),a(),t(5,`

    `),g(6,"mat-divider",3),t(7,`
    `),i(8,"table",33),t(9,`
      `),b(10,23),t(11,`
        `),d(12,Y2,3,3,"th",21),t(13,`
        `),d(14,K2,2,1,"td",22),t(15,`
      `),S(),t(16,`

      `),b(17,34),t(18,`
        `),d(19,J2,3,3,"th",21),t(20,`
        `),d(21,Z2,2,1,"td",22),t(22,`
      `),S(),t(23,`

      `),b(24,35),t(25,`
        `),d(26,X2,3,3,"th",21),t(27,`
        `),d(28,tC,2,1,"td",22),t(29,`
      `),S(),t(30,`

      `),b(31,36),t(32,`
        `),d(33,eC,3,3,"th",21),t(34,`
        `),d(35,nC,2,1,"td",22),t(36,`
      `),S(),t(37,`

      `),b(38,37),t(39,`
        `),d(40,iC,3,3,"th",21),t(41,`
        `),d(42,lC,8,3,"td",22),t(43,`
      `),S(),t(44,`

      `),d(45,mC,1,0,"tr",26),t(46,`
      `),d(47,sC,1,0,"tr",27),t(48,`
    `),a(),t(49,`
  `),a()),e&2){let n=C();o(3),x(p(4,4,"labels.heading.Charges")),o(5),c("dataSource",n.loansAccount.charges),o(37),c("matHeaderRowDef",n.chargesDisplayedColumns),o(2),c("matRowDefColumns",n.chargesDisplayedColumns)}}function cC(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.name")))}function dC(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),V("",n.name,",",n.currency.displaySymbol,"")}}function uC(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Type")))}function xC(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeCalculationType.value)}}function fC(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function gC(e,r){if(e&1&&(i(0,"td",29),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.amount))}}function _C(e,r){e&1&&(i(0,"th",28),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Collected On")))}function CC(e,r){if(e&1&&(i(0,"td",29),t(1),a()),e&2){let n=r.$implicit;o(),x(n.chargeTimeType.value)}}function hC(e,r){e&1&&g(0,"tr",30)}function vC(e,r){e&1&&g(0,"tr",31)}function bC(e,r){if(e&1&&(i(0,"div",38),t(1,`
    `),i(2,"h3",39),t(3),s(4,"translate"),a(),t(5,`

    `),g(6,"mat-divider",40),t(7,`

    `),i(8,"table",41),t(9,`
      `),b(10,23),t(11,`
        `),d(12,cC,3,3,"th",21),t(13,`
        `),d(14,dC,2,2,"td",22),t(15,`
      `),S(),t(16,`

      `),b(17,42),t(18,`
        `),d(19,uC,3,3,"th",21),t(20,`
        `),d(21,xC,2,1,"td",22),t(22,`
      `),S(),t(23,`

      `),b(24,35),t(25,`
        `),d(26,fC,3,3,"th",21),t(27,`
        `),d(28,gC,3,3,"td",22),t(29,`
      `),S(),t(30,`

      `),b(31,43),t(32,`
        `),d(33,_C,3,3,"th",21),t(34,`
        `),d(35,CC,2,1,"td",22),t(36,`
      `),S(),t(37,`

      `),d(38,hC,1,0,"tr",26),t(39,`
      `),d(40,vC,1,0,"tr",27),t(41,`
    `),a(),t(42,`
  `),a()),e&2){let n=C();o(3),x(p(4,4,"labels.heading.Overdue Charges")),o(5),c("dataSource",n.loansAccountProductTemplate.overdueCharges),o(30),c("matHeaderRowDef",n.overdueChargesDisplayedColumns),o(2),c("matRowDefColumns",n.overdueChargesDisplayedColumns)}}var Qe=(()=>{class e{constructor(){this.loansAccountTemplate=[],this.submitEvent=new Je,this.chargesDisplayedColumns=["name","chargeCalculationType","amount","chargeTimeType","date"],this.overdueChargesDisplayedColumns=["name","type","amount","collectedon"],this.membersDisplayedColumns=["id","name","purpose","principal"],this.loanPurposeOptions=[],this.productEnableDownPayment=!1}ngOnChanges(n){this.productEnableDownPayment=this.loansAccountProductTemplate.product.enableDownPayment,this.activeClientMembers&&(this.loanPurposeOptions=this.loansAccountProductTemplate.loanPurposeOptions,this.dataSource=new se(this.activeClientMembers.filter(m=>m.selected).map(m=>ft(W({},m),{purpose:this.loanPurposeOptions.find(l=>l.id===m.loanPurposeId)?.name}))),this.loansAccount.principalAmount=this.activeClientMembers.filter(m=>m.selected).reduce((m,l)=>m+(l.principal??0),0))}static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-account-preview-step"]],inputs:{loansAccountTemplate:"loansAccountTemplate",loansAccountProductTemplate:"loansAccountProductTemplate",loansAccount:"loansAccount",activeClientMembers:"activeClientMembers"},outputs:{submitEvent:"submitEvent"},features:[Ge],decls:238,vars:161,consts:[["membersTable",""],[1,"content","responsive-column"],[1,"mat-h3","flex-fill"],[1,"flex-fill"],[1,"flex-40"],[1,"flex-60"],[3,"chars","textValue"],["class","flex-fill",4,"ngIf"],[4,"ngIf"],[1,"mat-h3","margin-t","flex-fill"],[1,"m-l-5"],["class","layout-row-wrap responsive-column flex-fill margin-t",4,"ngIf"],["class","flex-fill layout-row-wrap layout-xs-column margin-t",4,"ngIf"],[1,"layout-row","responsive-column","align-center","gap-2px","margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"],[3,"externalId"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","purpose"],["matColumnDef","principal"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[1,"layout-row-wrap","responsive-column","flex-fill","margin-t"],["mat-table","",1,"flex-fill","mat-elevation-z1",3,"dataSource"],["matColumnDef","chargeCalculationType"],["matColumnDef","amount"],["matColumnDef","chargeTimeType"],["matColumnDef","date"],[1,"flex-fill","layout-row-wrap","layout-xs-column","margin-t"],[1,"mat-h3","flex-98"],[1,"flex-98"],["mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","type"],["matColumnDef","collectedon"]],template:function(m,l){m&1&&(i(0,"div",1),t(1,`
  `),i(2,"h3",2),t(3),s(4,"translate"),a(),t(5,`

  `),i(6,"div",3),t(7,`
    `),i(8,"span",4),t(9),s(10,"translate"),a(),t(11,`
    `),i(12,"span",5),t(13,`
      `),i(14,"mifosx-long-text",6),s(15,"find"),t(16,`
      `),a()(),t(17,`
  `),a(),t(18,`

  `),d(19,v2,10,9,"div",7),t(20,`

  `),d(21,b2,10,9,"div",7),t(22,`

  `),d(23,S2,10,9,"div",7),t(24,`

  `),i(25,"div",3),t(26,`
    `),i(27,"span",4),t(28),s(29,"translate"),a(),t(30,`
    `),i(31,"span",5),t(32),s(33,"dateFormat"),a(),t(34,`
  `),a(),t(35,`

  `),i(36,"div",3),t(37,`
    `),i(38,"span",4),t(39),s(40,"translate"),a(),t(41,`
    `),i(42,"span",5),t(43),s(44,"dateFormat"),a(),t(45,`
  `),a(),t(46,`

  `),d(47,y2,11,4,"div",7),t(48,`

  `),d(49,R2,51,6,"ng-container",8),t(50,`

  `),i(51,"h3",9),t(52),s(53,"translate"),a(),t(54,`

  `),g(55,"mat-divider",3),t(56,`
  `),i(57,"div",3),t(58,`
    `),i(59,"span",4),t(60),s(61,"translate"),a(),t(62,`
    `),i(63,"span",5),t(64),s(65,"currency"),i(66,"span",10),t(67),a(),t(68,`
    `),a(),t(69,`
  `),a(),t(70,`

  `),i(71,"div",3),t(72,`
    `),i(73,"span",4),t(74),s(75,"translate"),a(),t(76,`
    `),i(77,"span",5),t(78),s(79,"find"),a(),t(80,`
  `),a(),t(81,`

  `),i(82,"div",3),t(83,`
    `),i(84,"span",4),t(85),s(86,"translate"),a(),t(87,`
    `),i(88,"span",5),t(89),a(),t(90,`
  `),a(),t(91,`

  `),i(92,"div",3),t(93,`
    `),i(94,"span",4),t(95),s(96,"translate"),a(),t(97,`
    `),i(98,"span",5),t(99),s(100,"find"),s(101,"find"),s(102,"find"),a(),t(103,`
  `),a(),t(104,`

  `),d(105,F2,10,6,"div",7),t(106,`

  `),d(107,B2,10,6,"div",7),t(108,`

  `),d(109,k2,10,6,"div",7),t(110,`

  `),d(111,N2,9,5,"div",7),t(112,`

  `),d(113,V2,9,4,"div",7),t(114,`

  `),d(115,j2,9,4,"div",7),t(116,`

  `),i(117,"div",3),t(118,`
    `),i(119,"span",4),t(120),s(121,"translate"),a(),t(122,`
    `),i(123,"span",5),t(124),s(125,"find"),a(),t(126,`
  `),a(),t(127,`

  `),i(128,"div",3),t(129,`
    `),i(130,"span",4),t(131),s(132,"translate"),a(),t(133,`
    `),i(134,"span",5),t(135),s(136,"find"),a(),t(137,`
  `),a(),t(138,`

  `),d(139,q2,9,4,"div",7),t(140,`

  `),d(141,z2,9,4,"div",7),t(142,`

  `),d(143,H2,9,4,"div",7),t(144,`

  `),i(145,"div",3),t(146,`
    `),i(147,"span",4),t(148),s(149,"translate"),a(),t(150,`
    `),i(151,"span",5),t(152),s(153,"find"),a(),t(154,`
  `),a(),t(155,`

  `),i(156,"div",3),t(157,`
    `),i(158,"span",4),t(159),s(160,"translate"),a(),t(161,`
    `),i(162,"span",5),t(163),s(164,"formatNumber"),a(),t(165,`
  `),a(),t(166,`

  `),i(167,"div",3),t(168,`
    `),i(169,"span",4),t(170),s(171,"translate"),a(),t(172,`
    `),i(173,"span",5),t(174),s(175,"formatNumber"),a(),t(176,`
  `),a(),t(177,`

  `),i(178,"h3",9),t(179),s(180,"translate"),a(),t(181,`

  `),g(182,"mat-divider",3),t(183,`
  `),d(184,G2,9,4,"div",7),t(185,`

  `),d(186,U2,9,4,"div",7),t(187,`

  `),d(188,$2,9,4,"div",7),t(189,`

  `),i(190,"div",3),t(191,`
    `),i(192,"span",4),t(193),s(194,"translate"),a(),t(195,`
    `),i(196,"span",5),t(197),s(198,"yesNo"),a(),t(199,`
  `),a(),t(200,`

  `),d(201,W2,9,4,"div",7),t(202,`

  `),i(203,"div",3),t(204,`
    `),i(205,"span",4),t(206),s(207,"translate"),a(),t(208,`
    `),i(209,"span",5),t(210),s(211,"yesNo"),a(),t(212,`
  `),a(),t(213,`

  `),d(214,Q2,9,4,"div",7),t(215,`

  `),d(216,pC,50,6,"div",11),t(217,`

  `),d(218,bC,43,6,"div",12),t(219,`
`),a(),t(220,`

`),i(221,"div",13),t(222,`
  `),i(223,"button",14),t(224,`
    `),g(225,"fa-icon",15),t(226),s(227,"translate"),a(),t(228,`
  `),i(229,"button",16),t(230),s(231,"translate"),a(),t(232,`
  `),i(233,"button",17),T("click",function(){return l.submitEvent.emit()}),t(234),s(235,"translate"),a(),t(236,`
`),a(),t(237,`
`)),m&2&&(o(3),x(p(4,63,"labels.heading.Details")),o(6),f("",p(10,65,"labels.inputs.Product"),":"),o(5),Ba("textValue",`
      `,vt(15,67,l.loansAccount.productId,l.loansAccountTemplate.productOptions,"id","name"),""),c("chars",60),o(5),c("ngIf",l.loansAccount.loanOfficerId),o(2),c("ngIf",l.loansAccount.loanPurposeId),o(2),c("ngIf",l.loansAccount.fundId),o(5),f("",p(29,72,"labels.inputs.Submitted on"),":"),o(4),x(p(33,74,l.loansAccount.submittedOnDate)),o(7),f("",p(40,76,"labels.inputs.Disbursement on"),":"),o(4),x(p(44,78,l.loansAccount.expectedDisbursementDate)),o(4),c("ngIf",l.loansAccount.externalId),o(2),c("ngIf",l.activeClientMembers),o(3),x(p(53,80,"labels.heading.Terms")),o(8),f("",p(61,82,"labels.inputs.Principal"),":"),o(4),f(`
      `,vt(65,84,l.loansAccount.principalAmount,l.loansAccountProductTemplate.currency.code,"symbol-narrow","1.2-2"),`
      `),o(3),x(l.loansAccountProductTemplate.currency.code),o(7),f("",p(75,89,"labels.inputs.Loan Term"),":"),o(4),V("",l.loansAccount.loanTermFrequency,`
      `,vt(79,91,l.loansAccount.loanTermFrequencyType,l.loansAccountProductTemplate.termFrequencyTypeOptions,"id","name"),""),o(7),f("",p(86,96,"labels.inputs.Number of repayments"),":"),o(4),x(l.loansAccount.numberOfRepayments),o(6),f("",p(96,98,"labels.inputs.Repaid every"),":"),o(4),gn("",l.loansAccount.repaymentEvery,`
      `,vt(100,100,l.loansAccount.repaymentFrequencyType,l.loansAccountProductTemplate.termFrequencyTypeOptions,"id","name"),`
      `,vt(101,105,l.loansAccount.repaymentFrequencyNthDayType,l.loansAccountProductTemplate.repaymentFrequencyNthDayTypeOptions,"id","name"),`
      `,vt(102,110,l.loansAccount.repaymentFrequencyDayOfWeekType,l.loansAccountProductTemplate.repaymentFrequencyDaysOfWeekTypeOptions,"id","name"),""),o(6),c("ngIf",l.productEnableDownPayment),o(2),c("ngIf",l.loansAccount.repaymentsStartingFromDate),o(2),c("ngIf",l.loansAccount.interestChargedFromDate),o(2),c("ngIf",l.loansAccount.interestRatePerPeriod),o(2),c("ngIf",l.loansAccount.interestType),o(2),c("ngIf",l.loansAccount.isEqualAmortization),o(5),x(p(121,115,"labels.inputs.Amortization")),o(4),x(vt(125,117,l.loansAccount.amortizationType,l.loansAccountProductTemplate.amortizationTypeOptions,"id","value")),o(7),f("",p(132,122,"labels.inputs.Interest calculation period"),": "),o(4),x(vt(136,124,l.loansAccount.interestCalculationPeriodType,l.loansAccountProductTemplate.interestCalculationPeriodTypeOptions,"id","value")),o(4),c("ngIf",l.loansAccount.allowPartialPeriodInterestCalculation),o(2),c("ngIf",l.loansAccount.inArrearsTolerance),o(2),c("ngIf",l.loansAccount.graceOnInterestCharged),o(5),f("",p(149,129,"labels.inputs.Repayment strategy"),": "),o(4),x(vt(153,131,l.loansAccount.transactionProcessingStrategyCode,l.loansAccountProductTemplate.transactionProcessingStrategyOptions,"code","name")),o(7),f(" ",p(160,136,"labels.inputs.Installment Amount")," "),o(4),f(" ",p(164,138,l.loansAccount.fixedEmiAmount)," "),o(7),f(" ",p(171,140,"labels.inputs.Balloon Repayment Amount")," "),o(4),f(" ",p(175,142,l.loansAccount.balloonRepaymentAmount)," "),o(5),x(p(180,144,"labels.heading.Moratorium")),o(5),c("ngIf",l.loansAccount.graceOnPrincipalPayment),o(2),c("ngIf",l.loansAccount.graceOnInterestPayment),o(2),c("ngIf",l.loansAccount.graceOnArrearsAgeing),o(5),f(" ",p(194,146,"labels.inputs.Enable installment level Delinquency")," "),o(4),f(" ",p(198,148,l.loansAccount.enableInstallmentLevelDelinquency)," "),o(4),c("ngIf",l.loansAccount.isTopup),o(5),f("",p(207,150,"labels.inputs.Recalculate Interest"),": "),o(4),x(p(211,152,l.loansAccountProductTemplate==null?null:l.loansAccountProductTemplate.isInterestRecalculationEnabled)),o(4),c("ngIf",l.loansAccountProductTemplate==null?null:l.loansAccountProductTemplate.daysInMonthType),o(2),c("ngIf",l.loansAccount.charges.length),o(2),c("ngIf",l.loansAccountProductTemplate.overdueCharges.length),o(8),f(`
    `,p(227,154,"labels.buttons.Previous"),`
  `),o(3),c("routerLink",N(160,h2)),o(),f(`
    `,p(231,156,"labels.buttons.Cancel"),`
  `),o(4),f(`
    `,p(235,158,"labels.buttons.Submit"),`
  `))},dependencies:[A,k,ye,w,H,j,Lt,L,jn,Ie,Ve,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht,Oe,Ot,Nn,Wt,pn],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0;font-weight:500}span[_ngcontent-%COMP%]{margin:.5em 0}mat-divider[_ngcontent-%COMP%]{margin:0 0 .5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"]})}}return e})();var SC=["dtloan"];function yC(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",21),t(2,`
    `))}function DC(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",21),t(2,`
    `))}function TC(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",22),t(2,`
    `))}function PC(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",23),t(2,`
    `))}function MC(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",24),t(2,`
    `))}function OC(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.DETAILS"))}function IC(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.TERMS"))}function EC(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.CHARGES"))}function AC(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.REPAYMENT SCHEDULE"))}function wC(e,r){if(e&1&&(i(0,"mat-step",25),t(1,`
      `),d(2,AC,2,3,"ng-template",14),t(3,`

      `),i(4,"mifosx-loans-account-schedule-step",26,4),t(6,`
      `),a(),t(7,`
    `),a()),e&2){let n=C();o(4),c("loansAccountTemplate",n.loansAccountTemplate)("loansAccountProductTemplate",n.loansAccountProductTemplate)("loansAccount",n.loansAccount)("currencyCode",n.currencyCode)}}function LC(e,r){if(e&1&&t(0),e&2){let n=C().$implicit;x(n.registeredTableName)}}function RC(e,r){if(e&1&&(i(0,"mat-step"),t(1,`
      `),d(2,LC,1,1,"ng-template",14),t(3,`

      `),g(4,"mifosx-loans-account-datatable-step",27,5),t(6,`
    `),a()),e&2){let n=r.$implicit;o(4),c("datatableData",n)}}function FC(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.PREVIEW"))}function BC(e,r){if(e&1){let n=O();i(0,"mat-step",28),t(1,`
      `),d(2,FC,2,3,"ng-template",14),t(3,`

      `),i(4,"mifosx-loans-account-preview-step",29),T("submitEvent",function(){P(n);let l=C();return M(l.submit())}),t(5,`
      `),a(),t(6,`
    `),a()}if(e&2){let n=C();o(4),c("loansAccountTemplate",n.loansAccountTemplate)("loansAccountProductTemplate",n.loansAccountProductTemplate)("loansAccount",n.loansAccount)}}var Vi=(()=>{class e{constructor(n,m,l,u,_){this.route=n,this.router=m,this.loansService=l,this.settingsService=u,this.clientService=_,this.loansAccountProductTemplate=null,this.datatables=[],this.route.data.subscribe(h=>{this.loansAccountTemplate=h.loansAccountTemplate})}setTemplate(n){this.loansAccountProductTemplate=n,this.currencyCode=this.loansAccountProductTemplate.currency.code;let m=this.loansAccountTemplate.clientId;m?this.clientService.getCollateralTemplate(m).subscribe(h=>{this.collateralOptions=h}):console.error("No collateral data requested from Fineract, collateral might misbehave");let l=this.loansAccountTemplate.clientId?this.loansAccountTemplate.clientId:this.loansAccountTemplate.group.id,u=!this.loansAccountTemplate.clientId,_=this.loansAccountProductTemplate.loanProductId;this.loansService.getLoansAccountTemplateResource(l,u,_).subscribe(h=>{this.multiDisburseLoan=h.multiDisburseLoan}),this.setDatatables()}setDatatables(){this.datatables=[],this.loansAccountProductTemplate.datatables&&this.loansAccountProductTemplate.datatables.forEach(n=>{this.datatables.push(n)})}get loansAccountDetailsForm(){return this.loansAccountDetailsStep.loansAccountDetailsForm}get loansAccountTermsForm(){return this.loansAccountTermsStep.loansAccountTermsForm}get loansAccountFormValid(){return this.loansAccountDetailsForm.valid&&this.loansAccountTermsForm.valid}get loansSavingsAccountLinked(){return this.loansAccountDetailsStep.loansAccountDetailsForm.get("linkAccountId").value}get loanPrincipal(){return this.loansAccountTermsStep.loansAccountTermsForm.value.principal}get loansAccount(){return W(W(W(W(W({},this.loansAccountDetailsStep.loansAccountDetails),this.loansAccountTermsStep.loansAccountTerms),this.loansAccountChargesStep.loansAccountCharges),this.loansAccountTermsStep.loanCollateral),this.loansAccountTermsStep.disbursementData)}submit(){let n=this.settingsService.language.code,m=this.settingsService.dateFormat,l=this.loansService.buildLoanRequestPayload(this.loansAccount,this.loansAccountTemplate,this.loansAccountProductTemplate.calendarOptions,n,m);if(this.loansAccountProductTemplate.datatables&&this.loansAccountProductTemplate.datatables.length>0){let u=[];this.loanDatatables.forEach(_=>{u.push(_.payload)}),l.datatables=u}this.loansService.createLoansAccount(l).subscribe(u=>{this.router.navigate(["../",u.resourceId,"general"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(R),v(G),v(cn))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-create-loans-account"]],viewQuery:function(m,l){if(m&1&&(ee(Re,7),ee(Fe,7),ee(Be,7),ee(SC,5)),m&2){let u;ne(u=ie())&&(l.loansAccountDetailsStep=u.first),ne(u=ie())&&(l.loansAccountTermsStep=u.first),ne(u=ie())&&(l.loansAccountChargesStep=u.first),ne(u=ie())&&(l.loanDatatables=u)}},decls:50,vars:15,consts:[["loansAccountStepper",""],["loansAccountDetailsForm",""],["loanAccountTerms",""],["loanAccountCharges",""],["loanAccountSchedule",""],["dtloan",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"loansAccountProductTemplate","loansAccountTemplate"],[3,"loansAccountProductTemplate","loansAccountTemplate","collateralOptions","loansAccountFormValid","loanPrincipal"],[3,"loansAccountProductTemplate","loansAccountTemplate","loansAccountFormValid","loansSavingsAccountLinked"],["state","repayment","completed","",4,"ngIf"],[4,"ngFor","ngForOf"],["state","preview","completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["state","repayment","completed",""],[3,"loansAccountTemplate","loansAccountProductTemplate","loansAccount","currencyCode"],[3,"datatableData"],["state","preview","completed",""],[3,"submitEvent","loansAccountTemplate","loansAccountProductTemplate","loansAccount"]],template:function(m,l){if(m&1){let u=O();i(0,"div",6),t(1,`
  `),i(2,"mat-horizontal-stepper",7,0),t(4,`
    `),d(5,yC,3,0,"ng-template",8),t(6,`

    `),d(7,DC,3,0,"ng-template",9),t(8,`

    `),d(9,TC,3,0,"ng-template",10),t(10,`

    `),d(11,PC,3,0,"ng-template",11),t(12,`

    `),d(13,MC,3,0,"ng-template",12),t(14,`

    `),i(15,"mat-step",13),t(16,`
      `),d(17,OC,2,3,"ng-template",14),t(18,`

      `),i(19,"mifosx-loans-account-details-step",15,1),T("loansAccountProductTemplate",function(h){return P(u),M(l.setTemplate(h))}),t(21,`
      `),a(),t(22,`
    `),a(),t(23,`

    `),i(24,"mat-step",13),t(25,`
      `),d(26,IC,2,3,"ng-template",14),t(27,`

      `),i(28,"mifosx-loans-account-terms-step",16,2),t(30,`
      `),a(),t(31,`
    `),a(),t(32,`

    `),i(33,"mat-step"),t(34,`
      `),d(35,EC,2,3,"ng-template",14),t(36,`

      `),i(37,"mifosx-loans-account-charges-step",17,3),t(39,`
      `),a(),t(40,`
    `),a(),t(41,`

    `),d(42,wC,8,4,"mat-step",18),t(43,`

    `),d(44,RC,7,1,"mat-step",19),t(45,`

    `),d(46,BC,7,3,"mat-step",20),t(47,`
  `),a(),t(48,`
`),a(),t(49,`
`)}if(m&2){let u=F(20);o(15),c("stepControl",u),o(4),c("loansAccountTemplate",l.loansAccountTemplate),o(5),c("stepControl",l.loansAccountTermsForm),o(4),c("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccountTemplate",l.loansAccountTemplate)("collateralOptions",l.collateralOptions)("loansAccountFormValid",l.loansAccountFormValid)("loanPrincipal",l.loanPrincipal),o(9),c("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccountTemplate",l.loansAccountTemplate)("loansAccountFormValid",l.loansAccountFormValid)("loansSavingsAccountLinked",l.loansSavingsAccountLinked),o(5),c("ngIf",l.loansAccountFormValid),o(2),c("ngForOf",l.datatables),o(2),c("ngIf",l.loansAccountFormValid)}},dependencies:[A,It,k,w,L,sn,ln,Ot,mn,rn,Re,Fe,Be,We,xn,Qe],encapsulation:2})}}return e})();var ji=(()=>{class e{constructor(n,m,l){this.route=n,this.loansService=m,this.settingsService=l,this.entityType="loans",this.entityId=this.route.parent.snapshot.params.loanId,this.route.data.subscribe(u=>{this.getLoanDocumentsData(u.loanDocuments)})}ngOnInit(){this.route.parent.params.subscribe(n=>{this.entityId=n.loanId})}getLoanDocumentsData(n){n.forEach(m=>{m.docUrl=this.settingsService.serverUrl+"/loans/"+m.parentEntityId+"/documents/"+m.id+"/attachment?tenantIdentifier="+Ha.fineractPlatformTenantId,m.fileName&&(m.fileName.toLowerCase().indexOf(".jpg")!==-1||m.fileName.toLowerCase().indexOf(".jpeg")!==-1||m.fileName.toLowerCase().indexOf(".png")!==-1)&&(m.fileIsImage=!0),m.type&&m.type.toLowerCase().indexOf("image")!==-1&&(m.fileIsImage=!0)}),this.entityDocuments=n}downloadDocument(n){this.loansService.downloadLoanDocument(this.entityId,n).subscribe(m=>{let l=window.URL.createObjectURL(m);window.open(l)})}uploadDocument(n){return this.loansService.loadLoanDocument(this.entityId,n)}deleteDocument(n){this.loansService.deleteLoanDocument(this.entityId,n).subscribe(m=>{})}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(R),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-documents-tab"]],decls:3,vars:6,consts:[[3,"entityType","entityId","entityDocuments","callbackUpload","callbackDownload","callbackDelete"]],template:function(m,l){m&1&&(i(0,"mifosx-entity-documents-tab",0),t(1,`
`),a(),t(2,`
`)),m&2&&c("entityType",l.entityType)("entityId",l.entityId)("entityDocuments",l.entityDocuments)("callbackUpload",l.uploadDocument)("callbackDownload",l.downloadDocument)("callbackDelete",l.deleteDocument)},dependencies:[A,w,po],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:3%}table[_ngcontent-%COMP%]   .document-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}"]})}}return e})();var kC=["instructionsTable"];function NC(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client")))}function VC(e,r){if(e&1&&(i(0,"td",17),t(1),a()),e&2){let n=r.$implicit;o(),V(`
          `,n.fromClient.displayName,"-",n.fromClient.id,`
        `)}}function jC(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.From Account")))}function qC(e,r){if(e&1&&(i(0,"td",17),t(1),a()),e&2){let n=r.$implicit;o(),V(`
          `,n.fromAccount.accountNo," (",n.fromAccountType.value,`)
        `)}}function zC(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Beneficiary")))}function HC(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C().$implicit;o(),f(`
            `,n.toClient.displayName,`
          `)}}function GC(e,r){e&1&&(i(0,"span"),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Own Account")))}function UC(e,r){if(e&1&&(i(0,"td",17),t(1,`
          `),d(2,HC,2,1,"span",18),t(3,`
          `),d(4,GC,3,3,"span",18),t(5,`
        `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.fromClient.id!==n.toClient.id),o(2),c("ngIf",n.fromClient.id===n.toClient.id)}}function $C(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.To Account")))}function WC(e,r){if(e&1&&(i(0,"td",17),t(1),a()),e&2){let n=r.$implicit;o(),V(`
          `,n.toAccount.accountNo," (",n.toAccountType.value,`)
        `)}}function QC(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function YC(e,r){if(e&1&&(i(0,"td",17),t(1),a()),e&2){let n=r.$implicit;o(),V("",n.instructionType.value,"/",n.amount,"")}}function KC(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Validity")))}function JC(e,r){if(e&1&&(i(0,"td",17),t(1),s(2,"dateFormat"),s(3,"dateFormat"),a()),e&2){let n=r.$implicit;o(),V(`
          `,p(2,2,n.validFrom)," to ",p(3,4,n.validTill),`
        `)}}function ZC(e,r){e&1&&(i(0,"th",16),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function XC(e,r){e&1&&(i(0,"button",20),s(1,"translate"),t(2,`
              `),g(3,"i",21),t(4,`
            `),a()),e&2&&Q("matTooltip",p(1,1,"tooltips.Edit Standing Instruction"))}function th(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,XC,5,3,"button",19),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","UPDATE_STANDINGINSTRUCTION"))}function eh(e,r){if(e&1){let n=O();i(0,"button",23),s(1,"translate"),T("click",function(){P(n);let l=C(2).$implicit,u=C();return M(u.deleteStandingInstruction(l.id))}),t(2,`
              `),g(3,"i",24),t(4,`
            `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Delete Standing Instruction"))}function nh(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,eh,5,3,"button",22),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","DELETE_STANDINGINSTRUCTION"))}function ih(e,r){e&1&&(i(0,"button",20),s(1,"translate"),t(2,`
            `),g(3,"i",25),t(4,`
          `),a()),e&2&&Q("matTooltip",p(1,1,"tooltips.View Standing Instruction"))}function ah(e,r){if(e&1&&(i(0,"td",17),t(1,`
          `),d(2,th,4,1,"span",18),t(3,`
          `),d(4,nh,4,1,"span",18),t(5,`
          `),d(6,ih,5,3,"button",19),t(7,`
        `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.status.value!=="Deleted"),o(2),c("ngIf",n.status.value!=="Deleted"),o(2),c("mifosxHasPermission","READ_STANDINGINSTRUCTION")}}function oh(e,r){e&1&&g(0,"tr",26)}function rh(e,r){e&1&&g(0,"tr",27)}var qi=(()=>{class e{constructor(n,m,l,u,_){this.route=n,this.loansService=m,this.dialog=l,this.accountTransfersService=u,this.settingsService=_,this.dataSource=new se,this.displayedColumns=["client","fromAccount","beneficiary","toAccount","amount","validity","actions"],this.route.parent.data.subscribe(h=>{this.loanDetailsData=h.loanDetailsData})}ngOnInit(){this.getStandingInstructions()}getStandingInstructions(){let n=this.loanDetailsData.clientId,m=this.loanDetailsData.clientName,l=this.loanDetailsData.id,u=this.settingsService.language.code,_=this.settingsService.dateFormat;this.loansService.getStandingInstructions(n,m,l,u,_).subscribe(h=>{this.instructionsData=h.pageItems,this.dataSource.data=this.instructionsData,this.instructionTableRef.renderRows()})}deleteStandingInstruction(n){this.dialog.open(xe,{data:{deleteContext:`standing instruction id: ${n}`}}).afterClosed().subscribe(l=>{l.delete&&this.accountTransfersService.deleteStandingInstrucions(n).subscribe(()=>{})})}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(R),v(Zt),v(ho),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-standing-instructions-tab"]],viewQuery:function(m,l){if(m&1&&ee(kC,7),m&2){let u;ne(u=ie())&&(l.instructionTableRef=u.first)}},decls:70,vars:6,consts:[["instructionsTable",""],[1,"tab-container","mat-typography"],[1,"m-b-10"],[1,"mat-elevation-z1","m-b-25"],["mat-table","",3,"dataSource"],["matColumnDef","client"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fromAccount"],["matColumnDef","beneficiary"],["matColumnDef","toAccount"],["matColumnDef","amount"],["matColumnDef","validity"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["class","account-action-button","mat-raised-button","","color","primary",3,"matTooltip",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",1,"account-action-button",3,"matTooltip"],[1,"fa","fa-edit"],["class","account-action-button","mat-raised-button","","color","warn",3,"matTooltip","click",4,"mifosxHasPermission"],["mat-raised-button","","color","warn",1,"account-action-button",3,"click","matTooltip"],[1,"fa","fa-times"],[1,"fa","fa-eye"],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",1),t(1,`
  `),i(2,"div",2),t(3,`
    `),i(4,"h3"),t(5),s(6,"translate"),a(),t(7,`
  `),a(),t(8,`

  `),i(9,"div",3),t(10,`
    `),i(11,"table",4,0),t(13,`
      `),b(14,5),t(15,`
        `),d(16,NC,3,3,"th",6),t(17,`
        `),d(18,VC,2,2,"td",7),t(19,`
      `),S(),t(20,`

      `),b(21,8),t(22,`
        `),d(23,jC,3,3,"th",6),t(24,`
        `),d(25,qC,2,2,"td",7),t(26,`
      `),S(),t(27,`

      `),b(28,9),t(29,`
        `),d(30,zC,3,3,"th",6),t(31,`
        `),d(32,UC,6,2,"td",7),t(33,`
      `),S(),t(34,`

      `),b(35,10),t(36,`
        `),d(37,$C,3,3,"th",6),t(38,`
        `),d(39,WC,2,2,"td",7),t(40,`
      `),S(),t(41,`

      `),b(42,11),t(43,`
        `),d(44,QC,3,3,"th",6),t(45,`
        `),d(46,YC,2,2,"td",7),t(47,`
      `),S(),t(48,`

      `),b(49,12),t(50,`
        `),d(51,KC,3,3,"th",6),t(52,`
        `),d(53,JC,4,6,"td",7),t(54,`
      `),S(),t(55,`

      `),b(56,13),t(57,`
        `),d(58,ZC,3,3,"th",6),t(59,`
        `),d(60,ah,8,3,"td",7),t(61,`
      `),S(),t(62,`

      `),d(63,oh,1,0,"tr",14),t(64,`
      `),d(65,rh,1,0,"tr",15),t(66,`
    `),a(),t(67,`
  `),a(),t(68,`
`),a(),t(69,`
`)),m&2&&(o(5),x(p(6,4,"labels.heading.All Standing Instructions")),o(6),c("dataSource",l.dataSource),o(52),c("matHeaderRowDef",l.displayedColumns),o(2),c("matRowDefColumns",l.displayedColumns))},dependencies:[A,k,w,j,Lt,ot,L,Rt,kt,Bt,Nt,Ft,Vt,me,jt,zt,qt,Ht],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{margin-left:auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}"]})}}return e})();function lh(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",15),t(2,`
    `))}function mh(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",15),t(2,`
    `))}function sh(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",16),t(2,`
    `))}function ph(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",17),t(2,`
    `))}function ch(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",18),t(2,`
    `))}function dh(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.DETAILS"))}function uh(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.TERMS"))}function xh(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.CHARGES"))}function fh(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.REPAYMENT SCHEDULE"))}function gh(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.PREVIEW"))}function _h(e,r){if(e&1){let n=O();i(0,"mat-step",19),t(1,`
      `),d(2,gh,2,3,"ng-template",9),t(3,`

      `),i(4,"mifosx-loans-account-preview-step",20),T("submitEvent",function(){P(n);let l=C();return M(l.submit())}),t(5,`
      `),a(),t(6,`
    `),a()}if(e&2){let n=C();o(4),c("loansAccountTemplate",n.loansAccountAndTemplate)("loansAccountProductTemplate",n.loansAccountProductTemplate)("loansAccount",n.loansAccount)}}var Sn=(()=>{class e{constructor(n,m,l,u,_){this.route=n,this.router=m,this.dateUtils=l,this.loansService=u,this.settingsService=_,this.route.data.subscribe(h=>{this.loansAccountAndTemplate=h.loansAccountAndTemplate}),this.loanId=this.route.snapshot.params.loanId}setTemplate(n){this.loansAccountProductTemplate=n,this.currencyCode=this.loansAccountProductTemplate.currency.code,this.loansAccountProductTemplate.loanProductId&&this.loansService.getLoansCollateralTemplateResource(this.loansAccountProductTemplate.loanProductId).subscribe(m=>{this.collateralOptions=m.loanCollateralOptions})}get loansAccountDetailsForm(){return this.loansAccountDetailsStep.loansAccountDetailsForm}get loansAccountTermsForm(){return this.loansAccountTermsStep.loansAccountTermsForm}get loansAccountFormValidAndNotPristine(){return this.loansAccountDetailsForm.valid&&this.loansAccountTermsForm.valid&&(!this.loansAccountDetailsForm.pristine||!this.loansAccountTermsForm.pristine||!this.loansAccountTermsStep.pristine||!this.loansAccountChargesStep.pristine)}get loansAccount(){return W(W(W(W(W({},this.loansAccountDetailsStep.loansAccountDetails),this.loansAccountTermsStep.loansAccountTerms),this.loansAccountChargesStep.loansAccountCharges),this.loansAccountTermsStep.loanCollateral),this.loansAccountTermsStep.disbursementData)}submit(){let n=this.settingsService.language.code,m=this.settingsService.dateFormat,u=ft(W({},this.loansAccount),{clientId:this.loansAccountAndTemplate.clientId,charges:this.loansAccount.charges.map(_=>({chargeId:_.id,amount:_.amount,dueDate:_.dueDate&&this.dateUtils.formatDate(_.dueDate,m)})),collateral:this.loansAccount.collateral.map(_=>({type:_.type,value:_.value,description:_.description})),disbursementData:this.loansAccount.disbursementData.map(_=>({expectedDisbursementDate:this.dateUtils.formatDate(_.expectedDisbursementDate,m),principal:_.principal})),interestChargedFromDate:this.dateUtils.formatDate(this.loansAccount.interestChargedFromDate,m),repaymentsStartingFromDate:this.dateUtils.formatDate(this.loansAccount.repaymentsStartingFromDate,m),submittedOnDate:this.dateUtils.formatDate(this.loansAccount.submittedOnDate,m),expectedDisbursementDate:this.dateUtils.formatDate(this.loansAccount.expectedDisbursementDate,m),dateFormat:m,locale:n,loanType:"individual"});delete u.isValid,u.syncRepaymentsWithMeeting&&(u.calendarId=this.loansAccountProductTemplate.calendarOptions[0].id,delete u.syncRepaymentsWithMeeting),u.recalculationRestFrequencyDate&&(u.recalculationRestFrequencyDate=this.dateUtils.formatDate(this.loansAccount.recalculationRestFrequencyDate,m)),u.interestCalculationPeriodType===0&&(u.allowPartialPeriodInterestCalculation=!1),(!u.isLoanProductLinkedToFloatingRate||u.isLoanProductLinkedToFloatingRate===!1)&&delete u.isFloatingInterestRate,u.principal=u.principalAmount,delete u.principalAmount,delete u.multiDisburseLoan,u.allowPartialPeriodInterestCalcualtion=u.allowPartialPeriodInterestCalculation,delete u.allowPartialPeriodInterestCalculation,this.loansService.updateLoansAccount(this.loanId,u).subscribe(_=>{this.router.navigate(["../"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(Y),v(R),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-edit-loans-account"]],viewQuery:function(m,l){if(m&1&&(ee(Re,7),ee(Fe,7),ee(Be,7)),m&2){let u;ne(u=ie())&&(l.loansAccountDetailsStep=u.first),ne(u=ie())&&(l.loansAccountTermsStep=u.first),ne(u=ie())&&(l.loansAccountChargesStep=u.first)}},decls:51,vars:14,consts:[["loansAccountStepper",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"loansAccountProductTemplate","loansAccountTemplate"],[3,"loansAccountProductTemplate","loansAccountTemplate","collateralOptions"],[3,"loansAccountProductTemplate","loansAccountTemplate","loansAccountFormValid"],[3,"loansAccountTemplate","loansAccountProductTemplate","loansAccount","currencyCode"],["state","preview","completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["state","preview","completed",""],[3,"submitEvent","loansAccountTemplate","loansAccountProductTemplate","loansAccount"]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-horizontal-stepper",2,0),t(4,`
    `),d(5,lh,3,0,"ng-template",3),t(6,`

    `),d(7,mh,3,0,"ng-template",4),t(8,`

    `),d(9,sh,3,0,"ng-template",5),t(10,`

    `),d(11,ph,3,0,"ng-template",6),t(12,`

    `),d(13,ch,3,0,"ng-template",7),t(14,`

    `),i(15,"mat-step",8),t(16,`
      `),d(17,dh,2,3,"ng-template",9),t(18,`

      `),i(19,"mifosx-loans-account-details-step",10),T("loansAccountProductTemplate",function(h){return P(u),M(l.setTemplate(h))}),t(20,`
      `),a(),t(21,`
    `),a(),t(22,`

    `),i(23,"mat-step",8),t(24,`
      `),d(25,uh,2,3,"ng-template",9),t(26,`

      `),i(27,"mifosx-loans-account-terms-step",11),t(28,`
      `),a(),t(29,`
    `),a(),t(30,`

    `),i(31,"mat-step"),t(32,`
      `),d(33,xh,2,3,"ng-template",9),t(34,`

      `),i(35,"mifosx-loans-account-charges-step",12),t(36,`
      `),a(),t(37,`
    `),a(),t(38,`

    `),i(39,"mat-step"),t(40,`
      `),d(41,fh,2,3,"ng-template",9),t(42,`

      `),i(43,"mifosx-loans-account-schedule-step",13),t(44,`
      `),a(),t(45,`
    `),a(),t(46,`

    `),d(47,_h,7,3,"mat-step",14),t(48,`
  `),a(),t(49,`
`),a(),t(50,`
`)}m&2&&(o(15),c("stepControl",l.loansAccountDetailsForm),o(4),c("loansAccountTemplate",l.loansAccountAndTemplate),o(4),c("stepControl",l.loansAccountTermsForm),o(4),c("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccountTemplate",l.loansAccountAndTemplate)("collateralOptions",l.collateralOptions),o(8),c("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccountTemplate",l.loansAccountAndTemplate)("loansAccountFormValid",l.loansAccountFormValidAndNotPristine),o(8),c("loansAccountTemplate",l.loansAccountAndTemplate)("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccount",l.loansAccount)("currencyCode",l.currencyCode),o(4),c("ngIf",l.loansAccountFormValidAndNotPristine))},dependencies:[A,k,w,L,sn,ln,Ot,mn,rn,Re,Fe,Be,We,Qe],encapsulation:2})}}return e})();var Ch=()=>["../"];function hh(e,r){if(e&1){let n=O();i(0,"button",12),T("click",function(){P(n);let l=C(2);return M(l.editCharge())}),t(1,`
    `),g(2,"fa-icon",13),t(3),s(4,"translate"),a()}e&2&&(o(3),f(`
    `,p(4,1,"labels.buttons.Edit"),`
  `))}function vh(e,r){if(e&1){let n=O();i(0,"button",14),T("click",function(){P(n);let l=C(3);return M(l.payCharge())}),t(1,`
      `),g(2,"fa-icon",15),t(3),s(4,"translate"),a()}e&2&&(o(3),f(`
      `,p(4,1,"labels.buttons.Pay"),`
    `))}function bh(e,r){e&1&&(i(0,"span"),t(1,`
    `),d(2,vh,5,3,"button",11),t(3,`
  `),a()),e&2&&(o(2),c("mifosxHasPermission","PAY_SAVINGSACCOUNTCHARGE"))}function Sh(e,r){if(e&1){let n=O();i(0,"button",12),T("click",function(){P(n);let l=C(3);return M(l.waiveCharge())}),t(1,`
      `),g(2,"fa-icon",13),t(3),s(4,"translate"),a()}e&2&&(o(3),f(`
      `,p(4,1,"labels.buttons.Waive"),`
    `))}function yh(e,r){e&1&&(i(0,"span"),t(1,`
    `),d(2,Sh,5,3,"button",9),t(3,`
  `),a()),e&2&&(o(2),c("mifosxHasPermission","WAIVE_SAVINGSACCOUNTCHARGE"))}function Dh(e,r){if(e&1){let n=O();i(0,"button",14),T("click",function(){P(n);let l=C(2);return M(l.adjustmentCharge())}),t(1,`
      `),g(2,"fa-icon",16),t(3),s(4,"translate"),a()}e&2&&(o(3),f(`
      `,p(4,1,"labels.buttons.Adjustment"),`
    `))}function Th(e,r){if(e&1&&(i(0,"div",8),t(1,`
  `),d(2,hh,5,3,"button",9),t(3,`
  `),d(4,bh,4,1,"span",10),t(5,`
  `),d(6,yh,4,1,"span",10),t(7,`
  `),i(8,"span"),t(9,`
    `),d(10,Dh,5,3,"button",11),t(11,`
  `),a(),t(12,`
`),a()),e&2){let n=C();o(2),c("mifosxHasPermission","WAIVE_SAVINGSACCOUNTCHARGE"),o(2),c("ngIf",n.allowPayCharge),o(2),c("ngIf",n.allowWaive),o(4),c("mifosxHasPermission","ADJUSTMENT_LOANCHARGE")}}function Ph(e,r){if(e&1){let n=O();i(0,"button",12),T("click",function(){P(n);let l=C(2);return M(l.editCharge())}),t(1,`
    `),g(2,"fa-icon",18),t(3),s(4,"translate"),a()}e&2&&(o(3),f(`
    `,p(4,1,"labels.buttons.Edit"),`
  `))}function Mh(e,r){if(e&1){let n=O();i(0,"button",19),T("click",function(){P(n);let l=C(2);return M(l.deleteCharge())}),t(1,`
    `),g(2,"fa-icon",20),t(3),s(4,"translate"),a()}e&2&&(o(3),f(`
    `,p(4,1,"labels.buttons.Delete"),`
  `))}function Oh(e,r){e&1&&(i(0,"div",8),t(1,`
  `),d(2,Ph,5,3,"button",9),t(3,`
  `),d(4,Mh,5,3,"button",17),t(5,`
`),a()),e&2&&(o(2),c("mifosxHasPermission","UPDATE_SAVINGSACCOUNTCHARGE"),o(2),c("mifosxHasPermission","DELETE_SAVINGSACCOUNTCHARGE"))}var zi=(()=>{class e{constructor(n,m,l,u,_,h,y){this.loansService=n,this.route=m,this.dateUtils=l,this.router=u,this.translateService=_,this.dialog=h,this.settingsService=y,this.allowPayCharge=!0,this.allowWaive=!0,this.route.data.subscribe(D=>{this.chargeData=D.loansAccountCharge,this.allowPayCharge=this.chargeData.chargePayable&&!this.chargeData.paid,this.allowWaive=!this.chargeData.chargeTimeType.waived,this.loansAccountData=D.loanDetailsData})}payCharge(){let n=[new fe({controlName:"transactionDate",label:"Payment Date",value:"",type:"date",required:!0})],m={title:`Pay Charge ${this.chargeData.id}`,layout:{addButtonText:"Confirm"},formfields:n};this.dialog.open(ae,{data:m}).afterClosed().subscribe(u=>{if(u.data){let _=this.settingsService.language.code,h=this.settingsService.dateFormat,y=u.data.value.transactionDate,D={transactionDate:this.dateUtils.formatDate(y,h),dateFormat:h,locale:_};this.loansService.executeLoansAccountChargesCommand(this.chargeData.loanId,"pay",D,this.chargeData.id).subscribe(()=>{this.reload()})}})}waiveCharge(){this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Waive Charge"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want to waive charge with id:")` ${this.chargeData.id}`,type:"Basic"}}).afterClosed().subscribe(m=>{m.confirm&&this.loansService.executeLoansAccountChargesCommand(this.chargeData.loanId,"waive",{},this.chargeData.id).subscribe(()=>{this.reload()})})}editCharge(){let n=[new pe({controlName:"amount",label:"Amount",value:this.chargeData.amount||this.chargeData.amountOrPercentage,type:"number",required:!0}),new fe({controlName:"dueDate",label:"Due Date",value:new Date(this.chargeData.dueDate),type:"date",maxDate:this.settingsService.maxAllowedDate,required:!0})],m={title:"Edit Charge",layout:{addButtonText:"Confirm"},formfields:n};this.dialog.open(ae,{data:m}).afterClosed().subscribe(u=>{if(u.data){let _=this.settingsService.language.code,h=this.settingsService.dateFormat,y=this.dateUtils.formatDate(u.data.value.dueDate,h),I={amount:u.data.value.amount,dueDate:y,dateFormat:h,locale:_};this.loansService.editLoansAccountCharge(this.loansAccountData.id,I,this.chargeData.id).subscribe(()=>{this.reload()})}})}deleteCharge(){this.dialog.open(xe,{data:{deleteContext:`charge id:${this.chargeData.id}`}}).afterClosed().subscribe(m=>{m.delete&&this.loansService.deleteLoansAccountCharge(this.loansAccountData.id,this.chargeData.id).subscribe(()=>{this.reload()})})}loanChargeColor(){return this.chargeData.paid?"paid":"not-paid"}adjustmentCharge(){this.router.navigate(["adjustment"],{relativeTo:this.route})}reload(){let n=this.loansAccountData.clientId,m=this.router.url;this.router.navigateByUrl(`/clients/${n}/loans-accounts`,{skipLocationChange:!0}).then(()=>this.router.navigate([m]))}static{this.\u0275fac=function(m){return new(m||e)(v(R),v(B),v(Y),v($),v(ve),v(Zt),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-view-charge"]],decls:108,vars:64,consts:[["class","layout-row align-end gap-2percent layout-xs-column container m-b-20",4,"ngIf"],[1,"container"],[1,"layout-row-wrap"],[1,"flex-100",3,"ngClass"],[1,"flex-50","mat-body-strong"],[1,"flex-50"],[1,"layout-row","layout-align-center","gap-2percent","column-on-mobile"],["type","button","mat-raised-button","","color","primary",3,"routerLink"],[1,"layout-row","align-end","gap-2percent","layout-xs-column","container","m-b-20"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],[4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"],["icon","flag",1,"m-r-10"],["mat-raised-button","","color","accent",3,"click"],["icon","dollar-sign",1,"m-r-10"],["icon","pen",1,"m-r-10"],["mat-raised-button","","color","warn",3,"click",4,"mifosxHasPermission"],["icon","edit",1,"m-r-10"],["mat-raised-button","","color","warn",3,"click"],["icon","trash",1,"m-r-10"]],template:function(m,l){m&1&&(d(0,Th,13,4,"div",0),t(1,`

`),d(2,Oh,6,2,"div",0),t(3,`

`),i(4,"div",1),t(5,`
  `),i(6,"mat-card"),t(7,`
    `),i(8,"mat-card-content"),t(9,`
      `),i(10,"div",2),t(11,`
        `),g(12,"div",3),t(13,`

        `),i(14,"div",4),t(15),s(16,"translate"),a(),t(17,`

        `),i(18,"div",5),t(19),a(),t(20,`

        `),i(21,"div",4),t(22),s(23,"translate"),a(),t(24,`

        `),i(25,"div",5),t(26),a(),t(27,`

        `),i(28,"div",4),t(29),s(30,"translate"),a(),t(31,`

        `),i(32,"div",5),t(33),a(),t(34,`

        `),i(35,"div",4),t(36),s(37,"translate"),a(),t(38,`

        `),i(39,"div",5),t(40),a(),t(41,`

        `),i(42,"div",4),t(43),s(44,"translate"),a(),t(45,`

        `),i(46,"div",5),t(47),s(48,"dateFormat"),a(),t(49,`

        `),i(50,"div",4),t(51),s(52,"translate"),a(),t(53,`

        `),i(54,"div",5),t(55),a(),t(56,`

        `),i(57,"div",4),t(58),s(59,"translate"),a(),t(60,`

        `),i(61,"div",5),t(62),s(63,"formatNumber"),a(),t(64,`

        `),i(65,"div",4),t(66),s(67,"translate"),a(),t(68,`

        `),i(69,"div",5),t(70),s(71,"formatNumber"),a(),t(72,`

        `),i(73,"div",4),t(74),s(75,"translate"),a(),t(76,`

        `),i(77,"div",5),t(78),s(79,"formatNumber"),a(),t(80,`

        `),i(81,"div",4),t(82),s(83,"translate"),a(),t(84,`

        `),i(85,"div",5),t(86),s(87,"formatNumber"),a(),t(88,`

        `),i(89,"div",4),t(90),s(91,"translate"),a(),t(92,`

        `),i(93,"div",5),t(94),s(95,"dateFormat"),a(),t(96,`
      `),a(),t(97,`

      `),i(98,"div",6),t(99,`
        `),i(100,"button",7),t(101),s(102,"translate"),a(),t(103,`
      `),a(),t(104,`
    `),a(),t(105,`
  `),a(),t(106,`
`),a(),t(107,`
`)),m&2&&(c("ngIf",l.loansAccountData.status.value==="Active"&&l.chargeData.amountOutstanding!==0),o(2),c("ngIf",l.loansAccountData.status.value==="Submitted and pending approval"),o(10),c("ngClass",l.loanChargeColor()),o(3),f(`
          `,p(16,27,"labels.inputs.name"),`
        `),o(4),f(`
          `,l.chargeData.name,`
        `),o(3),f(`
          `,p(23,29,"labels.inputs.Charge Type"),`
        `),o(4),f(`
          `,l.chargeData.penalty?"Penalty":"Fees",`
        `),o(3),f(`
          `,p(30,31,"labels.inputs.Currency"),`
        `),o(4),f(`
          `,l.chargeData.currency.displayLabel,`
        `),o(3),f(`
          `,p(37,33,"labels.inputs.Payment due at"),`
        `),o(4),f(`
          `,l.chargeData.chargeTimeType.value,`
        `),o(3),f(`
          `,p(44,35,"labels.inputs.Payment due as of"),`
        `),o(4),f(`
          `,p(48,37,l.chargeData.dueDate),`
        `),o(4),f(`
          `,p(52,39,"labels.inputs.Calculation Type"),`
        `),o(4),f(`
          `,l.chargeData.chargeCalculationType.value,`
        `),o(3),f(`
          `,p(59,41,"labels.inputs.Due"),`
        `),o(4),f(`
          `,p(63,43,l.chargeData.amount),`
        `),o(4),f(`
          `,p(67,45,"labels.inputs.Paid"),`
        `),o(4),f(`
          `,p(71,47,l.chargeData.amountPaid),`
        `),o(4),f(`
          `,p(75,49,"labels.inputs.Waived"),`
        `),o(4),f(`
          `,p(79,51,l.chargeData.amountWaived),`
        `),o(4),f(`
          `,p(83,53,"labels.inputs.Outstanding"),`
        `),o(4),f(`
          `,p(87,55,l.chargeData.amountOutstanding),`
        `),o(4),f(`
          `,p(91,57,"labels.inputs.Submitted On Date"),`
        `),o(4),f(`
          `,p(95,59,l.chargeData.submittedOnDate),`
        `),o(6),c("routerLink",N(63,Ch)),o(),f(`
          `,p(102,61,"labels.buttons.Back"),`
        `))},dependencies:[A,he,k,w,H,et,mt,j,Lt,ot,L,Ot,Wt],styles:["body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.bg-black[_ngcontent-%COMP%]{background-color:#000}.bg-light-grey[_ngcontent-%COMP%]{background-color:#e5e5e5}.bg-medium-grey[_ngcontent-%COMP%]{background-color:#ccc}.bg-grey[_ngcontent-%COMP%]{background-color:#999}.bg-dark-grey[_ngcontent-%COMP%]{background-color:#222}.bg-white[_ngcontent-%COMP%], .bg-fff[_ngcontent-%COMP%]{background-color:#fff}.bg-none[_ngcontent-%COMP%], .no-bg[_ngcontent-%COMP%]{background:none;background-image:none;background-color:transparent}.bg-facebook[_ngcontent-%COMP%]{background-color:#47639e}.bg-twitter[_ngcontent-%COMP%]{background-color:#02a8f3}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}.no-border[_ngcontent-%COMP%]{border:none}.no-border-t[_ngcontent-%COMP%]{border-top:none}.no-border-r[_ngcontent-%COMP%]{border-right:none}.no-border-b[_ngcontent-%COMP%]{border-bottom:none}.no-border-l[_ngcontent-%COMP%]{border-left:none}.no-border-lr[_ngcontent-%COMP%], .no-border-rl[_ngcontent-%COMP%]{border-left:none;border-right:none}.no-border-tb[_ngcontent-%COMP%], .no-border-bt[_ngcontent-%COMP%]{border-top:none;border-bottom:none}.no-border-tl[_ngcontent-%COMP%], .no-border-lt[_ngcontent-%COMP%]{border-top:none;border-left:none}.no-border-tr[_ngcontent-%COMP%], .no-border-rt[_ngcontent-%COMP%]{border-top:none;border-right:none}.no-border-bl[_ngcontent-%COMP%], .no-border-lb[_ngcontent-%COMP%]{border-bottom:none;border-left:none}.no-border-br[_ngcontent-%COMP%], .no-border-rb[_ngcontent-%COMP%]{border-bottom:none;border-right:none}.border-dashed[_ngcontent-%COMP%], .border-dotted[_ngcontent-%COMP%]{border-style:dashed}.border-black[_ngcontent-%COMP%]{border-color:#000}.border-light-grey[_ngcontent-%COMP%]{border-color:#e5e5e5}.border-medium-grey[_ngcontent-%COMP%]{border-color:#ccc}.border-grey[_ngcontent-%COMP%]{border-color:#999}.border-dark-grey[_ngcontent-%COMP%]{border-color:#2222}.border-white[_ngcontent-%COMP%], .border-fff[_ngcontent-%COMP%]{border-color:#fff}.no-border-radius[_ngcontent-%COMP%]{border-radius:0}.radius3[_ngcontent-%COMP%]{border-radius:3px}.radius5[_ngcontent-%COMP%]{border-radius:5px}.radius10[_ngcontent-%COMP%]{border-radius:10px}.column-mandatory[_ngcontent-%COMP%]{color:#5cb85c;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.yes[_ngcontent-%COMP%]{color:#5cb85c!important;background-color:#5cb85c;height:4px;cursor:none}.no[_ngcontent-%COMP%]{color:red;background-color:red;height:4px;cursor:none}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.transfer[_ngcontent-%COMP%]{color:#16a085}.linked[_ngcontent-%COMP%]{color:#4461e2}.accrual[_ngcontent-%COMP%]{color:#999}.fa-question[_ngcontent-%COMP%]{color:#4461e2}.enabled[_ngcontent-%COMP%]{color:#32cd32}.disabled[_ngcontent-%COMP%]{color:#f44366}.v-mid[_ngcontent-%COMP%], .v-m[_ngcontent-%COMP%]{vertical-align:middle}.v-top[_ngcontent-%COMP%], .v-t[_ngcontent-%COMP%]{vertical-align:top}.v-bottom[_ngcontent-%COMP%], .v-b[_ngcontent-%COMP%]{vertical-align:bottom}.v-super[_ngcontent-%COMP%]{vertical-align:super}.r-amount[_ngcontent-%COMP%]{text-align:right!important;padding-right:5px!important}.left[_ngcontent-%COMP%]{text-align:left!important}.right[_ngcontent-%COMP%]{text-align:right!important}.center[_ngcontent-%COMP%]{text-align:center!important}.amount-plus[_ngcontent-%COMP%]{color:#000}.amount-minus[_ngcontent-%COMP%]{color:#4461e2}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.in-block[_ngcontent-%COMP%]{display:inline-block;zoom:1}.d-none[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}.t-0[_ngcontent-%COMP%]{top:0}.b-0[_ngcontent-%COMP%]{bottom:0}.l-0[_ngcontent-%COMP%]{left:0}.r-0[_ngcontent-%COMP%]{right:0}.tb-0[_ngcontent-%COMP%]{top:0;bottom:0}.lr-0[_ngcontent-%COMP%]{left:0;right:0}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.f-none[_ngcontent-%COMP%]{float:none}textarea[_ngcontent-%COMP%]{resize:both}textarea.vertical[_ngcontent-%COMP%], textarea.horizontal[_ngcontent-%COMP%]{resize:vertical}textarea.noresize[_ngcontent-%COMP%]{resize:none}.full-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{width:auto}.mat-tab-body-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-datepicker-input[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.loader-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw}.loader-wrapper[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;position:absolute;animation:_ngcontent-%COMP%_rotate .8s infinite .2s}.loader-wrapper[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{border-width:0 90px 90px;border-color:transparent transparent #1fb050;bottom:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{border-width:90px 90px 0;border-color:#b4d575 transparent transparent;top:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{border-width:90px 0 90px 90px;border-color:transparent transparent transparent #1074b9;top:calc(50% - 90px);left:calc(50% - 100px)}.loader-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{border-width:90px 90px 90px 0;border-color:transparent #1daeec transparent transparent;top:calc(50% - 90px);right:calc(50% - 100px)}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}body[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{margin:0 auto}.mb-05[_ngcontent-%COMP%]{margin-bottom:.5rem}.mr-05[_ngcontent-%COMP%]{margin-right:.5rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:1rem}.m-5[_ngcontent-%COMP%]{margin:5px}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.m-r-5[_ngcontent-%COMP%]{margin-right:5px}.m-b-5[_ngcontent-%COMP%]{margin-bottom:5px}.m-l-5[_ngcontent-%COMP%]{margin-left:5px}.m-v-5[_ngcontent-%COMP%]{margin:5px 0}.m-h-5[_ngcontent-%COMP%]{margin:0 5px}.m-10[_ngcontent-%COMP%]{margin:10px}.m-t-10[_ngcontent-%COMP%]{margin-top:10px}.m-r-10[_ngcontent-%COMP%]{margin-right:10px}.m-b-10[_ngcontent-%COMP%]{margin-bottom:10px}.m-l-10[_ngcontent-%COMP%]{margin-left:10px}.m-v-10[_ngcontent-%COMP%]{margin:10px 0}.m-h-10[_ngcontent-%COMP%]{margin:0 10px}.m-15[_ngcontent-%COMP%]{margin:15px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}.m-r-15[_ngcontent-%COMP%]{margin-right:15px}.m-b-15[_ngcontent-%COMP%]{margin-bottom:15px}.m-l-15[_ngcontent-%COMP%]{margin-left:15px}.m-v-15[_ngcontent-%COMP%]{margin:15px 0}.m-h-15[_ngcontent-%COMP%]{margin:0 15px}.m-20[_ngcontent-%COMP%]{margin:20px}.m-t-20[_ngcontent-%COMP%]{margin-top:20px}.m-r-20[_ngcontent-%COMP%]{margin-right:20px}.m-b-20[_ngcontent-%COMP%]{margin-bottom:20px}.m-l-20[_ngcontent-%COMP%]{margin-left:20px}.m-v-20[_ngcontent-%COMP%]{margin:20px 0}.m-h-20[_ngcontent-%COMP%]{margin:0 20px}.m-25[_ngcontent-%COMP%]{margin:25px}.m-t-25[_ngcontent-%COMP%]{margin-top:25px}.m-r-25[_ngcontent-%COMP%]{margin-right:25px}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}.m-l-25[_ngcontent-%COMP%]{margin-left:25px}.m-v-25[_ngcontent-%COMP%]{margin:25px 0}.m-h-25[_ngcontent-%COMP%]{margin:0 25px}.m-30[_ngcontent-%COMP%]{margin:30px}.m-t-30[_ngcontent-%COMP%]{margin-top:30px}.m-r-30[_ngcontent-%COMP%]{margin-right:30px}.m-b-30[_ngcontent-%COMP%]{margin-bottom:30px}.m-l-30[_ngcontent-%COMP%]{margin-left:30px}.m-v-30[_ngcontent-%COMP%]{margin:30px 0}.m-h-30[_ngcontent-%COMP%]{margin:0 30px}.m-35[_ngcontent-%COMP%]{margin:35px}.m-t-35[_ngcontent-%COMP%]{margin-top:35px}.m-r-35[_ngcontent-%COMP%]{margin-right:35px}.m-b-35[_ngcontent-%COMP%]{margin-bottom:35px}.m-l-35[_ngcontent-%COMP%]{margin-left:35px}.m-v-35[_ngcontent-%COMP%]{margin:35px 0}.m-h-35[_ngcontent-%COMP%]{margin:0 35px}.m-40[_ngcontent-%COMP%]{margin:40px}.m-t-40[_ngcontent-%COMP%]{margin-top:40px}.m-r-40[_ngcontent-%COMP%]{margin-right:40px}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.m-l-40[_ngcontent-%COMP%]{margin-left:40px}.m-v-40[_ngcontent-%COMP%]{margin:40px 0}.m-h-40[_ngcontent-%COMP%]{margin:0 40px}.m-45[_ngcontent-%COMP%]{margin:45px}.m-t-45[_ngcontent-%COMP%]{margin-top:45px}.m-r-45[_ngcontent-%COMP%]{margin-right:45px}.m-b-45[_ngcontent-%COMP%]{margin-bottom:45px}.m-l-45[_ngcontent-%COMP%]{margin-left:45px}.m-v-45[_ngcontent-%COMP%]{margin:45px 0}.m-h-45[_ngcontent-%COMP%]{margin:0 45px}.m-50[_ngcontent-%COMP%]{margin:50px}.m-t-50[_ngcontent-%COMP%]{margin-top:50px}.m-r-50[_ngcontent-%COMP%]{margin-right:50px}.m-b-50[_ngcontent-%COMP%]{margin-bottom:50px}.m-l-50[_ngcontent-%COMP%]{margin-left:50px}.m-v-50[_ngcontent-%COMP%]{margin:50px 0}.m-h-50[_ngcontent-%COMP%]{margin:0 50px}.m-55[_ngcontent-%COMP%]{margin:55px}.m-t-55[_ngcontent-%COMP%]{margin-top:55px}.m-r-55[_ngcontent-%COMP%]{margin-right:55px}.m-b-55[_ngcontent-%COMP%]{margin-bottom:55px}.m-l-55[_ngcontent-%COMP%]{margin-left:55px}.m-v-55[_ngcontent-%COMP%]{margin:55px 0}.m-h-55[_ngcontent-%COMP%]{margin:0 55px}.m-60[_ngcontent-%COMP%]{margin:60px}.m-t-60[_ngcontent-%COMP%]{margin-top:60px}.m-r-60[_ngcontent-%COMP%]{margin-right:60px}.m-b-60[_ngcontent-%COMP%]{margin-bottom:60px}.m-l-60[_ngcontent-%COMP%]{margin-left:60px}.m-v-60[_ngcontent-%COMP%]{margin:60px 0}.m-h-60[_ngcontent-%COMP%]{margin:0 60px}.m-65[_ngcontent-%COMP%]{margin:65px}.m-t-65[_ngcontent-%COMP%]{margin-top:65px}.m-r-65[_ngcontent-%COMP%]{margin-right:65px}.m-b-65[_ngcontent-%COMP%]{margin-bottom:65px}.m-l-65[_ngcontent-%COMP%]{margin-left:65px}.m-v-65[_ngcontent-%COMP%]{margin:65px 0}.m-h-65[_ngcontent-%COMP%]{margin:0 65px}.m-70[_ngcontent-%COMP%]{margin:70px}.m-t-70[_ngcontent-%COMP%]{margin-top:70px}.m-r-70[_ngcontent-%COMP%]{margin-right:70px}.m-b-70[_ngcontent-%COMP%]{margin-bottom:70px}.m-l-70[_ngcontent-%COMP%]{margin-left:70px}.m-v-70[_ngcontent-%COMP%]{margin:70px 0}.m-h-70[_ngcontent-%COMP%]{margin:0 70px}.m-75[_ngcontent-%COMP%]{margin:75px}.m-t-75[_ngcontent-%COMP%]{margin-top:75px}.m-r-75[_ngcontent-%COMP%]{margin-right:75px}.m-b-75[_ngcontent-%COMP%]{margin-bottom:75px}.m-l-75[_ngcontent-%COMP%]{margin-left:75px}.m-v-75[_ngcontent-%COMP%]{margin:75px 0}.m-h-75[_ngcontent-%COMP%]{margin:0 75px}.m-80[_ngcontent-%COMP%]{margin:80px}.m-t-80[_ngcontent-%COMP%]{margin-top:80px}.m-r-80[_ngcontent-%COMP%]{margin-right:80px}.m-b-80[_ngcontent-%COMP%]{margin-bottom:80px}.m-l-80[_ngcontent-%COMP%]{margin-left:80px}.m-v-80[_ngcontent-%COMP%]{margin:80px 0}.m-h-80[_ngcontent-%COMP%]{margin:0 80px}.no-m[_ngcontent-%COMP%]{margin:0}.no-m-t[_ngcontent-%COMP%]{margin-top:0}.no-m-r[_ngcontent-%COMP%]{margin-right:0}.no-m-b[_ngcontent-%COMP%]{margin-bottom:0}.no-m-l[_ngcontent-%COMP%]{margin-left:0}.no-m-v[_ngcontent-%COMP%], .no-m-h[_ngcontent-%COMP%], .no-margin[_ngcontent-%COMP%]{margin:0}.no-m-lr[_ngcontent-%COMP%], .no-m-rl[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.no-m-tb[_ngcontent-%COMP%], .no-m-bt[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.m-t-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-bottom:0}.m-b-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0}.m-l-only[_ngcontent-%COMP%]{margin-right:0;margin-top:0;margin-bottom:0}.m-r-only[_ngcontent-%COMP%]{margin-left:0;margin-top:0;margin-bottom:0}.m-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.ls-0[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}div[_ngcontent-%COMP%]{box-sizing:border-box}.color-inherit[_ngcontent-%COMP%]{color:inherit}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}.nolist[_ngcontent-%COMP%]{list-style:none}.actions-menu[_ngcontent-%COMP%]{color:#fff}.alert[_ngcontent-%COMP%]{background-color:#e8f4fd;padding:6px 16px;font-size:.875rem;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;line-height:1.43;border-radius:4px;letter-spacing:normal;margin:10px}.alert[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 0;font-size:18px}.alert[_ngcontent-%COMP%]   .alert-check[_ngcontent-%COMP%]{color:#359ff4;margin-right:2px;font-size:1.4rem}  .mat-tooltip{font-size:15px;color:#fff!important;background-color:#4461e2b3;border:1px solid rgb(25.7777777778,51.5555555556,166.2222222222);max-width:400px!important;white-space:pre-line!important}.loading[_ngcontent-%COMP%]{position:absolute;min-width:100%;width:100px;height:12px;background:linear-gradient(125deg,#fff,#4461e2,#fff);animation:grow 4s linear infinite,move 4s linear infinite}mat-card-title[_ngcontent-%COMP%]{font-weight:600;font-size:x-large;padding-left:20px;padding-top:20px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.overflow-x-scroll[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.overflow-no[_ngcontent-%COMP%]{overflow:hidden}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll}.table-container[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}body[_ngcontent-%COMP%], .no-p[_ngcontent-%COMP%]{padding:0}.no-p-t[_ngcontent-%COMP%]{padding-top:0}.no-p-r[_ngcontent-%COMP%]{padding-right:0}.no-p-b[_ngcontent-%COMP%]{padding-bottom:0}.no-p-l[_ngcontent-%COMP%]{padding-left:0}.no-p-v[_ngcontent-%COMP%], .no-p-h[_ngcontent-%COMP%]{padding:0}.p-5[_ngcontent-%COMP%]{padding:5px}.p-t-5[_ngcontent-%COMP%]{padding-top:5px}.p-r-5[_ngcontent-%COMP%]{padding-right:5px}.p-b-5[_ngcontent-%COMP%]{padding-bottom:5px}.p-l-5[_ngcontent-%COMP%]{padding-left:5px}.p-v-5[_ngcontent-%COMP%]{padding:5px 0}.p-h-5[_ngcontent-%COMP%]{padding:0 5px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-t-10[_ngcontent-%COMP%]{padding-top:10px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.p-v-10[_ngcontent-%COMP%]{padding:10px 0}.p-h-10[_ngcontent-%COMP%]{padding:0 10px}.p-15[_ngcontent-%COMP%]{padding:15px}.p-t-15[_ngcontent-%COMP%]{padding-top:15px}.p-r-15[_ngcontent-%COMP%]{padding-right:15px}.p-b-15[_ngcontent-%COMP%]{padding-bottom:15px}.p-l-15[_ngcontent-%COMP%]{padding-left:15px}.p-v-15[_ngcontent-%COMP%]{padding:15px 0}.p-h-15[_ngcontent-%COMP%]{padding:0 15px}.p-20[_ngcontent-%COMP%]{padding:20px}.p-t-20[_ngcontent-%COMP%]{padding-top:20px}.p-r-20[_ngcontent-%COMP%]{padding-right:20px}.p-b-20[_ngcontent-%COMP%]{padding-bottom:20px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-v-20[_ngcontent-%COMP%]{padding:20px 0}.p-h-20[_ngcontent-%COMP%]{padding:0 20px}.p-25[_ngcontent-%COMP%]{padding:25px}.p-t-25[_ngcontent-%COMP%]{padding-top:25px}.p-r-25[_ngcontent-%COMP%]{padding-right:25px}.p-b-25[_ngcontent-%COMP%]{padding-bottom:25px}.p-l-25[_ngcontent-%COMP%]{padding-left:25px}.p-v-25[_ngcontent-%COMP%]{padding:25px 0}.p-h-25[_ngcontent-%COMP%]{padding:0 25px}.p-30[_ngcontent-%COMP%]{padding:30px}.p-t-30[_ngcontent-%COMP%]{padding-top:30px}.p-r-30[_ngcontent-%COMP%]{padding-right:30px}.p-b-30[_ngcontent-%COMP%]{padding-bottom:30px}.p-l-30[_ngcontent-%COMP%]{padding-left:30px}.p-v-30[_ngcontent-%COMP%]{padding:30px 0}.p-h-30[_ngcontent-%COMP%]{padding:0 30px}.p-35[_ngcontent-%COMP%]{padding:35px}.p-t-35[_ngcontent-%COMP%]{padding-top:35px}.p-r-35[_ngcontent-%COMP%]{padding-right:35px}.p-b-35[_ngcontent-%COMP%]{padding-bottom:35px}.p-l-35[_ngcontent-%COMP%]{padding-left:35px}.p-v-35[_ngcontent-%COMP%]{padding:35px 0}.p-h-35[_ngcontent-%COMP%]{padding:0 35px}.p-40[_ngcontent-%COMP%]{padding:40px}.p-t-40[_ngcontent-%COMP%]{padding-top:40px}.p-r-40[_ngcontent-%COMP%]{padding-right:40px}.p-b-40[_ngcontent-%COMP%]{padding-bottom:40px}.p-l-40[_ngcontent-%COMP%]{padding-left:40px}.p-v-40[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px}.p-h-40[_ngcontent-%COMP%]{padding:0 40px}.p-45[_ngcontent-%COMP%]{padding:45px}.p-t-45[_ngcontent-%COMP%]{padding-top:45px}.p-r-45[_ngcontent-%COMP%]{padding-right:45px}.p-b-45[_ngcontent-%COMP%]{padding-bottom:45px}.p-l-45[_ngcontent-%COMP%]{padding-left:45px}.p-v-45[_ngcontent-%COMP%]{padding:45px 0}.p-h-45[_ngcontent-%COMP%]{padding:0 45px}.p-50[_ngcontent-%COMP%]{padding:50px}.p-t-50[_ngcontent-%COMP%]{padding-top:50px}.p-r-50[_ngcontent-%COMP%]{padding-right:50px}.p-b-50[_ngcontent-%COMP%]{padding-bottom:50px}.p-l-50[_ngcontent-%COMP%]{padding-left:50px}.p-v-50[_ngcontent-%COMP%]{padding:50px 0}.p-h-50[_ngcontent-%COMP%]{padding:0 50px}.p-55[_ngcontent-%COMP%]{padding:55px}.p-t-55[_ngcontent-%COMP%]{padding-top:55px}.p-r-55[_ngcontent-%COMP%]{padding-right:55px}.p-b-55[_ngcontent-%COMP%]{padding-bottom:55px}.p-l-55[_ngcontent-%COMP%]{padding-left:55px}.p-v-55[_ngcontent-%COMP%]{padding:55px 0}.p-h-55[_ngcontent-%COMP%]{padding:0 55px}.p-60[_ngcontent-%COMP%]{padding:60px}.p-t-60[_ngcontent-%COMP%]{padding-top:60px}.p-r-60[_ngcontent-%COMP%]{padding-right:60px}.p-b-60[_ngcontent-%COMP%]{padding-bottom:60px}.p-l-60[_ngcontent-%COMP%]{padding-left:60px}.p-v-60[_ngcontent-%COMP%]{padding:60px 0}.p-h-60[_ngcontent-%COMP%]{padding:0 60px}.p-65[_ngcontent-%COMP%]{padding:65px}.p-t-65[_ngcontent-%COMP%]{padding-top:65px}.p-r-65[_ngcontent-%COMP%]{padding-right:65px}.p-b-65[_ngcontent-%COMP%]{padding-bottom:65px}.p-l-65[_ngcontent-%COMP%]{padding-left:65px}.p-v-65[_ngcontent-%COMP%]{padding:65px 0}.p-h-65[_ngcontent-%COMP%]{padding:0 65px}.p-70[_ngcontent-%COMP%]{padding:70px}.p-t-70[_ngcontent-%COMP%]{padding-top:70px}.p-r-70[_ngcontent-%COMP%]{padding-right:70px}.p-b-70[_ngcontent-%COMP%]{padding-bottom:70px}.p-l-70[_ngcontent-%COMP%]{padding-left:70px}.p-v-70[_ngcontent-%COMP%]{padding:70px 0}.p-h-70[_ngcontent-%COMP%]{padding:0 70px}.p-75[_ngcontent-%COMP%]{padding:75px}.p-t-75[_ngcontent-%COMP%]{padding-top:75px}.p-r-75[_ngcontent-%COMP%]{padding-right:75px}.p-b-75[_ngcontent-%COMP%]{padding-bottom:75px}.p-l-75[_ngcontent-%COMP%]{padding-left:75px}.p-v-75[_ngcontent-%COMP%]{padding:75px 0}.p-h-75[_ngcontent-%COMP%]{padding:0 75px}.p-80[_ngcontent-%COMP%]{padding:80px}.p-t-80[_ngcontent-%COMP%]{padding-top:80px}.p-r-80[_ngcontent-%COMP%]{padding-right:80px}.p-b-80[_ngcontent-%COMP%]{padding-bottom:80px}.p-l-80[_ngcontent-%COMP%]{padding-left:80px}.p-v-80[_ngcontent-%COMP%]{padding:80px 0}.p-h-80[_ngcontent-%COMP%]{padding:0 80px}.no-padding[_ngcontent-%COMP%]{padding:0!important}.no-pad-lr[_ngcontent-%COMP%], .no-pad-rl[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.no-pad-tb[_ngcontent-%COMP%], .no-pad-bt[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.pad-t-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0}.pad-b-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0}.pad-l-only[_ngcontent-%COMP%]{padding-right:0;padding-top:0;padding-bottom:0}.pad-r-only[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-bottom:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], .relative[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%], .absolute[_ngcontent-%COMP%]{position:absolute}.fixed[_ngcontent-%COMP%]{position:fixed}.status-active[_ngcontent-%COMP%]{color:#5cb85c}.status-inactive[_ngcontent-%COMP%]{color:#666f73}.status-deleted[_ngcontent-%COMP%]{color:#000}.status-pending[_ngcontent-%COMP%]{color:orange}.status-approved[_ngcontent-%COMP%]{color:#4461e2}.status-overpaid[_ngcontent-%COMP%]{color:purple}.status-chargeoff[_ngcontent-%COMP%]{color:#f39c12}.status-active-overdue[_ngcontent-%COMP%], .status-block[_ngcontent-%COMP%]{color:red}.status-matured[_ngcontent-%COMP%]{color:#ff4000}.subStatus-contract-termination[_ngcontent-%COMP%]{color:#b3b3b3}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]{background-color:#2af72a}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-progress[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-hold[_ngcontent-%COMP%]{color:#df0101}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}html[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:14px;color:#000000de;line-height:1.5;letter-spacing:normal}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.lh-1[_ngcontent-%COMP%]{line-height:1}.lh-13[_ngcontent-%COMP%]{line-height:1.3}.lh-15[_ngcontent-%COMP%]{line-height:1.5}.bold[_ngcontent-%COMP%], .strong[_ngcontent-%COMP%]{font-weight:700}.no-bold[_ngcontent-%COMP%]{font-weight:400}.italic[_ngcontent-%COMP%], .em[_ngcontent-%COMP%]{font-style:italic}.strike[_ngcontent-%COMP%]{text-decoration:line-through}.normal[_ngcontent-%COMP%]{font-weight:400;font-style:normal}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.w100[_ngcontent-%COMP%]{font-weight:100}.w200[_ngcontent-%COMP%]{font-weight:200}.w300[_ngcontent-%COMP%]{font-weight:300}.w400[_ngcontent-%COMP%]{font-weight:400}.w500[_ngcontent-%COMP%]{font-weight:500}.w600[_ngcontent-%COMP%]{font-weight:600}.w700[_ngcontent-%COMP%]{font-weight:700}.w800[_ngcontent-%COMP%]{font-weight:800}.w900[_ngcontent-%COMP%]{font-weight:900}.f9[_ngcontent-%COMP%]{font-size:9px}.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f15[_ngcontent-%COMP%]{font-size:15px}.f16[_ngcontent-%COMP%]{font-size:16px}.f17[_ngcontent-%COMP%]{font-size:17px}.f18[_ngcontent-%COMP%]{font-size:18px;line-height:30px}.f19[_ngcontent-%COMP%]{font-size:19px}.f20[_ngcontent-%COMP%]{font-size:20px}.f30[_ngcontent-%COMP%]{font-size:30px}.f40[_ngcontent-%COMP%]{font-size:40px}.f50[_ngcontent-%COMP%]{font-size:50px}.f60[_ngcontent-%COMP%]{font-size:60px}.size-small[_ngcontent-%COMP%]{font-size:75%}.size-normal[_ngcontent-%COMP%]{font-size:100%}.size-medium[_ngcontent-%COMP%]{font-size:125%}.size-big[_ngcontent-%COMP%], .size-large[_ngcontent-%COMP%]{font-size:150%}.size-huge[_ngcontent-%COMP%]{font-size:200%}.inherit[_ngcontent-%COMP%]{font:inherit}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.text-rgb-2[_ngcontent-%COMP%]{color:#0003}.text-rgb-3[_ngcontent-%COMP%]{color:#0000004d}.text-rgb-4[_ngcontent-%COMP%]{color:#0006}.text-rgb-5[_ngcontent-%COMP%]{color:#00000080}.no-ul[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]:hover, .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.auto-cell-size[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.ls-0[_ngcontent-%COMP%]{letter-spacing:-3px;white-space:nowrap}.label-field[_ngcontent-%COMP%]{margin-top:32px}.fit[_ngcontent-%COMP%]{max-width:100%}.half-width[_ngcontent-%COMP%]{width:50%}.full-width[_ngcontent-%COMP%]{width:100%}.full-height[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100%}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{max-width:74rem;width:90%}.mw300[_ngcontent-%COMP%]{max-width:300px}.mw400[_ngcontent-%COMP%]{max-width:400px}.mw500[_ngcontent-%COMP%]{max-width:500px}.mw600[_ngcontent-%COMP%]{max-width:600px}.fullwidth[_ngcontent-%COMP%]{width:100%}.zindex-1[_ngcontent-%COMP%]{z-index:1}.zindex-2[_ngcontent-%COMP%]{z-index:2}.zindex-3[_ngcontent-%COMP%]{z-index:3}.zindex-4[_ngcontent-%COMP%]{z-index:4}.container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1rem 0;word-wrap:break-word}.paid[_ngcontent-%COMP%]{background-color:#5cb85c;height:4px}.not-paid[_ngcontent-%COMP%]{background-color:red;height:4px}"]})}}return e})();var Eh=()=>["../"];function Ah(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
    `),i(2,"button",15),t(3,`
      `),g(4,"fa-icon",16),t(5),s(6,"translate"),a(),t(7,`

    `),i(8,"button",17),T("click",function(){P(n);let l=C(2);return M(l.undoTransaction())}),t(9,`
      `),g(10,"fa-icon",18),t(11),s(12,"translate"),a(),t(13,`
  `),a()}if(e&2){let n=C(2);o(2),c("routerLink","edit")("disabled",!n.allowEdition),o(3),f("",p(6,5,"Edit"),`
    `),o(3),c("disabled",!n.allowUndo),o(3),f("",p(12,7,"Undo"),`
    `)}}function wh(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
    `),i(2,"button",17),T("click",function(){P(n);let l=C(2);return M(l.chargebackTransaction())}),t(3,`
      `),g(4,"fa-icon",18),t(5),s(6,"translate"),a(),t(7,`
  `),a()}if(e&2){let n=C(2);o(2),c("disabled",!n.allowChargeback),o(3),f("",p(6,2,"Chargeback"),`
    `)}}function Lh(e,r){e&1&&(i(0,"div",13),t(1,`
  `),d(2,Ah,14,9,"span",14),t(3,`
  `),d(4,wh,8,4,"span",14),t(5,`
`),a()),e&2&&(o(2),c("mifosxHasPermission","ADJUST_LOAN"),o(2),c("mifosxHasPermission","CHARGEBACK_LOAN"))}function Rh(e,r){e&1&&(i(0,"div",4),t(1),s(2,"translateKey"),a()),e&2&&(o(),f(`
          `,Et(2,1,"Repayment Transaction","catalogs"),`
        `))}function Fh(e,r){if(e&1&&(i(0,"div",5),t(1,`
          `),i(2,"a",19),t(3),a(),t(4,`
        `),a()),e&2){let n=C();o(2),c("href",n.loanTransactionRelatedLink(n.transactionData.toLoanTransactionRelation.fromLoanTransaction),aa),o(),f(`
            `,n.transactionData.toLoanTransactionRelation.fromLoanTransaction,`
          `)}}function Bh(e,r){e&1&&(i(0,"div",4),t(1),s(2,"translate"),a()),e&2&&(o(),f(`
          `,p(2,1,"External Id"),`
        `))}function kh(e,r){if(e&1&&(i(0,"div",5),t(1,`
          `),g(2,"mifosx-external-identifier",20),t(3,`
        `),a()),e&2){let n=C();o(2),Q("externalId",n.transactionData.externalId)}}function Nh(e,r){e&1&&g(0,"mat-divider",21),e&2&&c("inset",!0)}function Vh(e,r){e&1&&(i(0,"th",32),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Relation Type")))}function jh(e,r){if(e&1&&(i(0,"td",33),t(1),s(2,"translate"),a()),e&2){let n=r.$implicit;c("matTooltip",n.paymentType),o(),f(`
                `,p(2,2,n.relationType),`
              `)}}function qh(e,r){e&1&&(i(0,"th",32),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Transaction")))}function zh(e,r){if(e&1&&(i(0,"td",34),t(1,`
                `),i(2,"a",19),t(3),a(),t(4,`
              `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("href",m.loanTransactionRelatedLink(n.toLoanTransaction),aa),o(),f(`
                  `,n.toLoanTransaction,`
                `)}}function Hh(e,r){e&1&&(i(0,"th",32),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function Gh(e,r){if(e&1&&(i(0,"td",34),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
                `,vt(2,1,n.amount,m.transactionData.currency.code,"symbol-narrow","1.2-2"),`
              `)}}function Uh(e,r){e&1&&g(0,"tr",35)}function $h(e,r){e&1&&g(0,"tr",36)}function Wh(e,r){if(e&1&&(i(0,"div",22),t(1),s(2,"translate"),g(3,"br"),t(4,`

          `),i(5,"table",23),t(6,`
            `),b(7,24),t(8,`
              `),d(9,Vh,3,3,"th",25),t(10,`
              `),d(11,jh,3,4,"td",26),t(12,`
            `),S(),t(13,`

            `),b(14,27),t(15,`
              `),d(16,qh,3,3,"th",25),t(17,`
              `),d(18,zh,5,2,"td",28),t(19,`
            `),S(),t(20,`

            `),b(21,29),t(22,`
              `),d(23,Hh,3,3,"th",25),t(24,`
              `),d(25,Gh,3,6,"td",28),t(26,`
            `),S(),t(27,`
            `),d(28,Uh,1,0,"tr",30),t(29,`
            `),d(30,$h,1,0,"tr",31),t(31,`
          `),a(),t(32,`
        `),a()),e&2){let n=C();o(),f(`
          `,p(2,4,"Linked Transactions"),`
          `),o(4),c("dataSource",n.transactionRelations),o(23),c("matHeaderRowDef",n.displayedColumns),o(2),c("matRowDefColumns",n.displayedColumns)}}function Qh(e,r){if(e&1&&(i(0,"mifosx-transaction-payment-detail",37),t(1,`
        `),a()),e&2){let n=C();c("paymentDetailData",n.transactionData.paymentDetailData)}}var Hi=(()=>{class e{constructor(n,m,l,u,_,h,y,D,I){this.loansService=n,this.route=m,this.dateUtils=l,this.router=u,this.dialog=_,this.translateService=h,this.settingsService=y,this.organizationService=D,this.alertService=I,this.allowEdition=!0,this.allowUndo=!0,this.allowChargeback=!0,this.existTransactionRelations=!1,this.paymentTypeOptions=[],this.transactionRelations=new se,this.displayedColumns=["relationType","toTransaction","amount"],this.isFullRelated=!1,this.amountRelationsAllowed=0,this.route.data.subscribe(U=>{this.transactionData=U.loansAccountTransaction,this.transactionType=this.transactionData.type,this.allowEdition=!this.transactionData.manuallyReversed&&!this.allowTransactionEdition(this.transactionData.type.id),this.allowUndo=this.allowUndoTransaction(this.transactionData.manuallyReversed,this.transactionType),this.allowChargeback=this.allowChargebackTransaction(this.transactionType)&&!this.transactionData.manuallyReversed;let tt=!1;if(this.transactionData.transactionRelations){this.transactionRelations.data=this.transactionData.transactionRelations,this.existTransactionRelations=this.transactionData.transactionRelations.length>0;let St=0;this.transactionData.transactionRelations.forEach($t=>{$t.relationType==="CHARGEBACK"&&(St+=$t.amount,tt=!0)}),this.amountRelationsAllowed=this.transactionData.amount-St,this.isFullRelated=this.amountRelationsAllowed===0,this.allowChargeback=this.allowChargebackTransaction(this.transactionType)&&!this.isFullRelated}this.allowChargeback||(this.allowEdition=!1),(this.existTransactionRelations&&tt||this.transactionType.reAge||this.transactionType.reAmortize)&&(this.allowUndo=!1)}),this.clientId=this.route.snapshot.params.clientId,this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.allowChargeback&&this.organizationService.getPaymentTypesWithCode().toPromise().then(n=>{this.paymentTypeOptions=n})}allowTransactionEdition(n){return n===20||n===21||n===22||n===23||n===28}allowChargebackTransaction(n){return n.repayment||n.interestPaymentWaiver||n.goodwillCredit||n.payoutRefund||n.merchantIssuedRefund||n.downPayment}allowUndoTransaction(n,m){return!(n||m.interestRefund)}undoTransaction(){console.log(this.transactionData);let n=this.route.snapshot.params.loanId;if(this.transactionType.contractTermination){let m=[new pe({controlName:"note",label:"Note",value:"",type:"text",required:!1,order:1}),new pe({controlName:"reversalExternalId",label:"externalId",value:"",type:"text",required:!1,order:2})],l={title:this.translateService.instant("labels.heading.Undo Transaction"),layout:{addButtonText:"Undo"},formfields:m,pristine:!1};this.dialog.open(ae,{data:l,width:"50rem"}).afterClosed().subscribe(_=>{if(_.data){let h={note:_.data.value.note,reversalExternalId:_.data.value.reversalExternalId};this.loansService.loanActionButtons(n,"undoContractTermination",h).subscribe(()=>{this.router.navigate(["../"],{relativeTo:this.route})})}})}else this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Undo Transaction"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want undo the transaction")+`${this.transactionData.id}`}}).afterClosed().subscribe(l=>{if(l.confirm){let u=this.settingsService.language.code,_=this.settingsService.dateFormat,h={transactionDate:this.dateUtils.formatDate(this.transactionData.date&&new Date(this.transactionData.date),_),transactionAmount:0,dateFormat:_,locale:u};this.loansService.executeLoansAccountTransactionsCommand(n,"undo",h,this.transactionData.id).subscribe(()=>{this.router.navigate(["../"],{relativeTo:this.route})})}})}chargebackTransaction(){let n=this.route.snapshot.params.loanId,m=[new vn({controlName:"paymentTypeId",label:"Payment Type",value:"",options:{label:"name",value:"id",data:this.paymentTypeOptions},required:!0,order:1}),new pe({controlName:"amount",label:"Amount",value:this.amountRelationsAllowed,type:"number",required:!0,max:this.amountRelationsAllowed,order:2})],l={title:`Chargeback ${this.transactionType.value} Transaction`,layout:{addButtonText:"Chargeback"},formfields:m};this.dialog.open(ae,{data:l}).afterClosed().subscribe(_=>{if(_.data)if(_.data.value.amount<=this.amountRelationsAllowed){let h=this.settingsService.language.code,y={transactionAmount:_.data.value.amount,paymentTypeId:_.data.value.paymentTypeId,locale:h};this.loansService.executeLoansAccountTransactionsCommand(n,"chargeback",y,this.transactionData.id).subscribe(()=>{this.router.navigate(["../"],{relativeTo:this.route})})}else this.alertService.alert({type:"BusinessRule",message:"Chargeback amount must be lower or equal to: "+this.amountRelationsAllowed})})}loanTransactionRelatedLink(n){return`/#/clients/${this.clientId}/loans-accounts/${this.loanId}/transactions/${n}`}loanTransactionColor(){return this.transactionData.manuallyReversed?"undo":this.existTransactionRelations?"linked":"active"}static{this.\u0275fac=function(m){return new(m||e)(v(R),v(B),v(Y),v($),v(Zt),v(ve),v(G),v(qn),v(Mn))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-view-transaction"]],decls:75,vars:49,consts:[["class","container m-b-20 transaction-buttons layout-align-end gap-2percent",4,"ngIf"],[1,"container"],[1,"layout-row-wrap","card-content"],[1,"flex-100",3,"ngClass"],[1,"flex-50","mat-body-strong"],[1,"flex-50"],["class","flex-50 mat-body-strong",4,"ngIf"],["class","flex-50",4,"ngIf"],[3,"inset",4,"ngIf"],["class","mat-body-strong flex-100",4,"ngIf"],[3,"paymentDetailData",4,"ngIf"],[1,"layout-row","layout-align-center","gap-2percent","column-on-mobile"],["type","button","mat-raised-button","","color","primary",3,"routerLink"],[1,"container","m-b-20","transaction-buttons","layout-align-end","gap-2percent"],[4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"routerLink","disabled"],["icon","edit",1,"m-r-10"],["mat-raised-button","","color","warn",3,"click","disabled"],["icon","undo",1,"m-r-10"],[3,"href"],["completed","true",3,"externalId"],[3,"inset"],[1,"mat-body-strong","flex-100"],["mat-table","",3,"dataSource"],["matColumnDef","relationType"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltip",4,"matCellDef"],["matColumnDef","toTransaction"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",3,"matTooltip"],["mat-cell",""],["mat-header-row",""],["mat-row",""],[3,"paymentDetailData"]],template:function(m,l){m&1&&(d(0,Lh,6,2,"div",0),t(1,`

`),i(2,"div",1),t(3,`
  `),i(4,"mat-card"),t(5,`
    `),i(6,"mat-card-content"),t(7,`
      `),i(8,"div",2),t(9,`
        `),g(10,"div",3),t(11,`

        `),i(12,"div",4),t(13),s(14,"translateKey"),a(),t(15,`

        `),i(16,"div",5),t(17),a(),t(18,`

        `),d(19,Rh,3,4,"div",6),t(20,`

        `),d(21,Fh,5,2,"div",7),t(22,`

        `),i(23,"div",4),t(24),s(25,"translateKey"),a(),t(26,`

        `),i(27,"div",5),t(28),s(29,"translateKey"),a(),t(30,`

        `),i(31,"div",4),t(32),s(33,"translateKey"),a(),t(34,`

        `),i(35,"div",5),t(36),s(37,"dateFormat"),a(),t(38,`

        `),i(39,"div",4),t(40),s(41,"translateKey"),a(),t(42,`

        `),i(43,"div",5),t(44),a(),t(45,`

        `),i(46,"div",4),t(47),s(48,"translateKey"),a(),t(49,`

        `),i(50,"div",5),t(51),s(52,"currency"),a(),t(53,`

        `),d(54,Bh,3,3,"div",6),t(55,`

        `),d(56,kh,4,1,"div",7),t(57,`

        `),d(58,Nh,1,1,"mat-divider",8),t(59,`

        `),d(60,Wh,33,6,"div",9),t(61,`

        `),d(62,Qh,2,1,"mifosx-transaction-payment-detail",10),t(63,`
      `),a(),t(64,`

      `),i(65,"div",11),t(66,`
        `),i(67,"button",12),t(68),s(69,"translate"),a(),t(70,`
      `),a(),t(71,`
    `),a(),t(72,`
  `),a(),t(73,`
`),a(),t(74,`
`)),m&2&&(c("ngIf",!l.transactionData.type.contra),o(10),c("ngClass",l.loanTransactionColor()),o(3),f(`
          `,Et(14,21,"Transaction Id","catalogs"),`
        `),o(4),f(`
          `,l.transactionData.id,`
        `),o(2),c("ngIf",l.transactionData.toLoanTransactionRelation),o(2),c("ngIf",l.transactionData.toLoanTransactionRelation),o(3),f(`
          `,Et(25,24,"Type","catalogs"),`
        `),o(4),f(`
          `,Et(29,27,l.transactionData.type.value,"catalogs"),`
        `),o(4),f(`
          `,Et(33,30,"Transaction Date","catalogs"),`
        `),o(4),f(`
          `,p(37,33,l.transactionData.date),`
        `),o(4),f(`
          `,Et(41,35,"Currency","catalogs"),`
        `),o(4),f(`
          `,l.transactionData.currency.name,`
        `),o(3),f(`
          `,Et(48,38,"Amount","catalogs"),`
        `),o(4),f(`
          `,vt(52,41,l.transactionData.amount,l.transactionData.currency.code,"symbol-narrow","1.2-2"),`
        `),o(3),c("ngIf",l.transactionData.externalId),o(2),c("ngIf",l.transactionData.externalId),o(2),c("ngIf",l.existTransactionRelations),o(2),c("ngIf",l.existTransactionRelations),o(2),c("ngIf",l.transactionData.paymentDetailData),o(5),c("routerLink",N(48,Eh)),o(),f(`
          `,p(69,46,"labels.buttons.Back"),`
        `))},dependencies:[A,he,k,ye,w,H,et,mt,j,Lt,ot,L,Ne,Ot,Ie,Ve,Rt,kt,Bt,Nt,Ft,Vt,me,jt,zt,qt,Ht,go],styles:["body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.bg-black[_ngcontent-%COMP%]{background-color:#000}.bg-light-grey[_ngcontent-%COMP%]{background-color:#e5e5e5}.bg-medium-grey[_ngcontent-%COMP%]{background-color:#ccc}.bg-grey[_ngcontent-%COMP%]{background-color:#999}.bg-dark-grey[_ngcontent-%COMP%]{background-color:#222}.bg-white[_ngcontent-%COMP%], .bg-fff[_ngcontent-%COMP%]{background-color:#fff}.bg-none[_ngcontent-%COMP%], .no-bg[_ngcontent-%COMP%]{background:none;background-image:none;background-color:transparent}.bg-facebook[_ngcontent-%COMP%]{background-color:#47639e}.bg-twitter[_ngcontent-%COMP%]{background-color:#02a8f3}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}.no-border[_ngcontent-%COMP%]{border:none}.no-border-t[_ngcontent-%COMP%]{border-top:none}.no-border-r[_ngcontent-%COMP%]{border-right:none}.no-border-b[_ngcontent-%COMP%]{border-bottom:none}.no-border-l[_ngcontent-%COMP%]{border-left:none}.no-border-lr[_ngcontent-%COMP%], .no-border-rl[_ngcontent-%COMP%]{border-left:none;border-right:none}.no-border-tb[_ngcontent-%COMP%], .no-border-bt[_ngcontent-%COMP%]{border-top:none;border-bottom:none}.no-border-tl[_ngcontent-%COMP%], .no-border-lt[_ngcontent-%COMP%]{border-top:none;border-left:none}.no-border-tr[_ngcontent-%COMP%], .no-border-rt[_ngcontent-%COMP%]{border-top:none;border-right:none}.no-border-bl[_ngcontent-%COMP%], .no-border-lb[_ngcontent-%COMP%]{border-bottom:none;border-left:none}.no-border-br[_ngcontent-%COMP%], .no-border-rb[_ngcontent-%COMP%]{border-bottom:none;border-right:none}.border-dashed[_ngcontent-%COMP%], .border-dotted[_ngcontent-%COMP%]{border-style:dashed}.border-black[_ngcontent-%COMP%]{border-color:#000}.border-light-grey[_ngcontent-%COMP%]{border-color:#e5e5e5}.border-medium-grey[_ngcontent-%COMP%]{border-color:#ccc}.border-grey[_ngcontent-%COMP%]{border-color:#999}.border-dark-grey[_ngcontent-%COMP%]{border-color:#2222}.border-white[_ngcontent-%COMP%], .border-fff[_ngcontent-%COMP%]{border-color:#fff}.no-border-radius[_ngcontent-%COMP%]{border-radius:0}.radius3[_ngcontent-%COMP%]{border-radius:3px}.radius5[_ngcontent-%COMP%]{border-radius:5px}.radius10[_ngcontent-%COMP%]{border-radius:10px}.column-mandatory[_ngcontent-%COMP%]{color:#5cb85c;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.yes[_ngcontent-%COMP%]{color:#5cb85c!important;background-color:#5cb85c;height:4px;cursor:none}.no[_ngcontent-%COMP%]{color:red;background-color:red;height:4px;cursor:none}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.transfer[_ngcontent-%COMP%]{color:#16a085}.linked[_ngcontent-%COMP%]{color:#4461e2}.accrual[_ngcontent-%COMP%]{color:#999}.fa-question[_ngcontent-%COMP%]{color:#4461e2}.enabled[_ngcontent-%COMP%]{color:#32cd32}.disabled[_ngcontent-%COMP%]{color:#f44366}.v-mid[_ngcontent-%COMP%], .v-m[_ngcontent-%COMP%]{vertical-align:middle}.v-top[_ngcontent-%COMP%], .v-t[_ngcontent-%COMP%]{vertical-align:top}.v-bottom[_ngcontent-%COMP%], .v-b[_ngcontent-%COMP%]{vertical-align:bottom}.v-super[_ngcontent-%COMP%]{vertical-align:super}.r-amount[_ngcontent-%COMP%]{text-align:right!important;padding-right:5px!important}.left[_ngcontent-%COMP%]{text-align:left!important}.right[_ngcontent-%COMP%]{text-align:right!important}.center[_ngcontent-%COMP%]{text-align:center!important}.amount-plus[_ngcontent-%COMP%]{color:#000}.amount-minus[_ngcontent-%COMP%]{color:#4461e2}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.in-block[_ngcontent-%COMP%]{display:inline-block;zoom:1}.d-none[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}.t-0[_ngcontent-%COMP%]{top:0}.b-0[_ngcontent-%COMP%]{bottom:0}.l-0[_ngcontent-%COMP%]{left:0}.r-0[_ngcontent-%COMP%]{right:0}.tb-0[_ngcontent-%COMP%]{top:0;bottom:0}.lr-0[_ngcontent-%COMP%]{left:0;right:0}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.f-none[_ngcontent-%COMP%]{float:none}textarea[_ngcontent-%COMP%]{resize:both}textarea.vertical[_ngcontent-%COMP%], textarea.horizontal[_ngcontent-%COMP%]{resize:vertical}textarea.noresize[_ngcontent-%COMP%]{resize:none}.full-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{width:auto}.mat-tab-body-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-datepicker-input[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.loader-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw}.loader-wrapper[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;position:absolute;animation:_ngcontent-%COMP%_rotate .8s infinite .2s}.loader-wrapper[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{border-width:0 90px 90px;border-color:transparent transparent #1fb050;bottom:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{border-width:90px 90px 0;border-color:#b4d575 transparent transparent;top:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{border-width:90px 0 90px 90px;border-color:transparent transparent transparent #1074b9;top:calc(50% - 90px);left:calc(50% - 100px)}.loader-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{border-width:90px 90px 90px 0;border-color:transparent #1daeec transparent transparent;top:calc(50% - 90px);right:calc(50% - 100px)}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}body[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{margin:0 auto}.mb-05[_ngcontent-%COMP%]{margin-bottom:.5rem}.mr-05[_ngcontent-%COMP%]{margin-right:.5rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:1rem}.m-5[_ngcontent-%COMP%]{margin:5px}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.m-r-5[_ngcontent-%COMP%]{margin-right:5px}.m-b-5[_ngcontent-%COMP%]{margin-bottom:5px}.m-l-5[_ngcontent-%COMP%]{margin-left:5px}.m-v-5[_ngcontent-%COMP%]{margin:5px 0}.m-h-5[_ngcontent-%COMP%]{margin:0 5px}.m-10[_ngcontent-%COMP%]{margin:10px}.m-t-10[_ngcontent-%COMP%]{margin-top:10px}.m-r-10[_ngcontent-%COMP%]{margin-right:10px}.m-b-10[_ngcontent-%COMP%]{margin-bottom:10px}.m-l-10[_ngcontent-%COMP%]{margin-left:10px}.m-v-10[_ngcontent-%COMP%]{margin:10px 0}.m-h-10[_ngcontent-%COMP%]{margin:0 10px}.m-15[_ngcontent-%COMP%]{margin:15px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}.m-r-15[_ngcontent-%COMP%]{margin-right:15px}.m-b-15[_ngcontent-%COMP%]{margin-bottom:15px}.m-l-15[_ngcontent-%COMP%]{margin-left:15px}.m-v-15[_ngcontent-%COMP%]{margin:15px 0}.m-h-15[_ngcontent-%COMP%]{margin:0 15px}.m-20[_ngcontent-%COMP%]{margin:20px}.m-t-20[_ngcontent-%COMP%]{margin-top:20px}.m-r-20[_ngcontent-%COMP%]{margin-right:20px}.m-b-20[_ngcontent-%COMP%]{margin-bottom:20px}.m-l-20[_ngcontent-%COMP%]{margin-left:20px}.m-v-20[_ngcontent-%COMP%]{margin:20px 0}.m-h-20[_ngcontent-%COMP%]{margin:0 20px}.m-25[_ngcontent-%COMP%]{margin:25px}.m-t-25[_ngcontent-%COMP%]{margin-top:25px}.m-r-25[_ngcontent-%COMP%]{margin-right:25px}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}.m-l-25[_ngcontent-%COMP%]{margin-left:25px}.m-v-25[_ngcontent-%COMP%]{margin:25px 0}.m-h-25[_ngcontent-%COMP%]{margin:0 25px}.m-30[_ngcontent-%COMP%]{margin:30px}.m-t-30[_ngcontent-%COMP%]{margin-top:30px}.m-r-30[_ngcontent-%COMP%]{margin-right:30px}.m-b-30[_ngcontent-%COMP%]{margin-bottom:30px}.m-l-30[_ngcontent-%COMP%]{margin-left:30px}.m-v-30[_ngcontent-%COMP%]{margin:30px 0}.m-h-30[_ngcontent-%COMP%]{margin:0 30px}.m-35[_ngcontent-%COMP%]{margin:35px}.m-t-35[_ngcontent-%COMP%]{margin-top:35px}.m-r-35[_ngcontent-%COMP%]{margin-right:35px}.m-b-35[_ngcontent-%COMP%]{margin-bottom:35px}.m-l-35[_ngcontent-%COMP%]{margin-left:35px}.m-v-35[_ngcontent-%COMP%]{margin:35px 0}.m-h-35[_ngcontent-%COMP%]{margin:0 35px}.m-40[_ngcontent-%COMP%]{margin:40px}.m-t-40[_ngcontent-%COMP%]{margin-top:40px}.m-r-40[_ngcontent-%COMP%]{margin-right:40px}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.m-l-40[_ngcontent-%COMP%]{margin-left:40px}.m-v-40[_ngcontent-%COMP%]{margin:40px 0}.m-h-40[_ngcontent-%COMP%]{margin:0 40px}.m-45[_ngcontent-%COMP%]{margin:45px}.m-t-45[_ngcontent-%COMP%]{margin-top:45px}.m-r-45[_ngcontent-%COMP%]{margin-right:45px}.m-b-45[_ngcontent-%COMP%]{margin-bottom:45px}.m-l-45[_ngcontent-%COMP%]{margin-left:45px}.m-v-45[_ngcontent-%COMP%]{margin:45px 0}.m-h-45[_ngcontent-%COMP%]{margin:0 45px}.m-50[_ngcontent-%COMP%]{margin:50px}.m-t-50[_ngcontent-%COMP%]{margin-top:50px}.m-r-50[_ngcontent-%COMP%]{margin-right:50px}.m-b-50[_ngcontent-%COMP%]{margin-bottom:50px}.m-l-50[_ngcontent-%COMP%]{margin-left:50px}.m-v-50[_ngcontent-%COMP%]{margin:50px 0}.m-h-50[_ngcontent-%COMP%]{margin:0 50px}.m-55[_ngcontent-%COMP%]{margin:55px}.m-t-55[_ngcontent-%COMP%]{margin-top:55px}.m-r-55[_ngcontent-%COMP%]{margin-right:55px}.m-b-55[_ngcontent-%COMP%]{margin-bottom:55px}.m-l-55[_ngcontent-%COMP%]{margin-left:55px}.m-v-55[_ngcontent-%COMP%]{margin:55px 0}.m-h-55[_ngcontent-%COMP%]{margin:0 55px}.m-60[_ngcontent-%COMP%]{margin:60px}.m-t-60[_ngcontent-%COMP%]{margin-top:60px}.m-r-60[_ngcontent-%COMP%]{margin-right:60px}.m-b-60[_ngcontent-%COMP%]{margin-bottom:60px}.m-l-60[_ngcontent-%COMP%]{margin-left:60px}.m-v-60[_ngcontent-%COMP%]{margin:60px 0}.m-h-60[_ngcontent-%COMP%]{margin:0 60px}.m-65[_ngcontent-%COMP%]{margin:65px}.m-t-65[_ngcontent-%COMP%]{margin-top:65px}.m-r-65[_ngcontent-%COMP%]{margin-right:65px}.m-b-65[_ngcontent-%COMP%]{margin-bottom:65px}.m-l-65[_ngcontent-%COMP%]{margin-left:65px}.m-v-65[_ngcontent-%COMP%]{margin:65px 0}.m-h-65[_ngcontent-%COMP%]{margin:0 65px}.m-70[_ngcontent-%COMP%]{margin:70px}.m-t-70[_ngcontent-%COMP%]{margin-top:70px}.m-r-70[_ngcontent-%COMP%]{margin-right:70px}.m-b-70[_ngcontent-%COMP%]{margin-bottom:70px}.m-l-70[_ngcontent-%COMP%]{margin-left:70px}.m-v-70[_ngcontent-%COMP%]{margin:70px 0}.m-h-70[_ngcontent-%COMP%]{margin:0 70px}.m-75[_ngcontent-%COMP%]{margin:75px}.m-t-75[_ngcontent-%COMP%]{margin-top:75px}.m-r-75[_ngcontent-%COMP%]{margin-right:75px}.m-b-75[_ngcontent-%COMP%]{margin-bottom:75px}.m-l-75[_ngcontent-%COMP%]{margin-left:75px}.m-v-75[_ngcontent-%COMP%]{margin:75px 0}.m-h-75[_ngcontent-%COMP%]{margin:0 75px}.m-80[_ngcontent-%COMP%]{margin:80px}.m-t-80[_ngcontent-%COMP%]{margin-top:80px}.m-r-80[_ngcontent-%COMP%]{margin-right:80px}.m-b-80[_ngcontent-%COMP%]{margin-bottom:80px}.m-l-80[_ngcontent-%COMP%]{margin-left:80px}.m-v-80[_ngcontent-%COMP%]{margin:80px 0}.m-h-80[_ngcontent-%COMP%]{margin:0 80px}.no-m[_ngcontent-%COMP%]{margin:0}.no-m-t[_ngcontent-%COMP%]{margin-top:0}.no-m-r[_ngcontent-%COMP%]{margin-right:0}.no-m-b[_ngcontent-%COMP%]{margin-bottom:0}.no-m-l[_ngcontent-%COMP%]{margin-left:0}.no-m-v[_ngcontent-%COMP%], .no-m-h[_ngcontent-%COMP%], .no-margin[_ngcontent-%COMP%]{margin:0}.no-m-lr[_ngcontent-%COMP%], .no-m-rl[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.no-m-tb[_ngcontent-%COMP%], .no-m-bt[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.m-t-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-bottom:0}.m-b-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0}.m-l-only[_ngcontent-%COMP%]{margin-right:0;margin-top:0;margin-bottom:0}.m-r-only[_ngcontent-%COMP%]{margin-left:0;margin-top:0;margin-bottom:0}.m-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.ls-0[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}div[_ngcontent-%COMP%]{box-sizing:border-box}.color-inherit[_ngcontent-%COMP%]{color:inherit}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}.nolist[_ngcontent-%COMP%]{list-style:none}.actions-menu[_ngcontent-%COMP%]{color:#fff}.alert[_ngcontent-%COMP%]{background-color:#e8f4fd;padding:6px 16px;font-size:.875rem;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;line-height:1.43;border-radius:4px;letter-spacing:normal;margin:10px}.alert[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 0;font-size:18px}.alert[_ngcontent-%COMP%]   .alert-check[_ngcontent-%COMP%]{color:#359ff4;margin-right:2px;font-size:1.4rem}  .mat-tooltip{font-size:15px;color:#fff!important;background-color:#4461e2b3;border:1px solid rgb(25.7777777778,51.5555555556,166.2222222222);max-width:400px!important;white-space:pre-line!important}.loading[_ngcontent-%COMP%]{position:absolute;min-width:100%;width:100px;height:12px;background:linear-gradient(125deg,#fff,#4461e2,#fff);animation:grow 4s linear infinite,move 4s linear infinite}mat-card-title[_ngcontent-%COMP%]{font-weight:600;font-size:x-large;padding-left:20px;padding-top:20px}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.overflow-x-scroll[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.overflow-no[_ngcontent-%COMP%]{overflow:hidden}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll}.table-container[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}body[_ngcontent-%COMP%], .no-p[_ngcontent-%COMP%]{padding:0}.no-p-t[_ngcontent-%COMP%]{padding-top:0}.no-p-r[_ngcontent-%COMP%]{padding-right:0}.no-p-b[_ngcontent-%COMP%]{padding-bottom:0}.no-p-l[_ngcontent-%COMP%]{padding-left:0}.no-p-v[_ngcontent-%COMP%], .no-p-h[_ngcontent-%COMP%]{padding:0}.p-5[_ngcontent-%COMP%]{padding:5px}.p-t-5[_ngcontent-%COMP%]{padding-top:5px}.p-r-5[_ngcontent-%COMP%]{padding-right:5px}.p-b-5[_ngcontent-%COMP%]{padding-bottom:5px}.p-l-5[_ngcontent-%COMP%]{padding-left:5px}.p-v-5[_ngcontent-%COMP%]{padding:5px 0}.p-h-5[_ngcontent-%COMP%]{padding:0 5px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-t-10[_ngcontent-%COMP%]{padding-top:10px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.p-v-10[_ngcontent-%COMP%]{padding:10px 0}.p-h-10[_ngcontent-%COMP%]{padding:0 10px}.p-15[_ngcontent-%COMP%]{padding:15px}.p-t-15[_ngcontent-%COMP%]{padding-top:15px}.p-r-15[_ngcontent-%COMP%]{padding-right:15px}.p-b-15[_ngcontent-%COMP%]{padding-bottom:15px}.p-l-15[_ngcontent-%COMP%]{padding-left:15px}.p-v-15[_ngcontent-%COMP%]{padding:15px 0}.p-h-15[_ngcontent-%COMP%]{padding:0 15px}.p-20[_ngcontent-%COMP%]{padding:20px}.p-t-20[_ngcontent-%COMP%]{padding-top:20px}.p-r-20[_ngcontent-%COMP%]{padding-right:20px}.p-b-20[_ngcontent-%COMP%]{padding-bottom:20px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-v-20[_ngcontent-%COMP%]{padding:20px 0}.p-h-20[_ngcontent-%COMP%]{padding:0 20px}.p-25[_ngcontent-%COMP%]{padding:25px}.p-t-25[_ngcontent-%COMP%]{padding-top:25px}.p-r-25[_ngcontent-%COMP%]{padding-right:25px}.p-b-25[_ngcontent-%COMP%]{padding-bottom:25px}.p-l-25[_ngcontent-%COMP%]{padding-left:25px}.p-v-25[_ngcontent-%COMP%]{padding:25px 0}.p-h-25[_ngcontent-%COMP%]{padding:0 25px}.p-30[_ngcontent-%COMP%]{padding:30px}.p-t-30[_ngcontent-%COMP%]{padding-top:30px}.p-r-30[_ngcontent-%COMP%]{padding-right:30px}.p-b-30[_ngcontent-%COMP%]{padding-bottom:30px}.p-l-30[_ngcontent-%COMP%]{padding-left:30px}.p-v-30[_ngcontent-%COMP%]{padding:30px 0}.p-h-30[_ngcontent-%COMP%]{padding:0 30px}.p-35[_ngcontent-%COMP%]{padding:35px}.p-t-35[_ngcontent-%COMP%]{padding-top:35px}.p-r-35[_ngcontent-%COMP%]{padding-right:35px}.p-b-35[_ngcontent-%COMP%]{padding-bottom:35px}.p-l-35[_ngcontent-%COMP%]{padding-left:35px}.p-v-35[_ngcontent-%COMP%]{padding:35px 0}.p-h-35[_ngcontent-%COMP%]{padding:0 35px}.p-40[_ngcontent-%COMP%]{padding:40px}.p-t-40[_ngcontent-%COMP%]{padding-top:40px}.p-r-40[_ngcontent-%COMP%]{padding-right:40px}.p-b-40[_ngcontent-%COMP%]{padding-bottom:40px}.p-l-40[_ngcontent-%COMP%]{padding-left:40px}.p-v-40[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px}.p-h-40[_ngcontent-%COMP%]{padding:0 40px}.p-45[_ngcontent-%COMP%]{padding:45px}.p-t-45[_ngcontent-%COMP%]{padding-top:45px}.p-r-45[_ngcontent-%COMP%]{padding-right:45px}.p-b-45[_ngcontent-%COMP%]{padding-bottom:45px}.p-l-45[_ngcontent-%COMP%]{padding-left:45px}.p-v-45[_ngcontent-%COMP%]{padding:45px 0}.p-h-45[_ngcontent-%COMP%]{padding:0 45px}.p-50[_ngcontent-%COMP%]{padding:50px}.p-t-50[_ngcontent-%COMP%]{padding-top:50px}.p-r-50[_ngcontent-%COMP%]{padding-right:50px}.p-b-50[_ngcontent-%COMP%]{padding-bottom:50px}.p-l-50[_ngcontent-%COMP%]{padding-left:50px}.p-v-50[_ngcontent-%COMP%]{padding:50px 0}.p-h-50[_ngcontent-%COMP%]{padding:0 50px}.p-55[_ngcontent-%COMP%]{padding:55px}.p-t-55[_ngcontent-%COMP%]{padding-top:55px}.p-r-55[_ngcontent-%COMP%]{padding-right:55px}.p-b-55[_ngcontent-%COMP%]{padding-bottom:55px}.p-l-55[_ngcontent-%COMP%]{padding-left:55px}.p-v-55[_ngcontent-%COMP%]{padding:55px 0}.p-h-55[_ngcontent-%COMP%]{padding:0 55px}.p-60[_ngcontent-%COMP%]{padding:60px}.p-t-60[_ngcontent-%COMP%]{padding-top:60px}.p-r-60[_ngcontent-%COMP%]{padding-right:60px}.p-b-60[_ngcontent-%COMP%]{padding-bottom:60px}.p-l-60[_ngcontent-%COMP%]{padding-left:60px}.p-v-60[_ngcontent-%COMP%]{padding:60px 0}.p-h-60[_ngcontent-%COMP%]{padding:0 60px}.p-65[_ngcontent-%COMP%]{padding:65px}.p-t-65[_ngcontent-%COMP%]{padding-top:65px}.p-r-65[_ngcontent-%COMP%]{padding-right:65px}.p-b-65[_ngcontent-%COMP%]{padding-bottom:65px}.p-l-65[_ngcontent-%COMP%]{padding-left:65px}.p-v-65[_ngcontent-%COMP%]{padding:65px 0}.p-h-65[_ngcontent-%COMP%]{padding:0 65px}.p-70[_ngcontent-%COMP%]{padding:70px}.p-t-70[_ngcontent-%COMP%]{padding-top:70px}.p-r-70[_ngcontent-%COMP%]{padding-right:70px}.p-b-70[_ngcontent-%COMP%]{padding-bottom:70px}.p-l-70[_ngcontent-%COMP%]{padding-left:70px}.p-v-70[_ngcontent-%COMP%]{padding:70px 0}.p-h-70[_ngcontent-%COMP%]{padding:0 70px}.p-75[_ngcontent-%COMP%]{padding:75px}.p-t-75[_ngcontent-%COMP%]{padding-top:75px}.p-r-75[_ngcontent-%COMP%]{padding-right:75px}.p-b-75[_ngcontent-%COMP%]{padding-bottom:75px}.p-l-75[_ngcontent-%COMP%]{padding-left:75px}.p-v-75[_ngcontent-%COMP%]{padding:75px 0}.p-h-75[_ngcontent-%COMP%]{padding:0 75px}.p-80[_ngcontent-%COMP%]{padding:80px}.p-t-80[_ngcontent-%COMP%]{padding-top:80px}.p-r-80[_ngcontent-%COMP%]{padding-right:80px}.p-b-80[_ngcontent-%COMP%]{padding-bottom:80px}.p-l-80[_ngcontent-%COMP%]{padding-left:80px}.p-v-80[_ngcontent-%COMP%]{padding:80px 0}.p-h-80[_ngcontent-%COMP%]{padding:0 80px}.no-padding[_ngcontent-%COMP%]{padding:0!important}.no-pad-lr[_ngcontent-%COMP%], .no-pad-rl[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.no-pad-tb[_ngcontent-%COMP%], .no-pad-bt[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.pad-t-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0}.pad-b-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0}.pad-l-only[_ngcontent-%COMP%]{padding-right:0;padding-top:0;padding-bottom:0}.pad-r-only[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-bottom:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], .relative[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%], .absolute[_ngcontent-%COMP%]{position:absolute}.fixed[_ngcontent-%COMP%]{position:fixed}.status-active[_ngcontent-%COMP%]{color:#5cb85c}.status-inactive[_ngcontent-%COMP%]{color:#666f73}.status-deleted[_ngcontent-%COMP%]{color:#000}.status-pending[_ngcontent-%COMP%]{color:orange}.status-approved[_ngcontent-%COMP%]{color:#4461e2}.status-overpaid[_ngcontent-%COMP%]{color:purple}.status-chargeoff[_ngcontent-%COMP%]{color:#f39c12}.status-active-overdue[_ngcontent-%COMP%], .status-block[_ngcontent-%COMP%]{color:red}.status-matured[_ngcontent-%COMP%]{color:#ff4000}.subStatus-contract-termination[_ngcontent-%COMP%]{color:#b3b3b3}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]{background-color:#2af72a}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-progress[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-hold[_ngcontent-%COMP%]{color:#df0101}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}html[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:14px;color:#000000de;line-height:1.5;letter-spacing:normal}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.lh-1[_ngcontent-%COMP%]{line-height:1}.lh-13[_ngcontent-%COMP%]{line-height:1.3}.lh-15[_ngcontent-%COMP%]{line-height:1.5}.bold[_ngcontent-%COMP%], .strong[_ngcontent-%COMP%]{font-weight:700}.no-bold[_ngcontent-%COMP%]{font-weight:400}.italic[_ngcontent-%COMP%], .em[_ngcontent-%COMP%]{font-style:italic}.strike[_ngcontent-%COMP%]{text-decoration:line-through}.normal[_ngcontent-%COMP%]{font-weight:400;font-style:normal}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.w100[_ngcontent-%COMP%]{font-weight:100}.w200[_ngcontent-%COMP%]{font-weight:200}.w300[_ngcontent-%COMP%]{font-weight:300}.w400[_ngcontent-%COMP%]{font-weight:400}.w500[_ngcontent-%COMP%]{font-weight:500}.w600[_ngcontent-%COMP%]{font-weight:600}.w700[_ngcontent-%COMP%]{font-weight:700}.w800[_ngcontent-%COMP%]{font-weight:800}.w900[_ngcontent-%COMP%]{font-weight:900}.f9[_ngcontent-%COMP%]{font-size:9px}.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f15[_ngcontent-%COMP%]{font-size:15px}.f16[_ngcontent-%COMP%]{font-size:16px}.f17[_ngcontent-%COMP%]{font-size:17px}.f18[_ngcontent-%COMP%]{font-size:18px;line-height:30px}.f19[_ngcontent-%COMP%]{font-size:19px}.f20[_ngcontent-%COMP%]{font-size:20px}.f30[_ngcontent-%COMP%]{font-size:30px}.f40[_ngcontent-%COMP%]{font-size:40px}.f50[_ngcontent-%COMP%]{font-size:50px}.f60[_ngcontent-%COMP%]{font-size:60px}.size-small[_ngcontent-%COMP%]{font-size:75%}.size-normal[_ngcontent-%COMP%]{font-size:100%}.size-medium[_ngcontent-%COMP%]{font-size:125%}.size-big[_ngcontent-%COMP%], .size-large[_ngcontent-%COMP%]{font-size:150%}.size-huge[_ngcontent-%COMP%]{font-size:200%}.inherit[_ngcontent-%COMP%]{font:inherit}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.text-rgb-2[_ngcontent-%COMP%]{color:#0003}.text-rgb-3[_ngcontent-%COMP%]{color:#0000004d}.text-rgb-4[_ngcontent-%COMP%]{color:#0006}.text-rgb-5[_ngcontent-%COMP%]{color:#00000080}.no-ul[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]:hover, .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.auto-cell-size[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.ls-0[_ngcontent-%COMP%]{letter-spacing:-3px;white-space:nowrap}.label-field[_ngcontent-%COMP%]{margin-top:32px}.fit[_ngcontent-%COMP%]{max-width:100%}.half-width[_ngcontent-%COMP%]{width:50%}.full-width[_ngcontent-%COMP%]{width:100%}.full-height[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100%}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{max-width:74rem;width:90%}.mw300[_ngcontent-%COMP%]{max-width:300px}.mw400[_ngcontent-%COMP%]{max-width:400px}.mw500[_ngcontent-%COMP%]{max-width:500px}.mw600[_ngcontent-%COMP%]{max-width:600px}.fullwidth[_ngcontent-%COMP%]{width:100%}.zindex-1[_ngcontent-%COMP%]{z-index:1}.zindex-2[_ngcontent-%COMP%]{z-index:2}.zindex-3[_ngcontent-%COMP%]{z-index:3}.zindex-4[_ngcontent-%COMP%]{z-index:4}.container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1rem 0;word-wrap:break-word}.container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   mifosx-transaction-payment-detail[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.transaction-buttons[_ngcontent-%COMP%]{margin-top:3%}.loan-relation[_ngcontent-%COMP%]{background-color:#d7dada}.active[_ngcontent-%COMP%]{background-color:#5cb85c;height:4px}.linked[_ngcontent-%COMP%]{background-color:#4461e2;height:4px}.undo[_ngcontent-%COMP%]{background-color:red;height:4px}"]})}}return e})();var Yh=()=>["../"];function Kh(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
          `),a()),e&2&&(o(),V(`
            `,p(2,3,"labels.inputs.Transaction Date")," ",p(3,5,"labels.commons.is"),`
            `),o(4),f(" ",p(6,7,"labels.commons.required")," "))}function Jh(e,r){if(e&1&&(i(0,"mat-option",19),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
              `,n.name,`
            `)}}function Zh(e,r){e&1&&(i(0,"mat-form-field"),t(1,`
          `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
          `),g(6,"input",20),t(7,`
        `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Account Number")))}function Xh(e,r){e&1&&(i(0,"mat-form-field"),t(1,`
          `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
          `),g(6,"input",21),t(7,`
        `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Cheque")))}function tv(e,r){e&1&&(i(0,"mat-form-field"),t(1,`
          `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
          `),g(6,"input",22),t(7,`
        `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Routing Code")))}function ev(e,r){e&1&&(i(0,"mat-form-field"),t(1,`
          `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
          `),g(6,"input",23),t(7,`
        `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Receipt Number")))}function nv(e,r){e&1&&(i(0,"mat-form-field"),t(1,`
          `),i(2,"mat-label"),t(3),s(4,"translate"),a(),t(5,`
          `),g(6,"input",24),t(7,`
        `),a()),e&2&&(o(3),x(p(4,1,"labels.inputs.Bank")))}var Gi=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.route=m,this.router=l,this.dateUtils=u,this.loansService=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.showPaymentDetails=!1,this.route.data.subscribe(y=>{this.transactionTemplateData=y.loansAccountTransactionTemplate,y.loansAccountTransactionTemplate.currency&&(this.currency=y.loansAccountTransactionTemplate.currency),this.paymentTypeOptions=this.transactionTemplateData.paymentTypeOptions}),this.loanAccountId=this.route.snapshot.params.loanId}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createEditTransactionForm(),this.editTransactionForm.patchValue({transactionDate:this.transactionTemplateData.date&&new Date(this.transactionTemplateData.date),transactionAmount:this.transactionTemplateData.amount,externalId:this.transactionTemplateData.externalId,paymentTypeId:this.transactionTemplateData.paymentTypeId})}createEditTransactionForm(){this.editTransactionForm=this.formBuilder.group({transactionDate:["",q.required],transactionAmount:["",q.required],externalId:[""],paymentTypeId:[""]})}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.editTransactionForm.addControl("accountNumber",new K("")),this.editTransactionForm.addControl("checkNumber",new K("")),this.editTransactionForm.addControl("routingCode",new K("")),this.editTransactionForm.addControl("receiptNumber",new K("")),this.editTransactionForm.addControl("bankNumber",new K(""))):(this.editTransactionForm.removeControl("accountNumber"),this.editTransactionForm.removeControl("checkNumber"),this.editTransactionForm.removeControl("routingCode"),this.editTransactionForm.removeControl("receiptNumber"),this.editTransactionForm.removeControl("bankNumber"))}submit(){let n=this.editTransactionForm.value,m=this.settingsService.language.code,l=this.settingsService.dateFormat,u=this.editTransactionForm.value.transactionDate;n.transactionDate instanceof Date&&(n.transactionDate=this.dateUtils.formatDate(u,l));let _=ft(W({},n),{dateFormat:l,locale:m});_.transactionAmount=_.transactionAmount*1,this.loansService.executeLoansAccountTransactionsCommand(this.loanAccountId,"modify",_,this.transactionTemplateData.id).subscribe(h=>{this.router.navigate(["../"],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(B),v($),v(Y),v(R),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-edit-transaction"]],decls:89,vars:38,consts:[["dueDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],[1,"layout-column"],[3,"click"],["matInput","","formControlName","transactionDate","required","",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],[3,"currency","isRequired","inputFormControl","inputLabel"],["matInput","","formControlName","externalId"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-fill"],[1,"expandcollapsebutton","m-l-10","m-t-40","flex-75",3,"click"],[3,"className"],[1,"m-l-10"],[1,"layout-row","layout-xs-column","layout-align-center","gap-5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"],[3,"value"],["type","number","formControlName","accountNumber","matInput",""],["type","number","formControlName","checkNumber","matInput",""],["formControlName","routingCode","matInput",""],["formControlName","receiptNumber","matInput",""],["formControlName","bankNumber","matInput",""]],template:function(m,l){if(m&1){let u=O();i(0,"div",1),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",2),T("ngSubmit",function(){return P(u),M(l.submit())}),t(5,`
      `),i(6,"mat-card-content",3),t(7,`
        `),i(8,"mat-form-field",4),T("click",function(){P(u);let h=F(19);return M(h.open())}),t(9,`
          `),i(10,"mat-label"),t(11),s(12,"translate"),a(),t(13,`
          `),g(14,"input",5),t(15,`
          `),g(16,"mat-datepicker-toggle",6),t(17,`
          `),g(18,"mat-datepicker",null,0),t(20,`
          `),d(21,Kh,8,9,"mat-error",7),t(22,`
        `),a(),t(23,`

        `),i(24,"mifosx-input-amount",8),t(25,`
        `),a(),t(26,`

        `),i(27,"mat-form-field"),t(28,`
          `),i(29,"mat-label"),t(30),s(31,"translate"),a(),t(32,`
          `),g(33,"input",9),t(34,`
        `),a(),t(35,`

        `),i(36,"mat-form-field"),t(37,`
          `),i(38,"mat-label"),t(39),s(40,"translate"),a(),t(41,`
          `),i(42,"mat-select",10),t(43,`
            `),d(44,Jh,2,2,"mat-option",11),t(45,`
          `),a(),t(46,`
        `),a(),t(47,`

        `),i(48,"div",12),t(49,`
          `),i(50,"span",13),T("click",function(){return P(u),M(l.addPaymentDetails())}),t(51,`
            `),i(52,"mat-slide-toggle"),t(53,`
              `),i(54,"div",14),t(55,`
                `),i(56,"span",15),t(57),s(58,"translate"),a(),t(59,`
              `),a(),t(60,`
            `),a(),t(61,`
          `),a(),t(62,`
        `),a(),t(63,`

        `),d(64,Zh,8,3,"mat-form-field",7),t(65,`

        `),d(66,Xh,8,3,"mat-form-field",7),t(67,`

        `),d(68,tv,8,3,"mat-form-field",7),t(69,`

        `),d(70,ev,8,3,"mat-form-field",7),t(71,`

        `),d(72,nv,8,3,"mat-form-field",7),t(73,`

        `),i(74,"mat-card-actions",16),t(75,`
          `),i(76,"button",17),t(77),s(78,"translate"),a(),t(79,`
          `),i(80,"button",18),t(81),s(82,"translate"),a(),t(83,`
        `),a(),t(84,`
      `),a(),t(85,`
    `),a(),t(86,`
  `),a(),t(87,`
`),a(),t(88,`
`)}if(m&2){let u=F(19);o(4),c("formGroup",l.editTransactionForm),o(7),x(p(12,25,"labels.inputs.Transaction Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.editTransactionForm.controls.transactionDate.hasError("required")),o(3),c("currency",l.currency)("isRequired",!0)("inputFormControl",l.editTransactionForm.controls.transactionAmount)("inputLabel","Transaction Amount"),o(6),x(p(31,27,"labels.inputs.External Id")),o(9),x(p(40,29,"labels.inputs.Payment Type")),o(5),c("ngForOf",l.paymentTypeOptions),o(10),c("className",l.showPaymentDetails?"enabled":"disabled"),o(3),x(p(58,31,"labels.inputs.Show Payment Details")),o(7),c("ngIf",l.editTransactionForm.controls.accountNumber),o(2),c("ngIf",l.editTransactionForm.controls.checkNumber),o(2),c("ngIf",l.editTransactionForm.controls.routingCode),o(2),c("ngIf",l.editTransactionForm.controls.receiptNumber),o(2),c("ngIf",l.editTransactionForm.controls.bankNumber),o(4),c("routerLink",N(37,Yh)),o(),f(`
            `,p(78,33,"labels.buttons.Cancel"),`
          `),o(3),c("disabled",!l.editTransactionForm.valid),o(),f(`
            `,p(82,35,"labels.buttons.Submit"),`
          `)}},dependencies:[A,It,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,Dt,Tt,yt,j,L,ce,Ee],styles:[".container[_ngcontent-%COMP%]{width:37rem;margin-top:3%;padding-bottom:2%}"]})}}return e})();var iv=()=>["../../../general"],Ui=(()=>{class e{constructor(n,m){this.sanitizer=n,this.route=m,this.route.data.subscribe(l=>{this.transactionRecieptData=l.loansTransactionReciept})}ngOnInit(){let n=this.transactionRecieptData.headers.get("Content-Type"),m=new Blob([this.transactionRecieptData.body],{type:n}),l=URL.createObjectURL(m);this.pentahoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(l)}static{this.\u0275fac=function(m){return new(m||e)(v(Ze),v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-view-reciept"]],decls:14,vars:6,consts:[[1,"container"],[1,"back-button"],["type","button","color","primary","mat-raised-button","",3,"routerLink"],["icon","arrow-left",1,"m-r-10"],["frameborder","0","width","100%","height","600px;",3,"src"]],template:function(m,l){m&1&&(i(0,"mat-card",0),t(1,`
  `),i(2,"div",1),t(3,`
    `),i(4,"button",2),t(5,`
      `),g(6,"fa-icon",3),t(7),s(8,"translate"),a(),t(9,`
  `),a(),t(10,`

  `),g(11,"iframe",4),t(12,`
`),a(),t(13,`
`)),m&2&&(o(4),c("routerLink",N(5,iv)),o(3),f("",p(8,3,"labels.buttons.Back"),`
    `),o(4),c("src",l.pentahoUrl,Tn))},dependencies:[A,w,H,et,j,L,Ot],styles:[".container[_ngcontent-%COMP%]{max-width:50rem}.container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{max-height:2%;margin-bottom:2%}"]})}}return e})();var ov=()=>["../"];function rv(e,r){if(e&1&&g(0,"iframe",14),e&2){let n=C();c("src",n.pentahoUrl,Tn)}}var $i=(()=>{class e{constructor(n,m,l,u,_,h){this.sanitizer=n,this.reportsService=m,this.formBuilder=l,this.dateUtils=u,this.route=_,this.settingsService=h,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.hideOutput=!0,this.route.parent.parent.data.subscribe(y=>{this.loansAccountId=y.loanDetailsData.accountNo})}ngOnInit(){this.maxDate=this.settingsService.businessDate,this.createTransactionsReportForm()}createTransactionsReportForm(){this.transactionsReportForm=this.formBuilder.group({fromDate:["",q.required],toDate:[this.settingsService.businessDate,q.required]})}generate(){let n=this.settingsService.dateFormat,m={"output-type":"PDF",R_startDate:this.dateUtils.formatDate(this.transactionsReportForm.value.fromDate,n),R_endDate:this.dateUtils.formatDate(this.transactionsReportForm.value.toDate,n),R_selectLoan:this.loansAccountId};this.reportsService.getPentahoRunReportData("Client Loan Account Schedule",m,"default","en",n).subscribe(l=>{let u=l.headers.get("Content-Type"),_=new Blob([l.body],{type:u}),h=URL.createObjectURL(_);this.pentahoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(h),this.hideOutput=!1})}static{this.\u0275fac=function(m){return new(m||e)(v(Ze),v(zn),v(it),v(Y),v(B),v(G))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-export-transactions"]],decls:67,vars:43,consts:[["fromDatePicker",""],["toDatePicker",""],[1,"layout-column","m-t-20",3,"ngSubmit","formGroup"],[1,"layout-row","layout-align-center","gap-3percent"],[1,"flex-fill",3,"click"],["matInput","","required","","formControlName","fromDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[1,"flex-fill","flex-30",3,"click"],["matInput","","required","","formControlName","toDate",3,"min","max","matDatepicker"],[1,"generate-button","layout-row","layout-xs-column","layout-align-center","gap-5percent"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"],["icon","cogs",1,"m-r-10"],["frameborder","0","width","100%","height","750px;",3,"src",4,"ngIf"],["frameborder","0","width","100%","height","750px;",3,"src"]],template:function(m,l){if(m&1){let u=O();i(0,"form",2),T("ngSubmit",function(){return P(u),M(l.generate())}),t(1,`
  `),i(2,"div",3),t(3,`
    `),i(4,"mat-form-field",4),T("click",function(){P(u);let h=F(15);return M(h.open())}),t(5,`
      `),i(6,"mat-label"),t(7),s(8,"translate"),a(),t(9,`
      `),g(10,"input",5),t(11,`
      `),g(12,"mat-datepicker-toggle",6),t(13,`
      `),g(14,"mat-datepicker",null,0),t(16,`
      `),i(17,"mat-error"),t(18),s(19,"translate"),s(20,"translate"),i(21,"strong"),t(22),s(23,"translate"),a(),t(24,`
      `),a(),t(25,`
    `),a(),t(26,`

    `),i(27,"mat-form-field",7),T("click",function(){P(u);let h=F(38);return M(h.open())}),t(28,`
      `),i(29,"mat-label"),t(30),s(31,"translate"),a(),t(32,`
      `),g(33,"input",8),t(34,`
      `),g(35,"mat-datepicker-toggle",6),t(36,`
      `),g(37,"mat-datepicker",null,1),t(39,`
      `),i(40,"mat-error"),t(41),s(42,"translate"),s(43,"translate"),i(44,"strong"),t(45),s(46,"translate"),a(),t(47,`
      `),a(),t(48,`
    `),a(),t(49,`
  `),a(),t(50,`

  `),i(51,"div",9),t(52,`
    `),i(53,"button",10),t(54),s(55,"translate"),a(),t(56,`
    `),i(57,"button",11),t(58,`
      `),g(59,"fa-icon",12),t(60),s(61,"translate"),a(),t(62,`
  `),a(),t(63,`
`),a(),t(64,`

`),d(65,rv,1,1,"iframe",13),t(66,`
`)}if(m&2){let u=F(15),_=F(38);c("formGroup",l.transactionsReportForm),o(7),x(p(8,22,"labels.inputs.From Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(6),V(`
        `,p(19,24,"labels.inputs.From date")," ",p(20,26,"labels.commons.is"),`
        `),o(4),f(" ",p(23,28,"labels.commons.required")," "),o(8),x(p(31,30,"labels.inputs.To Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",_),o(2),c("for",_),o(6),V(`
        `,p(42,32,"labels.inputs.To date")," ",p(43,34,"labels.commons.is"),`
        `),o(4),f(" ",p(46,36,"labels.commons.required")," "),o(8),c("routerLink",N(42,ov)),o(),x(p(55,38,"labels.buttons.Cancel")),o(3),c("disabled",!l.transactionsReportForm.valid),o(3),f("",p(61,40,"labels.buttons.Generate Report"),` \xA0
    `),o(5),c("ngIf",!l.hideOutput)}},dependencies:[A,k,w,gt,nt,J,st,_t,pt,ct,H,X,Z,Ct,bt,at,Dt,Tt,yt,j,L,Ot],styles:[".generate-button[_ngcontent-%COMP%]{max-height:2%;padding:1% 0 2% 6%;align-self:center}"]})}}return e})();var lv=e=>["../../",e,"general"];function mv(e,r){e&1&&(i(0,"th",12),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Loan Id")))}function sv(e,r){if(e&1&&(i(0,"td",13),t(1),a()),e&2){let n=r.$implicit;o(),f(`
          `,n.childLoanId,`
        `)}}function pv(e,r){e&1&&(i(0,"th",12),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client ID")))}function cv(e,r){if(e&1&&(i(0,"td",13),t(1),a()),e&2){let n=r.$implicit;o(),x(n.clientId)}}function dv(e,r){e&1&&(i(0,"th",12),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client Name")))}function uv(e,r){if(e&1&&(i(0,"td",13),t(1),a()),e&2){let n=r.$implicit;o(),x(n.clientName)}}function xv(e,r){e&1&&(i(0,"th",12),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Loan Account Number")))}function fv(e,r){if(e&1&&(i(0,"td",13),t(1),a()),e&2){let n=r.$implicit;o(),x(n.childLoanAccountNo)}}function gv(e,r){e&1&&(i(0,"th",12),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client Principal Loan")))}function _v(e,r){if(e&1&&(i(0,"td",13),t(1),a()),e&2){let n=r.$implicit;o(),x(n.childPrincipalAmount)}}function Cv(e,r){e&1&&(i(0,"th",12),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Group Principal Loan")))}function hv(e,r){if(e&1&&(i(0,"td",13),t(1),a()),e&2){let n=r.$implicit;o(),x(n.parentPrincipalAmount)}}function vv(e,r){e&1&&g(0,"tr",14)}function bv(e,r){if(e&1&&g(0,"tr",15),e&2){let n=r.$implicit;c("routerLink",Te(1,lv,n.childLoanId))}}var Wi=(()=>{class e{constructor(n,m){this.route=n,this.dialog=m,this.displayedColumns=["loanId","clientId","clientName","loanAccountNumber","clientPrincipalLoan","groupPrincipalLoan"],this.route.data.subscribe(l=>{this.glimOverviewData=l.glimData})}ngOnInit(){this.setLoanClientChargeOverview()}setLoanClientChargeOverview(){this.dataSource=new se(this.glimOverviewData)}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-glim-account"]],viewQuery:function(m,l){if(m&1&&ee(we,7),m&2){let u;ne(u=ie())&&(l.paginator=u.first)}},decls:59,vars:6,consts:[[1,"loan-card"],["mat-table","",3,"dataSource"],["matColumnDef","loanId"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","clientId"],["matColumnDef","clientName"],["matColumnDef","loanAccountNumber"],["matColumnDef","clientPrincipalLoan"],["matColumnDef","groupPrincipalLoan"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"routerLink",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"routerLink"]],template:function(m,l){m&1&&(i(0,"mat-card",0),t(1,`
  `),i(2,"mat-card-content"),t(3,`
    `),i(4,"h2"),t(5),s(6,"translate"),a(),t(7,`

    `),i(8,"table",1),t(9,`
      `),b(10,2),t(11,`
        `),d(12,mv,3,3,"th",3),t(13,`
        `),d(14,sv,2,1,"td",4),t(15,`
      `),S(),t(16,`

      `),b(17,5),t(18,`
        `),d(19,pv,3,3,"th",3),t(20,`
        `),d(21,cv,2,1,"td",4),t(22,`
      `),S(),t(23,`

      `),b(24,6),t(25,`
        `),d(26,dv,3,3,"th",3),t(27,`
        `),d(28,uv,2,1,"td",4),t(29,`
      `),S(),t(30,`

      `),b(31,7),t(32,`
        `),d(33,xv,3,3,"th",3),t(34,`
        `),d(35,fv,2,1,"td",4),t(36,`
      `),S(),t(37,`

      `),b(38,8),t(39,`
        `),d(40,gv,3,3,"th",3),t(41,`
        `),d(42,_v,2,1,"td",4),t(43,`
      `),S(),t(44,`

      `),b(45,9),t(46,`
        `),d(47,Cv,3,3,"th",3),t(48,`
        `),d(49,hv,2,1,"td",4),t(50,`
      `),S(),t(51,`

      `),d(52,vv,1,0,"tr",10),t(53,`
      `),d(54,bv,1,3,"tr",11),t(55,`
    `),a(),t(56,`
  `),a(),t(57,`
`),a(),t(58,`
`)),m&2&&(o(5),x(p(6,4,"labels.heading.GLIM Account Overview")),o(3),c("dataSource",l.dataSource),o(44),c("matHeaderRowDef",l.displayedColumns),o(2),c("matRowDefColumns",l.displayedColumns))},dependencies:[A,w,H,et,mt,L,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht],styles:[".loan-card[_ngcontent-%COMP%]{margin:0 auto;max-width:80rem;width:90%;padding:0}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:1%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .loan-card-title[_ngcontent-%COMP%]{color:#fff;width:90%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .loan-card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]{margin:1%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{object-fit:cover;border-radius:20px}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .loan-actions[_ngcontent-%COMP%]{align-self:flex-end;margin:0 1%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .loan-span[_ngcontent-%COMP%]{margin:0 .5%}.loan-card[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]{overflow:auto}.loans-overview[_ngcontent-%COMP%]{font-size:14px}"]})}}return e})();var Sv=()=>["../","general"];function yv(e,r){if(e&1){let n=O();i(0,"th",18),t(1,`
        `),i(2,"mat-checkbox",19),T("change",function(){P(n);let l=C(2);return M(l.toggleSelects())}),hn("ngModelChange",function(l){P(n);let u=C(2);return Cn(u.selectAllItems,l)||(u.selectAllItems=l),M(l)}),a(),t(3,`
      `),a()}if(e&2){let n=C(2);o(2),_n("ngModel",n.selectAllItems)}}function Dv(e,r){if(e&1){let n=O();i(0,"td",20),t(1,`
        `),i(2,"mat-checkbox",19),T("change",function(){P(n);let l=C(2);return M(l.toggleSelect())}),hn("ngModelChange",function(l){let u=P(n).$implicit;return Cn(u.selected,l)||(u.selected=l),M(l)}),a(),t(3,`
      `),a()}if(e&2){let n=r.$implicit;o(2),_n("ngModel",n.selected)}}function Tv(e,r){e&1&&(i(0,"th",18),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client ID")))}function Pv(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.id)}}function Mv(e,r){e&1&&(i(0,"th",18),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Client Name")))}function Ov(e,r){if(e&1&&(i(0,"td",20),t(1),a()),e&2){let n=r.$implicit;o(),x(n.displayName)}}function Iv(e,r){e&1&&(i(0,"th",18),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Loan Purpose")))}function Ev(e,r){if(e&1&&(i(0,"mat-option",23),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
              `,n.name,`
            `)}}function Av(e,r){if(e&1){let n=O();i(0,"td",20),t(1,`
        `),i(2,"mat-form-field"),t(3,`
          `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
          `),i(8,"mat-select",21),hn("ngModelChange",function(l){let u=P(n).$implicit;return Cn(u.loanPurposeId,l)||(u.loanPurposeId=l),M(l)}),t(9,`
            `),d(10,Ev,2,2,"mat-option",22),t(11,`
          `),a(),t(12,`
        `),a(),t(13,`
      `),a()}if(e&2){let n=r.$implicit,m=C(2);o(5),x(p(6,3,"labels.inputs.Select Purpose")),o(3),_n("ngModel",n.loanPurposeId),o(2),c("ngForOf",m.loanPurposeOptions)}}function wv(e,r){e&1&&(i(0,"th",18),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Original Loan")))}function Lv(e,r){if(e&1){let n=O();i(0,"td",20),t(1,`
        `),i(2,"mat-form-field"),t(3,`
          `),i(4,"input",24),hn("ngModelChange",function(l){let u=P(n).$implicit;return Cn(u.principal,l)||(u.principal=l),M(l)}),a(),t(5,`
        `),a(),t(6,`
      `),a()}if(e&2){let n=r.$implicit;o(4),_n("ngModel",n.principal)}}function Rv(e,r){e&1&&g(0,"tr",25)}function Fv(e,r){e&1&&g(0,"tr",26)}function Bv(e,r){if(e&1&&(i(0,"div",7),t(1,`
  `),i(2,"table",8),t(3,`
    `),t(4,`
    `),b(5,9),t(6,`
      `),d(7,yv,4,1,"th",10),t(8,`
      `),d(9,Dv,4,1,"td",11),t(10,`
    `),S(),t(11,`

    `),t(12,`
    `),b(13,12),t(14,`
      `),d(15,Tv,3,3,"th",10),t(16,`
      `),d(17,Pv,2,1,"td",11),t(18,`
    `),S(),t(19,`

    `),t(20,`
    `),b(21,13),t(22,`
      `),d(23,Mv,3,3,"th",10),t(24,`
      `),d(25,Ov,2,1,"td",11),t(26,`
    `),S(),t(27,`

    `),t(28,`
    `),b(29,14),t(30,`
      `),d(31,Iv,3,3,"th",10),t(32,`
      `),d(33,Av,14,5,"td",11),t(34,`
    `),S(),t(35,`

    `),t(36,`
    `),b(37,15),t(38,`
      `),d(39,wv,3,3,"th",10),t(40,`
      `),d(41,Lv,7,1,"td",11),t(42,`
    `),S(),t(43,`

    `),d(44,Rv,1,0,"tr",16),t(45,`
    `),d(46,Fv,1,0,"tr",17),t(47,`
  `),a(),t(48,`
`),a()),e&2){let n=C();o(2),c("dataSource",n.dataSource),o(42),c("matHeaderRowDef",n.displayedColumn),o(2),c("matRowDefColumns",n.displayedColumn)}}function kv(e,r){e&1&&(i(0,"button",27),t(1),s(2,"translate"),a()),e&2&&(c("routerLink",N(4,Sv)),o(),f(`
    `,p(2,2,"labels.buttons.Cancel"),`
  `))}var yn=(()=>{class e{constructor(n){this.route=n,this.loanId=null,this.selectAllItems=!1,this.loanPurposeOptions=[],this.displayedColumn=["check","id","name","purpose","amount"],this.loanId=this.route.snapshot.params.loanId}ngOnInit(){this.dataSource=new se(this.activeClientMembers)}get isValid(){return!this.activeClientMembers||this.selectedClientMembers?.selectedMembers?.reduce((n,m)=>n+(m.principal??0),0)>0}get selectedClientMembers(){return{selectedMembers:this.activeClientMembers.filter(n=>n.selected)}}toggleSelects(){for(let n of this.activeClientMembers)n.selected=this.selectAllItems}toggleSelect(){let n=this.activeClientMembers.length;this.selectAllItems=n===0?!1:this.activeClientMembers.filter(m=>m.selected).length===n}static{this.\u0275fac=function(m){return new(m||e)(v(B))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loans-active-client-members"]],inputs:{activeClientMembers:"activeClientMembers",loansAccountFormValid:"loansAccountFormValid"},decls:19,vars:9,consts:[["class","layout-row-wrap gap-2percent layout-xs-column",4,"ngIf"],[1,"layout-row","responsive-column","align-center","gap-2px","margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left",1,"m-r-10"],["mat-raised-button","","matStepperNext","",3,"disabled"],["icon","arrow-right",1,"m-l-10"],["mat-raised-button","",3,"routerLink",4,"ngIf"],[1,"layout-row-wrap","gap-2percent","layout-xs-column"],["mat-table","",1,"flex-98",3,"dataSource"],["matColumnDef","check"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","name"],["matColumnDef","purpose"],["matColumnDef","amount"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],[3,"change","ngModelChange","ngModel"],["mat-cell",""],[3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","number","matInput","",3,"ngModelChange","ngModel"],["mat-header-row",""],["mat-row",""],["mat-raised-button","",3,"routerLink"]],template:function(m,l){m&1&&(d(0,Bv,49,3,"div",0),t(1,`

`),i(2,"div",1),t(3,`
  `),i(4,"button",2),t(5,`
    `),g(6,"fa-icon",3),t(7),s(8,"translate"),a(),t(9,`
  `),i(10,"button",4),t(11),s(12,"translate"),g(13,"fa-icon",5),t(14,`
  `),a(),t(15,`
  `),d(16,kv,3,5,"button",6),t(17,`
`),a(),t(18,`
`)),m&2&&(c("ngIf",l.activeClientMembers),o(7),f(`
    `,p(8,5,"labels.buttons.Previous"),`
  `),o(3),c("disabled",!l.loansAccountFormValid),o(),f(`
    `,p(12,7,"labels.buttons.Next"),`
    `),o(5),c("ngIf",l.loanId))},dependencies:[A,It,k,w,nt,le,J,H,X,Z,at,Ut,Gt,j,L,Rt,kt,Bt,Nt,Me,Qa,Ua,Ft,Vt,jt,zt,qt,Ht,Oe,Ot,Ae],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.tableName[_ngcontent-%COMP%]{padding-left:2%}"]})}}return e})();var Nv=["dtloan"];function Vv(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",21),t(2,`
    `))}function jv(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",21),t(2,`
    `))}function qv(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",22),t(2,`
    `))}function zv(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",23),t(2,`
    `))}function Hv(e,r){e&1&&(t(0,`
      `),g(1,"fa-icon",24),t(2,`
    `))}function Gv(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.DETAILS"))}function Uv(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.TERMS"))}function $v(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.CHARGES"))}function Wv(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.heading.Active Client Members"))}function Qv(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.REPAYMENT SCHEDULE"))}function Yv(e,r){if(e&1&&(i(0,"mat-step",25),t(1,`
      `),d(2,Qv,2,3,"ng-template",13),t(3,`

      `),i(4,"mifosx-loans-account-schedule-step",26,3),t(6,`
      `),a(),t(7,`
    `),a()),e&2){let n=C();o(4),c("loansAccountTemplate",n.loansAccountTemplate)("loansAccountProductTemplate",n.loansAccountProductTemplate)("loansAccount",n.loansAccount)("currencyCode",n.currencyCode)}}function Kv(e,r){if(e&1&&t(0),e&2){let n=C().$implicit;x(n.registeredTableName)}}function Jv(e,r){if(e&1&&(i(0,"mat-step"),t(1,`
      `),d(2,Kv,1,1,"ng-template",13),t(3,`

      `),g(4,"mifosx-loans-account-datatable-step",27,4),t(6,`
    `),a()),e&2){let n=r.$implicit;o(4),c("datatableData",n)}}function Zv(e,r){e&1&&(t(0),s(1,"translate")),e&2&&x(p(1,1,"labels.inputs.PREVIEW"))}function Xv(e,r){if(e&1){let n=O();i(0,"mat-step",28),t(1,`
      `),d(2,Zv,2,3,"ng-template",13),t(3,`

      `),i(4,"mifosx-loans-account-preview-step",29),T("submitEvent",function(){P(n);let l=C();return M(l.submit())}),t(5,`
      `),a(),t(6,`
    `),a()}if(e&2){let n=C();o(4),c("loansAccountTemplate",n.loansAccountTemplate)("loansAccountProductTemplate",n.loansAccountProductTemplate)("loansAccount",n.loansAccount)("activeClientMembers",n.activeClientMembers)}}var Qi=(()=>{class e{constructor(n,m,l,u,_,h){this.route=n,this.router=m,this.loansService=l,this.settingsService=u,this.clientService=_,this.dateUtils=h,this.loansAccountProductTemplate=null,this.datatables=[],this.route.data.subscribe(y=>{this.loansAccountTemplate=y.loansAccountTemplate,this.dataSource=y.groupsData.activeClientMembers})}setTemplate(n){this.loansAccountProductTemplate=n,this.currencyCode=this.loansAccountProductTemplate.currency.code;let m=this.loansAccountTemplate.clientId;m?this.clientService.getCollateralTemplate(m).subscribe(h=>{this.collateralOptions=h}):console.error("No collateral data requested from Fineract, collateral might misbehave");let l=this.loansAccountTemplate.clientId?this.loansAccountTemplate.clientId:this.loansAccountTemplate.group.id,u=!this.loansAccountTemplate.clientId,_=this.loansAccountProductTemplate.loanProductId;this.loansService.getLoansAccountTemplateResource(l,u,_).subscribe(h=>{this.multiDisburseLoan=h.multiDisburseLoan}),this.setDatatables()}setDatatables(){this.datatables=[],this.loansAccountProductTemplate.datatables&&this.loansAccountProductTemplate.datatables.forEach(n=>{this.datatables.push(n)})}get loansAccountDetailsForm(){return this.loansAccountDetailsStep.loansAccountDetailsForm}get loansAccountTermsForm(){return this.loansAccountTermsStep.loansAccountTermsForm}get activeClientMembers(){return this.dataSource}get loansAccountFormValid(){return this.loansAccountDetailsForm.valid&&this.loansAccountTermsForm.valid&&this.loansActiveClientMembers.isValid}get loanPrincipal(){return this.loansAccountTermsStep.loansAccountTermsForm.value.principal}get loansAccount(){return this.selectedMembers=this.loansActiveClientMembers.selectedClientMembers,W(W(W(W(W({},this.loansAccountDetailsStep.loansAccountDetails),this.loansAccountTermsStep.loansAccountTerms),this.loansAccountChargesStep.loansAccountCharges),this.loansAccountTermsStep.loanCollateral),this.loansAccountTermsStep.disbursementData)}setData(n,m){let l=this.settingsService.language.code,u=this.settingsService.dateFormat,_=ft(W({},this.loansAccount),{charges:this.loansAccount.charges.map(h=>({chargeId:h.id,amount:h.amount})),clientId:n.id,totalLoan:m,loanType:"glim",amortizationType:1,isParentAccount:!0,principal:n.principal,syncDisbursementWithMeeting:!1,expectedDisbursementDate:this.dateUtils.formatDate(this.loansAccount.expectedDisbursementDate,u),submittedOnDate:this.dateUtils.formatDate(this.loansAccount.submittedOnDate,u),dateFormat:u,locale:l});return _.groupId=this.loansAccountTemplate.group.id,delete _.principalAmount,delete _.allowPartialPeriodInterestCalculation,delete _.multiDisburseLoan,delete _.isFloatingInterestRate,JSON.stringify(_)}buildRequestData(){let n=[],m=this.selectedMembers.selectedMembers,l=this.totalLoanAmount();for(let u=0;u<m.length;u++)n.push({requestId:u.toString(),method:"POST",relativeUrl:"loans",body:this.setData(m[u],l)});return n}totalLoanAmount(){let n=0,m=this.selectedMembers.selectedMembers;for(let l=0;l<m.length;l++)n+=m[l].principal;return n}submit(){let n=this.buildRequestData();this.loansService.createGlimAccount(n).subscribe(m=>{let l=JSON.parse(m[0].body);l.glimId?this.router.navigate(["../",l.glimId],{relativeTo:this.route}):this.notify(l,n)})}notify(n,m){let l=n.defaultUserMessage+" ";for(;n.errors?.length>0;)l+=n.errors.pop().developerMessage+" ";l+="Data: "+JSON.stringify(m),console.error(l)}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(R),v(G),v(cn),v(Y))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-create-glim-account"]],viewQuery:function(m,l){if(m&1&&(ee(Re,7),ee(Fe,7),ee(Be,7),ee(yn,7),ee(Nv,5)),m&2){let u;ne(u=ie())&&(l.loansAccountDetailsStep=u.first),ne(u=ie())&&(l.loansAccountTermsStep=u.first),ne(u=ie())&&(l.loansAccountChargesStep=u.first),ne(u=ie())&&(l.loansActiveClientMembers=u.first),ne(u=ie())&&(l.loanDatatables=u)}},decls:57,vars:16,consts:[["loansAccountStepper",""],["loanAccountTerms",""],["loanAccountCharges",""],["loanAccountSchedule",""],["dtloan",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"loansAccountProductTemplate","loansAccountTemplate"],[3,"loansAccountProductTemplate","loansAccountTemplate","collateralOptions","loansAccountFormValid","loanPrincipal"],[3,"loansAccountProductTemplate","loansAccountTemplate","loansAccountFormValid"],[3,"activeClientMembers","loansAccountFormValid"],["state","repayment","completed","",4,"ngIf"],[4,"ngFor","ngForOf"],["state","preview","completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["state","repayment","completed",""],[3,"loansAccountTemplate","loansAccountProductTemplate","loansAccount","currencyCode"],[3,"datatableData"],["state","preview","completed",""],[3,"submitEvent","loansAccountTemplate","loansAccountProductTemplate","loansAccount","activeClientMembers"]],template:function(m,l){if(m&1){let u=O();i(0,"div",5),t(1,`
  `),i(2,"mat-horizontal-stepper",6,0),t(4,`
    `),d(5,Vv,3,0,"ng-template",7),t(6,`

    `),d(7,jv,3,0,"ng-template",8),t(8,`

    `),d(9,qv,3,0,"ng-template",9),t(10,`

    `),d(11,zv,3,0,"ng-template",10),t(12,`

    `),d(13,Hv,3,0,"ng-template",11),t(14,`

    `),i(15,"mat-step",12),t(16,`
      `),d(17,Gv,2,3,"ng-template",13),t(18,`

      `),i(19,"mifosx-loans-account-details-step",14),T("loansAccountProductTemplate",function(h){return P(u),M(l.setTemplate(h))}),t(20,`
      `),a(),t(21,`
    `),a(),t(22,`

    `),i(23,"mat-step",12),t(24,`
      `),d(25,Uv,2,3,"ng-template",13),t(26,`

      `),i(27,"mifosx-loans-account-terms-step",15,1),t(29,`
      `),a(),t(30,`
    `),a(),t(31,`

    `),i(32,"mat-step"),t(33,`
      `),d(34,$v,2,3,"ng-template",13),t(35,`

      `),i(36,"mifosx-loans-account-charges-step",16,2),t(38,`
      `),a(),t(39,`
    `),a(),t(40,`
    `),i(41,"mat-step"),t(42,`
      `),d(43,Wv,2,3,"ng-template",13),t(44,`

      `),i(45,"mifosx-loans-active-client-members",17),t(46,`
      `),a(),t(47,`
    `),a(),t(48,`

    `),d(49,Yv,8,4,"mat-step",18),t(50,`

    `),d(51,Jv,7,1,"mat-step",19),t(52,`

    `),d(53,Xv,7,4,"mat-step",20),t(54,`
  `),a(),t(55,`
`),a(),t(56,`
`)}m&2&&(o(15),c("stepControl",l.loansAccountDetailsForm),o(4),c("loansAccountTemplate",l.loansAccountTemplate),o(4),c("stepControl",l.loansAccountTermsForm),o(4),c("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccountTemplate",l.loansAccountTemplate)("collateralOptions",l.collateralOptions)("loansAccountFormValid",l.loansAccountFormValid)("loanPrincipal",l.loanPrincipal),o(9),c("loansAccountProductTemplate",l.loansAccountProductTemplate)("loansAccountTemplate",l.loansAccountTemplate)("loansAccountFormValid",l.loansAccountFormValid),o(9),c("activeClientMembers",l.activeClientMembers)("loansAccountFormValid",l.loansAccountFormValid),o(4),c("ngIf",l.loansAccountFormValid),o(2),c("ngForOf",l.datatables),o(2),c("ngIf",l.loansAccountFormValid))},dependencies:[A,It,k,w,L,sn,ln,Ot,mn,rn,Re,Fe,Be,yn,We,xn,Qe],encapsulation:2})}}return e})();var Ye=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");if(!isNaN(+m))return this.loansService.getLoanAccountAssociationDetails(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var _a=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getLoanNotes(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Yi=(()=>{class e{constructor(n){this.loansService=n}resolve(){return this.loansService.getLoanDataTables()}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Ca=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.parent.paramMap.get("loanId"),l=n.paramMap.get("datatableName");return this.loansService.getLoanDatatable(m,l)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var ha=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId"),l=n.paramMap.get("action");return l==="Assign Loan Officer"||l==="Change Loan Officer"?this.loansService.getLoanTemplate(m):l==="Make Repayment"?this.loansService.getLoanActionTemplate(m,"repayment"):l==="Goodwill Credit"?this.loansService.getLoanActionTemplate(m,"goodwillCredit"):l==="Interest Payment Waiver"?this.loansService.getLoanActionTemplate(m,"interestPaymentWaiver"):l==="Payout Refund"?this.loansService.getLoanActionTemplate(m,"payoutRefund"):l==="Merchant Issued Refund"?this.loansService.getLoanActionTemplate(m,"merchantIssuedRefund"):l==="Credit Balance Refund"?this.loansService.getLoanActionTemplate(m,"creditBalanceRefund"):l==="Waive Interest"?this.loansService.getLoanActionTemplate(m,"waiveinterest"):l==="Write Off"?this.loansService.getLoanActionTemplate(m,"writeoff"):l==="Close"?this.loansService.getLoanActionTemplate(m,"close"):l==="Close (as Rescheduled)"?this.loansService.getLoanActionTemplate(m,"close-rescheduled"):l==="Reschedule"?this.loansService.rescheduleLoanTemplate():l==="Prepay Loan"?this.loansService.getLoanPrepayLoanActionTemplate(m,null):l==="Add Collateral"?this.loansService.getLoanCollateralTemplate(m):l==="Disburse to Savings"?this.loansService.getLoanActionTemplate(m,"disburseToSavings"):l==="Recovery Payment"?this.loansService.getLoanActionTemplate(m,"recoverypayment"):l==="View Guarantors"?this.loansService.getLoanAccountResource(m,"guarantors"):l==="Create Guarantor"?this.loansService.getGuarantorTemplate(m):l==="Disburse"?this.loansService.getLoanActionTemplate(m,"disburse"):l==="Loan Screen Reports"?this.loansService.getLoanScreenReportsData():l==="Approve"?this.loansService.getLoanApprovalTemplate(m):l==="Add Loan Charge"?this.loansService.getLoanChargeTemplateResource(m):l==="Foreclosure"?this.loansService.getLoanForeclosureActionTemplate(m):l==="Charge-Off"?this.loansService.getLoanActionTemplate(m,"charge-off"):l==="Capitalized Income"?this.loansService.getLoanActionTemplate(m,"capitalizedIncome"):l==="Contract Termination"?this.loansService.getLoanActionTemplate(m,"contractTermination"):l==="Buy Down Fee"?this.loansService.getLoanActionTemplate(m,"buyDownFee"):void 0}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var va=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.parent.parent.paramMap.get("clientId")||n.parent.parent.paramMap.get("groupId"),l=!!n.parent.parent.paramMap.get("groupId");return this.loansService.getLoansAccountTemplateResource(m,l)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var ba=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getLoanDocuments(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Ki=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getLoansAccountAndTemplateResource(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Ji=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId"),l=n.paramMap.get("id");return this.loansService.getLoansAccountCharge(m,l)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Sa=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId"),l=n.paramMap.get("id");return this.loansService.getLoansAccountTransaction(m,l)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var ya=(()=>{class e{constructor(n){this.reportsService=n}resolve(n){let l={"output-type":"PDF",R_transactionId:n.paramMap.get("id")};return this.reportsService.getPentahoRunReportData("Loan Transaction Receipt",l,"default","en","dd MMMM yyyy")}static{this.\u0275fac=function(m){return new(m||e)(At(zn))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Da=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId"),l=n.paramMap.get("id");return this.loansService.getLoansAccountTransactionTemplate(m,l)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Ta=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("groupId"),l=n.paramMap.get("glimId");return this.loansService.getGLIMAccountData(l,m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Pa=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("groupId");return this.loansService.getGLIMLoanAccountTemplate(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Ma=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getDelinquencyTags(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var tb=e=>({data:e});function eb(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
    `),a()),e&2&&(o(),V(`
      `,p(2,3,"labels.inputs.Start Date")," ",p(3,5,"labels.commons.is"),`
      `),o(4),x(p(6,7,"labels.commons.required")))}function nb(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
    `),a()),e&2&&(o(),V(`
      `,p(2,3,"labels.inputs.End Date")," ",p(3,5,"labels.commons.is"),`
      `),o(4),x(p(6,7,"labels.commons.required")))}var Zi=(()=>{class e{constructor(n,m,l){this.dialogRef=n,this.data=m,this.formBuilder=l,this.minDate=new Date(2e3,0,1),this.maxDate=new Date(2100,0,1),this.createDelinquencyActionForm()}createDelinquencyActionForm(){this.delinquencyActionForm=this.formBuilder.group({startDate:[new Date,q.required],endDate:["",q.required]})}static{this.\u0275fac=function(m){return new(m||e)(v(Xe),v(tn),v(it))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-delinquency-action-dialog"]],decls:50,vars:30,consts:[["validFromDatePicker",""],["validTillDatePicker",""],["mat-dialog-title",""],["mat-dialog-content","",1,"layout-column",3,"formGroup"],[1,"flex-48",3,"click"],["matInput","","required","","formControlName","startDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","endDate",3,"min","max","matDatepicker"],[1,"layout-row","layout-xs-column","layout-align-center","gap-2percent"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled"]],template:function(m,l){if(m&1){let u=O();i(0,"h2",2),t(1),s(2,"translate"),a(),t(3,`

`),i(4,"div",3),t(5,`
  `),i(6,"mat-form-field",4),T("click",function(){P(u);let h=F(17);return M(h.open())}),t(7,`
    `),i(8,"mat-label"),t(9),s(10,"translate"),a(),t(11,`
    `),g(12,"input",5),t(13,`
    `),g(14,"mat-datepicker-toggle",6),t(15,`
    `),g(16,"mat-datepicker",null,0),t(18,`
    `),d(19,eb,8,9,"mat-error",7),t(20,`
  `),a(),t(21,`

  `),i(22,"mat-form-field",4),T("click",function(){P(u);let h=F(33);return M(h.open())}),t(23,`
    `),i(24,"mat-label"),t(25),s(26,"translate"),a(),t(27,`
    `),g(28,"input",8),t(29,`
    `),g(30,"mat-datepicker-toggle",6),t(31,`
    `),g(32,"mat-datepicker",null,1),t(34,`
    `),d(35,nb,8,9,"mat-error",7),t(36,`
  `),a(),t(37,`
`),a(),t(38,`

`),i(39,"mat-dialog-actions",9),t(40,`
  `),i(41,"button",10),t(42),s(43,"translate"),a(),t(44,`
  `),i(45,"button",11),t(46),s(47,"translate"),a(),t(48,`
`),a(),t(49,`
`)}if(m&2){let u=F(17),_=F(33);o(),x(p(2,18,"labels.heading.Loan Delinquency Actions")),o(3),c("formGroup",l.delinquencyActionForm),o(5),x(p(10,20,"labels.inputs.Start Date")),o(3),c("min",l.minDate)("max",l.maxDate)("matDatepicker",u),o(2),c("for",u),o(5),c("ngIf",l.delinquencyActionForm.controls.startDate.hasError("required")),o(6),x(p(26,22,"labels.inputs.End Date")),o(3),c("min",l.delinquencyActionForm.value.startDate)("max",l.maxDate)("matDatepicker",_),o(2),c("for",_),o(5),c("ngIf",l.delinquencyActionForm.controls.endDate.hasError("required")),o(7),x(p(43,24,"labels.buttons.Cancel")),o(3),c("mat-dialog-close",Te(28,tb,l.delinquencyActionForm))("disabled",!l.delinquencyActionForm.valid||l.delinquencyActionForm.pristine),o(),f(`
    `,p(47,26,"labels.buttons.Submit"),`
  `)}},dependencies:[A,k,w,nt,J,st,_t,pt,ct,X,Z,Ct,bt,at,Dt,Tt,yt,j,L,nn,an,on,en],encapsulation:2})}}return e})();function ib(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Delinquency Classification")))}function ab(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C().$implicit;o(),V("( ",n.delinquencyRange.minimumAgeDays," - ",n.delinquencyRange.maximumAgeDays," )")}}function ob(e,r){if(e&1&&(i(0,"span"),t(1),a()),e&2){let n=C().$implicit;o(),f("( ",n.delinquencyRange.minimumAgeDays," )")}}function rb(e,r){if(e&1&&(i(0,"td",14),t(1),d(2,ab,2,2,"span",2),t(3,`
        `),d(4,ob,2,1,"span",2),t(5,`
      `),a()),e&2){let n=r.$implicit;o(),f(`
        `,n.delinquencyRange.classification,`
        `),o(),c("ngIf",n.delinquencyRange.maximumAgeDays),o(2),c("ngIf",!n.delinquencyRange.maximumAgeDays)}}function lb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Added On")))}function mb(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
          `,p(2,1,n.addedOnDate),`
        `)}}function sb(e,r){if(e&1&&(i(0,"td",14),t(1,`
        `),d(2,mb,3,3,"span",2),t(3,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.addedOnDate)}}function pb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Lifted On")))}function cb(e,r){if(e&1&&(i(0,"span"),t(1),s(2,"dateFormat"),a()),e&2){let n=C().$implicit;o(),f(`
          `,p(2,1,n.liftedOnDate),`
        `)}}function db(e,r){if(e&1&&(i(0,"td",14),t(1,`
        `),d(2,cb,3,3,"span",2),t(3,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.liftedOnDate)}}function ub(e,r){e&1&&g(0,"tr",15)}function xb(e,r){e&1&&g(0,"tr",16)}function fb(e,r){if(e&1&&(i(0,"table",5),t(1,`
    `),b(2,6),t(3,`
      `),d(4,ib,3,3,"th",7),t(5,`
      `),d(6,rb,6,3,"td",8),t(7,`
    `),S(),t(8,`

    `),b(9,9),t(10,`
      `),d(11,lb,3,3,"th",7),t(12,`
      `),d(13,sb,4,1,"td",8),t(14,`
    `),S(),t(15,`

    `),b(16,10),t(17,`
      `),d(18,pb,3,3,"th",7),t(19,`
      `),d(20,db,4,1,"td",8),t(21,`
    `),S(),t(22,`

    `),d(23,ub,1,0,"tr",11),t(24,`
    `),d(25,xb,1,0,"tr",12),t(26,`
  `),a()),e&2){let n=C();c("dataSource",n.loanDelinquencyTags),o(23),c("matHeaderRowDef",n.loanDelinquencyTagsColumns),o(2),c("matRowDefColumns",n.loanDelinquencyTagsColumns)}}function gb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Delinquency Classification")))}function _b(e,r){if(e&1&&(i(0,"td",14),t(1),a()),e&2){let n=r.$implicit;o(),x(n.classification)}}function Cb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Days")))}function hb(e,r){if(e&1&&(i(0,"td",14),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.minimumAgeDays))}}function vb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Amount")))}function bb(e,r){if(e&1&&(i(0,"td",14),t(1),s(2,"currency"),a()),e&2){let n=r.$implicit,m=C(2);o(),f(`
          `,vt(2,1,n.delinquentAmount,m.currency.code,"symbol-narrow","1.2-2"),`
        `)}}function Sb(e,r){e&1&&g(0,"tr",15)}function yb(e,r){e&1&&g(0,"tr",16)}function Db(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`

    `),i(6,"table",5),t(7,`
      `),b(8,6),t(9,`
        `),d(10,gb,3,3,"th",7),t(11,`
        `),d(12,_b,2,1,"td",8),t(13,`
      `),S(),t(14,`

      `),b(15,17),t(16,`
        `),d(17,Cb,3,3,"th",7),t(18,`
        `),d(19,hb,3,3,"td",8),t(20,`
      `),S(),t(21,`

      `),b(22,18),t(23,`
        `),d(24,vb,3,3,"th",7),t(25,`
        `),d(26,bb,3,6,"td",8),t(27,`
      `),S(),t(28,`

      `),d(29,Sb,1,0,"tr",11),t(30,`
      `),d(31,yb,1,0,"tr",12),t(32,`
    `),a(),t(33,`
  `),a()),e&2){let n=C();o(3),x(p(4,4,"labels.heading.Loan Delinquency Installment Tags")),o(3),c("dataSource",n.installmentLevelDelinquency),o(23),c("matHeaderRowDef",n.installmentDelinquencyTagsColumns),o(2),c("matRowDefColumns",n.installmentDelinquencyTagsColumns)}}function Tb(e,r){if(e&1){let n=O();i(0,"button",21),T("click",function(){P(n);let l=C(2);return M(l.createDelinquencyAction())}),t(1,`
      `),g(2,"fa-icon",22),t(3),s(4,"translate"),a()}e&2&&(o(3),f("",p(4,1,"labels.buttons.Pause Delinquency Classification"),`
    `))}function Pb(e,r){e&1&&(i(0,"div",19),t(1,`
    `),d(2,Tb,5,3,"button",20),t(3,`
  `),a()),e&2&&(o(2),c("mifosxHasPermission","CREATE_DELINQUENCY_ACTION"))}function Mb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Action")))}function Ob(e,r){if(e&1&&(i(0,"td",30),t(1),a()),e&2){let n=r.$implicit,m=C(2);Q("ngClass",m.actionClass(n.action)),o(),x(n.action)}}function Ib(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Start Date")))}function Eb(e,r){if(e&1&&(i(0,"td",14),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.startDate))}}function Ab(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.End Date")))}function wb(e,r){if(e&1&&(i(0,"td",14),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.endDate))}}function Lb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Created On")))}function Rb(e,r){if(e&1&&(i(0,"td",14),t(1),s(2,"datetimeFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.createdOn))}}function Fb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function Bb(e,r){if(e&1){let n=O();i(0,"button",32),s(1,"translate"),T("click",function(){P(n);let l=C(2).$implicit,u=C(2);return M(u.resumeDelinquencyClassification(l))}),t(2,`
              `),g(3,"fa-icon",33),t(4,`
            `),a()}e&2&&Q("matTooltip",p(1,1,"tooltips.Resume Delinquency Classification"))}function kb(e,r){e&1&&(i(0,"span"),t(1,`
            `),d(2,Bb,5,3,"button",31),t(3,`
          `),a()),e&2&&(o(2),c("mifosxHasPermission","CREATE_DELINQUENCY_ACTION"))}function Nb(e,r){if(e&1&&(i(0,"td",14),t(1,`
          `),d(2,kb,4,1,"span",2),t(3,`
        `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("ngIf",m.isCurrentAndPauseAction(n))}}function Vb(e,r){e&1&&g(0,"tr",15)}function jb(e,r){e&1&&g(0,"tr",16)}function qb(e,r){if(e&1&&(i(0,"div",23),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`

    `),i(6,"table",5),t(7,`
      `),b(8,24),t(9,`
        `),d(10,Mb,3,3,"th",7),t(11,`
        `),d(12,Ob,2,2,"td",25),t(13,`
      `),S(),t(14,`

      `),b(15,26),t(16,`
        `),d(17,Ib,3,3,"th",7),t(18,`
        `),d(19,Eb,3,3,"td",8),t(20,`
      `),S(),t(21,`

      `),b(22,27),t(23,`
        `),d(24,Ab,3,3,"th",7),t(25,`
        `),d(26,wb,3,3,"td",8),t(27,`
      `),S(),t(28,`

      `),b(29,28),t(30,`
        `),d(31,Lb,3,3,"th",7),t(32,`
        `),d(33,Rb,3,3,"td",8),t(34,`
      `),S(),t(35,`

      `),b(36,29),t(37,`
        `),d(38,Fb,3,3,"th",7),t(39,`
        `),d(40,Nb,4,1,"td",8),t(41,`
      `),S(),t(42,`

      `),d(43,Vb,1,0,"tr",11),t(44,`
      `),d(45,jb,1,0,"tr",12),t(46,`
    `),a(),t(47,`
  `),a()),e&2){let n=C();o(3),x(p(4,4,"labels.heading.Loan Delinquency Actions")),o(3),c("dataSource",n.loanDelinquencyActions),o(37),c("matHeaderRowDef",n.loanDelinquencyActionsColumns),o(2),c("matRowDefColumns",n.loanDelinquencyActionsColumns)}}var Xi=(()=>{class e{constructor(n,m,l,u,_,h){this.route=n,this.loansServices=m,this.dateUtils=l,this.settingsService=u,this.translateService=_,this.dialog=h,this.loanDelinquencyTags=[],this.loanDelinquencyActions=[],this.installmentLevelDelinquency=[],this.loanDelinquencyTagsColumns=["classification","addedOn","liftedOn"],this.loanDelinquencyActionsColumns=["action","startDate","endDate","createdOn","actions"],this.installmentDelinquencyTagsColumns=["classification","minimumAgeDays","amount"],this.allowPause=!0,this.loanId=this.route.parent.parent.snapshot.params.loanId,this.route.parent.data.subscribe(y=>{this.loanDelinquencyTags=y.loanDelinquencyTagsData,this.loanDelinquencyActions=y.loanDelinquencyActions||[],this.validateDelinquencyActions();let D=y.loanDelinquencyData.delinquent||null;this.currency=y.loanDelinquencyData.currency,this.installmentLevelDelinquency=[],D!=null&&(this.installmentLevelDelinquency=D.installmentLevelDelinquency||[])})}ngOnInit(){this.locale=this.settingsService.language.code,this.dateFormat=this.settingsService.dateFormat,this.currentLoanDelinquencyAction=null,this.validateDelinquencyActions()}validateDelinquencyActions(){if(this.loanDelinquencyActions.length>0){let n=this.settingsService.businessDate;this.currentLoanDelinquencyAction=this.loanDelinquencyActions[this.loanDelinquencyActions.length-1],this.allowPause=this.currentLoanDelinquencyAction.action==="RESUME"}}createDelinquencyAction(){let n="pause";this.dialog.open(Zi,{data:{action:n}}).afterClosed().subscribe(l=>{let u=l.data.value.startDate,_=l.data.value.endDate;this.sendDelinquencyAction(n,u,_)})}resumeDelinquencyClassification(n){this.dialog.open(be,{data:{heading:this.translateService.instant("labels.heading.Loan Delinquency Classification"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want resume the Delinquency Classification for Loan")+this.loanId,type:"Mild"}}).afterClosed().subscribe(l=>{l.confirm&&this.sendDelinquencyAction("resume",new Date,null)})}sendDelinquencyAction(n,m,l){let u={action:n,locale:this.locale,dateFormat:this.dateFormat,startDate:this.dateUtils.formatDate(m,this.dateFormat)};n==="pause"&&(u={action:n,locale:this.locale,dateFormat:this.dateFormat,startDate:this.dateUtils.formatDate(m,this.dateFormat),endDate:this.dateUtils.formatDate(l,this.dateFormat)}),this.loansServices.createDelinquencyActions(this.loanId,u).subscribe(_=>{this.loansServices.getDelinquencyActions(this.loanId).subscribe(h=>{this.loanDelinquencyActions=h,this.validateDelinquencyActions()})})}isCurrentAndPauseAction(n){if(this.currentLoanDelinquencyAction!=null&&this.currentLoanDelinquencyAction.id===n.id&&n.action==="PAUSE"){let m=this.settingsService.businessDate,l=this.dateUtils.parseDate(n.startDate);if(m<l)return this.allowPause=!0,!1;if(n.endDate){let u=this.dateUtils.parseDate(n.endDate);if(m>u)return this.allowPause=!0,!1}return!0}return!1}actionClass(n){return n==="PAUSE"?"status-pending":"status-active"}static{this.\u0275fac=function(m){return new(m||e)(v(B),v(R),v(Y),v(G),v(ve),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-delinquency-tags-tab"]],decls:15,vars:7,consts:[[1,"container"],["mat-table","",3,"dataSource",4,"ngIf"],[4,"ngIf"],["class","layout-row m-t-20 m-b-10 align-end align-items-center",4,"ngIf"],["class","m-t-10",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","classification"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","addedOn"],["matColumnDef","liftedOn"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["matColumnDef","minimumAgeDays"],["matColumnDef","amount"],[1,"layout-row","m-t-20","m-b-10","align-end","align-items-center"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"],["icon","pause",1,"m-r-10"],[1,"m-t-10"],["matColumnDef","action"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","createdOn"],["matColumnDef","actions"],["mat-cell","",3,"ngClass"],["mat-button","","color","primary",3,"matTooltip","click",4,"mifosxHasPermission"],["mat-button","","color","primary",3,"click","matTooltip"],["icon","play",1,"m-r-10"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`

  `),d(6,fb,27,3,"table",1),t(7,`

  `),d(8,Db,34,6,"div",2),t(9,`

  `),d(10,Pb,4,1,"div",3),t(11,`

  `),d(12,qb,48,6,"div",4),t(13,`
`),a(),t(14,`
`)),m&2&&(o(3),x(p(4,5,"labels.heading.Loan Delinquency Tags")),o(3),c("ngIf",l.loanDelinquencyTags.length>0),o(2),c("ngIf",l.installmentLevelDelinquency.length>0),o(2),c("ngIf",l.allowPause),o(2),c("ngIf",l.loanDelinquencyActions.length>0))},dependencies:[A,he,k,ye,w,j,Lt,ot,L,Rt,kt,Bt,Nt,Ft,Vt,jt,zt,qt,Ht,Ot,me,lo,Wt],styles:["table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{padding-top:1%;padding-bottom:2%}.container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{margin-left:1%}"]})}}return e})();var Qo=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.loanRescheduleRequests(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var zb=()=>["../actions/Reschedule"];function Hb(e,r){e&1&&(i(0,"th",13),t(1,"#"),a())}function Gb(e,r){if(e&1&&(i(0,"td",14),t(1),a()),e&2){let n=r.$implicit;o(),x(n.id)}}function Ub(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Status")))}function $b(e,r){if(e&1&&(i(0,"td",14),t(1,`
        `),i(2,"div",15),s(3,"statusLookup"),t(4,`
          `),g(5,"fa-icon",16),t(6,`
          `),i(7,"span",17),t(8),s(9,"translate"),a(),t(10,`
        `),a(),t(11,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngClass",p(3,2,n.statusEnum.code)),o(6),f(`
            `,p(9,4,n.statusEnum.value),`
          `)}}function Wb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.From Date")))}function Qb(e,r){if(e&1&&(i(0,"td",14),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),f(`
        `,p(2,1,n.rescheduleFromDate),`
      `)}}function Yb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Reason")))}function Kb(e,r){if(e&1&&(i(0,"td",14),t(1),a()),e&2){let n=r.$implicit;o(),f(`
        `,n.rescheduleReasonCodeValue.name,`
      `)}}function Jb(e,r){e&1&&(i(0,"th",13),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function Zb(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
          `),i(2,"button",19),s(3,"translate"),T("click",function(){P(n);let l=C().$implicit,u=C();return M(u.manageRequest(l,"Reject"))}),t(4,`
            `),g(5,"fa-icon",20),t(6,`
          `),a(),t(7,`
          `),i(8,"button",21),s(9,"translate"),T("click",function(){P(n);let l=C().$implicit,u=C();return M(u.manageRequest(l,"Approve"))}),t(10,`
            `),g(11,"fa-icon",22),t(12,`
          `),a(),t(13,`
        `),a()}e&2&&(o(2),Q("matTooltip",p(3,2,"tooltips.Reject Reschedule")),o(6),Q("matTooltip",p(9,4,"tooltips.Approve Reschedule")))}function Xb(e,r){if(e&1&&(i(0,"td",14),t(1,`
        `),d(2,Zb,14,6,"span",18),t(3,`
      `),a()),e&2){let n=r.$implicit;o(2),c("ngIf",n.statusEnum.pendingApproval)}}function t3(e,r){e&1&&g(0,"tr",23)}function e3(e,r){e&1&&g(0,"tr",24)}var ta=(()=>{class e{constructor(n,m,l,u,_,h,y){this.route=n,this.router=m,this.loansServices=l,this.settingsService=u,this.dateUtils=_,this.translateService=h,this.dialog=y,this.loanRescheduleDataColumns=["id","rescheduleFromDate","reason","status","actions"],this.clientId=this.route.parent.parent.snapshot.paramMap.get("clientId"),this.route.parent.data.subscribe(D=>{this.loanRescheduleData=D.loanRescheduleData})}manageRequest(n,m){this.dialog.open(be,{data:{heading:`${m}`+this.translateService.instant("labels.heading.Loan Reschedule"),dialogContext:this.translateService.instant("labels.dialogContext.Are you sure you want")+`${m}`+this.translateService.instant("labels.dialogContext.the Loan Reschedule")+`${n.id}`}}).afterClosed().subscribe(u=>{if(u.confirm){let _=this.settingsService.language.code,h=this.settingsService.dateFormat,y={dateFormat:h,locale:_};m==="Approve"?y.approvedOnDate=this.dateUtils.formatDate(this.settingsService.businessDate,h):y.rejectedOnDate=this.dateUtils.formatDate(this.settingsService.businessDate,h),this.loansServices.applyCommandLoanRescheduleRequests(n.id,m.toLowerCase(),y).subscribe(D=>{this.reload()})}})}reload(){let n=this.router.url;this.router.navigateByUrl(`/clients/${this.clientId}/loans-accounts`,{skipLocationChange:!0}).then(()=>this.router.navigate([n]))}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(R),v(G),v(Y),v(ve),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-reschedule-loan-tab"]],inputs:{loanStatus:"loanStatus"},decls:53,vars:8,consts:[[1,"container"],[1,"layout-row","gap-20px","align-end","align-items-center","action-buttons"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","status"],["matColumnDef","rescheduleFromDate"],["matColumnDef","reason"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"ngClass"],["icon","stop"],[1,"m-l-10","status"],[4,"ngIf"],["mat-raised-button","","color","warn","matTooltipPosition","left",1,"action-button",3,"click","matTooltip"],["icon","trash"],["mat-raised-button","","color","primary","matTooltipPosition","right",1,"action-button",3,"click","matTooltip"],["icon","check"],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"div",1),t(3,`
    `),i(4,"button",2),t(5),s(6,"translate"),a(),t(7,`
  `),a(),t(8,`

  `),i(9,"table",3),t(10,`
    `),b(11,4),t(12,`
      `),d(13,Hb,2,0,"th",5),t(14,`
      `),d(15,Gb,2,1,"td",6),t(16,`
    `),S(),t(17,`

    `),t(18,`
    `),b(19,7),t(20,`
      `),d(21,Ub,3,3,"th",5),t(22,`
      `),d(23,$b,12,6,"td",6),t(24,`
    `),S(),t(25,`

    `),b(26,8),t(27,`
      `),d(28,Wb,3,3,"th",5),t(29,`
      `),d(30,Qb,3,3,"td",6),t(31,`
    `),S(),t(32,`

    `),b(33,9),t(34,`
      `),d(35,Yb,3,3,"th",5),t(36,`
      `),d(37,Kb,2,1,"td",6),t(38,`
    `),S(),t(39,`

    `),b(40,10),t(41,`
      `),d(42,Jb,3,3,"th",5),t(43,`
      `),d(44,Xb,4,1,"td",6),t(45,`
    `),S(),t(46,`

    `),d(47,t3,1,0,"tr",11),t(48,`
    `),d(49,e3,1,0,"tr",12),t(50,`
  `),a(),t(51,`
`),a(),t(52,`
`)),m&2&&(o(4),c("routerLink",N(7,zb)),o(),f(`
      `,p(6,5,"labels.buttons.Reschedule"),`
    `),o(4),c("dataSource",l.loanRescheduleData),o(38),c("matHeaderRowDef",l.loanRescheduleDataColumns),o(2),c("matRowDefColumns",l.loanRescheduleDataColumns))},dependencies:[A,he,k,w,H,j,Lt,L,Rt,kt,Bt,Nt,Ft,Vt,Ot,me,jt,zt,qt,Ht,Vn],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 0 3px;margin:0 2%;line-height:25px}.container[_ngcontent-%COMP%]{padding-top:1%;padding-bottom:2%}.container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:1rem}"]})}}return e})();var n3=()=>["../.."];function i3(e,r){e&1&&(i(0,"mat-error"),t(1),s(2,"translate"),s(3,"translate"),i(4,"strong"),t(5),s(6,"translate"),a(),t(7,`
            `),a()),e&2&&(o(),V(`
              `,p(2,3,"labels.inputs.Amount")," ",p(3,5,"labels.commons.is"),`
              `),o(4),x(p(6,7,"labels.commons.required")))}function a3(e,r){if(e&1&&(i(0,"mat-option",19),t(1),a()),e&2){let n=r.$implicit;c("value",n.id),o(),f(`
                `,n.name,`
              `)}}function o3(e,r){e&1&&(b(0),t(1,`
            `),i(2,"mat-form-field"),t(3,`
              `),i(4,"mat-label"),t(5),s(6,"translate"),a(),t(7,`
              `),g(8,"input",20),t(9,`
            `),a(),t(10,`

            `),i(11,"mat-form-field"),t(12,`
              `),i(13,"mat-label"),t(14),s(15,"translate"),a(),t(16,`
              `),g(17,"input",21),t(18,`
            `),a(),t(19,`

            `),i(20,"mat-form-field"),t(21,`
              `),i(22,"mat-label"),t(23),s(24,"translate"),a(),t(25,`
              `),g(26,"input",22),t(27,`
            `),a(),t(28,`

            `),i(29,"mat-form-field"),t(30,`
              `),i(31,"mat-label"),t(32),s(33,"translate"),a(),t(34,`
              `),g(35,"input",23),t(36,`
            `),a(),t(37,`

            `),i(38,"mat-form-field"),t(39,`
              `),i(40,"mat-label"),t(41),s(42,"translate"),a(),t(43,`
              `),g(44,"input",24),t(45,`
            `),a(),t(46,`
          `),S()),e&2&&(o(5),f(" ",p(6,5,"labels.inputs.Account")," #"),o(9),f("",p(15,7,"labels.inputs.Cheque")," #"),o(9),x(p(24,9,"labels.inputs.Routing Code")),o(9),f("",p(33,11,"labels.inputs.Reciept")," #"),o(9),f("",p(42,13,"labels.inputs.Bank")," #"))}function r3(e,r){if(e&1&&(i(0,"button",25),t(1),s(2,"translate"),a()),e&2){let n=C();c("disabled",!n.adjustLoanChargeForm.valid),o(),f(`
            `,p(2,2,"labels.buttons.Submit"),`
          `)}}var ea=(()=>{class e{constructor(n,m,l,u,_,h){this.formBuilder=n,this.loanService=m,this.route=l,this.router=u,this.settingsService=_,this.organizationService=h,this.paymentTypes=[],this.chargeData=[],this.loanDetailsData=[],this.showPaymentDetails=!1,this.minDate=new Date(2e3,0,1),this.maxDate=new Date,this.loanId=this.route.snapshot.params.loanId,this.chargeId=this.route.snapshot.params.id,this.route.data.subscribe(y=>{this.chargeData=y.loansAccountCharge,this.loanDetailsData=y.loanDetailsData})}ngOnInit(){this.maxDate=this.settingsService.maxAllowedDate,this.createAdjustLoanChargeForm(),this.setRepaymentLoanDetails()}createAdjustLoanChargeForm(){this.adjustLoanChargeForm=this.formBuilder.group({amount:[this.chargeData.amount,q.required],externalId:"",paymentTypeId:"",note:""})}setRepaymentLoanDetails(){this.organizationService.getPaymentTypes().subscribe(n=>{this.paymentTypes=n})}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.adjustLoanChargeForm.addControl("accountNumber",new K("")),this.adjustLoanChargeForm.addControl("checkNumber",new K("")),this.adjustLoanChargeForm.addControl("routingCode",new K("")),this.adjustLoanChargeForm.addControl("receiptNumber",new K("")),this.adjustLoanChargeForm.addControl("bankNumber",new K(""))):(this.adjustLoanChargeForm.removeControl("accountNumber"),this.adjustLoanChargeForm.removeControl("checkNumber"),this.adjustLoanChargeForm.removeControl("routingCode"),this.adjustLoanChargeForm.removeControl("receiptNumber"),this.adjustLoanChargeForm.removeControl("bankNumber"))}submit(){let n=this.adjustLoanChargeForm.value,m=this.settingsService.language.code,l=ft(W({},n),{locale:m});this.loanService.executeLoansAccountChargesCommand(this.loanId,"adjustment",l,this.chargeId).subscribe(_=>{this.router.navigate(["../.."],{relativeTo:this.route})})}static{this.\u0275fac=function(m){return new(m||e)(v(it),v(R),v(B),v($),v(G),v(qn))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-adjust-loan-charge"]],decls:88,vars:27,consts:[[1,"container","mat-elevation-z8"],[3,"ngSubmit","formGroup"],[1,"layout-column"],["appearance","fill"],["matTextSuffix","",1,"m-l-10"],[1,"flex-auto"],["type","number","matInput","","required","","formControlName","amount",1,"right-input"],[4,"ngIf"],["matInput","","formControlName","externalId"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-fill"],[1,"expandcollapsebutton","m-l-10","m-t-40","flex-75",3,"click"],[3,"className"],[1,"m-l-10"],["matInput","","formControlName","note","cdkTextareaAutosize","","cdkAutosizeMinRows","2"],[1,"layout-row","align-center","gap-5px","responsive-column"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),i(2,"mat-card"),t(3,`
    `),i(4,"form",1),T("ngSubmit",function(){return l.submit()}),t(5,`
      `),i(6,"mat-card-content"),t(7,`
        `),i(8,"div",2),t(9,`
          `),i(10,"mat-form-field",3),t(11,`
            `),i(12,"mat-label"),t(13),s(14,"translate"),a(),t(15,`
            `),i(16,"span",4),t(17),a(),t(18,`
            `),g(19,"span",5),t(20,`
            `),g(21,"input",6),t(22,`
            `),d(23,i3,8,9,"mat-error",7),t(24,`
          `),a(),t(25,`

          `),i(26,"mat-form-field"),t(27,`
            `),i(28,"mat-label"),t(29),s(30,"translate"),a(),t(31,`
            `),g(32,"input",8),t(33,`
          `),a(),t(34,`

          `),i(35,"mat-form-field"),t(36,`
            `),i(37,"mat-label"),t(38),s(39,"translate"),a(),t(40,`
            `),i(41,"mat-select",9),t(42,`
              `),d(43,a3,2,2,"mat-option",10),t(44,`
            `),a(),t(45,`
          `),a(),t(46,`

          `),i(47,"div",11),t(48,`
            `),i(49,"span",12),T("click",function(){return l.addPaymentDetails()}),t(50,`
              `),i(51,"mat-slide-toggle"),t(52,`
                `),i(53,"div",13),t(54,`
                  `),i(55,"span",14),t(56),s(57,"translate"),a(),t(58,`
                `),a(),t(59,`
              `),a(),t(60,`
            `),a(),t(61,`
          `),a(),t(62,`

          `),d(63,o3,47,15,"ng-container",7),t(64,`

          `),i(65,"mat-form-field"),t(66,`
            `),i(67,"mat-label"),t(68),s(69,"translate"),a(),t(70,`
            `),g(71,"textarea",15),t(72,`
          `),a(),t(73,`
        `),a(),t(74,`

        `),i(75,"mat-card-actions",16),t(76,`
          `),i(77,"button",17),t(78),s(79,"translate"),a(),t(80,`
          `),d(81,r3,3,4,"button",18),t(82,`
        `),a(),t(83,`
      `),a(),t(84,`
    `),a(),t(85,`
  `),a(),t(86,`
`),a(),t(87,`
`)),m&2&&(o(4),c("formGroup",l.adjustLoanChargeForm),o(9),x(p(14,14,"labels.inputs.Amount")),o(4),x(l.loanDetailsData.currency.code),o(6),c("ngIf",l.adjustLoanChargeForm.controls.amount.hasError("required")),o(6),x(p(30,16,"labels.inputs.External Id")),o(9),x(p(39,18,"labels.inputs.Payment Type")),o(5),c("ngForOf",l.paymentTypes),o(10),c("className",l.showPaymentDetails?"enabled":"disabled"),o(3),x(p(57,20,"labels.inputs.Show Payment Details")),o(7),c("ngIf",l.showPaymentDetails),o(5),x(p(69,22,"labels.inputs.Note")),o(9),c("routerLink",N(26,n3)),o(),f(`
            `,p(79,24,"labels.buttons.Cancel"),`
          `),o(3),c("mifosxHasPermission","ADJUSTMENT_LOANCHARGE"))},dependencies:[A,It,k,w,gt,nt,le,J,st,_t,pt,ct,H,et,mt,ht,X,Z,Ct,bt,at,Ut,Gt,j,ot,L,Ee,Yt],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}.right-input[_ngcontent-%COMP%]{text-align:right}.right-label[_ngcontent-%COMP%]{padding-right:25px!important}"]})}}return e})();var Yo=(()=>{class e{constructor(n){this.systemService=n}resolve(n){return this.systemService.getConfigurationByName("loan-arrears-delinquency-display-data")}static{this.\u0275fac=function(m){return new(m||e)(At(On))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var m3=e=>["/","journal-entry","view-transfer",e];function s3(e,r){if(e&1&&(i(0,"div",6),t(1,`
    `),i(2,"h3"),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"div",7),t(7,`
      `),i(8,"table"),t(9,`
        `),i(10,"tbody"),t(11,`
          `),i(12,"tr"),t(13,`
            `),i(14,"td",8),t(15,`
              `),i(16,"b"),t(17),s(18,"translate"),a(),t(19,`
            `),a(),t(20,`
            `),i(21,"td",9),t(22,`
              `),i(23,"div",10),t(24,`
                `),g(25,"fa-icon",11),t(26,`
                `),i(27,"span",12),t(28),a(),t(29,`
              `),a(),t(30,`
            `),a(),t(31,`
            `),i(32,"td",8),t(33,`
              `),i(34,"b"),t(35),s(36,"translate"),a(),t(37,`
            `),a(),t(38,`
            `),i(39,"td",9),t(40,`
              `),g(41,"mifosx-external-identifier",13),t(42,`
            `),a(),t(43,`
          `),a(),t(44,`
          `),i(45,"tr"),t(46,`
            `),i(47,"td",8),t(48,`
              `),i(49,"b"),t(50),s(51,"translate"),a(),t(52,`
            `),a(),t(53,`
            `),i(54,"td",9),t(55),s(56,"dateFormat"),a(),t(57,`
            `),i(58,"td",8),t(59,`
              `),i(60,"b"),t(61),s(62,"translate"),a(),t(63,`
            `),a(),t(64,`
            `),i(65,"td",9),t(66),s(67,"dateFormat"),a(),t(68,`
          `),a(),t(69,`
          `),i(70,"tr"),t(71,`
            `),i(72,"td",8),t(73,`
              `),i(74,"b"),t(75),s(76,"translate"),a(),t(77,`
            `),a(),t(78,`
            `),i(79,"td",14),t(80,`
              `),i(81,"table"),t(82,`
                `),i(83,"tbody"),t(84,`
                  `),i(85,"tr"),t(86,`
                    `),i(87,"td",15),t(88,`
                      `),i(89,"b"),t(90),s(91,"translate"),a(),t(92,`
                    `),a(),t(93,`
                    `),i(94,"td",16),t(95),s(96,"formatNumber"),a(),t(97,`
                  `),a(),t(98,`
                  `),i(99,"tr"),t(100,`
                    `),i(101,"td",15),t(102,`
                      `),i(103,"b"),t(104),s(105,"translate"),a(),t(106,`
                    `),a(),t(107,`
                    `),i(108,"td",16),t(109),s(110,"formatNumber"),a(),t(111,`
                  `),a(),t(112,`
                  `),i(113,"tr"),t(114,`
                    `),i(115,"td",15),t(116,`
                      `),i(117,"b"),t(118),s(119,"translate"),a(),t(120,`
                    `),a(),t(121,`
                    `),i(122,"td",16),t(123),s(124,"formatNumber"),a(),t(125,`
                  `),a(),t(126,`
                  `),i(127,"tr"),t(128,`
                    `),i(129,"td",15),t(130,`
                      `),i(131,"b"),t(132),s(133,"translate"),a(),t(134,`
                    `),a(),t(135,`
                    `),i(136,"td",16),t(137),s(138,"formatNumber"),a(),t(139,`
                  `),a(),t(140,`
                  `),i(141,"tr"),t(142,`
                    `),i(143,"td",15),t(144,`
                      `),i(145,"b"),t(146),s(147,"translate"),a(),t(148,`
                    `),a(),t(149,`
                    `),i(150,"td",16),t(151),s(152,"formatNumber"),a(),t(153,`
                  `),a(),t(154,`
                  `),i(155,"tr"),t(156,`
                    `),i(157,"td",15),t(158,`
                      `),i(159,"b"),t(160),s(161,"translate"),a(),t(162,`
                    `),a(),t(163,`
                    `),i(164,"td",16),t(165),s(166,"formatNumber"),a(),t(167,`
                  `),a(),t(168,`
                `),a(),t(169,`
              `),a(),t(170,`
            `),a(),t(171,`
          `),a(),t(172,`
        `),a(),t(173,`
      `),a(),t(174,`
    `),a(),t(175,`
  `),a()),e&2){let n=C();o(3),x(p(4,23,"labels.heading.Active Asset Transfer")),o(14),f("",p(18,25,"labels.inputs.Status")," :"),o(6),c("ngClass",n.itemStatus(n.activeTransferData.status)),o(5),x(n.activeTransferData.status),o(7),f("",p(36,27,"labels.inputs.Owner External Id")," :"),o(6),Q("externalId",n.activeTransferData.owner.externalId),o(9),f("",p(51,29,"labels.inputs.Settlement Date")," :"),o(5),f(`
              `,p(56,31,n.activeTransferData.settlementDate),`
            `),o(6),f("",p(62,33,"labels.inputs.Effective Date")," :"),o(5),f(`
              `,p(67,35,n.activeTransferData.effectiveFrom),`
            `),o(9),f("",p(76,37,"labels.inputs.Details")," :"),o(15),f("",p(91,39,"labels.inputs.Principal Outstanding")," :"),o(5),f(`
                      `,p(96,41,n.activeTransferData.details.totalPrincipalOutstanding),`
                    `),o(9),f("",p(105,43,"labels.inputs.Interest Outstanding")," :"),o(5),f(`
                      `,p(110,45,n.activeTransferData.details.totalInterestOutstanding),`
                    `),o(9),f("",p(119,47,"labels.inputs.Fees Outstanding")," :"),o(5),f(`
                      `,p(124,49,n.activeTransferData.details.totalFeeChargesOutstanding),`
                    `),o(9),f("",p(133,51,"labels.inputs.Penalties Outstanding")," :"),o(5),f(`
                      `,p(138,53,n.activeTransferData.details.totalPenaltyChargesOutstanding),`
                    `),o(9),f("",p(147,55,"labels.inputs.Outstanding")," :"),o(5),f(`
                      `,p(152,57,n.activeTransferData.details.totalOutstanding),`
                    `),o(9),f("",p(161,59,"labels.inputs.Overpaid")," :"),o(5),x(p(166,61,n.activeTransferData.details.totalOverpaid))}}function p3(e,r){if(e&1){let n=O();i(0,"button",19),T("click",function(){P(n);let l=C(2);return M(l.saleLoan())}),t(1,`
        `),g(2,"fa-icon",20),t(3),s(4,"translate"),a()}e&2&&(o(3),f("",p(4,1,"labels.buttons.Sell Loan"),`
      `))}function c3(e,r){e&1&&(i(0,"div",17),t(1,`
      `),d(2,p3,5,3,"button",18),t(3,`
    `),a()),e&2&&(o(2),c("mifosxHasPermission","SALE_LOAN"))}function d3(e,r){if(e&1){let n=O();i(0,"button",22),T("click",function(){P(n);let l=C(2);return M(l.cancelSaleLoan())}),t(1,`
        `),g(2,"fa-icon",23),t(3),s(4,"translate"),a()}e&2&&(o(3),f("",p(4,1,"labels.buttons.Cancel Sell Loan"),`
      `))}function u3(e,r){e&1&&(i(0,"div",17),t(1,`
      `),d(2,d3,5,3,"button",21),t(3,`
    `),a()),e&2&&(o(2),c("mifosxHasPermission","SALE_LOAN"))}function x3(e,r){if(e&1){let n=O();i(0,"button",19),T("click",function(){P(n);let l=C(2);return M(l.buyBackLoan())}),t(1,`
        `),g(2,"fa-icon",20),t(3),s(4,"translate"),a()}e&2&&(o(3),f("",p(4,1,"labels.buttons.Buy Back Loan"),`
      `))}function f3(e,r){e&1&&(i(0,"div",17),t(1,`
      `),d(2,x3,5,3,"button",18),t(3,`
    `),a()),e&2&&(o(2),c("mifosxHasPermission","SALE_LOAN"))}function g3(e,r){e&1&&(i(0,"th",38),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Status")))}function _3(e,r){if(e&1&&(i(0,"td",39),t(1,`
        `),i(2,"div",10),t(3,`
          `),g(4,"fa-icon",11),t(5,`
          `),i(6,"span",40),t(7),s(8,"translate"),a(),t(9,`
        `),a(),t(10,`
      `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("ngClass",m.itemStatus(n.status)),o(5),f(`
            `,p(8,2,m.itemCurrentStatus(n)),`
          `)}}function C3(e,r){e&1&&(i(0,"th",38),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Effective From")))}function h3(e,r){if(e&1&&(i(0,"td",39),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.effectiveFrom))}}function v3(e,r){e&1&&(i(0,"th",38),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Owner External Id")))}function b3(e,r){if(e&1&&(i(0,"td",39),t(1,`
        `),g(2,"mifosx-external-identifier",41),t(3,`
      `),a()),e&2){let n=r.$implicit;o(2),Q("externalId",n.owner.externalId)}}function S3(e,r){e&1&&(i(0,"th",38),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Transfer External Id")))}function y3(e,r){if(e&1&&(i(0,"td",39),t(1,`
        `),g(2,"mifosx-external-identifier",41),t(3,`
      `),a()),e&2){let n=r.$implicit;o(2),Q("externalId",n.transferExternalId)}}function D3(e,r){e&1&&(i(0,"th",38),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Settlement Date")))}function T3(e,r){if(e&1&&(i(0,"td",39),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.settlementDate))}}function P3(e,r){e&1&&(i(0,"th",38),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Purchase Price Ratio")))}function M3(e,r){if(e&1&&(i(0,"td",39),t(1),s(2,"number"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.purchasePriceRatio))}}function O3(e,r){e&1&&(i(0,"th",42),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function I3(e,r){if(e&1){let n=O();i(0,"button",45),s(1,"translate"),T("click",function(l){P(n);let u=C(3);return M(u.routeJournalEntry(l))}),t(2,`
          `),g(3,"i",46),t(4,`
        `),a()}if(e&2){let n=C().$implicit;Q("matTooltip",p(1,2,"tooltips.View Journal Entries")),c("routerLink",Te(4,m3,n.transferId))}}function E3(e,r){if(e&1&&(i(0,"td",43),t(1,`
        `),d(2,I3,5,6,"button",44),t(3,`
      `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("ngIf",!m.isPendingOrCanceled(n))}}function A3(e,r){e&1&&g(0,"tr",47)}function w3(e,r){e&1&&g(0,"tr",48)}function L3(e,r){if(e&1&&(i(0,"table",24),t(1,`
    `),b(2,25),t(3,`
      `),d(4,g3,3,3,"th",26),t(5,`
      `),d(6,_3,11,4,"td",27),t(7,`
    `),S(),t(8,`

    `),b(9,28),t(10,`
      `),d(11,C3,3,3,"th",26),t(12,`
      `),d(13,h3,3,3,"td",27),t(14,`
    `),S(),t(15,`

    `),b(16,29),t(17,`
      `),d(18,v3,3,3,"th",26),t(19,`
      `),d(20,b3,4,1,"td",27),t(21,`
    `),S(),t(22,`

    `),b(23,30),t(24,`
      `),d(25,S3,3,3,"th",26),t(26,`
      `),d(27,y3,4,1,"td",27),t(28,`
    `),S(),t(29,`

    `),b(30,31),t(31,`
      `),d(32,D3,3,3,"th",26),t(33,`
      `),d(34,T3,3,3,"td",27),t(35,`
    `),S(),t(36,`

    `),b(37,32),t(38,`
      `),d(39,P3,3,3,"th",26),t(40,`
      `),d(41,M3,3,3,"td",27),t(42,`
    `),S(),t(43,`

    `),b(44,33),t(45,`
      `),d(46,O3,3,3,"th",34),t(47,`
      `),d(48,E3,4,1,"td",35),t(49,`
    `),S(),t(50,`

    `),d(51,A3,1,0,"tr",36),t(52,`
    `),d(53,w3,1,0,"tr",37),t(54,`
  `),a()),e&2){let n=C();c("dataSource",n.loanTransfersData),o(51),c("matHeaderRowDef",n.loanTransferColumns),o(2),c("matRowDefColumns",n.loanTransferColumns)}}var na=(()=>{class e{constructor(n,m,l,u,_){this.route=n,this.router=m,this.dialog=l,this.externalAssetOwner=u,this.externalAssetOwnerService=_,this.defaultDate="9999-12-31",this.loanTransfersData=[],this.loanTransferColumns=["status","effectiveFrom","ownerExternalId","transferExternalId","settlementDate","purchasePriceRatio","actions"],this.existActiveTransfer=!1,this.route.data.subscribe(h=>{this.loanTransfersData=h.loanTransfersData.empty?[]:h.loanTransfersData.content,this.activeTransferData=h.activeTransferData||null,this.existActiveTransfer=h.activeTransferData&&h.activeTransferData.transferId!=null})}ngOnInit(){this.currentItem=null,this.loanTransfersData.length>0&&(this.currentItem=this.loanTransfersData[this.loanTransfersData.length-1])}itemCurrentStatus(n){return this.externalAssetOwner.itemCurrentStatus(n)}itemStatus(n){return this.externalAssetOwner.itemStatus(n)}isPending(n){return this.externalAssetOwner.isPending(n)}isPendingOrCanceled(n){return this.externalAssetOwner.isPendingOrCanceled(n)}isBuyBackPending(n){return this.externalAssetOwner.isBuyBackPending(n)}canBeCancelled(){return this.externalAssetOwner.validateStatus(this.currentItem,"PENDING")}canBeSold(){return this.externalAssetOwner.canBeSold(this.currentItem)}canBeBuyed(){return this.externalAssetOwner.validateStatus(this.currentItem,"ACTIVE")}saleLoan(){this.router.navigate(["../actions/Sell Loan"],{relativeTo:this.route})}cancelSaleLoan(){this.dialog.open(Za,{data:{cancelContext:`the Asset Transfer with the Owner External Id ${this.currentItem.owner.externalId} `}}).afterClosed().subscribe(m=>{if(m.cancel){let l={transferExternalId:this.currentItem.transferExternalId};this.externalAssetOwnerService.executeExternalAssetOwnerTransferCommand(this.currentItem.transferId,l,"cancel").subscribe(u=>{this.reload()})}})}buyBackLoan(){this.router.navigate(["../actions/Buy Back Loan"],{relativeTo:this.route})}routeJournalEntry(n){n.stopPropagation()}reload(){let n=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate([n]))}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(Zt),v(Hn),v(Ue))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-external-asset-owner-tab"]],decls:20,vars:8,consts:[[1,"tab-container","mat-typography"],["class","flex-fill",4,"ngIf"],[1,"layout-row","align-start-center"],[1,"flex-90"],["class","flex-10",4,"ngIf"],["mat-table","","mat-sort","",3,"dataSource",4,"ngIf"],[1,"flex-fill"],[1,"layout-row","gap-32px","asset-transfer-container"],[1,"flex-25"],[1,"flex-25","left"],[3,"ngClass"],["icon","stop"],[1,"m-l-10","external-asset-owner-status"],["completed","true",3,"externalId"],[1,"flex-75","left"],[1,"flex-50"],[1,"flex-50","r-amount"],[1,"flex-10"],["mat-raised-button","","class","f-right","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",1,"f-right",3,"click"],["icon","dollar-sign",1,"m-r-10"],["mat-raised-button","","class","f-right","color","warn",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","warn",1,"f-right",3,"click"],["icon","trash",1,"m-r-10"],["mat-table","","mat-sort","",3,"dataSource"],["matColumnDef","status"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","effectiveFrom"],["matColumnDef","ownerExternalId"],["matColumnDef","transferExternalId"],["matColumnDef","settlementDate"],["matColumnDef","purchasePriceRatio"],["matColumnDef","actions"],["mat-header-cell","","class","center",4,"matHeaderCellDef"],["mat-cell","","class","center td-min-space",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"m-l-10","status"],[3,"externalId"],["mat-header-cell","",1,"center"],["mat-cell","",1,"center","td-min-space"],["class","account-action-button","mat-raised-button","","color","primary","matTooltipPosition","left",3,"matTooltip","routerLink","click",4,"ngIf"],["mat-raised-button","","color","primary","matTooltipPosition","left",1,"account-action-button",3,"click","matTooltip","routerLink"],[1,"fa","fa-arrow-circle-right"],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),d(2,s3,176,63,"div",1),t(3,`

  `),i(4,"div",2),t(5,`
    `),i(6,"h3",3),t(7),s(8,"translate"),a(),t(9,`

    `),d(10,c3,4,1,"div",4),t(11,`

    `),d(12,u3,4,1,"div",4),t(13,`

    `),d(14,f3,4,1,"div",4),t(15,`
  `),a(),t(16,`

  `),d(17,L3,55,3,"table",5),t(18,`
`),a(),t(19,`
`)),m&2&&(o(2),c("ngIf",l.existActiveTransfer),o(5),x(p(8,6,"labels.heading.External Asset Owner")),o(3),c("ngIf",l.canBeSold()),o(2),c("ngIf",l.canBeCancelled()),o(2),c("ngIf",l.canBeBuyed()),o(3),c("ngIf",l.loanTransfersData.length>0))},dependencies:[A,he,k,Va,w,H,j,Lt,ot,L,Ot,Ie,Rt,kt,Bt,Nt,Ft,Vt,me,jt,zt,qt,Ht,Wt],styles:[".tab-container[_ngcontent-%COMP%]{padding:1% 1% 2%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   .transaction-buttons[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:1rem}.tab-container[_ngcontent-%COMP%]   .transaction-buttons[_ngcontent-%COMP%]   .accruals[_ngcontent-%COMP%]{padding-top:1%}.tab-container[_ngcontent-%COMP%]   .asset-transfer-container[_ngcontent-%COMP%]{border:1px solid;padding:1%;margin-bottom:20px}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .select-row[_ngcontent-%COMP%]:hover{cursor:pointer}.external-asset-owner-status[_ngcontent-%COMP%]{color:#000}.account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 0 3px;margin:0 2%;line-height:25px}"]})}}return e})();var Oa=(()=>{class e{constructor(n){this.externalAssetOwnerService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.externalAssetOwnerService.retrieveExternalAssetOwnerTransfers(m)}static{this.\u0275fac=function(m){return new(m||e)(At(Ue))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ko=(()=>{class e{constructor(n){this.externalAssetOwnerService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.externalAssetOwnerService.retrieveExternalAssetOwnerActiveTransfer(m)}static{this.\u0275fac=function(m){return new(m||e)(At(Ue))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Jo=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getLoanCollaterals(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ia=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getDelinquencyData(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var Zo=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");return this.loansService.getDelinquencyActions(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function R3(e,r){e&1&&(i(0,"th",14),t(1,"#"),a())}function F3(e,r){if(e&1&&(i(0,"td",15),t(1),a()),e&2){let n=r.index;o(),x(n+1)}}function B3(e,r){e&1&&(i(0,"th",14),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Start Date")))}function k3(e,r){if(e&1&&(i(0,"td",15),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.termVariationApplicableFrom))}}function N3(e,r){e&1&&(i(0,"th",14),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.End Date")))}function V3(e,r){if(e&1&&(i(0,"td",15),t(1),s(2,"dateFormat"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.dateValue))}}function j3(e,r){e&1&&(i(0,"th",14),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Value")))}function q3(e,r){if(e&1&&(i(0,"td",15),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.decimalValue))}}function z3(e,r){e&1&&(i(0,"th",14),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Days")))}function H3(e,r){if(e&1&&(i(0,"td",15),t(1),s(2,"formatNumber"),a()),e&2){let n=r.$implicit;o(),x(p(2,1,n.days))}}function G3(e,r){e&1&&(i(0,"th",14),t(1),s(2,"translate"),a()),e&2&&(o(),x(p(2,1,"labels.inputs.Actions")))}function U3(e,r){if(e&1){let n=O();i(0,"span"),t(1,`
            `),i(2,"button",17),s(3,"translate"),T("click",function(){P(n);let l=C().$implicit,u=C(2);return M(u.manageRequest(l,"Edit"))}),t(4,`
              `),g(5,"fa-icon",18),t(6,`
            `),a(),t(7,`
            `),i(8,"button",19),s(9,"translate"),T("click",function(){P(n);let l=C().$implicit,u=C(2);return M(u.manageRequest(l,"Delete"))}),t(10,`
              `),g(11,"fa-icon",20),t(12,`
            `),a(),t(13,`
          `),a()}e&2&&(o(2),Q("matTooltip",p(3,2,"tooltips.Edit")),o(6),Q("matTooltip",p(9,4,"tooltips.Delete")))}function $3(e,r){if(e&1&&(i(0,"td",15),t(1,`
          `),d(2,U3,14,6,"span",16),t(3,`
        `),a()),e&2){let n=r.$implicit,m=C(2);o(2),c("ngIf",m.allowActions(n.termType.value))}}function W3(e,r){e&1&&g(0,"tr",21)}function Q3(e,r){e&1&&g(0,"tr",22)}function Y3(e,r){if(e&1&&(i(0,"div"),t(1,`
    `),i(2,"h3",2),t(3),s(4,"translate"),a(),t(5,`
    `),i(6,"table",3),t(7,`
      `),b(8,4),t(9,`
        `),d(10,R3,2,0,"th",5),t(11,`
        `),d(12,F3,2,1,"td",6),t(13,`
      `),S(),t(14,`

      `),b(15,7),t(16,`
        `),d(17,B3,3,3,"th",5),t(18,`
        `),d(19,k3,3,3,"td",6),t(20,`
      `),S(),t(21,`

      `),b(22,8),t(23,`
        `),d(24,N3,3,3,"th",5),t(25,`
        `),d(26,V3,3,3,"td",6),t(27,`
      `),S(),t(28,`

      `),b(29,9),t(30,`
        `),d(31,j3,3,3,"th",5),t(32,`
        `),d(33,q3,3,3,"td",6),t(34,`
      `),S(),t(35,`

      `),b(36,10),t(37,`
        `),d(38,z3,3,3,"th",5),t(39,`
        `),d(40,H3,3,3,"td",6),t(41,`
      `),S(),t(42,`

      `),b(43,11),t(44,`
        `),d(45,G3,3,3,"th",5),t(46,`
        `),d(47,$3,4,1,"td",6),t(48,`
      `),S(),t(49,`

      `),d(50,W3,1,0,"tr",12),t(51,`
      `),d(52,Q3,1,0,"tr",13),t(53,`
    `),a(),t(54,`
  `),a()),e&2){let n=r.$implicit,m=C();o(3),x(p(4,4,"labels.heading."+n.label)),o(3),c("dataSource",n.data),o(44),c("matHeaderRowDef",m.loanDTermVariationsColumns),o(2),c("matRowDefColumns",m.loanDTermVariationsColumns)}}var ia=(()=>{class e{constructor(n,m,l,u,_,h){this.route=n,this.router=m,this.dates=l,this.settingsService=u,this.loansService=_,this.dialog=h,this.loanTermVariationsData=[],this.loanDTermVariationsColumns=["row","startDate","endDate","days","actions"],this.emiAmountData=[],this.interestRateData=[],this.dueDateData=[],this.deleteInstallmentData=[],this.insertInstallmentData=[],this.principalAmountData=[],this.graceOnInterestData=[],this.graceOnPrincipalData=[],this.extendRepaymentPeriodData=[],this.interestRateFromInstallmentData=[],this.interestPausesData=[],this.invalidData=[],this.interestPausesData=[],this.clientId=this.route.parent.parent.snapshot.paramMap.get("clientId"),this.route.data.subscribe(y=>{this.loanId=y.loanDetailsData.id,this.loanTermVariationsData=[],y.loanDetailsData.loanTermVariations?.forEach(D=>{switch(D.days=l.calculateDiff(new Date(D.termVariationApplicableFrom),new Date(D.dateValue))+1,D.termType.value){case"emiAmount":this.emiAmountData.push(D);break;case"interestRate":this.interestRateData.push(D);break;case"deleteInstallment":this.deleteInstallmentData.push(D);break;case"dueDate":this.dueDateData.push(D);break;case"insertInstallment":this.insertInstallmentData.push(D);break;case"principalAmount":this.principalAmountData.push(D);break;case"graceOnInterest":this.graceOnInterestData.push(D);break;case"graceOnPrincipal":this.graceOnPrincipalData.push(D);break;case"extendRepaymentPeriod":this.extendRepaymentPeriodData.push(D);break;case"interestRateForInstallment":this.interestRateFromInstallmentData.push(D);break;case"interestPause":this.interestPausesData.push(D);break;default:this.invalidData.push(D);break}}),this.deleteInstallmentData.length>0&&this.loanTermVariationsData.push({label:"Delete Installment",data:this.deleteInstallmentData}),this.dueDateData.length>0&&this.loanTermVariationsData.push({label:"Due Date",data:this.dueDateData}),this.emiAmountData.length>0&&this.loanTermVariationsData.push({label:"EMI Amount",data:this.emiAmountData}),this.extendRepaymentPeriodData.length>0&&this.loanTermVariationsData.push({label:"Extend Repayment Period",data:this.extendRepaymentPeriodData}),this.graceOnInterestData.length>0&&this.loanTermVariationsData.push({label:"Grace On Interest",data:this.graceOnInterestData}),this.graceOnPrincipalData.length>0&&this.loanTermVariationsData.push({label:"Grace On Principal",data:this.graceOnPrincipalData}),this.insertInstallmentData.length>0&&this.loanTermVariationsData.push({label:"Insert Installment",data:this.insertInstallmentData}),this.interestPausesData.length>0&&this.loanTermVariationsData.push({label:"Interest Pauses",data:this.interestPausesData}),this.interestRateData.length>0&&this.loanTermVariationsData.push({label:"Interest Rate",data:this.interestRateData}),this.interestRateFromInstallmentData.length>0&&this.loanTermVariationsData.push({label:"Interest Rate From Installment",data:this.interestRateFromInstallmentData}),this.principalAmountData.length>0&&this.loanTermVariationsData.push({label:"Principal Amount",data:this.principalAmountData})})}manageRequest(n,m){m==="Delete"?this.deleteInterestPause(n):m==="Edit"&&this.updateInterestPause(n)}deleteInterestPause(n){this.dialog.open(xe,{data:{deleteContext:`interest pause from ${n.startDate} to ${n.endDate}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteInterestPause(this.loanId,n.id).subscribe(u=>{this.reload()})})}updateInterestPause(n){let m=this.dates.parseDate(n.startDate),l=this.dates.parseDate(n.endDate),u=[new fe({controlName:"startDate",label:"Start Date",value:m,maxDate:this.settingsService.maxFutureDate,required:!0}),new fe({controlName:"endDate",label:"End Date",value:l,maxDate:this.settingsService.maxFutureDate,required:!0})],_={title:"Edit Interest Pause id: "+n.id,formfields:u,layout:{addButtonText:"Submit"}};this.dialog.open(ae,{data:_,width:"50rem"}).afterClosed().subscribe(y=>{if(y.data&&y.data.value.startDate<=y.data.value.endDate){let D=this.settingsService.language.code,I=this.settingsService.dateFormat,U={startDate:this.dates.formatDate(y.data.value.startDate,I),endDate:this.dates.formatDate(y.data.value.endDate,I),locale:D,dateFormat:I};this.loansService.updateInterestPause(this.loanId,n.id,U).subscribe(tt=>{this.reload()})}})}reload(){let n=this.router.url;this.router.navigateByUrl(`/clients/${this.clientId}/loans-accounts`,{skipLocationChange:!0}).then(()=>this.router.navigate([n]))}allowActions(n){return n==="interestPause"}static{this.\u0275fac=function(m){return new(m||e)(v(B),v($),v(Y),v(G),v(R),v(Zt))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-loan-term-variations-tab"]],decls:5,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"],[1,"m-t-20"],["mat-table","",3,"dataSource"],["matColumnDef","row"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","value"],["matColumnDef","days"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-icon-button","","color","primary","matTooltipPosition","right",1,"button",3,"click","matTooltip"],["icon","edit","size","lg"],["mat-icon-button","","color","warn","matTooltipPosition","left",1,"button",3,"click","matTooltip"],["icon","trash","size","lg"],["mat-header-row",""],["mat-row",""]],template:function(m,l){m&1&&(i(0,"div",0),t(1,`
  `),d(2,Y3,55,6,"div",1),t(3,`
`),a(),t(4,`
`)),m&2&&(o(2),c("ngForOf",l.loanTermVariationsData))},dependencies:[A,It,k,w,Lt,L,Rt,kt,Bt,Nt,Ft,Vt,Pe,me,Ot,jt,zt,qt,Ht,Wt],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 0 3px;margin:0 2%;line-height:25px}.container[_ngcontent-%COMP%]{padding-top:1%;padding-bottom:2%}.container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{margin-left:1%}"]})}}return e})();var Ea=(()=>{class e{constructor(n){this.loansService=n}resolve(n){let m=n.paramMap.get("loanId")||n.parent.paramMap.get("loanId");if(!isNaN(+m))return this.loansService.getInterestPausesOfLoan(m)}static{this.\u0275fac=function(m){return new(m||e)(At(R))}}static{this.\u0275prov=Mt({token:e,factory:e.\u0275fac})}}return e})();var K3=[{path:"",data:{title:"Loans",breadcrumb:"Loans",routeParamBreadcrumb:!1},children:[{path:"create",data:{title:"Create Loans Account",breadcrumb:"Create Loans Account"},component:Vi,resolve:{loansAccountTemplate:va}},{path:":loanId",data:{title:"Loan View",routeParamBreadcrumb:"loanId"},component:Un,resolve:{loanDetailsData:Ye,loanDatatables:Yi,loanArrearsDelinquencyConfig:Yo},children:[{path:"",redirectTo:"general",pathMatch:"full"},{path:"general",component:$n,data:{title:"General",breadcrumb:"General",routeParamBreadcrumb:!1},resolve:{loanDetailsData:Ye,loanDatatables:Yi}},{path:"accountdetail",component:Qn,data:{title:"Account Detail",breadcrumb:"Account Detail",routeParamBreadcrumb:!1}},{path:"original-schedule",component:ti,data:{title:"Original Schedule",breadcrumb:"Original Schedule",routeParamBreadcrumb:!1}},{path:"repayment-schedule",component:$e,data:{title:"Repayment Schedule",breadcrumb:"Repayment Schedule",routeParamBreadcrumb:!1}},{path:"transactions",data:{title:"Loans Account Transactions",breadcrumb:"Transactions",routeParamBreadcrumb:!1},children:[{path:"",component:Xn},{path:"export",component:$i}]},{path:"delinquencytags",data:{title:"Loans Delinquency Tags",breadcrumb:"Delinquency Tags",routeParamBreadcrumb:!1},resolve:{loanDelinquencyTagsData:Ma,loanDelinquencyData:Ia,loanDelinquencyActions:Zo},children:[{path:"",component:Xi}]},{path:"loan-reschedules",data:{},resolve:{loanRescheduleData:Qo},children:[{path:"",component:ta}]},{path:"loan-collateral",component:ki,data:{title:"Loan Collateral Details",breadcrumb:"Loan Collateral Details",routeParamBreadcrumb:!1},resolve:{loanCollaterals:Jo}},{path:"term-variations",component:ia,data:{title:"Loan Term Variations",breadcrumb:"Loan Term Variations",routeParamBreadcrumb:!1},resolve:{loanDetailsData:Ye,interestPausesData:Ea}},{path:"loan-tranche-details",component:Bi,data:{title:"Loan Tranche Details",breadcrumb:"Loan Tranche Details",routeParamBreadcrumb:!1}},{path:"overdue-charges",component:ei,data:{title:"Overdue Charges",breadcrumb:"Overdue Charges",routeParamBreadcrumb:!1}},{path:"floating-interest-rates",component:Fi,data:{title:"Floating Interest Rates",breadcrumb:"Floating Interest Rates",routeParamBreadcrumb:!1}},{path:"charges",data:{title:"Loans Account Charges",breadcrumb:"Charges",routeParamBreadcrumb:!1},component:ni},{path:"loan-documents",component:ji,data:{title:"Loan Documents",breadcrumb:"Loan Documents",routeParamBreadcrumb:!1},resolve:{loanDocuments:ba}},{path:"notes",component:Yn,data:{title:"Notes",breadcrumb:"Notes",routeParamBreadcrumb:!1},resolve:{loanNotes:_a}},{path:"standing-instruction",component:qi,data:{title:"Standing Instructions",breadcrumb:"Standing Instructions",routeParamBreadcrumb:!1}},{path:"external-asset-owner",component:na,data:{title:"External Asset Owner",breadcrumb:"External Asset Owner",routeParamBreadcrumb:!1},resolve:{activeTransferData:Ko,loanTransfersData:Oa}},{path:"datatables",children:[{path:":datatableName",component:ii,data:{title:"Data Table View",routeParamBreadcrumb:"datatableName"},resolve:{loanDatatable:Ca}}]}]},{path:":loanId/transactions/:id",data:{title:"Loans Account Transactions",breadcrumb:"Transactions",routeParamBreadcrumb:!1},resolve:{loanDetailsAssociationData:Ye},children:[{path:"",data:{routeParamBreadcrumb:"id"},component:Hi,resolve:{loansAccountTransaction:Sa}},{path:"edit",component:Gi,data:{breadcrumb:"Edit",routeParamBreadcrumb:!1},resolve:{loansAccountTransactionTemplate:Da}},{path:"reciept",component:Ui,data:{breadcrumb:"Reciept",routeParamBreadcrumb:!1},resolve:{loansTransactionReciept:ya}}]},{path:":loanId/edit-loans-account",data:{title:"Modify Loans Account",breadcrumb:"Modify Loans Account",routeParamBreadcrumb:"Edit"},component:Sn,resolve:{loansAccountAndTemplate:Ki}},{path:":loanId/charges",data:{title:"Loans Account Charges",breadcrumb:"Charges",routeParamBreadcrumb:!1},children:[{path:"",redirectTo:"../charges",pathMatch:"prefix"},{path:":id",data:{routeParamBreadcrumb:"id"},component:zi,resolve:{loansAccountCharge:Ji,loanDetailsData:Ye}},{path:":id/adjustment",data:{routeParamBreadcrumb:"id",breadcrumb:"Adjustment"},component:ea,resolve:{loansAccountCharge:Ji,loanDetailsData:Ye}}]},{path:":loanId/actions/:action",component:Ri,data:{title:"Loan Account Actions",breadcrumb:"action",routeParamBreadcrumb:"action"},resolve:{actionButtonData:ha}},{path:":loanId/transfer-funds",loadChildren:()=>import("./account-transfers.module-NM5M2OTE.js").then(e=>e.AccountTransfersModule)},{path:"edit-loans-account",data:{title:"Modify Loans Account",breadcrumb:"Modify Loans Account",routeParamBreadcrumb:"Edit"},component:Sn,resolve:{loansAccountAndTemplate:Ki}}]},{path:"glim-account",data:{title:"Loans",breadcrumb:"Loans",routeParamBreadcrumb:!1},children:[{path:"create",data:{title:"Create GLIM Application",breadcrumb:"Create GLIM Application",routeParamBreadcrumb:!1},component:Qi,resolve:{loansAccountTemplate:Pa,groupsData:So}},{path:":glimId",data:{title:"GSIM Account View",routeParamBreadcrumb:"savingAccountId"},component:Wi,resolve:{glimData:Ta,groupsData:ra}}]}],Xo=(()=>{class e{static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275mod=Pn({type:e})}static{this.\u0275inj=Dn({providers:[Ye,_a,Yi,Ca,Ma,ha,va,ba,Ki,Ji,Sa,Da,ya,vo,ra,Ta,bo,Pa,Oa,Ia,Ea],imports:[oa.forChild(K3),oa]})}}return e})();var tr=(()=>{class e{constructor(n){this.externalAssetOwner=n}itemStatus(n){return this.externalAssetOwner.itemStatus(n)}static{this.\u0275fac=function(m){return new(m||e)(v(Hn))}}static{this.\u0275cmp=E({type:e,selectors:[["mifosx-external-asset-transfer"]],inputs:{transferData:"transferData"},decls:167,vars:60,consts:[[1,"m-l-5","flex-25"],[1,"flex-25","m-l-5","left"],[3,"ngClass"],["icon","stop"],[1,"m-l-5","status"],["completed","true",3,"externalId"],[1,"flex-75","left"],[1,"flex-50","m-l-5"],[1,"flex-50","r-amount"]],template:function(m,l){m&1&&(i(0,"table"),t(1,`
  `),i(2,"tbody"),t(3,`
    `),i(4,"tr"),t(5,`
      `),i(6,"td",0),t(7,`
        `),i(8,"b"),t(9),s(10,"translate"),a(),t(11,`
      `),a(),t(12,`
      `),i(13,"td",1),t(14,`
        `),i(15,"div",2),t(16,`
          `),g(17,"fa-icon",3),t(18,`
          `),i(19,"span",4),t(20),a(),t(21,`
        `),a(),t(22,`
      `),a(),t(23,`
      `),i(24,"td",0),t(25,`
        `),i(26,"b"),t(27),s(28,"translate"),a(),t(29,`
      `),a(),t(30,`
      `),i(31,"td",1),t(32,`
        `),g(33,"mifosx-external-identifier",5),t(34,`
      `),a(),t(35,`
    `),a(),t(36,`
    `),i(37,"tr"),t(38,`
      `),i(39,"td",0),t(40,`
        `),i(41,"b"),t(42),s(43,"translate"),a(),t(44,`
      `),a(),t(45,`
      `),i(46,"td",0),t(47),s(48,"dateFormat"),a(),t(49,`
      `),i(50,"td",0),t(51,`
        `),i(52,"b"),t(53),s(54,"translate"),a(),t(55,`
      `),a(),t(56,`
      `),i(57,"td",0),t(58),s(59,"dateFormat"),a(),t(60,`
    `),a(),t(61,`
    `),i(62,"tr"),t(63,`
      `),i(64,"td",0),t(65,`
        `),i(66,"b"),t(67),s(68,"translate"),a(),t(69,`
      `),a(),t(70,`
      `),i(71,"td",6),t(72,`
        `),i(73,"table"),t(74,`
          `),i(75,"tbody"),t(76,`
            `),i(77,"tr"),t(78,`
              `),i(79,"td",7),t(80,`
                `),i(81,"b"),t(82),s(83,"translate"),a(),t(84,`
              `),a(),t(85,`
              `),i(86,"td",8),t(87),s(88,"formatNumber"),a(),t(89,`
            `),a(),t(90,`
            `),i(91,"tr"),t(92,`
              `),i(93,"td",7),t(94,`
                `),i(95,"b"),t(96),s(97,"translate"),a(),t(98,`
              `),a(),t(99,`
              `),i(100,"td",8),t(101),s(102,"formatNumber"),a(),t(103,`
            `),a(),t(104,`
            `),i(105,"tr"),t(106,`
              `),i(107,"td",7),t(108,`
                `),i(109,"b"),t(110),s(111,"translate"),a(),t(112,`
              `),a(),t(113,`
              `),i(114,"td",8),t(115),s(116,"formatNumber"),a(),t(117,`
            `),a(),t(118,`
            `),i(119,"tr"),t(120,`
              `),i(121,"td",7),t(122,`
                `),i(123,"b"),t(124),s(125,"translate"),a(),t(126,`
              `),a(),t(127,`
              `),i(128,"td",8),t(129),s(130,"formatNumber"),a(),t(131,`
            `),a(),t(132,`
            `),i(133,"tr"),t(134,`
              `),i(135,"td",7),t(136,`
                `),i(137,"b"),t(138),s(139,"translate"),a(),t(140,`
              `),a(),t(141,`
              `),i(142,"td",8),t(143),s(144,"formatNumber"),a(),t(145,`
            `),a(),t(146,`
            `),i(147,"tr"),t(148,`
              `),i(149,"td",7),t(150,`
                `),i(151,"b"),t(152),s(153,"translate"),a(),t(154,`
              `),a(),t(155,`
              `),i(156,"td",8),t(157),s(158,"formatNumber"),a(),t(159,`
            `),a(),t(160,`
          `),a(),t(161,`
        `),a(),t(162,`
      `),a(),t(163,`
    `),a(),t(164,`
  `),a(),t(165,`
`),a(),t(166,`
`)),m&2&&(o(9),f("",p(10,22,"labels.inputs.Status")," :"),o(6),c("ngClass",l.itemStatus(l.transferData.status)),o(5),x(l.transferData.status),o(7),f("",p(28,24,"labels.inputs.Owner External Id")," :"),o(6),Q("externalId",l.transferData.owner.externalId),o(9),f("",p(43,26,"labels.inputs.Settlement Date")," :"),o(5),f(`
        `,p(48,28,l.transferData.settlementDate),`
      `),o(6),f("",p(54,30,"labels.inputs.Effective Date")," :"),o(5),f(`
        `,p(59,32,l.transferData.effectiveFrom),`
      `),o(9),f("",p(68,34,"labels.inputs.Details")," :"),o(15),f("",p(83,36,"labels.inputs.Principal Outstanding")," :"),o(5),x(p(88,38,l.transferData.details.totalPrincipalOutstanding)),o(9),f("",p(97,40,"labels.inputs.Interest Outstanding")," :"),o(5),x(p(102,42,l.transferData.details.totalInterestOutstanding)),o(9),f("",p(111,44,"labels.inputs.Fees Outstanding")," :"),o(5),f(`
                `,p(116,46,l.transferData.details.totalFeeChargesOutstanding),`
              `),o(9),f("",p(125,48,"labels.inputs.Penalties Outstanding")," :"),o(5),f(`
                `,p(130,50,l.transferData.details.totalPenaltyChargesOutstanding),`
              `),o(9),f("",p(139,52,"labels.inputs.Outstanding")," :"),o(5),x(p(144,54,l.transferData.details.totalOutstanding)),o(9),f("",p(153,56,"labels.inputs.Overpaid")," :"),o(5),x(p(158,58,l.transferData.details.totalOverpaid)))},dependencies:[A,he,w,Lt,L,Ot,Ie,Wt],styles:[".asset-transfer-container[_ngcontent-%COMP%]{height:150px}.asset-transfer-container[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{color:#000}"]})}}return e})();var Pk=(()=>{class e{static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275mod=Pn({type:e})}static{this.\u0275inj=Dn({imports:[_o,co,Xo,mo,za,Mi,Un,$n,Qn,Yn,ni,ei,ti,$e,Ri,ai,Xn,ii,oi,ri,li,mi,si,ci,Fi,di,Bi,ui,xi,ki,Vi,Re,Fe,Be,Qe,Ni,fi,_i,Ci,gi,vi,bi,Si,yi,Di,ji,qi,Sn,Ti,Pi,zi,Hi,Gi,Ui,$i,pi,Wi,Qi,Xi,We,Oi,hi,xn,ta,ea,Ii,Ei,na,tr,Zi,Ai,wi,ia,Li,yn]})}}return e})();export{Pk as LoansModule};
